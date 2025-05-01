'use client'

import type { App, Media as MediaType, AppsBlock as AppsBlockType } from '@/payload-types' // Import necessary types
import { Media } from '@/components/Media'
import { easeIn, motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'

interface AppsCarouselClientProps {
  apps: App[]
  body: AppsBlockType['body']
}

interface GridCell {
  app: App | null
  delay: number
  row: number
  column: number
  isReserved: boolean
}

// Constants for grid based on screen size
const GRID_CONFIG = {
  mobile: {
    COLUMNS: 4,
    ROWS: 8,
    RESERVED: {
      START_COL: 0,
      END_COL: 3,
      START_ROW: 2,
      END_ROW: 5,
    },
    POSITIONS: [2, 5, 7, 24, 29, 31],
  },
  tablet: {
    COLUMNS: 6,
    ROWS: 8,
    RESERVED: {
      START_COL: 1,
      END_COL: 4,
      START_ROW: 2,
      END_ROW: 5,
    },
    POSITIONS: [2, 6, 10, 18, 35, 36, 47, 57],
  },
  desktop: {
    COLUMNS: 10,
    ROWS: 6,
    RESERVED: {
      START_COL: 2,
      END_COL: 7,
      START_ROW: 1,
      END_ROW: 4,
    },
    POSITIONS: [4, 10, 18, 21, 39, 40, 53, 55],
  },
}

const AnimatedAppIcon: React.FC<{
  app: App
  delay: number
  containerRef: React.RefObject<HTMLDivElement | null>
  row: number
  isMobile: boolean
}> = ({ app, delay, containerRef, row, isMobile }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['0% 100%', '100% -50%'],
    layoutEffect: false,
  })

  const offsetProgress = useTransform(scrollYProgress, [0, 0.3 + row * 0.05], [0, 1])

  // Adjust animation values based on screen size
  const opacity = useTransform(offsetProgress, [0, 0.8], [0.4, 1], { ease: easeIn })
  const scale = useTransform(offsetProgress, [0, 0.7], isMobile ? [2.5, 1] : [3.5, 1], {
    ease: easeIn,
  })
  const blur = useTransform(offsetProgress, [0, 0.7], isMobile ? [6, 0] : [10, 0], { ease: easeIn })
  const zOffset = useTransform(offsetProgress, [0, 0.8], isMobile ? [-50, 0] : [-100, 0], {
    ease: easeIn,
  })

  return (
    <motion.div
      style={{
        opacity,
        scale,
        z: zOffset,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      className="z-10 h-auto w-full"
    >
      <Media
        resource={app.icon as MediaType}
        imgClassName="rounded-2xl sm:rounded-3xl object-cover w-full h-auto"
        className="h-auto w-full drop-shadow-md/50"
      />
    </motion.div>
  )
}

// Content section with responsive styles
const ContentSection: React.FC<{ body: AppsBlockType['body'] }> = ({ body }) => {
  const { badge, headerText, links } = body || {}

  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center sm:p-6 md:p-8">
      {headerText && (
        <div className="mb-4 max-w-[85%] sm:mb-6 sm:max-w-[75%] md:max-w-[60%]">
          <RichText
            className="mx-auto text-center text-balance [&_p]:leading-relaxed"
            data={headerText}
            enableGutter={false}
          />
        </div>
      )}

      {links && links.length > 0 && (
        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          {links.map(({ link }, i) => (
            <CMSLink key={i} className="w-full sm:w-auto" size={'lg'} {...link} />
          ))}
        </div>
      )}
    </div>
  )
}

// Main Client Component for the Carousel
export const AppsBlockGrid: React.FC<AppsCarouselClientProps> = ({ apps, body }) => {
  const [gridCells, setGridCells] = useState<GridCell[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Handle responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Get current grid configuration
  const currentConfig = isMobile
    ? GRID_CONFIG.mobile
    : isTablet
      ? GRID_CONFIG.tablet
      : GRID_CONFIG.desktop

  const { COLUMNS, ROWS, RESERVED, POSITIONS } = currentConfig

  useEffect(() => {
    if (!apps || apps.length === 0) return

    const TOTAL_CELLS = COLUMNS * ROWS

    // Create grid cells
    const allCells: GridCell[] = Array(TOTAL_CELLS)
      .fill(null)
      .map((_, index) => {
        const row = Math.floor(index / COLUMNS)
        const column = index % COLUMNS
        const isReserved =
          row >= RESERVED.START_ROW &&
          row <= RESERVED.END_ROW &&
          column >= RESERVED.START_COL &&
          column <= RESERVED.END_COL

        return {
          app: null,
          delay: 0,
          row,
          column,
          isReserved,
        }
      })

    const appsToShow = apps.slice(0, POSITIONS.length)
    const newGrid = [...allCells]

    appsToShow.forEach((app, appIndex) => {
      const finalGridPosition = POSITIONS[appIndex]
      const row = Math.floor(finalGridPosition / COLUMNS)
      const column = finalGridPosition % COLUMNS
      const sequentialDelay = appIndex * 0.2

      const cell: GridCell = {
        app,
        delay: sequentialDelay,
        row,
        column,
        isReserved: false,
      }

      newGrid[finalGridPosition] = cell
    })

    setGridCells(newGrid)
  }, [
    apps,
    COLUMNS,
    ROWS,
    RESERVED.START_COL,
    RESERVED.END_COL,
    RESERVED.START_ROW,
    RESERVED.END_ROW,
    POSITIONS,
  ])

  if (!apps || apps.length === 0 || gridCells.length === 0) {
    return null
  }

  return (
    <div className="relative overflow-x-clip">
      <motion.div
        ref={containerRef}
        className="relative container w-full py-6 sm:py-8 md:py-12"
        style={{
          perspective: isMobile ? '800px' : '1200px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          className={`relative grid gap-2 sm:gap-3`}
          style={{
            gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
          }}
        >
          {gridCells.map((cell, index) => (
            <div
              key={index}
              className={cn(
                'relative aspect-square',
                cell.isReserved ? 'pointer-events-none opacity-0' : '',
              )}
            >
              <div id={index.toString()} className="absolute inset-0 z-0">
                <div className="bg-neutral/2 aspect-square w-full rounded-2xl sm:rounded-3xl" />
              </div>

              {cell.app && (
                <div id={index.toString()} className="absolute inset-0 z-10">
                  <AnimatedAppIcon
                    app={cell.app}
                    delay={cell.delay}
                    containerRef={containerRef}
                    row={cell.row}
                    isMobile={isMobile}
                  />
                </div>
              )}
            </div>
          ))}

          <div
            className="absolute z-1 rounded-2xl bg-white/90 backdrop-blur-md sm:rounded-3xl"
            style={{
              gridColumn: `${RESERVED.START_COL + 1} / span ${RESERVED.END_COL - RESERVED.START_COL + 1}`,
              gridRow: `${RESERVED.START_ROW + 1} / span ${RESERVED.END_ROW - RESERVED.START_ROW + 1}`,
              top: '0',
              left: `auto`,
              right: `auto`,
              width: '100%',
              height: '100%',
            }}
          >
            <ContentSection body={body} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
