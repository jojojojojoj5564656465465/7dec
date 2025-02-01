import { keyframes, style, styleVariants } from '@vanilla-extract/css'
import * as T from '@theme'

const videoBase = style({
  position: 'relative',
  width: '100%',
  maxInlineSize: '900px',
  aspectRatio: '16 / 9',
  margin: 'auto auto',
})

const getDownAnimation = keyframes({
  '0%': { top: '-75px' },
  '100%': { top: '-60px' },
})
export default styleVariants({
  open: [
    videoBase,
    { backgroundColor: 'transparent', transition: 'margin-block-start 2s' }
  ],
  closed: [
    {
      backgroundImage:
        "image-set(url('@images/videoImage/HeroImageVideoMobileHD.avif') 1x, url('@images/videoImage/HeroImageVideo.avif') 2x)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      '@media': {
        [T.media.mobile.portrait]: {
          backgroundImage:
            "image-set(url('@images/videoImage/HeroImageVideoMobile.avif') 1x, url('@images/videoImage/HeroImageVideoMobileHD.avif') 2x)",

          marginBlockStart: 60,
          ':after': {
            position: 'absolute',
            top: '-2.5rem'
          }
        },
        [T.media['2xl']]: {
          backgroundImage:
            "image-set(url('@images/videoImage/RetinaJXL.jxl') type('image/jxl'), url('@images/videoImage/RetinaJXL.avif') type('image/avif'))"
        }
      },
      ':after': {
        content: 'voir la vidéo',
        position: 'absolute',
        top: '-70px',
        right: 0,
        clipPath: 'polygon(0 0, 100% 0%, 100% 70%, 50% 100%, 0 68%)',
        padding: '10px 30px',
        color: T.color.white,
        //rotate: '-15deg',
        background: T.color.black,
        paddingBlock: 'center',
        fontSize: T.fontSize.md,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        animationName: getDownAnimation,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out'
      }
    },
    videoBase
  ]
})