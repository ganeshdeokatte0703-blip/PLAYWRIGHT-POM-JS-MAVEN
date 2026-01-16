pipeline {
    agent any

    // tools {
    //    java 'Java21'
    //     maven 'Maven3'
    //     nodejs 'Node18'
    // }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ganeshdeokatte0703-blip/PLAYWRIGHT-POM-JS-MAVEN.git'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'mvn clean test'
            }
        }
    }

    post {
        success {
            echo '✅ Playwright tests passed'
        }
        failure {
            echo '❌ Playwright tests failed'
        }
    }
}
