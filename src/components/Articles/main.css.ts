import { container, fluid, media } from '@/styles/utils'
import { styleVariants, globalStyle } from '@vanilla-extract/css'

export default styleVariants({
  section: [
    container.xxl,
    {
      display: 'grid',

      justifyContent: 'center',
      alignItems: 'start',
      maxInlineSize: '80rem',
      paddingInline: fluid(10, 30),
      '@media': {
        [media['2xl']]: {
          // maxInlineSize: '120rem',
          maxInlineSize: '95%',

          gridTemplateColumns: '1fr 1fr'
        }
      }
    }
  ],
  wrapperIframe: {
    '@media': {
      [media.lg]: {
        minInlineSize: '100%',
        position: 'sticky',
        top: 20
      }
    }
  },
  Iframe: {
    border: '0px',
    width: '100%',

    marginBlockStart: 20,

    // aspectRatio: '16/9',
    '@media': {
      [media.mobile.portrait]: {
        width: '100sdw',
        height: '100sdh',
        aspectRatio: '9/16'
      },
      [media.mobile.landscape]: {
        minInlineSize: '99%',
        aspectRatio: '16/8'
      },
      [media.md]: {
        aspectRatio: '16/9'
      },
      [media.tablet.portrait]: {
        aspectRatio: '16/9'
      },
      [media.lg]: {
        aspectRatio: '16/9'
      },

    }
  },
  content: {
    maxInlineSize: 800,
    '@media': {
      [media['2xl']]: {
        maxInlineSize: undefined
      }
    }
  }
})

globalStyle('ul li', {
  listStyleType: 'circle'
})
