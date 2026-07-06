# Simple Interest Calculator

A simple web-based calculator for computing simple interest using the formula:

$SI = \frac{P \times R \times N}{100}$

## Features
- Clean and user-friendly interface
- Instant calculation from user inputs
- Node.js test coverage for the calculation logic

## Project Structure
- index.html: The calculator UI
- calculator.js: Core formula logic
- tests/calculator.test.js: Automated tests

## Setup Instructions
1. Install Node.js from https://nodejs.org/
2. Open the project folder
3. Run:
   ```bash
   npm test
   ```
4. Open index.html in your browser to use the app

## Jenkins with Docker Guide
### 1. Install Docker
```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
```
Log out and back in after this step.

### 2. Run Jenkins in Docker
```bash
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins-blueocean \
  -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk17
```

### 3. Get the initial admin password
```bash
docker exec jenkins-blueocean cat /var/jenkins_home/secrets/initialAdminPassword
```

### 4. Complete Jenkins setup
- Open http://localhost:8080
- Enter the password from the previous step
- Install suggested plugins
- Create the first admin user

## CI/CD Pipeline Setup in Jenkins
1. Create a new item of type "Pipeline"
2. Connect it to your GitHub repository
3. Add a pipeline script such as:
```groovy
pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}
```
4. Save and run the pipeline

## License
This project is for educational purposes.
