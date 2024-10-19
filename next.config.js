/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'benin.africanschoolofeconomics.com',
      'flagpedia.net',
      'flagcdn.com',
      's29068.pcdn.co',
      'thenationonlineng.net',
      'youtube.com',
      'res.cloudinary.com',
      'qtd2019.aalto.fi',
      'nta.ng',
      'appointees.osgf.gov.ng',
      'pbs.twimg.com',
      'd15gkqt2d16c1n.cloudfront.net',
      'www.eiturbanmobility.eu',
      'www.naijabusiness.com.ng'
    ],
  },
}

module.exports = nextTranslate(nextConfig);

