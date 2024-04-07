'use client';

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
  const isFavourite2 = restaurant.user.some((x) => x === session?.user._id);
  console.log('isFavourite2', isFavourite2);
  console.log('restaurant', restaurant);
  return (
    <>
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
          console.log('datauser', data);
          if (data.error) {
            setError(data.error);
            return;
          }
          if (!session.user._id)
            toast.error(
              'Bitte melden Sie sich an um Favoriten speichern zu können',
            );
          if (data.username) toast.success('Zu Favoriten hinzugefügt');
          if (data.isFavourite) toast.success('Von Favoriten entfernt');
          if (data.success) {
            //@ts-ignore
            //updateSession();

            router.refresh();
          }
        }}
      >
        {isFavourite2 === true ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </>
  );
}
