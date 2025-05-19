'use client'
import type { Footer } from '@/payload-types'
import { motion, useMotionValue, animate } from 'motion/react'
import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { LanguageSwitcher } from '@/providers/LanguageSelector/index'
import { CMSLink } from '@/components/Link'
import Logo from '@/components/ui/logo'

import Facebook from '@/icons/facebook'
import Instagram from '@/icons/instagram'
import X from '@/icons/x'
import TikTok from '@/icons/tiktok'
import LinkedIn from '@/icons/linkedin'
import Youtube from '@/icons/youtube'
import { useTranslations } from 'next-intl'

const socialLinks = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/marnpos',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/marnpos',
    icon: Instagram,
  },
  {
    label: 'X',
    url: 'https://www.x.com/marnpos',
    icon: X,
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@marnpos',
    icon: TikTok,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/marnpos',
    icon: LinkedIn,
  },
  {
    label: 'Youtube',
    url: 'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ',
    icon: Youtube,
  },
]

type Props = {
  columns: Footer['columns']
  currentYear: number
}

/* ─── knobs ──────────────────────────────────────────────────────────────── */
const MAX_PEEK = 400 // absolute cap in px
const TOUCH_GAIN = 1.2 // multiplier per px of finger travel
const WHEEL_GAIN = 45 // multiplier per wheel tick ≈ 1
const WHEEL_IDLE = 65 // ms gap that ends a wheel gesture
/* ────────────────────────────────────────────────────────────────────────── */

export function FooterClient({ columns, currentYear }: Props) {
  /* live transform */
  const y = useMotionValue(0)
  const t = useTranslations('Footer')

  /* refs that never cause React re-renders */
  const peekRef = useRef(0) // current lift in px
  const idleTimer = useRef<NodeJS.Timeout | null>(null) // wheel idle
  const touchDown = useRef(false) // finger is on screen
  const springing = useRef(false) // footer is snapping back
  const footerRef = useRef<HTMLDivElement>(null)

  /* helpers */
  const setPeek = (val: number) => {
    peekRef.current = Math.min(Math.max(val, 0), MAX_PEEK)
    y.set(-peekRef.current) // immediate follow
  }

  const springBack = () => {
    springing.current = true
    animate(y, 0, {
      type: 'spring',
      stiffness: 550,
      damping: 44,
      onComplete: () => {
        springing.current = false
        peekRef.current = 0
      },
    })
  }

  /* unified overscroll handler */
  const overscroll = (inputDelta: number) => {
    if (springing.current) return

    const atBottom =
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
    if (!atBottom || inputDelta <= 0) return

    setPeek(peekRef.current + inputDelta) // accumulate

    /* wheel: restart idle timer every tick */
    if (!touchDown.current) {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current)
      }
      idleTimer.current = setTimeout(springBack, WHEEL_IDLE)
    }
  }

  /* event wiring */
  useEffect(() => {
    /* 1 - wheel / track-pad */
    const onWheel = (e: WheelEvent) => {
      /* normalise delta: small ±1 ticks → ≈ 45 px, big ±120 → same 120 px */
      const gain = Math.sign(e.deltaY) * Math.max(1, Math.abs(e.deltaY)) * WHEEL_GAIN
      overscroll(gain)
      /* suppress browser rubber-band only when we're overscrolling */
      if (peekRef.current > 0) e.preventDefault()
    }

    /* 2 - touch */
    let lastY = 0
    const tStart = (e: TouchEvent) => {
      touchDown.current = true
      lastY = e.touches[0].clientY
    }
    const tMove = (e: TouchEvent) => {
      const dy = lastY - e.touches[0].clientY
      lastY = e.touches[0].clientY
      overscroll(dy * TOUCH_GAIN)
    }
    const tEnd = () => {
      touchDown.current = false
      if (peekRef.current) springBack()
    }

    window.addEventListener('wheel', onWheel, { passive: false }) // ← must be non-passive
    window.addEventListener('touchstart', tStart, { passive: true })
    window.addEventListener('touchmove', tMove, { passive: true })
    window.addEventListener('touchend', tEnd, { passive: true })
    window.addEventListener('touchcancel', tEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', tStart)
      window.removeEventListener('touchmove', tMove)
      window.removeEventListener('touchend', tEnd)
      window.removeEventListener('touchcancel', tEnd)
    }
  }, [])

  useEffect(() => {
    const el = footerRef.current
    if (el) {
      const height = el.clientHeight
      if (height) {
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--footer-height', `${height}px`)
        })
      }
    }
  }, [columns])

  return (
    <div className="bg-background relative">
      <div className="container">
        <div className="relative z-1" style={{ height: 'var(--footer-height)' }}>
          <motion.footer
            ref={footerRef}
            data-theme="dark"
            style={{ y }}
            className="bg-background-neutral-subtle pt-xl rounded-space-sm absolute bottom-0 w-full will-change-transform"
          >
            <div className="container grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-12">
              <div className="flex w-full flex-col items-start justify-start gap-6 lg:col-span-5">
                <div className="flex flex-col items-start justify-between gap-1">
                  <p className="text-base-tertiary text-body-sm font-medium">{t('followUs')}</p>
                  <div className="flex flex-row items-start justify-center">
                    {socialLinks.map(({ label, url, icon: Icon }, i) => (
                      <Button key={i} variant="ghost" color="neutral" size="icon" asChild>
                        <Link href={url}>
                          <Icon className="text-base-tertiary size-5" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
                <ThemeSelector />
                <LanguageSwitcher />
              </div>
              <nav className="pb-site grid grid-cols-2 md:col-span-2 lg:col-span-7 lg:grid-cols-4">
                {columns?.map(({ label, navItems }, i) => {
                  return (
                    <nav key={i} className="grid grid-cols-1">
                      <p className="text-base-tertiary text-body-sm font-medium">{label}</p>
                      {navItems?.map(({ link }, j) => {
                        return (
                          <CMSLink
                            key={j}
                            variant="inline"
                            className="h-auto justify-start rounded-none px-0 py-2 text-sm font-medium hover:no-underline"
                            {...link}
                          />
                        )
                      })}
                    </nav>
                  )
                })}
              </nav>
            </div>
          </motion.footer>

          <div className="px-site absolute bottom-0 container mx-auto w-full">
            <Link href="/" className="flex h-auto w-full justify-center">
              <Logo className="text-base-primary/10 h-auto w-full" />
            </Link>
          </div>
        </div>

        <div className="col-span-full flex w-full flex-row items-start justify-between gap-1 py-4">
          <p className="text-base-tertiary text-xs md:text-sm">
            {t('allRightsReserved', { year: currentYear })}
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-base-tertiary hover:text-base-secondary text-xs md:text-sm"
            >
              {t('termsAndConditions')}
            </Link>
            <Link
              href="/privacy"
              className="text-base-tertiary [&_path]:shadow-border hover:text-base-secondary text-xs md:text-sm"
            >
              {t('privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
