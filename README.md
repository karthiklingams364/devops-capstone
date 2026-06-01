# DevOps Capstone Project

## End-to-End CI/CD Pipeline for a Node.js Application

### Project Overview

This project demonstrates a complete DevOps workflow using GitHub, Jenkins, Docker, AWS EC2, Prometheus, and Grafana.

The application is a simple Node.js web application that is automatically built, containerized, deployed, and monitored using DevOps best practices.

---

## Tools & Technologies

* Git & GitHub
* Jenkins
* Docker
* Docker Hub
* AWS EC2
* Node.js
* Prometheus
* Grafana
* Ubuntu Linux

---

## Project Architecture

GitHub → Jenkins → Docker → Docker Hub → AWS EC2 → Prometheus → Grafana

### Workflow

1. Source code is stored in GitHub.
2. Jenkins pulls the latest code from GitHub.
3. Jenkins builds a Docker image.
4. Jenkins pushes the image to Docker Hub.
5. Jenkins deploys the latest image to the AWS EC2 server.
6. Prometheus collects server metrics using Node Exporter.
7. Grafana visualizes monitoring metrics through dashboards.

---

## Application Setup

### Clone Repository

```bash
git clone https://github.com/karthiklingams364/devops-capstone-nodejs.git
cd devops-capstone-nodejs
```

### Install Dependencies

```bash
npm install
```

### Run Application Locally

```bash
node app.js
```

Application URL:

```text
http://localhost:3000
```

---

## Docker Setup

### Build Docker Image

```bash
docker build -t karthikeyansivalingam/devops-capstone:latest .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 karthikeyansivalingam/devops-capstone:latest
```

Application URL:

```text
http://localhost:3000
```

---

## Jenkins Pipeline Stages

### 1. Checkout Code

Fetch source code from GitHub repository.

### 2. Build Docker Image

Create a Docker image using the Dockerfile.

### 3. Push Docker Image

Push the image to Docker Hub repository.

### 4. Deploy Application

Deploy the latest Docker image to the AWS EC2 server.

---

## Monitoring Setup

### Prometheus

Prometheus collects metrics from Node Exporter.

Default URL:

```text
http://<SERVER-IP>:9090
```

### Grafana

Grafana is used to visualize monitoring metrics.

Default URL:

```text
http://<SERVER-IP>:3001
```

### Node Exporter

Node Exporter exposes CPU, Memory, Disk, and Network metrics from the EC2 instance.

---

## Challenges Faced

### SSH Authentication Issue

Jenkins could not connect to the EC2 application server due to SSH key configuration issues. The problem was resolved by configuring the correct public key in the authorized_keys file.

### Docker Deployment Error

The deployment stage initially attempted to run a Docker image that was not available on the target server. This was resolved by pushing the image to Docker Hub and pulling it during deployment.

### Grafana Dashboard Showing No Data

Prometheus was not scraping Node Exporter metrics. Updating the Prometheus configuration fixed the issue and enabled monitoring data in Grafana.

### AWS Security Group Configuration

Some services were inaccessible from the browser because the required ports were not open. Adding the necessary inbound rules resolved the issue.

---

## Future Enhancements

* Kubernetes Deployment
* Terraform Infrastructure Automation
* Automated Testing Stage
* Alertmanager Integration
* Blue-Green Deployment Strategy

---

## Author

**Karthikeyan S**

DevOps Capstone Project

