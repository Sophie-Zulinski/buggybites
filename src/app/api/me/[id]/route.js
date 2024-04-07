import User from '@/models/User';
import connectToDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectToDB();

    const data = await User.findById(id);

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json('Database Error', { status: 400 });
  }
};
