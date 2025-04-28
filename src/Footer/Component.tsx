import { getCachedGlobal } from '@/utilities/getGlobals'
import { Link } from '@/i18n/routing'
import React from 'react'

import type { Footer } from '@/payload-types'

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
import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'

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

export async function Footer() {
  const { columns }: Footer = await getCachedGlobal('footer', 1)()
  const t = await getTranslations('Footer')
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Footer content */}
        <footer className="border-border rounded-b-space-sm pt-xl bg-background-neutral-subtle text-base-primary z-10 mt-auto mb-[16vw] border-t shadow-2xl transition-transform duration-300">
          <div className="container grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-12">
            <div className="flex w-full flex-col items-start justify-start gap-6 lg:col-span-5">
              <div className="flex flex-col items-start justify-between gap-1">
                <p className="text-base-tertiary text-body-sm font-medium">تابعنا</p>
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
                    {navItems?.map(({ link }, i) => {
                      return (
                        <CMSLink
                          key={i}
                          variant="inline"
                          className="text-body-sm text-base-secondary h-auto justify-start rounded-none px-0 py-2 font-medium hover:bg-transparent"
                          {...link}
                        />
                      )
                    })}
                  </nav>
                )
              })}
            </nav>
            <div className="border-border col-span-full flex flex-row items-start justify-between gap-1 border-t py-4">
              <p className="text-base-tertiary text-sm">
                {t('allRightsReserved', { year: currentYear })}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/terms"
                  className="text-base-tertiary hover:text-base-secondary text-sm"
                >
                  {t('termsAndConditions')}
                </Link>
                <Link
                  href="/privacy"
                  className="text-base-tertiary hover:text-base-secondary text-sm"
                >
                  {t('privacyPolicy')}
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Fixed full width logo underneath the footer */}
        <div className="bg-brand/10 p-site fixed bottom-0 -z-10 flex w-full items-center justify-center">
          <Link href="/" className="flex h-auto w-full justify-center">
            <Logo className="text-brand h-auto w-full" />
          </Link>
        </div>
      </div>
    </>
  )
}
