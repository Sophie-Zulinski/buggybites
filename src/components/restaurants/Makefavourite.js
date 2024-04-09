'use client';

import apiHostURL from '@/utils/apiHostURL';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './restaurantdetail.module.scss';

export const dynamic = 'force-dynamic';
export default function MakeFavourite({ restaurant }) {
  const router = useRouter();
  const { data } = useSession();
  const session = data;

  const isFavourite = restaurant.user.some((x) => x === session?.user._id);

  return (
    <>
      {session ? (
        <button
          className={styles.heartbtn}
          onClick={async () => {
            const response = await fetch(apiHostURL + '/api/me/favourites/', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                cache: 'no-store',
              },
              body: JSON.stringify({
                restaurantId: restaurant._id,
                restaurantName: restaurant.name,
                restaurantPic: restaurant.images[0].url,
                userId: session.user._id,
              }),
            });

            const data = await response.json();

            if (data.error) {
              setError(data.error);
              return;
            }
            if (!data) {
              router.push('/login');
            }

            if (data) {
              router.refresh();
            } else {
              router.push('/login');
            }
          }}
        >
          {isFavourite === true ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      ) : (
        ''
      )}
    </>
  );
}
