import {  globalStyle, style } from '@vanilla-extract/css'
import { container ,globalStyleTag} from '@theme'
import * as T from '@theme'

export const contentHeroSpace = style([
  container.small,
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: T.space.md,
    marginInline: 'auto',
  },
])

export const image = style({
  aspectRatio: '1/1',
  backgroundColor: 'oklch(70% 0.1 346)',
  minInlineSize: 'min(100%,250px)',
  minBlockSize: 'min(100%,250px)',
})
export const aboutMeList = style([
  container.small,
  {
    listStyle: 'none',
    margin: '20 auto auto 20',
  },
])
globalStyle(`${aboutMeList} li:before`, {
  content: '✓',
  color: T.color.green,
})

globalStyleTag(contentHeroSpace,{
  p:{
    color:"red",
    textAlign:"center",
  }
})