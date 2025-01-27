import { NextPage } from 'next';
import { navs } from './config';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { useNavbarHooks } from './hooks';
const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const { handleGotoEdit } = useNavbarHooks();
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
      <div className={styles.operatiobnArea}>
        <Button type="primary" onClick={handleGotoEdit}>
          写文章
        </Button>
        <Button type="primary">登录</Button>
      </div>
    </div>
  );
};
export default Navbar;
