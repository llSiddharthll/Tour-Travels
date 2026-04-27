const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const pages = [
    { title: "Honeymoon Packages", slug: "honeymoon", type: "package", sortOrder: 1 },
    { title: "Family Packages", slug: "family", type: "package", sortOrder: 2 },
    { title: "Adventure Tours", slug: "adventure", type: "package", sortOrder: 3 },
    { title: "Offbeat Himachal", slug: "offbeat", type: "package", sortOrder: 4 },
    { title: "Shimla", slug: "shimla", type: "destination", sortOrder: 5 },
    { title: "Manali", slug: "manali", type: "destination", sortOrder: 6 },
    { title: "Dharamshala", slug: "dharamshala", type: "destination", sortOrder: 7 },
    { title: "Spiti Valley", slug: "spiti-valley", type: "destination", sortOrder: 8 },
    { title: "Kinnaur", slug: "kinnaur", type: "destination", sortOrder: 9 },
  ];

  for (const page of pages) {
    await prisma.internalPage.upsert({
      where: { slug: page.slug },
      update: {},
      create: page,
    });
  }

  console.log("Internal pages seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
