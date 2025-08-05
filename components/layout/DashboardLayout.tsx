'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Star, ClipboardList, User } from 'lucide-react';
import styles from './DashboardLayout.module.css';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const navItems: NavItem[] = [
  { href: '/mypage/classes', label: '수업', icon: BookOpen },
  { href: '/mypage/reviews', label: '리뷰관리', icon: Star },
  { href: '/mypage/curriculum', label: '커리큘럼', icon: ClipboardList },
  { href: '/mypage/profile', label: '내정보', icon: User },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>마이페이지</div>
        <nav>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    <Icon size={18} className={styles.navIcon} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <h1 className={styles.contentTitle}>{title}</h1>
          {subtitle && <p className={styles.contentSubtitle}>{subtitle}</p>}
        </div>

        <div className={styles.contentBody}>{children}</div>
      </main>
    </div>
  );
}
