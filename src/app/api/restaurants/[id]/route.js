import Restaurant from '@/models/Restaurant';
import connectToDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectToDB();

    const data = await Restaurant.findById(id).populate('reviews.user');

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const data = await request.json();
  try {
    await connectToDB();

    const restaurant = await Restaurant.findByIdAndUpdate(id, data);

    return NextResponse.json(restaurant, { status: 200 });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};
