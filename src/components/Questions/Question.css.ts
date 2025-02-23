import { fluid } from '@styles/utils'
import * as T from '@theme'
import { container } from '@theme'
import { globalStyle, styleVariants } from '@vanilla-extract/css'

const Q = styleVariants({
  wrapper: [
    container.small,
    {
      color: T.color.black,
      display: 'flex',
      flexDirection: 'column',
      marginInline: 'auto',
      justifyContent: 'center'
    }
  ],
  card: {
    paddingBlock: 20,
    marginBlock: 'min(20px,5%)',
    backgroundColor: T.color.azure,
    marginInline: fluid(10, 70),
    cursor: 'pointer'
  },
  dt: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: fluid(15, 30)
  },
  dt__button: {
    display: 'none',
    ':disabled': {
      display: 'inline'
    }
  },

  icon: {
    outline: `4px solid ${T.color.black}`,
    display: 'inline'
  },
  titleCard: {
    color: T.color.black,
    fontSize: T.fontSize.base
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: 'opacity 0.3s ease-in-out',
    borderBlockStart: `2px solid ${T.color.black}`,
    padding: 10
  },
  close: {
    height: 0,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    overflow: 'hidden'
  }
})

globalStyle(`${Q.dt}:hover ${Q.dt__button}`, {
  color: T.color.white,
  transform: 'rotate(18deg) scale(1.2)'
})

export default Q
