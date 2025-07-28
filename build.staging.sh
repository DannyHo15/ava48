export ECR_REPOSITORY="ai-avatar/staging/ai-avatar-landingpage"
export IMAGE_TAG="latest"

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com

docker build ./ --platform linux/amd64 -t $ECR_REPOSITORY

docker tag $ECR_REPOSITORY:$IMAGE_TAG 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

docker push 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG