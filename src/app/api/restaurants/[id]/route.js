import Restaurant from '@/models/Restaurant';
import connectToDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectToDB();

    const data = await Restaurant.findById(id);

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};
