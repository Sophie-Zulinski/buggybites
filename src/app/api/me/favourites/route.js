import Restaurant from '@/models/Restaurant';
import User from '@/models/User';
import connectToDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const PUT = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const { userId, restaurantId, restaurantName, restaurantPic } = body;

    const favourite = {
      restaurantId,
      restaurantName,
      restaurantPic,
    };
    const user = await User.findById(userId);
    const restaurant = await Restaurant.findById(restaurantId);

    const isFavourite = user.favourites.some(
      (x) => x.restaurantId === restaurantId,
    );

    if (isFavourite) {
      user.favourites.pull(favourite);
      restaurant.user.pull(userId);
    }

    if (isFavourite === false) {
      user.favourites.push(favourite);
      restaurant.user.push(userId);
    }

    await user.save();
    await restaurant.save();

    return NextResponse.json(user, restaurant, isFavourite, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};
