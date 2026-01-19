FROM node:24

label maintainer="Karolina Gudyka"

WORKDIR app

COPY config/node/frontend/my-app/package.json .
RUN npm install

COPY config/node/frontend/my-app .

ENV CI=false

CMD ["npm", "start"]