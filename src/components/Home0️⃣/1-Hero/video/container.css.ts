import { style, styleVariants } from '@vanilla-extract/css'
import * as T from '@theme'

const videoBase = style({
  position: 'relative',
  width: '100%',
  maxInlineSize: '900px',
  aspectRatio: '16 / 9',
  margin: 'auto auto',
})

export default styleVariants({
  open: [
    videoBase,
    { backgroundColor: 'transparent', transition: 'margin-block-start 2s' },
  ],
  closed: [
    {
      backgroundImage:
        'url("@images/videoImage/Visite virtuelle Google mini.avif")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      '@media': {
        [T.media.mobile.portrait]: {
          marginBlockStart: 20,
          ':after': {
            position: 'absolute',
            top: '-2.5rem',
          },
        },
      },
      ':after': {
        content: 'voir la vidéo',
        position: 'absolute',
        top: '-60px',
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
      },
    },
    videoBase,
  ],
})