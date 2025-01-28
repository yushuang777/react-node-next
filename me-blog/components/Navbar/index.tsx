import { NextPage } from 'next';
import { navs } from './config';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Form, Modal } from 'antd';
import { useNavbarHooks } from './hooks';
import LoginModal from 'components/loginModal';
const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const {
    state,
    loginForm,
    handleGotoEdit,
    handleGotoLogin,
    handleOk,
    handleCancel,
  } = useNavbarHooks();
  const { loginModal } = state;
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
        <Button
          type="primary"
          onClick={handleGotoEdit}
          style={{ marginRight: '20px' }}
        >
          写文章
        </Button>
        <Button type="primary" onClick={handleGotoLogin}>
          登录
        </Button>
      </div>
      <LoginModal
        form={loginForm}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loginModal={loginModal}
      />
    </div>
  );
};
export default Navbar;
