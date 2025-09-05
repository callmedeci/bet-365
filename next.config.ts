import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};
const withIntl = createNextIntlPlugin();

export default withIntl(nextConfig);
