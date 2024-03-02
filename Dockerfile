# Stage 1: Build the Angular frontend
FROM node:18 as build-stage

WORKDIR /app/frontend

# Copy the frontend package.json and package-lock.json
COPY frontend/package*.json ./

# Install the Angular CLI globally and frontend dependencies
RUN npm install -g @angular/cli && npm install

# Copy the frontend source code
COPY frontend/ .

# Build the Angular app in production mode and output to 'dist'
RUN ng build --configuration production

# Stage 2: Build the Node.js API (backend)
FROM node:18

WORKDIR /app

# Copy the API package.json and package-lock.json
COPY api/package*.json ./

# Install API dependencies
RUN npm install --only=production

# Copy the API source code
COPY api/ .

# Copy the Angular build artifacts from the 'build-stage' to the 'dist' directory
COPY --from=build-stage /app/frontend/dist/frontend /app/dist

# Expose the port the API server listens on
EXPOSE 3000

# Start the API server
CMD [ "node", "app.js" ]
