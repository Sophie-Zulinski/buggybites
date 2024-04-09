import apiHostURL from '@/utils/apiHostURL';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Singlerestaurant from '../../../components/restaurants/Singlerestaurant';

const getRestaurant = async (id) => {
  const res = await fetch(apiHostURL + '/api/restaurants/' + id, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

export default async function Post({ params }) {
  const { id } = params;
  const restaurant = await getRestaurant(id);

  return <Singlerestaurant restaurant={restaurant} />;
}
