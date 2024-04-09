import Link from 'next/link';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';
const ShowUser = ({ data }) => {
  return (
    <main>
      <div className={styles.title}>
        <h2>Merkliste</h2>
      </div>
      <div className={styles.grid}>
        {data.favourites.map((restaurant) => (
          <div className={styles.cardtop} key={restaurant.restaurantId}>
            {' '}
            <h2 className={styles.cardheader}>{restaurant.restaurantName} </h2>
            <div className="card" key={restaurant._id}>
              <img
                src={restaurant.restaurantPic}
                alt={restaurant.restaurantName}
                height={120}
                width={150}
              />
              <div className="card-content">
                <Link
                  className={styles.link}
                  href={`http://localhost:3000/restaurants/${restaurant?.restaurantId}`}
                >
                  Weiterlesen
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShowUser;
