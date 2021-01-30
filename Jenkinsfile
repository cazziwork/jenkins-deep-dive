pipeline {
    agent any
    tools {
        nodejs 'NodeJS_14.15.4'
    }
    stages {
        stage('prepare') {
            steps {
                sh 'npm ci'
            }
        }
        stage('test') {
            steps {
                sh 'CI=true npm test'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh '''
                git config remote.origin.url git@github.com:jenkins-deep-dive/jenkins-deep-dive.git
                npm run deploy
                '''
            }
        }
    }
    post {
        failure {
            slackSend color: 'danger', message: "Job Failure.\n${env.BUILD_URL}"
        }
        fixed {
            slackSend color: 'good', message: "Job Back to Normal.\n${env.BUILD_URL}"
        }
    }
}
