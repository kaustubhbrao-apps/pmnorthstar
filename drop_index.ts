import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$executeRawUnsafe('DROP INDEX IF EXISTS "users_google_id_key" CASCADE;')
  console.log('Index dropped.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())