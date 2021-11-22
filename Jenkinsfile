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
                sh 'docker run --name test_container test_image firefox:headless -c 5 --skip-js-errors'
            }
        }

        // stage('Report') {
        //     steps {
        //         script {
        //             allure(
        //                 [
        //                     includeProperties: false,
        //                     jdk: '',
        //                     properties: [],
        //                     reportBuildPolicy: 'ALWAYS',
        //                     results: [[path: 'allure/allure-results']]
        //                 ]
        //             )
        //         }
        //     }
        // }
    }
}