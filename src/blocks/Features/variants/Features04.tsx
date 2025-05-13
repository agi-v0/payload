'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'motion/react'
import { FeaturesBlock } from '@/payload-types'
import { BlockHeader } from '@/components/BlockHeader'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'

export const Features04: React.FC<FeaturesBlock> = ({ columns, blockHeader }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  useEffect(() => {
    let lastScrollY = 0
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (!columns?.length) return

      const newIndex = Math.min(Math.floor(latest * columns.length), columns.length - 1)

      setScrollDirection(latest > lastScrollY ? 'down' : 'up')
      lastScrollY = latest

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, columns, activeIndex])

  if (!columns?.length) return null

  const activeColumn = columns[activeIndex]

  return (
    <div
      ref={containerRef}
      className="relative h-[var(--section-height)]"
      style={
        {
          '--section-height': `${columns.length * 100}vh`,
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="container">
          <motion.div
            className={cn(
              'gap-xs flex flex-col items-center md:flex-row',
              // activeColumn?.reverseOrder && 'md:flex-row-reverse',
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-image`}
                initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'rounded-space-sm bg-background-neutral-subtle w-full overflow-hidden',
                )}
              >
                {activeColumn?.image && (
                  <Media
                    resource={activeColumn.image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-text`}
                initial={{
                  opacity: 0,
                  y: scrollDirection === 'down' ? 20 : -20,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: scrollDirection === 'down' ? -20 : 20,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={cn(
                  'gap-sm md:px-xl mt-sm flex w-full flex-col items-start justify-start md:mt-0',
                  // { 'md:pe-xl': activeColumn.reverseOrder },
                )}
              >
                {activeColumn?.enableBadge && activeColumn?.badge && (
                  <Badge {...activeColumn.badge} />
                )}

                {activeColumn?.richTextContent && <RichText data={activeColumn.richTextContent} />}
                {activeColumn?.enableCta && activeColumn?.link?.label && (
                  <CMSLink size="lg" variant="primary" {...activeColumn.link} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
