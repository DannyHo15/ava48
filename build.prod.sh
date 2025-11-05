#!/bin/bash
exec > >(tee -a script.log) 2>&1
set -e
set -o pipefail
set -x

trap 'echo "❌ Error at line $LINENO"; exit 1' ERR

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID_PROD

aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY_PROD

export ECR_REPOSITORY="avatar48/prod/landing"
export IMAGE_TAG="latest"

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com

docker build ./ --platform linux/amd64 -t $ECR_REPOSITORY

docker tag $ECR_REPOSITORY:$IMAGE_TAG 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

docker push 023889582722.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG