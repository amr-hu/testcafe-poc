pipeline {
    agent any

    stages {
        // stage('Checkout') {
        //     steps {
        //         checkout(
        //             [
        //                 $class: 'GitSCM', 
        //                 branches: [
        //                     [
        //                         name: '*/main'
        //                     ]
        //                 ],
        //                 userRemoteConfigs: [
        //                     [
        //                         url: 'https://github.com/amr-hu/testcafe-poc.git'
        //                     ]
        //                 ]
        //             ]
        //         )
        //     }
        // }

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

        stage('Publish Report') {
            steps{
                sh 'allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report'
            //     // publishHTML(
            //     //     target: [
            //     //         allowMissing         : false,
            //     //         alwaysLinkToLastBuild: false,
            //     //         keepAll              : true,
            //     //         reportDir            : './reports/allure/allure-report',
            //     //         reportFiles          : 'index.html',
            //     //         reportName           : "Allure Report"
            //     //     ]
            //     // )
            //     script {
            //         allure(
            //             [
            //                 includeProperties: false,
            //                 jdk: '',
            //                 properties: [],
            //                 reportBuildPolicy: 'ALWAYS',
            //                 results: [[path: 'target/allure-results']]
            //             ]
            //         )
            //     }
            }
            // post {
            //     always {
            //         allure includeProperties: false, jdk: '', results: [[path: 'allure/allure-results']]
            //     }
            // }
        }
    }
}