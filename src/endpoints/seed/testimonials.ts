import type { Media } from '@/payload-types'
import { Payload } from 'payload'

type TestimonialsArgs = {
  placeholder: Media
  logo: Media
}

export const seedTestimonials = async (
  payload: Payload,
  { placeholder, logo }: TestimonialsArgs,
): Promise<void> => {
  payload.logger.info('Seeding testimonials...')

  const format = '' as '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'

  const testimonials = [
    {
      authorInfo: {
        title: 'مدير تقني',
        name: 'أحمد المنصوري',
        avatar: placeholder.id,
      },
      company: 'شركة التقنية العربية',
      companyLogo: logo.id,
      media: placeholder.id,

      quote: {
        root: {
          type: 'root',
          format,
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format,
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: 'لقد ساعدنا مرن في تحسين عملياتنا التقنية بشكل كبير. الدعم الفني ممتاز والمنصة سهلة الاستخدام وقوية في نفس الوقت.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'rtl' as 'rtl' | 'ltr' | null,
              textFormat: 0,
            },
          ],
          direction: 'rtl' as 'rtl' | 'ltr' | null,
        },
      },
      stats: [
        {
          label: 'زيادة في الإنتاجية',
          value: 42,
          isPercentage: true,
          isIncrease: true,
        },
        {
          label: 'توفير الوقت',
          value: 35,
          isPercentage: true,
          isIncrease: true,
        },
      ],
      rating: 5,
      featured: true,
    },
    {
      authorInfo: {
        title: 'مديرة المشاريع',
        name: 'فاطمة الزهراء',
        avatar: placeholder.id,
      },
      company: 'مؤسسة الابتكار الرقمي',
      media: placeholder.id,
      companyLogo: logo.id,

      quote: {
        root: {
          type: 'root',
          format,
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format,
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: 'أنا سعيدة جدًا بالتعاون مع مرن. لقد تمكنا من تنفيذ مشاريعنا بسرعة أكبر وبجودة عالية. الخدمات المقدمة متميزة جدًا.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'rtl' as 'rtl' | 'ltr' | null,
              textFormat: 0,
            },
          ],
          direction: 'rtl' as 'rtl' | 'ltr' | null,
        },
      },
      stats: [
        {
          label: 'تقليل التكاليف',
          value: 28,
          isPercentage: true,
          isIncrease: true,
        },
      ],
      rating: 4,
      featured: false,
    },
    {
      authorInfo: {
        title: 'الرئيس التنفيذي',
        name: 'محمد العتيبي',
        avatar: placeholder.id,
      },
      company: 'مجموعة الخليج للاستثمار',
      media: placeholder.id,
      companyLogo: logo.id,

      quote: {
        root: {
          type: 'root',
          format,
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format,
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: 'لم أكن أتوقع هذا المستوى من الاحترافية والكفاءة. تقنيات مرن ساهمت في تسريع نمو أعمالنا ووسعت آفاق استثماراتنا بشكل ملحوظ.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'rtl' as 'rtl' | 'ltr' | null,
              textFormat: 0,
            },
          ],
          direction: 'rtl' as 'rtl' | 'ltr' | null,
        },
      },
      stats: [
        {
          label: 'زيادة في الإيرادات',
          value: 65,
          isPercentage: true,
          isIncrease: true,
        },
        {
          label: 'توسع في قاعدة العملاء',
          value: 120,
          isPercentage: false,
          isIncrease: true,
        },
      ],
      rating: 5,
      featured: true,
    },
    {
      authorInfo: {
        title: 'مديرة التسويق',
        name: 'نورة القحطاني',
        avatar: placeholder.id,
      },
      company: 'شركة الإعمار والتطوير',
      media: placeholder.id,
      companyLogo: logo.id,

      quote: {
        root: {
          type: 'root',
          format,
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format,
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: 'لقد كانت تجربتي مع مرن رائعة جدًا. ساعدتنا المنصة في تطوير استراتيجيات تسويقية فعالة وزيادة تفاعل العملاء مع منتجاتنا.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'rtl' as 'rtl' | 'ltr' | null,
              textFormat: 0,
            },
          ],
          direction: 'rtl' as 'rtl' | 'ltr' | null,
        },
      },
      stats: [
        {
          label: 'زيادة في معدل التحويل',
          value: 45,
          isPercentage: true,
          isIncrease: true,
        },
      ],
      rating: 4,
      featured: false,
    },
    {
      authorInfo: {
        title: 'مدير تقنية المعلومات',
        name: 'عبدالله السعدون',
        avatar: placeholder.id,
      },
      company: 'مستشفى الشفاء التخصصي',
      media: placeholder.id,
      companyLogo: logo.id,

      quote: {
        root: {
          type: 'root',
          format,
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format,
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: 'ساعدتنا حلول مرن على تحسين خدماتنا الصحية الرقمية وتطوير بنيتنا التحتية التقنية. نحن ممتنون للدعم المستمر والحلول المبتكرة.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'rtl' as 'rtl' | 'ltr' | null,
              textFormat: 0,
            },
          ],
          direction: 'rtl' as 'rtl' | 'ltr' | null,
        },
      },
      stats: [
        {
          label: 'تقليل وقت الانتظار',
          value: 38,
          isPercentage: true,
          isIncrease: true,
        },
        {
          label: 'تحسين تجربة المرضى',
          value: 52,
          isPercentage: true,
          isIncrease: true,
        },
      ],
      rating: 5,
      featured: false,
    },
  ]

  // Add testimonials to database
  for (const testimonial of testimonials) {
    await payload.create({
      collection: 'testimonials',
      data: {
        ...testimonial,
        _status: 'published',
      },
    })
  }

  payload.logger.info('Seeding testimonials complete!')
}
