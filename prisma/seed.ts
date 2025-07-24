import {PrismaClient} from '../app/generated/prisma';

const prisma = new PrismaClient();

async function main() {

  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Camera - 01', location: 'Shop Floor A' },
      { name: 'Camera - 02', location: 'Vault' },
      { name: 'Camera - 03', location: 'Entrance' }
    ]
  });

  const allCameras = await prisma.camera.findMany();
  const threats = ['Unauthorized Access', 'Gun Threat', 'Face Recognised'];
  const now = new Date();

  const incidents = Array.from({ length: 12 }).map((_, i) => {
    const camera = allCameras[i % allCameras.length];
    const tsStart = new Date(now.getTime() - i * 60 * 60 * 1000);
    const tsEnd = new Date(tsStart.getTime() + 10 * 60 * 1000);

    return {
      cameraId: camera.id,
      type: threats[i % threats.length],
      tsStart,
      tsEnd,
      thumbnailUrl: `/images/thumbnails/${(i % 5) + 1}.png`,
      resolved: false
    };
  });

  await prisma.incident.createMany({ data: incidents });
  console.log('✅ Seed completed!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
