'use client';
import Error from '@/components/error/Error';
import apiHostURL from '@/utils/apiHostURL';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.css';

export default function Register() {
  const router = useRouter();
  const session = useSession();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!username || !password) {
      return setError('All fields are required!');
    }

    try {
      setLoading(true);
      const res = await fetch(apiHostURL + '/api/register', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        setLoading(false);
        return setError(error.message);
      }

      router.push('/login');
    } catch (err) {
      setLoading(false);
      setError('Error in DB, pls try again later!');
    }
  };

  if (session.status == 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status == 'authenticated') {
    return router.push('/dashboard');
  }

  return (
    <main>
      <div className="containerdetails">
        <form className={styles.form} onSubmit={submitHandler}>
          <h1>Anmeldung</h1>
          <div className="group">
            <input type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <div className="group">
            <input type="password" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Passwort</label>
          </div>
          {error && <Error message={error} setError={setError} />}
          <button disabled={loading ? true : false}>
            {loading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </div>
    </main>
  );
}
