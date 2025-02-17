import { styleVariants } from '@vanilla-extract/css'
import * as T from "@theme"
import {container} from "@theme";

export default styleVariants({
  wrapper: [container.small,{}],
  card: {
    marginBlock: 'min(20px,5%)',
    backgroundColor: 'green',
    inlineSize: '95%',
    cursor: 'pointer'
  },
  dt: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'orange'
  },
  titleCard: {
    color: 'red'
  },
  open: {
    height: 'auto'
  },
  close: {
    height: 0,
    visibility: 'hidden'
  }
})
