import Restaurant from '@/models/Restaurant';
import mongoose from 'mongoose';
import { restaurants } from './data';

const seedRestaurants = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Restaurant.deleteMany();
    console.log('Restaurants are deleted');
    await Restaurant.insertMany(restaurants);
    console.log('Restaurants are added');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRestaurants();
