import NextI18Next from 'next-i18next'

module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['nl'],
    localeSubpaths: 'foreign',
    browserLanguageDetection: true,
    serverLanguageDetection: true
})