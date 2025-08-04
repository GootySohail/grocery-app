# Step 1: Build React App
FROM node:18 AS build

# Create app directory
WORKDIR /app

# Copy only client package files and install dependencies
COPY client/package*.json ./
RUN npm install

# Copy full client source code
COPY client/ ./

# Build the app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built React app to NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
