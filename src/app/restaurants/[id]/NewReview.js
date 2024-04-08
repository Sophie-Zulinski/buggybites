'use client';

import apiHostURL from '@/utils/apiHostURL';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import styles from './restaurantdetail.module.scss';

export default function NewReview({ restaurantId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const router = useRouter();

  // const [comment, setComment] = useState('');
  const { data } = useSession();
  const session = data;

  return (
    <>
      <div>
        {' '}
        <StarRatings
          rating={rating}
          starHoverColor="rgb(255, 100, 100)"
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          changeRating={(e) => setRating(e)}
        />
      </div>

      <textarea
        className={styles.textarea}
        id="review_field"
        placeholder="Ihre Bewertung"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button
        onClick={async () => {
          const response = await fetch(apiHostURL + '/api/reviews', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({
              rating,
              comment,
              restaurantId,
              userId: session.user._id,
            }),
          });

          const data = await response.json();

          if (data.error) {
            setError(data.error);
            toast(error);
            return;
          }

          router.refresh();
        }}
      >
        Abschicken
      </button>
    </>
  );
}
