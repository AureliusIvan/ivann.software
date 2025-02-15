import localFont from 'next/font/local'


const lanceFont = localFont({
    src: './lanche/Lanche.ttf',
} as const)


const argentumSansFont = localFont({
    src: './argentum-sans/ArgentumSans-Regular.ttf',
} as const)

export { lanceFont, argentumSansFont }
