import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppProviders } from './providers';
import AuthHydrationProvider from './providers/AuthHydrationProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://allclass.vercel.app'),
  title: {
    default: 'AllClass - 부산소속 대학교 강의정보 플랫폼',
    template: '%s | AllClass',
  },
  description:
    'AllClass를 통해 쉽고 빠르게 부산 소속 대학교 강의정보를 확인해보세요. 강의 리뷰, 수강신청 가이드, 학점 관리까지 한 번에!',
  keywords: [
    '부산대학교',
    '강의정보',
    '수강신청',
    '강의리뷰',
    '대학교',
    '부산',
    '학점관리',
    'AllClass',
  ],
  authors: [{ name: 'AllClass Team' }],
  creator: 'AllClass',
  publisher: 'AllClass',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://all-class.vercel.app',
    title: 'AllClass - 부산소속 대학교 강의정보 플랫폼',
    description: 'AllClass를 통해 쉽고 빠르게 부산 소속 대학교 강의정보를 확인해보세요.',
    siteName: 'AllClass',
    images: [
      {
        url: '/assets/logo.svg',
        width: 1200,
        height: 630,
        alt: 'AllClass 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllClass - 부산소속 대학교 강의정보 플랫폼',
    description: 'AllClass를 통해 쉽고 빠르게 부산 소속 대학교 강의정보를 확인해보세요.',
    images: ['/assets/logo.svg'],
  },
  icons: {
    icon: '/assets/logo.svg',
    shortcut: '/assets/logo.svg',
    apple: '/assets/logo.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthHydrationProvider>
          <div>{children}</div>
        </AuthHydrationProvider>
      </body>
    </html>
  );
}
