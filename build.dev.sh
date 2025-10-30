export ECR_REPOSITORY="avatar48/dev/landing"
export IMAGE_TAG="latest"

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID_DEV

aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY_DEV

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 457442647158.dkr.ecr.ap-northeast-1.amazonaws.com

docker build ./ --platform linux/amd64 -t $ECR_REPOSITORY

docker tag $ECR_REPOSITORY:$IMAGE_TAG 457442647158.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

docker push 457442647158.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG