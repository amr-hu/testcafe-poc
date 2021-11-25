FROM testcafe/testcafe

# Root privileages to install new dependencies
USER root

# Node modules directory inside the docker image
ENV NODE_PATH=./:/usr/lib/node_modules

# Make directory for the repo content inside the image
RUN mkdir -p /tests

# Copy the content of the repo from the local machine to the image
COPY poc /tests

# Copy the configurations files to the image
COPY ["package.json", ".testcaferc.json", "Jenkinsfile", "doc-allure-config.js", "./"]

# Installing custom dependencies from package.json file
RUN npm install