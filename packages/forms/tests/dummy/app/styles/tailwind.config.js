/* eslint-disable node/no-extraneous-require */

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    '@frontile/forms': {
      default: {}
    }
  },
  plugins: [require('@frontile/forms/tailwind')]
};
