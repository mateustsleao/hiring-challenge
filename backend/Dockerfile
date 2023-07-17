# Define a imagem base
FROM node:18

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install --only=prod

COPY . .

EXPOSE 5050

CMD ["npm", "run", "debug"]
