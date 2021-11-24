pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
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
                    def results = sh 'docker container exec -it test_container /bin/sh/allure/allure-results'
                    
                    allure(
                        [
                            results: [
                                [
                                    path: '${results}'
                                ]
                            ]
                        ]
                    )
                }
            }
        }
    }
}