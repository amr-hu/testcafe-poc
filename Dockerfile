# FROM ubuntu

# USER root

# RUN apt-get update -y

# RUN apt-get install -y allure

FROM testcafe/testcafe AS testcafe

# Root privileages to install new dependencies
USER root

COPY --from=ubuntu /allure ./

# Node modules directory inside the docker image
ENV NODE_PATH=/opt:/usr/lib/node_modules:/opt/testcafe/node_modules

# Make directory for the repo content inside the image
RUN mkdir -p /tests

# Copy the content of the repo from the local machine to the image
COPY poc /tests

# Copy the package.json file to the image
COPY [".testcaferc.json", "Jenkinsfile", "doc-allure-config.js", "./"]
COPY package.json /opt/testcafe

# Installing custom dependencies from package.json file
RUN cd /opt/testcafe && npm install

