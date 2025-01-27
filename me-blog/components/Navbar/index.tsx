import { NextPage } from 'next';
import { navs } from './config';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>BLOG-C</section>
      <section className={styles.linkArea}>
        {navs?.map((item) => {
          return (
            <Link
              key={item?.label}
              href={item?.value}
              style={{ textDecoration: 'none' }}
            >
              <span className={pathname === item.value ? styles.active : ''}>
                {item?.label}
              </span>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
export default Navbar;
