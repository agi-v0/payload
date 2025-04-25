'use client'

import type { App, Media as MediaType, AppsBlock as AppsBlockType } from '@/payload-types' // Import necessary types
import { Media } from '@/components/Media'
import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'

// Props for the client component
interface AppsCarouselClientProps {
  apps: App[]
  body: AppsBlockType['body']
}

// Cell type definition
interface GridCell {
  app: App | null
  delay: number
  row: number
  column: number
  isReserved: boolean
}

// Empty app icon placeholder
const EmptyAppIcon: React.FC = () => (
  <div className="bg-neutral/5 border-neutral/10 aspect-square w-full rounded-3xl border" />
)

// Animated app icon component
const AnimatedAppIcon: React.FC<{
  app: App
  delay: number
  containerRef: React.RefObject<HTMLDivElement | null>
  row: number
}> = ({ app, delay, containerRef, row }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Offset the progress based on row position for staggered effect
  const offsetProgress = useTransform(
    scrollYProgress,
    [0, 0.3 + row * 0.05], // Adjust this range to control when each row becomes visible
    [0, 1],
  )

  // Create transformations for the different animation properties
  const opacity = useTransform(offsetProgress, [0, 0.8], [0.4, 1])
  const scale = useTransform(offsetProgress, [0, 0.7], [3, 1])
  const blur = useTransform(offsetProgress, [0, 0.7], [10, 0])
  const zOffset = useTransform(offsetProgress, [0, 0.8], [-100, 0])

  return (
    <motion.div
      style={{
        opacity,
        scale,
        z: zOffset,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
      className="z-10 h-auto w-full"
    >
      <Media
        resource={app.icon as MediaType}
        imgClassName="rounded-3xl object-cover w-full h-auto"
        className="h-auto w-full"
      />
    </motion.div>
  )
}

// Content component for the middle section
const ContentSection: React.FC<{ body: AppsBlockType['body'] }> = ({ body }) => {
  const { badge, headerText, links } = body || {}

  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      {/* Badge */}
      {badge?.label && (
        <Badge
          className="mb-4"
          label={badge?.label}
          icon={badge?.icon}
          icon_position={badge?.icon_position}
          variant={badge?.color}
        />
      )}

      {/* HeaderText */}
      {headerText && (
        <div className="mb-6">
          <RichText className="mx-auto text-center" data={headerText} enableGutter={false} />
        </div>
      )}

      {/* Links */}
      {links && links.length > 0 && (
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          {links.map(({ link }, i) => (
            <CMSLink key={i} className="w-full" size={'lg'} {...(link as any)} />
          ))}
        </div>
      )}
    </div>
  )
}

// Utility function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Main Client Component for the Carousel
export const AppsCarouselClient: React.FC<AppsCarouselClientProps> = ({ apps, body }) => {
  const [gridCells, setGridCells] = useState<GridCell[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Constants for grid
  const COLUMNS = 10
  const ROWS = 6
  const TOTAL_CELLS = COLUMNS * ROWS

  // Define the middle reserved area (6 columns x 4 rows)
  const RESERVED_START_COL = 2
  const RESERVED_END_COL = 7 // 2,3,4,5,6,7 (6 columns)
  const RESERVED_START_ROW = 1
  const RESERVED_END_ROW = 4 // 1,2,3,4 (4 rows)

  // Scroll-linked animation for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // Animation completes when center of container reaches center of viewport
  })

  const containerOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  // Create grid with random app placement
  useEffect(() => {
    if (!apps || apps.length === 0) return

    // Create an array of cells
    const emptyCells: GridCell[] = Array(TOTAL_CELLS)
      .fill(null)
      .map((_, index) => {
        const row = Math.floor(index / COLUMNS)
        const column = index % COLUMNS

        // Check if this cell is in the reserved middle area
        const isReserved =
          row >= RESERVED_START_ROW &&
          row <= RESERVED_END_ROW &&
          column >= RESERVED_START_COL &&
          column <= RESERVED_END_COL

        return {
          app: null,
          delay: 0,
          row,
          column,
          isReserved,
        }
      })

    // Get all non-reserved cells
    const availableCellIndices = emptyCells
      .map((cell, index) => (!cell.isReserved ? index : -1))
      .filter((index) => index !== -1)

    // Limit apps to available cells or 60% of non-reserved cells, whichever is smaller
    const availableCellCount = availableCellIndices.length
    const maxAppCount = Math.min(apps.length, Math.floor(availableCellCount * 0.6))
    const appsToShow = apps.slice(0, maxAppCount)

    // Randomly select positions from available cells
    const shuffledPositions = shuffleArray([...availableCellIndices])
    const positions = shuffledPositions.slice(0, appsToShow.length)

    // Place apps at random positions with increasing delays
    const newGrid = [...emptyCells]

    // Sort positions to create a wave-like filling pattern
    positions.sort((a, b) => {
      const rowA = Math.floor(a / COLUMNS)
      const rowB = Math.floor(b / COLUMNS)
      return rowA - rowB
    })

    // Assign apps to positions with staggered delays
    appsToShow.forEach((app, index) => {
      const position = positions[index]
      const row = Math.floor(position / COLUMNS)
      const column = position % COLUMNS

      // Delay increases as we go down rows, creating a cascading effect
      const delay = row * 0.1 + Math.random() * 0.3

      // Create a new cell object with the app
      const cell: GridCell = {
        app,
        delay,
        row,
        column,
        isReserved: false,
      }

      // Assign to grid
      newGrid[position] = cell
    })

    setGridCells(newGrid)
  }, [apps])

  if (!apps || apps.length === 0 || gridCells.length === 0) {
    return null // Or render an empty state
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative container w-full overflow-x-clip py-12"
      style={{ opacity: containerOpacity }}
    >
      <div
        className={`relative grid grid-cols-10 gap-3`}
        style={{ gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))` }}
      >
        {/* App icons grid */}
        {gridCells.map((cell, index) => (
          <div
            key={index}
            className={cn(
              'relative aspect-square',
              cell.isReserved ? 'pointer-events-none opacity-0' : '',
            )}
          >
            {/* Empty placeholder that's always visible */}
            <div className="absolute inset-0 z-0">
              <EmptyAppIcon />
            </div>

            {/* Animated icon that appears when scrolled into view */}
            {cell.app && (
              <div className="absolute inset-0 z-10">
                <AnimatedAppIcon
                  app={cell.app}
                  delay={cell.delay}
                  containerRef={containerRef}
                  row={cell.row}
                />
              </div>
            )}
          </div>
        ))}

        {/* Content overlay for the middle section */}
        <div
          className="absolute z-1 rounded-3xl bg-white/90 p-6 backdrop-blur-md"
          style={{
            gridColumn: `${RESERVED_START_COL + 1} / span ${RESERVED_END_COL - RESERVED_START_COL + 1}`,
            gridRow: `${RESERVED_START_ROW + 1} / span ${RESERVED_END_ROW - RESERVED_START_ROW + 1}`,
            top: `${(RESERVED_START_ROW * 100) / ROWS}%`,
            left: `auto`,
            right: `auto`,
            width: '100%',
            // height: 'fit-content',
            // width: `${((RESERVED_END_COL - RESERVED_START_COL + 1) * 100) / COLUMNS}%`,
            height: `${((RESERVED_END_ROW - RESERVED_START_ROW + 1) * 100) / ROWS}%`,
          }}
        >
          <ContentSection body={body} />
        </div>
      </div>
    </motion.div>
  )
}
