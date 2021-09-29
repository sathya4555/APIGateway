echo 'Building the Docker image'
docker build -t api-gateway:dev .
echo 'Tagging the Docker image'
docker tag api-gateway:dev 915966410640.dkr.ecr.us-east-2.amazonaws.com/api-gateway-dev:latest
echo 'Getting the credentials for aws with docker'
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 915966410640.dkr.ecr.us-east-2.amazonaws.com
echo 'Pushing the Image to AWS'
docker push 915966410640.dkr.ecr.us-east-2.amazonaws.com/api-gateway-dev:latest
echo 'Updating the service'
aws ecs update-service --cluster api-gateway-dev --service api-gateway-dev-service --task-definition api-gateway-dev-taskdefinition --force-new-deployment
