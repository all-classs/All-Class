import { Header } from '@/components/ui';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Header showDropdown={true} />
      {children}
    </div>
  );
}
