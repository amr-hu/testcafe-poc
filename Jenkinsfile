pipeline {
    agent {
        kubernetes {
        yaml '''
            apiVersion: v1
            kind: Pod
            spec:
            containers:
            - name: testcafe
                image: testcafe/testcafe
                resources:
                limits:
                    memory: "2Gi"
                requests:
                    memory: "1Gi"
                command:
                - cat
                tty: true
            '''
        }
    }

    stages {
        stage('Build Test Image') {
            steps {
                sh 'rm -rf allure'
                // sh 'docker rm -f test_container'
                sh 'docker rmi -f test_image'
                sh 'docker build -t test_image .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --name testcafe test_image firefox:headless -c 3 --skip-js-errors'
            }
            // post {
            //     always {
            //         sh 'mkdir -p allure'
            //         sh 'docker cp test_container:/allure/allure-results/ allure'

            //         allure(
            //             [
            //                 results: [
            //                     [
            //                         path: 'allure/allure-results'
            //                     ]
            //                 ]
            //             ]
            //         )
            //     }
            // }
        }
    }
}