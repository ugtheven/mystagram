FROM node:18 as development

WORKDIR /backend

COPY package*.json ./

RUN npm clean-install 

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 4200