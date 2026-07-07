# Development.

Pasos para levantar la app en desarrollo:

**[Documentación de Prisma.](https://www.prisma.io/docs/guides/frameworks/nextjs)**

1. Levantar la base de datos:

   ```powershell
   docker-compose up -d
   ```

2. Iniciar Prisma:

   ```powershell
   npx prisma init
   ```

3. Renombrar el .env.

4. Realizar la migración de la base de datos:

   ```powershell
   npx prisma migrate dev
   ```

5. Generar el cliente de Prisma:

   ```powershell
   npx prisma generate
   ```
