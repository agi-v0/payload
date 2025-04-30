'use client'
import { Children, ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react'
import { motion, Transition, useMotionValue } from 'motion/react'
import { cn } from '@/utilities/ui'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useDirection } from '@/hooks/useDirection'
import { Button } from './button'

export type CarouselContextType = {
  index: number
  setIndex: (newIndex: number) => void
  itemsCount: number
  setItemsCount: (newItemsCount: number) => void
  disableDrag: boolean
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider')
  }
  return context
}

export type CarouselProviderProps = {
  children: ReactNode
  initialIndex?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
}

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex)
  const [itemsCount, setItemsCount] = useState<number>(0)

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex)
    onIndexChange?.(newIndex)
  }

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export type CarouselProps = {
  children: ReactNode
  className?: string
  initialIndex?: number
  index?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
}

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex)
  const isControlled = externalIndex !== undefined
  const currentIndex = isControlled ? externalIndex : internalIndex

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex)
    }
    onIndexChange?.(newIndex)
  }

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      <div className={cn('group/hover relative', className)}>
        {children}
        {/* <div className="">
          </div> */}
      </div>
    </CarouselProvider>
  )
}

export type CarouselNavigationProps = {
  className?: string
  classNameButton?: string
  alwaysShow?: boolean
}

function CarouselNavigation({ className, classNameButton, alwaysShow }: CarouselNavigationProps) {
  const { index, setIndex, itemsCount } = useCarousel()
  const direction = useDirection()

  const PreviousIcon = direction === 'rtl' ? ChevronRight : ChevronLeft
  const NextIcon = direction === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <div
      className={cn(
        'pointer-events-none absolute flex w-full justify-between gap-2',
        direction === 'rtl' ? '' : '',
        className,
      )}
    >
      <Button
        type="button"
        aria-label="Previous slide"
        variant="secondary"
        color="neutral"
        size="icon"
        className={cn('pointer-events-auto rounded-full', classNameButton)}
        disabled={index === 0}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1)
          }
        }}
      >
        <ArrowRightIcon className="size-4" />
      </Button>
      <Button
        type="button"
        variant="secondary"
        color="neutral"
        size="icon"
        className={cn('pointer-events-auto rounded-full', classNameButton)}
        aria-label="Next slide"
        disabled={index + 1 === itemsCount}
        onClick={() => {
          if (index < itemsCount - 1) {
            setIndex(index + 1)
          }
        }}
      >
        <ArrowLeftIcon className="size-4" />
      </Button>
    </div>
  )
}

export type CarouselIndicatorProps = {
  className?: string
  classNameButton?: string
}

function CarouselIndicator({ className, classNameButton }: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel()

  return (
    <div
      className={cn(
        'pointer-events-none absolute z-10 flex w-full items-center justify-center',
        className,
      )}
    >
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              'pointer-events-auto h-2 w-2 rounded-full transition-opacity duration-300',
              index === i ? 'bg-button-neutral' : 'bg-button-neutral/30',
              classNameButton,
            )}
          />
        ))}
      </div>
    </div>
  )
}

export type CarouselContentProps = {
  children: ReactNode
  className?: string
  transition?: Transition
}

function CarouselContent({ children, className, transition }: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel()
  const [visibleItemsCount, setVisibleItemsCount] = useState(1)
  const dragX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsLength = Children.count(children)
  const direction = useDirection()

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter((entry) => entry.isIntersecting).length
      setVisibleItemsCount(visibleCount)
    }, options)

    const childNodes = containerRef.current.children
    Array.from(childNodes).forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [children, setItemsCount])

  useEffect(() => {
    if (!itemsLength) {
      return
    }

    setItemsCount(itemsLength)
  }, [itemsLength, setItemsCount])

  const onDragEnd = () => {
    const x = dragX.get()
    const dragThreshold = 10

    const isNextDrag = direction === 'rtl' ? x >= dragThreshold : x <= -dragThreshold
    const isPrevDrag = direction === 'rtl' ? x <= -dragThreshold : x >= dragThreshold

    if (isNextDrag && index < itemsLength - 1) {
      setIndex(index + 1)
    } else if (isPrevDrag && index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <motion.div
      drag={disableDrag ? false : 'x'}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `${direction === 'rtl' ? '' : '-'}${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: 'spring',
          duration: 0.2,
        }
      }
      className={cn(
        'flex items-center',
        !disableDrag && 'cursor-grab active:cursor-grabbing',
        className,
      )}
      ref={containerRef}
    >
      {children}
    </motion.div>
  )
}

export type CarouselItemProps = {
  children: ReactNode
  className?: string
}

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div className={cn('w-full min-w-0 shrink-0 grow-0 overflow-hidden', className)}>
      {children}
    </motion.div>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
}
