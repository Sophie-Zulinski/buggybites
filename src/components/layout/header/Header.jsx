'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImg from '../../../../public/profile.png';
import styles from './header.module.scss';

export const dynamic = 'force-dynamic';
export default function Header() {
  const { data } = useSession();

  const logoutHandler = () => {
    signOut();
  };
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // State to manage whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const HamburgetMenuOpen = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 17h18M3 12h18M3 7h18"
      />
    </svg>
  );

  const HamburgetMenuClose = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <path
          fill="currentColor"
          d="m12 14.121 5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"
        />
      </g>
    </svg>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-container']}>
        <div className={styles['nav-logo']}>
          <Link href="/">BuggyBites</Link>
        </div>
        <ul className={click ? styles['nav-menuactive'] : styles['nav-menu']}>
          {' '}
          <li className={styles['nav-item']}>
            <Link href="https://github.com/Sophie-Zulinski" target="_blank">
              Über uns
            </Link>
          </li>
          {data?.user ? (
            <>
              <li className={styles['nav-item']}>
                {' '}
                <Link href={`/me/${data.user._id}`}>Merkliste</Link>
              </li>

              <li className={styles['nav-item']}>
                {data?.user?.role === 'admin' && (
                  <Link href="/admin/restaurants">Dashboard </Link>
                )}
              </li>

              <li>
                {/* Button to toggle the dropdown */}
                <Link
                  className={styles['dropdown-btn']}
                  href="/"
                  onClick={toggleDropdown}
                >
                  <Image src={logoImg} alt="profile" width={30} />
                </Link>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className={styles['dropdown-menu']}>
                    <div className={styles['nav-item']}>
                      {' '}
                      {/* Options in the dropdown */}
                      <Link href={`/me`}>Profil</Link>
                    </div>
                    <div className={styles['nav-item']}>
                      <Link href="/" onClick={logoutHandler}>
                        Logout
                      </Link>{' '}
                    </div>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li className={styles['nav-login']}>
                <Link href="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
        <div className={styles['nav-icon']} onClick={handleClick}>
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

          {click ? (
            <span className={styles['icon']}>
              <HamburgetMenuClose />{' '}
            </span>
          ) : (
            <span className={styles['icon']}>
              <HamburgetMenuOpen />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
