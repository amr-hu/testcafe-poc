pipeline {
    // agent { 
    //     dockerfile {
    //         filename "/Dockerfile"
    //         args  '--net=host -e DISPLAY=":0"'
    //         args '--entrypoint=\'\''
    //         reuseNode true
    //     } 
    // }

    agent any

    // environment {
    //     HOME = '.'
    // }

    stages {
        stage('Initialize'){
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }

        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [
                        [
                            name: '*/main'
                        ]
                    ],
                    userRemoteConfigs: [
                        [
                            url: 'https://github.com/amr-hu/testcafe-poc.git'
                        ]
                    ]
                ])
            }
        }

        stage('Build') {
            steps {
                sh 'docker rm -f test_container'
                sh 'docker rmi -f test_image'
                sh 'docker build -t test_image .'
            }
        }

        stage('Test') {
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