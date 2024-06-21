# /bin/sh
cd ~/dh-recipes/DH-ProyectoIntegrador2
git checkout develop -f
git pull

cd Backend
sed -i 's/AWS_INSTANCE_HOST=localhost/AWS_INSTANCE_HOST="54.177.126.226"/g' .env
sudo docker-compose down
sudo docker rmi backend-ms-pi2 backend-ms-users backend-ms-gateway backend-ms-discovery
sudo docker-compose up --build -d

exit