import { Header } from '@/components/ui';
import { LoginTriggerWrapper } from '@/components/common';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ showLogin?: string }>;
}) {
  const params = await searchParams;
  const showLogin = params.showLogin === 'true';

  return (
    <main>
      <Header />
      <div>Hello World</div>
      {showLogin && <LoginTriggerWrapper />}
    </main>
  );
}
