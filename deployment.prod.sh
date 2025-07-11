export ECR_REPOSITORY="ai-avatar/prod/ai-avatar-landingpage"
export IMAGE_TAG="latest"

# Log in to ECR
aws ecr get-login-password --region ap-northeast-1 | sudo docker login --username AWS --password-stdin 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com

# Pull latest image from ECR
sudo docker pull 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

# Stop and remove old container
sudo docker stop ai_avatar_landingpage || true
sudo docker rm ai_avatar_landingpage || true

# Run new container
cd /usr/local/docker-composes/ai_avatar_landingpage
sudo docker compose up -d