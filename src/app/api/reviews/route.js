import Restaurant from '@/models/Restaurant';
import connectToDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const PUT = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const { userId, rating, comment, restaurantId } = body;

    const review = {
      user: userId,
      rating,
      comment,
    };

    const restaurant = await Restaurant.findById(restaurantId);

    const isReviewed = restaurant?.reviews?.find(
      (r) => r.user?.toString() === userId.toString(),
    );

    if (isReviewed) {
      restaurant?.reviews?.forEach((review) => {
        if (review.user?.toString() === userId.toString()) {
          review.comment = comment;
          review.rating = rating;
        }
      });
    } else {
      restaurant.reviews.push(review);
      restaurant.numOfReviews = restaurant.reviews.length;
    }

    restaurant.ratings =
      restaurant?.reviews?.reduce((acc, item) => item.rating + acc, 0) /
      restaurant?.reviews?.length;

    await restaurant.save();

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};
