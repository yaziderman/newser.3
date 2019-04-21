# Stage 1 - the build process
FROM node:11.9 as newser_test
WORKDIR /e/reactjs/newser.2/
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=newser_test /e/reactjs/newser.2/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
