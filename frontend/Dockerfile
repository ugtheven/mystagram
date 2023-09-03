FROM node:18 as development

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000