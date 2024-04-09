import mongoose from 'mongoose';
import Restaurant from '../src/models/Restaurant';
import { restaurants } from './data';

const seedRestaurants = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://sophiezulinski:ZjqhOlFIOpC6OWJ4@buggybites03.ywnunrb.mongodb.net/?retryWrites=true&w=majority&appName=BuggyBites03',
    );
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
