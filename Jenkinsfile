pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    // Build your Docker image
                    sh 'docker build -t myapp .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run your tests
                    sh 'docker run myapp test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy your application
                    sh 'docker run -d -p 80:80 myapp'
                }
            }
        }
    }
}
