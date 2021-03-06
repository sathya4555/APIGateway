FROM mhart/alpine-node:12
#FROM alpine:3.10

#ENV NODE_VERSION 12.18.3
ENV PORT 4000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
COPY tsconfig*.json /usr/src/app/
COPY tslint*.json /usr/src/app/

# copying the certificates to the docker image
COPY ca_bundle.crt /usr/src/app/
COPY certificate.crt /usr/src/app/
COPY  private.key /usr/src/app/


#COPY tsconfig.build*.json /usr/src/app/
#COPY ormconfig*.json /usr/src/app/
COPY package-lock*.json /usr/src/app/
RUN npm install
RUN npm install -g ts-node 
RUN npm install -g nodemon 




ENV NODE_ENV=dev




# Copying source files
COPY . /usr/src/app

# Building app
#RUN npm run build
EXPOSE 443

# Running the app
#CMD "npm" "run" "start"

CMD nodemon app.ts