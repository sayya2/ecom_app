import localFont from 'next/font/local'

const cosima = localFont({
    src:[
        {
            path: '../../../public/font/CosimaTrial-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/font/CosimaTrial-Thin.woff2',
            weight: '400',
            style: 'normal',
        },
    ]
})

export const fonts ={
    cosima,
}