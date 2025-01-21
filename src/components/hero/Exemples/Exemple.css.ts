import { styleVariants, style } from '@vanilla-extract/css'
import {  media } from '@theme'



export const containerExemple = style([
  //container.medium,
  {
    backgroundColor: 'orange',
    marginInline: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(150px, 1fr))',
    gap: 10,
  },
])

const box = style({
  position: 'relative',
  borderRadius: 20,
  maxInlineSize: 250,

  //minBlockSize: 300,
  aspectRatio: '4/5',
  display: 'grid',
  placeItems: 'end center ',

  '@media': {
    [media.md]: {
      maxInlineSize: 300,
      aspectRatio: '2/3',
    },
  },
})
export const backgroundImage = styleVariants({
  Hotel: [
    box,
    {
      backgroundColor: 'blue',
      '@media': {
        [media.md]: {
          backgroundColor: 'purple',
        },
      },
    },
  ],
  Gym: [
    box,
    {
      backgroundColor: 'aqua',
      '@media': {
        'screen and (min-width: 768px)': {
          backgroundColor: 'purple',
        },
      },
    },
  ],
  Restaurant: [
    box,
    {
      backgroundColor: 'red',
      '@media': {
        'screen and (min-width: 950px)': {
          backgroundColor: 'pink',
        },
      },
    },
  ],
  Spa: [box, { backgroundColor: 'green' }],
})
export const BusinessCategoryStyle = style({
  borderRadius: 10,
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid red',
  //fontFamily: theme.fontFamily.nunito,
  fontWeight: 700,
  padding: '10px 25px',
  marginTop: '-460px', // Ajustez cette valeur selon vos besoins
  fill: 'red',
  //   position: 'absolute',
  //   bottom: 0,
  //   left:85,
  selectors: {
    '&:hover': {
      cursor: 'pointer',
      //backgroundColor: theme.color.azure,
      color: 'white',
      fill: 'yellow',
    },
  },
})
