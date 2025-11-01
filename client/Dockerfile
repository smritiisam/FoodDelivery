# # Frontend Dockerfile
# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Serve static files
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 5173


# client/Dockerfile (dev mode)
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173
# start the dev server binding to 0.0.0.0 so it's reachable from host/other containers
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
