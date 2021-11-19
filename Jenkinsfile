node {
    TESTCAFE_DOCKER_PATH = 'Dockerfile'
}

pipeline {
    agent { 
        dockerfile {
                filename "${TESTCAFE_DOCKER_PATH}"
        } 
    }

    environment {
        HOME = '.'
    }

    stages {
        stage('Clone') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [
                        [name: '*/master']
                    ],
                    userRemoteConfigs: [
                        [url: 'https://github.com/amr-hu/testcafe-poc.git']
                    ]
                ])
            }
        }
        stage('Configuration') {
            steps {
                sh 'docker rm -f test_container'
                sh 'docker rmi -f test_image'
                sh 'docker build -t test_image .'
            }
        }

        stage('Run TestCafe') {
            steps {
                sh 'docker run --name test_container -d test_image firefox:headless -c 5 --skip-js-errors'
            }
        }

        stage('Publish Reports') {
            steps{
                publishHTML(
                    target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : './reports/allure/allure-report',
                        reportFiles          : 'index.html',
                        reportName           : "Allure Report"
                    ]
                )
            }
        }
    }
}
