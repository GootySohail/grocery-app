# Step 1: Use Node base image
FROM node:18 AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the app source code
COPY . .

RUN npm install

# Step 5: Build the React app
RUN npm run build

# Step 6: Use Nginx to serve the build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
