import Singlerestaurant from './Singlerestaurant';

export default async function Restaurant({ params }) {
  const getRestaurant = async () => {
    try {
      const res = await fetch(apiHostURL + `/api/restaurants/${params.id}`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log('error => ', error);
    }
  };

  const data = await getRestaurant();
  return (
    <div>
      <Singlerestaurant data={data} />
    </div>
  );
}

//<TestUpdateProfile />
