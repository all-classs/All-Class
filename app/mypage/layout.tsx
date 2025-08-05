import { AppLayout } from '@/components/layout';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
