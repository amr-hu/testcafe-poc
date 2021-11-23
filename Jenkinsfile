pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker rm -f test_container'
                sh 'docker rmi -f test_image'
                sh 'docker build -t test_image .'
                // sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --name test_container test_image firefox:headless -c 5 --skip-js-errors'
                // sh 'testcafe firefox:headless poc -c 5 --skip-js-errors'
            }
            post {
                always {
                    junit keepLongStdio: true,
                    testDataPublishers: [[$class: 'TestCafePublisher']],
                    testResults: '*.xml'
                }
            }
        }

        // stage('Report') {
        //     steps {
        //         script {
        //             allure(
        //                 [
        //                     results: [
        //                         [
        //                             path: 'allure/allure-results'
        //                         ]
        //                     ]
        //                 ]
        //             )
        //         }
        //     }
            
        // }
    }
}