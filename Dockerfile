FROM node:20.11-alpine

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

# instalar pnpm de forma global
# instalar las dependencia

COPY . .

# generar los archivos para la base de datos
RUN pnpm run db:generate 
# haces las migraciones
RUN pnpm run db:migrate

EXPOSE 5050

# RUN tsc
# CMD ["npm", "start"]
CMD [ "pnpm", "run", "dev" ]