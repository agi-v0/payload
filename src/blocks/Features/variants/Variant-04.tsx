'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'motion/react'
import { FeaturesBlock } from '@/payload-types'
import { BlockHeader } from '@/components/BlockHeader'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'

export const Variant04: React.FC<FeaturesBlock> = ({ columns, blockHeader }) => {
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
          <div className="gap-xs grid grid-cols-1 items-center md:grid-cols-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-image`}
                initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'rounded-space-sm bg-background-neutral-subtle order-1 overflow-hidden',
                  activeColumn?.reverseOrder && 'md:order-2',
                )}
              >
                {activeColumn?.image && (
                  <Media
                    resource={activeColumn.image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-[4/3] object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-text`}
                initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={cn(
                  'order-2 flex items-center justify-center',
                  activeColumn?.reverseOrder && 'md:order-1',
                  activeColumn?.reverseOrder ? 'pe-xl' : 'ps-xl',
                )}
              >
                {activeColumn?.richTextContent && (
                  <RichText data={activeColumn.richTextContent} className="" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
