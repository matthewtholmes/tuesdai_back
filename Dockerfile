# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your server's source code can live
# RUN mkdir -p /src/app

# Tell your container where your server's source code will live
WORKDIR /server

# What source code do you want to copy, and where to put it?
COPY . /server

# Does your server have any dependencies that should be installed?
RUN yarn install

# What port will the container talk to the outside world with once created?
EXPOSE 3001

# How do you start your server?
#CMD [ "npm", "start" ]
CMD npm start