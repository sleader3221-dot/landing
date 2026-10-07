import type { Metadata } from 'next';

export const SITE_URL = 'https://www.dukaanseindia.com';
export const CUSTOMER_APP = 'https://play.google.com/store/apps/details?id=com.dukaan.customer';
export const PARTNER_APP = 'https://play.google.com/store/apps/details?id=com.dukkanshop';

/** Builds the same head tags every original page had (title, description, canonical, OG, Twitter). */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = SITE_URL + path;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'DukaanSe',
      title,
      description,
      url,
      images: [SITE_URL + '/assets/og-image.jpg'],
    },
    twitter: { card: 'summary_large_image' },
  };
}
