import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';



export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const resolvedParam = searchParams.get('resolved');

  try {
    const incidents = await prismadb.incident.findMany({
      where: {
        resolved:
          resolvedParam === 'true'
            ? true
            : false
      },
      orderBy: {
        tsStart: 'desc',
      },
      include: {
        camera: true,
      },
    });

    return NextResponse.json(incidents);
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch incidents', details: err },
      { status: 500 }
    );
  }
}
