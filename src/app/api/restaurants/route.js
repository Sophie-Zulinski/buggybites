import Restaurant from '@/models/Restaurant';
import connectToDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await connectToDB();

    const posts = await Restaurant.find();

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};

export const POST = async (request) => {
  const post = await request.json();
  try {
    await connectToDB();

    const created = await Restaurant.create(post);

    return NextResponse.json(created, { status: 200 });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};
