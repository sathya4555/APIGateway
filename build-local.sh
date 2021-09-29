echo 'Building the Docker image'
docker build -t api-gateway:local .
echo 'Tagging the Docker image'
docker tag api-gateway:local 915966410640.dkr.ecr.us-east-1.amazonaws.com/api-gateway-local:latest
echo 'Getting the credentials for aws with docker'
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 915966410640.dkr.ecr.us-east-1.amazonaws.com
echo 'Pushing the Image to AWS'
docker push 915966410640.dkr.ecr.us-east-1.amazonaws.com/api-gateway-local:latest
