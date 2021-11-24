pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'rm -rf allure'
                sh 'docker rm -f test_container'
                sh 'docker rmi -f test_image'
                sh 'docker build -t test_image .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --name test_container test_image firefox:headless -c 3 --skip-js-errors'
            }
            post {
                always {
                    sh 'mkdir -p allure'
                    // sh 'docker cp test_container:/allure/allure-results /allure-results'
                    allure(
                        [
                            results: [
                                [
                                    path: 'allure'
                                ]
                            ]
                        ]
                    )
                }
            }
        }
    }
}