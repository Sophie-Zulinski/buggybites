import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Code improved by ChatGPT
const UpdateProfile = () => {
  const [name, setName] = useState('');

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setName(session.user.name || '');
    }
  }, [session]);

  return (
    <main>
      <div className="container">
        <h2>Profil</h2>
        <div>Sie sind mit folgenden Userdaten angemeldet : </div>
        <div></div>
        <h2>Name: {session && session.user.username}</h2>
      </div>
    </main>
  );
};

export default UpdateProfile;
