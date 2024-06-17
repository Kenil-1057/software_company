/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1230px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1230px',
      },
    },
    extend: {
      colors:{
        'primary' : '#1A202C',
        'secondary':'#718096',
        'tersary' :'#57007B',
        'btn_text':'#FAFAFA',
        'subheading': '#4A5568',
        'linear1':'#DE4396',
        'linear2':'#0D1C9F',
        'forth':'#8B58A3',
        'logo_bac':'#F7F7FA',
        'card':'#F1F2FF',
        'card_text':'#2D3748',
        'card_text_highlight' : '#AC367E',
        'designation':'#718096',
        'development':'#29272E',
        'development_border':'#E7DAED',
        'gradient_1': '#F1F1F5',
        'gradient_2':'#E4ECF7',
         
      },
      padding:{
        '10':'10px',
        '70':'70px',
        '106':'106px',
      },
      margin:{
        '75':'75px',
        '72':'72px',
        '10':'10px'
      },
      lineHeight: {
        '70': '70px',
        '55':'55px',
        '14':'14px',
        '30':'30px',
        '22':'22px',
      },
      fontSize:{
        '28':'28px',
        '14':'14px'
      },
      borderRadius:{
        '30':'30px',
        '0' :'0px',
        '20':'20px',
      },
      borderWidth: {
        '1':'1px',
      },
      letterSpacing: {
        '-0.5': '-0.005em', 
      },
    },
  },
  plugins: [],
}

