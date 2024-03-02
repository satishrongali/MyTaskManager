
# Docker and Kubernetes Commands Guide

This guide provides an overview of some common Docker and Kubernetes commands used for managing containers, images, and deployments.

## Docker Commands

### Pull Image from Container Registry and Run the Container

- **Pull an Image:**
  ```shell
  docker pull gcr.io/research-project-415611/my-task-manager9:v1
  ```
  This command pulls the specified image from the Google Container Registry.

- **Run a Container:**
  ```shell
  docker run -d -p 3000:3000 -e NODE_ENV=production -e MONGO_URI=mongodb+srv://satish:satish@cluster0.dlrijam.mongodb.net/TaskManager?tls=true gcr.io/research-project-415611/my-task-manager9:v1
  ```
  This command runs the container in detached mode, maps port 3000 from the container to port 3000 on the host, and sets environment variables for the Node environment and MongoDB URI.

### Working on Images and Containers

1. **List Images:**
   ```shell
   docker images
   ```
   Lists all Docker images on the host.

2. **Stop All Containers:**
   ```shell
   docker stop $(docker ps -aq)
   ```
   Stops all running containers.

3. **Remove All Containers:**
   ```shell
   docker rm $(docker ps -aq)
   ```
   Removes all containers, whether running or stopped.

4. **Stop a Specific Container:**
   ```shell
   docker stop f171e9dcf43b
   ```
   Stops the container with the specified ID.

5. **Remove a Specific Container:**
   ```shell
   docker rm f171e9dcf43b
   ```
   Removes the container with the specified ID.

6. **Remove All Images:**
   ```shell
   docker rmi $(docker images -aq)
   ```
   Removes all Docker images from the host.

7. **Remove a Specific Image:**
   ```shell
   docker rmi -f 996226f3194b
   ```
   Forces removal of the specified image.

8. **Cleanup Unused Docker Resources:**
   ```shell
   docker system prune -a
   ```
   Removes all stopped containers, unused networks, and dangling images, along with any unused images, not just dangling ones.

## Kubernetes Commands

### Managing Kubernetes Resources

1. **Get Credentials from Google Cloud Kubernetes Engine:**
   ```shell
   gcloud container clusters get-credentials taskmanager --region europe-west3 --project research-project-415611
   ```
   Fetches the credentials for the Kubernetes cluster to allow `kubectl` to interact with it.

2. **Apply Deployment Configuration:**
   ```shell
   kubectl apply -f deployment.yaml
   ```
   Applies the configuration from `deployment.yaml` to create or update resources in the cluster.

3. **Apply Service Configuration:**
   ```shell
   kubectl apply -f service.yaml
   ```
   Applies the configuration from `service.yaml` to create or update services in the cluster, allowing for network access to the deployed containers.
