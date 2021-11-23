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

# RUN mkdir /allure
# RUN mkdir /allure-results
# RUN mkdir /allure-report
# RUN mkdir /allure-config

# RUN apk update && \
# 	apk add ca-certificates && \
# 	update-ca-certificates && \
# 	apk add openssl && \
# 	apk add unzip

# RUN wget https://github.com/allure-framework/allure-core/releases/download/allure-core-1.4.24.RC3/allure-commandline.zip
# RUN unzip allure-commandline.zip -d /allure
# RUN rm allure-commandline.zip
# ENV PATH="/allure/bin:${PATH}"
# ENV ALLURE_CONFIG="/allure-config/allure.properties"

# Copy the package.json file to the image
COPY [".testcaferc.json", "Jenkinsfile", "doc-allure-config.js", "./"]
COPY package.json /opt/testcafe

# Installing custom dependencies from package.json file
RUN cd /opt/testcafe && npm install