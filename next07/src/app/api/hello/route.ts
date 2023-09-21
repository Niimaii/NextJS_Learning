import { NextResponse } from 'next/server';

export async function GET() {
  // Using next response because there is a bug with response JSON object in TS
  return NextResponse.json({ message: 'Hello, NextResponse!' });
}
