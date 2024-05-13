// components/Header.js
import styles from './header.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';


const Header = () => {
  
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
    <div className="flex justify-between text-white">
      <div className="logo" style={{ display: 'contents' }}>
        <a className="flex items-center">
          <span className="text-4xl font-bold ">Avion</span>
        </a>
      </div>
      <div className="nav flex items-center">
      <nav>
          <ul className="flex space-x-4 text-2xl items-center">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                ></span>
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                {' '}
                Sign Out
              </a>
            </>
          )}
        </p>
      </div>
     {/* <div className="icon flex space-x-4 text-2xl items-center">
        <div className="user-account text-2xl">
          <Link href ="/api/auth/signin"  onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}>

          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          </Link>
        </div>

        
      </div>  */}
    </div>
  );
};

export default Header;
