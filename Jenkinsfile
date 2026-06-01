pipeline {
    agent any

    environment {
        IMAGE = "karthikeyansivalingam/devops-capstone"
        APP_SERVER = "ubuntu@3.230.115.34"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/karthiklingams364/devops-capstone-nodejs.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'U', passwordVariable: 'P')]) {
                    sh '''
                    echo $P | docker login -u $U --password-stdin
                    docker push $IMAGE
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no $APP_SERVER << 'EOF'
                        docker pull $IMAGE
                        docker stop app || true
                        docker rm app || true
                        docker run -d -p 3000:3000 --name app $IMAGE
                    EOF
                    '''
                }
            }
        }
    }
}
