module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      primaryLight: '#78CBBE',
      primaryNormal:'#00BEA1', 
      primaryDark:  '#006556',
      orangeDark:   '#EA7938',
      orangeNormal: '#FEA571',
      orangeLight:  '#FFBA92',
      pinkLight:    '#F39BFF',
      pinkNormal:   '#D266E1',
      pinkDark:     '#D049E2',
      greenLight:   '#6CC0A4',
      greenNormal:  '#00BA7B',
      greenDark:    '#089968',
      blueLight:    '#699CAC',
      blueNormal:   '#154351',
      blueDark:     '#0C2D37',
      success:      '#00BEA1',
      danger:       '#F55F5F',
      warning:      '#FF814B',
      inactive:     '#A7A5A5',
      white:        '#FFFFFF',
      black:        '#000000',
      background:   '#E8E9EB',
      bgDark:       '#282936',
      grey100:      '#E8E9EB',
      grey200:      '#DBDBDC',
      grey300:      '#CACACC',
      grey400:      '#B4B4B5',
      grey500:      '#A5A5A6',
      grey600:      '#929294',
      grey700:      '#858585',
      grey800:      '#6B6A6A',
      grey900:      '#484847'
    },
    fontSize:{
      xs:     ['11px', { lineHeight: '16px', letterSpacing: '0.04em' }],
      sm:     ['13px', { lineHeight: '20px', letterSpacing: '0.04em'  }],
      md:     ['14px', { lineHeight: '20px', letterSpacing: '0.04em' }],
      lg:     ['16px', { lineHeight: '22px', letterSpacing: '0.04em' }],
      xl:     ['18px', { lineHeight: '24px', letterSpacing: '-0.01em' }],
      xxl:    ['20px', { lineHeight: '24px', letterSpacing: '-0.01em' }],
      xxxl:   ['22px', { lineHeight: '26px', letterSpacing: '-0.01em' }],
    },
    fontFamily: {
      nunito: 'Nunito'
    }
  }
}
