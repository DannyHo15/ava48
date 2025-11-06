#!/bin/bash
exec > >(tee -a script.log) 2>&1
set -e
set -o pipefail
set -x

trap 'echo "❌ Error at line $LINENO"; exit 1' ERR


export ECR_REPOSITORY="avatar48/develop/landing"
export IMAGE_TAG="latest"

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID_DEV

aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY_DEV

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 457442647158.dkr.ecr.ap-northeast-1.amazonaws.com

docker build \
  --platform linux/amd64 \
  --build-arg NEXT_PUBLIC_APP_URL="$NEXT_PUBLIC_APP_URL" \
  --build-arg NEXT_PUBLIC_FIREBASE_API_KEY="$NEXT_PUBLIC_FIREBASE_API_KEY" \
  --build-arg NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="$NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN" \
  --build-arg NEXT_PUBLIC_FIREBASE_PROJECT_ID="$NEXT_PUBLIC_FIREBASE_PROJECT_ID" \
  --build-arg NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="$NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET" \
  --build-arg NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="$NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID" \
  --build-arg NEXT_PUBLIC_FIREBASE_APP_ID="$NEXT_PUBLIC_FIREBASE_APP_ID" \
  --build-arg NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="$NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID" \
  -t $ECR_REPOSITORY \
  .

docker tag $ECR_REPOSITORY:$IMAGE_TAG 457442647158.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

docker push 457442647158.dkr.ecr.ap-northeast-1.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG