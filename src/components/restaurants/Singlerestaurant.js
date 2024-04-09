'use client';

import StarRatings from 'react-star-ratings';
import MakeFavourite from './Makefavourite';
import NewReview from './NewReview';
import styles from './restaurantdetail.module.scss';

export default function SingleRestaurant({ restaurant }) {
  return (
    <>
      <img
        className="headerimg"
        src="https://res.cloudinary.com/dtz9u2nae/image/upload/v1712491368/kaffeeamt-wien-1020-fruehstueck-header_cgikkl.jpg"
        alt="pic"
      />
      <main>
        <div className="containerdetails">
          <h2>
            {restaurant.name}{' '}
            <span>
              {' '}
              <MakeFavourite restaurant={restaurant} />{' '}
            </span>
          </h2>
          <div className={styles.detailscontainer}>
            <div
              className={styles.details}
              dangerouslySetInnerHTML={{ __html: restaurant.description }}
            ></div>
            <div className={styles.details}>Adresse: {restaurant.address}</div>
            <div className={styles.details}>Website: {restaurant.website}</div>
          </div>
          <div className={styles.commentscontainer}>
            <div>
              {' '}
              <NewReview restaurantId={restaurant?._id} />
            </div>
            <div>
              <div className={styles.comments}>
                <h3>{restaurant.reviews?.length} Bewertung(en)</h3>
                {restaurant.reviews.map((review) => (
                  <div key={review._id}>
                    <StarRatings
                      rating={review.rating}
                      starRatedColor="rgb(255, 100, 100)"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                    />
                    <div>{review.comment}</div>
                    <div>von {review.user.username}</div>
                  </div>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}
