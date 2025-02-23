import { container } from '@/styles/utils'
import { styleVariants, style, globalStyle } from '@vanilla-extract/css'
import * as T from '@theme'
const BorderBottom = '10px solid black'

export const Tarif = styleVariants({
  wrapper: [
    container.small,
    {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      gap: '2rem',
      color: '#333',
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
      transition: 'box-shadow 0.3s ease',
      ':hover': {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  ],
  zero: {
    fontSize: '2.75rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff4d4f',
    textShadow: '1px 1px 9px rgba(0, 0, 0, 0.2)',
    marginBottom: '1rem',
    position:"relative",
    '::after': {
      content: 'TTC',
      fontSize: '0.45em',
      position:"absolute",
      
    },
  },



  zeroSup: {
    fontSize: '0.65em',
  },
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))',
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  item: {
    color: '#1e88e5',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    ':hover': {
      backgroundColor: '#e0e0e0',
      transform: 'scale(1.05)',
    },
    ':focus-visible': {
      outline: '2px solid #1e88e5',
      outlineOffset: '2px',
    },
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr',

    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '1.5rem 1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',

    '@media': {
      [T.media.md]: {
        gridTemplateColumns: 'auto 1fr auto',
        gap: '0.81rem',
      },
    },
  },
  contentUl: {
    backgroundColor: 'undefined',

    display: 'flex',
    overflowX: 'scroll',
    width: '100%',
    gap: '0.5rem',
    scrollSnapType: 'x mandatory', // Ajout de scrollSnapType pour un défilement fluide
    scrollbarWidth: 'none', // Masque la barre de défilement
    msOverflowStyle: 'none', // Pour IE/Edge
    '&::-webkit-scrollbar': {
      display: 'none', // Pour Chrome/Safari
    },
    '@media': {
      [T.media.md]: {
        // display: 'inline-block',
      },
    },
  },
  contentUlText: {
    minInlineSize: 'calc(100% + 1rem)',
    paddingInline: '1.5rem',
    backgroundColor: '#fafafa',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxSizing: 'border-box',
    whiteSpace: 'pre-line',
    lineHeight: '1.6',
    color: '#444',
    scrollSnapAlign: 'start', // Aligne chaque élément au début du conteneur
    transition: 'transform 0.3s ease',
  },
  contentArrow: {
    display: 'none',
    '@media': {
      [T.media.md]: {
        display: 'inline-block',
      },
    },
    appearance: 'none',
    background: T.color.red,
    color: '#fff',
    padding: '0.5rem 0.75rem',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    ':hover': {
      backgroundColor: '#e53935',
      transform: 'scale(1.1)',
    },
    ':focus-visible': {
      outline: '2px solid #1e88e5',
      outlineOffset: '2px',
    },
  },
})


