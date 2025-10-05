'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface SimilarDevice {
  id: number;
  title: string;
  slug: string;
}

const SimilarDevices = () => {
  const t = useTranslations('Devices');

  const similarDevices: SimilarDevice[] = [
    {
      id: 1,
      title: 'كريستال برو',
      slug: 'Crystal-Pro'
    },
    {
      id: 2,
      title: 'جهاز سبكترا',
      slug: 'Spectra'
    },
    {
      id: 3,
      title: 'فراكشنال ليزر',
      slug: 'Fractional-laser'
    }
  ];

  return (
    <div className="col-lg-4 col-md-4">
      <div className="services-sidebar">
        <div className="medical-service" data-aos="fade-up">
          <div className="subpage-header-box mb-4">
            <h1>{t('OtherDevices')}</h1>
          </div>

          <div className="medical-service-list">
            <ul>
              {similarDevices.map((device) => (
                <li key={device.id}>
                  <Link href={`/devices/${device.slug}`}>
                    <div className="service-item">
                      <div className="service-title">
                        <h3>{device.title}</h3>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-btn">
            <Link href="/devices" className="btn-default">
              {t('AllDevices')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarDevices;
