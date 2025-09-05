import { getTranslations } from 'next-intl/server';

async function HomePage() {
  const t = await getTranslations('HomePage');

  return <div>{t('title')}</div>;
}

export default HomePage;
