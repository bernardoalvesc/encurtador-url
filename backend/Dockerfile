FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

RUN mkdir -p logs

EXPOSE 3000
CMD ["node", "dist/index.js"]
