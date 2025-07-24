import { NextRequest, NextResponse } from 'next/server';
import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: NextRequest,
  {params}: {params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const existing = await prismadb.incident.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
    }

    const updated = await prismadb.incident.update({
      where: { id },
      data: {
        resolved: !existing.resolved,
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to update incident', details: err },
      { status: 500 }
    );
  }
}
