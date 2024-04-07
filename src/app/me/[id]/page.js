import apiHostURL from '@/utils/apiHostURL';
import { cookies } from 'next/headers';
import ShowUser from './ShowUser';

export const getAuthCookieName = () =>
  process.env.NODE_ENV === 'production'
    ? '__Secure-next-auth.session-token'
    : 'next-auth.session-token';

export const getAuthHeader = () => {
  const nextCookies = cookies();
  const cookieName = getAuthCookieName();

  const nextAuthSessionToken = nextCookies.get(cookieName);

  return {
    headers: {
      Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
    },
  };
};

export default async function Profile({ params }) {
  const getProfile = async () => {
    const authHeaders = getAuthHeader();
    try {
      const res = await fetch(apiHostURL + `/api/me/${params.id}`, {
        headers: authHeaders.headers,
        cache: 'no-cache',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log('error => ', error);
    }
  };
  const data = await getProfile();
  console.log('datamepage', data);
  return (
    <>
      <ShowUser data={data} />
    </>
  );
}
