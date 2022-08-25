FROM node:14.15.4-alpine

RUN yarn global add pm2

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

COPY yarn.lock ./

COPY .npmrc ./

RUN yarn cache clean

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build

RUN rm -fr src/*

EXPOSE 4002

CMD [ "pm2-runtime", "docker/ecosystem.config.js" ]