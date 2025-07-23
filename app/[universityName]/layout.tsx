import { Header } from '@/shared/components';

export default async function UniversityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header showDropdown={true} />
      {children}
    </div>
  );
}
