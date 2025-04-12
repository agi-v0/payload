// 'use client'

// import React from 'react'
// import { FeaturesBlock } from '@/payload-types'
// import RichText from '@/components/RichText'
// import { CMSLink } from '@/components/Link'
// import { Badge } from '@/components/ui/badge'
// import { BadgeConfig } from '../types'

// export const IconGridVariant: React.FC<FeaturesBlock> = ({ columns }) => {
//   if (!columns || columns.length === 0) return null
//   return (
//     <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
//       {columns.map((column, index) => {
//         const { content, showFeatureList, features, link } = column

//         const mainIcon =
//           showFeatureList && features && features.length > 0 && features[0].icon
//             ? features[0].icon
//             : null

//         return (
//           <div key={index} className="flex flex-col items-center p-6 text-center">
//             {mainIcon && (
//               <div className="bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 mb-5 flex h-16 w-16 items-center justify-center rounded-full">
//                 <i className={`${mainIcon} text-2xl`} />
//               </div>
//             )}

//             <h3 className="mb-3 text-xl font-semibold">{title}</h3>

//             {/* {showBadge && badgeConfig?.badge && (
//               <div className="mb-3">
//                 <Badge {...badgeConfig.badge as BadgeConfig} />
//               </div>
//             )} */}

//             {content && (
//               <div className="mb-4">
//                 <RichText data={content} />
//               </div>
//             )}

//             {showFeatureList && features && features.length > 0 && (
//               <ul className="mb-4 space-y-2 text-sm">
//                 {/* Skip the first feature if we used it as main icon */}
//                 {features.slice(mainIcon ? 1 : 0).map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-start gap-2">
//                     {feature.icon && (
//                       <span className="text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0">
//                         <i className={feature.icon} />
//                       </span>
//                     )}
//                     <div className="text-left">
//                       <RichText data={feature.content} />
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {/* {enableCta && link && (
//               <div className="mt-auto pt-3">
//                 <CMSLink type={} {...link as CMSLinkType} />
//               </div>
//             )} */}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
