# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your app will run on
EXPOSE 8000

# Define the command to run your application
CMD ["node", "app.js"]
