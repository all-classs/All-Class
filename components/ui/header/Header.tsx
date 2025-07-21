import styles from './Header.module.css';
import { UniversityList, HamburgerMenu } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  showDropdown?: boolean;
}

export default function Header({ showDropdown = false }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <section className={styles.leftSection}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="logo"
            width={150}
            height={50}
            priority
          />
        </Link>
      </section>
      <section className={styles.centerSection}>
        {/* 드롭다운 UI 전체를 UniversityList로 대체 */}
        <UniversityList showDropdown={showDropdown} />
      </section>
      <section className={`${styles.rightSection} ${!showDropdown ? styles.alwaysVisible : ''}`}>
        <button className={styles.button}>마이페이지</button>
        <button className={styles.button}>로그인</button>
      </section>
      {showDropdown && <HamburgerMenu showDropdown={showDropdown} />}
    </header>
  );
}
