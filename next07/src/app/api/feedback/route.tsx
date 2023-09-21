import { NextResponse } from 'next/server';

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  // With express it's request.body.json() but not here
  const data: Feedback = await request.json();
  console.log('Data: ', data);

  const { name, email, message } = data;

  return NextResponse.json({ name, email, message });
}
