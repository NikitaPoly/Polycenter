FROM node:latest
COPY . /PTServer
WORKDIR /PTServer
RUN npm i
RUN npm run build
CMD npm run start
EXPOSE 3000