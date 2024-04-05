import apiHostURL from '@/utils/apiHostURL';
import Link from 'next/link';
import styles from './page.module.scss';

const getPosts = async () => {
  const res = await fetch(apiHostURL + '/api/restaurants', {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

export default async function Home() {
  const restaurants = await getPosts();

  return (
    <>
      <main>
        <div className={styles.backgroundimg}>
          {' '}
          <div className={styles.backgroundimgtext}>
            <h1>Willkommen bei BuggyBites</h1>
            <div>
              Finde eine Auswahl an kinderwagenfreundlichen Lokalen in Wien.
              Melde dich an um deine Favoriten zu speichern un die Lokale zu
              bewerten.
            </div>
            <button>Login</button>
          </div>
        </div>

        <div className={styles.title}>
          <h2>Alle Lokale</h2>
        </div>
        <div className={styles.grid}>
          {restaurants.map((restaurant) => (
            <div className={styles.cardtop} key={restaurant._id}>
              {' '}
              <h2 className={styles.cardheader}>
                {restaurant.name} <span></span>
              </h2>
              <div className="card" key={restaurant._id}>
                <img
                  src={
                    restaurant?.images?.length > 0
                      ? restaurant.images[0].url
                      : '/public/next.svg'
                  }
                  alt={restaurant?.name}
                  height={120}
                  width={150}
                />
                <div className="card-content">
                  <Link
                    className={styles.link}
                    href={apiHostURL + `/restaurants/${restaurant?._id}`}
                  >
                    Weiterlesen
                  </Link>
                  <p>Kategorien: {restaurant.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
