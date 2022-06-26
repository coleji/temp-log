FROM node:16
RUN mkdir /app
COPY src /app/src
COPY node_modules /app/node_modules
CMD cd /app && exec nodejs src/index.js
