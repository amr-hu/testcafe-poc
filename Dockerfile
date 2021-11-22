# See https://github.com/DevExpress/testcafe/tree/master/docker
FROM testcafe/testcafe

# Root privileages to install new dependencies
USER root

# Node modules directory inside the docker image
ENV NODE_PATH=/opt:/usr/lib/node_modules:/opt/testcafe/node_modules

# Make directory for the repo content inside the image
RUN mkdir -p /tests

# Copy the content of the repo from the local machine to the image
COPY poc /tests

# Copy the package.json file to the image
COPY package.json /opt/testcafe

# Installing custom dependencies from package.json file
RUN cd /opt/testcafe && npm install

# Copy other needed files to the root directory of the image
COPY [".testcaferc.json", "Jenkinsfile", "doc-allure-config.js", "./"]