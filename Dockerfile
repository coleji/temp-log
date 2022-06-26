FROM node:16
RUN mkdir /app
COPY src /app/src
COPY node_modules /app/node_modules
CMD cd /app && \
echo '[mysql]' > private.ini && \
echo "host = $HOST" >> private.ini && \
echo "database = $DATABASE" >> private.ini && \
echo "user = $USER" >> private.ini && \
echo "password = $PASSWORD" >> private.ini && \
exec nodejs src/index.js
