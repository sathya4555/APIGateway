echo 'Building the Docker image'
docker build -t api-gateway:qa .
echo 'Tagging the Docker image'
docker tag api-gateway:qa 915966410640.dkr.ecr.us-west-2.amazonaws.com/api-gateway-qa:latest
echo 'Getting the credentials for aws with docker'
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 915966410640.dkr.ecr.us-west-2.amazonaws.com
echo 'Pushing the Image to AWS'
docker push 915966410640.dkr.ecr.us-west-2.amazonaws.com/api-gateway-qa:latest
