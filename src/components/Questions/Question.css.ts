import { styleVariants } from '@vanilla-extract/css'
import * as T from '@theme'
import { container } from '@theme'
import { fluid } from '@styles/utils'

export default styleVariants({
  wrapper: [
    container.small,
    {
      // backgroundColor: 'white',
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
    //inlineSize: '95%',
    marginInline: fluid(10, 70),
    cursor: 'pointer'
  },
  dt: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:"center",

    paddingInline: 30
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
    transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
    borderBlockStart: `2px solid ${T.color.black}`,
    padding:10
  },
  close: {
    height: 0,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
    overflow: 'hidden' // Ensure content doesn't overflow during transition
  }
})
