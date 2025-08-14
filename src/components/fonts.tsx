// app/components/fonts.ts
import localFont from 'next/font/local'

const cosima = localFont({
  src: [
    {
      path: '../../public/fonts/CosimaTrial-Thin.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CosimaTrial-Bold.ttf.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
//   display: 'swap',
})

// const anotherFont = localFont({
//   src: '../../public/fonts/another-font/AnotherFont-Regular.ttf',
//   weight: '400',
//   style: 'normal',
//   display: 'swap',
// })

// ✅ Export all fonts together
export const fonts = {
  cosima,
}
