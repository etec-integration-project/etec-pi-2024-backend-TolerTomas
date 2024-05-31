FROM node:20-alpine

RUN apk update
RUN apk add bash
RUN mkdir -p /app/node_modules
RUN chmod -R 777 /usr/local

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN chmod -R 777 /app

USER node

RUN npm install -g pnpm
RUN pnpm install

COPY . .

# generar los archivos para la base de datos
RUN pnpm run db:gen

EXPOSE 5050

CMD [ "pnpm", "run", "dev" ]