export ECR_REPOSITORY="avatar48/prod/landing"
export IMAGE_TAG="latest"

# Log in to ECR
aws ecr get-login-password --region ap-northeast-1 | sudo docker login --username AWS --password-stdin 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com

# Pull latest image from ECR
sudo docker pull 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

# Stop and remove old container
sudo docker stop avatar48_landing || true
sudo docker rm avatar48_landing || true

# Run new container
cd /usr/local/docker-composes/avatar48_landing
sudo docker compose up -d