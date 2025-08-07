import { AppLayout } from '@/components/layout';

export default async function UniversityLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
