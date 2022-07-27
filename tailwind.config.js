module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      primaryColor:   '#194352',
      secondaryColor: '#F8C761', 
      greenLight:     '#78CBBE',
      greenNormal:    '#00BEA1', 
      greenDark:      '#006556',
      orangeDark:     '#EA7938',
      orangeNormal:   '#FEA571',
      orangeLight:    '#FFBA92',
      pinkLight:      '#F39BFF',
      pinkNormal:     '#D266E1',
      pinkDark:       '#D049E2',
      blueLight:      '#699CAC',
      blueNormal:     '#154351',
      blueDark:       '#0C2D37',
      success:        '#00BEA1',
      danger:         '#F55F5F',
      warning:        '#FF814B',
      inactive:       '#A7A5A5',
      white:          '#FFFFFF',
      black:          '#000000',
      background:     '#E8E9EB',
      bgDark:         '#282936',
      grey100:        '#E8E9EB',
      grey200:        '#DBDBDC',
      grey300:        '#CACACC',
      grey400:        '#B4B4B5',
      grey500:        '#A5A5A6',
      grey600:        '#929294',
      grey700:        '#858585',
      grey800:        '#6B6A6A',
      grey900:        '#484847', 
      mgreen:         '#008774',
      careLine:       '#13333E1C',
      careGoals:      '#18404E1C',
      followUp:       '#1943521C',
      examsList:      '#22596D1C',
      medicationList: '#26667D1C',
      familyBackground:'#2B738C1C',
      vaccines:       '#307F9C1C',
      medCertificate: '#358CAC1C',
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
