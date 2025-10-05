


// const { i18n } = require('./next-i18next.config');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // i18n, // إضافة إعدادات i18n هنا
// };

// module.exports = nextConfig;





import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.orielclinics.com',
      },
    ],
  },};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);