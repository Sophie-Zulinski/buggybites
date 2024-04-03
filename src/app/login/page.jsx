'use client';
import Error from '@/components/error/Error';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const session = useSession();
  const [error, setError] = useState('');

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
    <div>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input type="text" placeholder="Enter an username..." />
        <input type="password" placeholder="Enter a password..." />

        {error && <Error message={error} setError={setError} />}

        <button>Login</button>
      </form>
    </div>
  );
}
