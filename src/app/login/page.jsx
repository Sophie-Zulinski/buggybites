'use client';
import Error from '@/components/error/Error';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const session = useSession();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!username || !password) {
      return setError('All fields are required!');
    }
    try {
      const res = await signIn('credentials', {
        username: username.trim(),
        password: password.trim(),
        redirect: false,
      });

      if (res.error) {
        return setError('Invalid credentials');
      }

      router.replace('/');
    } catch (err) {
      setError(err.message);
    }
  };

  if (session.status == 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status == 'authenticated') {
    return router.push('/');
  }

  return (
    <main>
      <div className="container">
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className="group">
            <input type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div className="group">
            <input type="password" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Passwort</label>
          </div>
          {error && <Error message={error} setError={setError} />}
          <button id="login_button" type="submit" disabled={loading}>
            {loading ? <p>Loading..</p> : 'LOGIN'}
          </button>

          <div className="mt-3 mb-4">
            <a href="/register" className="float-end">
              {' '}
              Neuer Benutzer? Hier registrieren{' '}
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
