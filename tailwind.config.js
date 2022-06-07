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
      xs:     ['10px', { lineHeight: '16px', letterSpacing: '-0.02em' }],
      sm:     ['13px', { lineHeight: '20px', letterSpacing: '0.00em'  }],
      lg:     ['14px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
      xl:     ['16px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      xxl:    ['18px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      xxxl:   ['20px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      xxxxl:  ['22px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      title:  ['14px', { lineHeight: '32px', letterSpacing: '0.15em'  }],
      label:  ['14px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
    },
    fontFamily: {
      nunito: 'Nunito'
    }
  }
}
