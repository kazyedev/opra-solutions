import {getTranslations} from 'next-intl/server';

export default async function PrivacyPage() {
  const t = await getTranslations('Legal');

  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">{t('privacyTitle')}</h1>
      <p className="text-muted-foreground mb-6">{t('privacyIntro')}</p>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>{t('dataCollectionTitle')}</h2>
        <p>{t('dataCollectionBody')}</p>
        <h2>{t('usageTitle')}</h2>
        <p>{t('usageBody')}</p>
        <h2>{t('contactTitle')}</h2>
        <p>{t('contactBody')}</p>
      </div>
    </section>
  );
}


