import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ImgCard1': "url('https://img.freepik.com/fotos-gratis/closeup-tiro-de-aperto-de-mao-do-negocio-foto-recortada-de-duas-pessoas-vestindo-trajes-formais-apertando-as-maos-conceito-de-aperto-de-mao-do-negocio_1262-21017.jpg?w=1380&t=st=1692636132~exp=1692636732~hmac=e3ff3108eb0ebf8f470f500e68a77142b1b803de23d18a1145ac435aef0035b3')",
        'ImgCard2': "url('https://img.freepik.com/fotos-gratis/feliz-agente-imobiliario-dando-a-algumas-chaves-de-sua-nova-casa_637285-6089.jpg?w=1380&t=st=1692646403~exp=1692647003~hmac=41cfe56b73f4bf3113bbc16dc2b45f8ffd54af18252be2f378f925cc58cce6a0')"
      },
    },
  },
  plugins: [],
}
export default config
