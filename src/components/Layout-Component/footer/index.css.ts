import FontSizeGenerator from '@styles/tokens/font/FontSizeGenerator'
import {
  ContainerQuery,
  noShow,
  DivSocialNetwork
} from './SocialNetwork/containerQuerry.css'
const font = new FontSizeGenerator(380, 1600, 16)

import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '@/styles/tokens/ThemeContract.css'
import media from '@/styles/tokens/size/media'

export const base = style({
  backgroundColor: 'purple'
})
export const eachDiv = {
  first: style([
    base,
    {
      gridColumn: '1 / 2',
      '@media': {
        [media.tablet.portrait]: {
          gridColumn: '1 / 3'
        }
      }
    }
  ]),
  second: style([base, {}]),
  third: style([base, ContainerQuery, { placeContent: 'center' }])
}

export const Footer = style({
  marginTop: 'auto',
  color: 'white',
  gap: theme.space.xxxs,
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media': {
    [media.lg]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: theme.space.sm
    },
    [media.tablet.portrait]: {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }
})

export const footerDescription = style({
  gridColumn: '1 / 2',
  backgroundColor: 'orangered',
  '@media': {
    [media.tablet.portrait]: {
      gridColumn: '1 / 3'
    }
  }
})

globalStyle(`${Footer} h4`, {
  marginBlockEnd: theme.space.xs,
  textDecoration: 'underline',
  '@media': {
    [media.mobile.portrait]: {
      marginBlockEnd: '0.1em'
    },
    [media.mobile.landscape]: {
      marginBlockEnd: '0.5em'
    }
  }
})

globalStyle(`${eachDiv.third} span`, {
  paddingBlock: theme.space.xxs,
  '@media': {
    [media.md]: {
      paddingBlock: theme.space.xxs
    }
  }
})

export const adress = style({
  backgroundColor: 'orange',
  selectors: {
    '&:before': {
      content: '📍',
      marginInlineEnd: 10,
      '@media': {
        [media.mobile.portrait]: {
          marginInlineEnd: 4
        }
      }
    }
  }
})
