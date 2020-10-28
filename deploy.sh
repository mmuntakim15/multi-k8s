docker build -t mmuntakim/multi-server:latest -t mmuntakim/multi-server:$SHA -f ./server/Dockerfile ./server
docker push mmuntakim/multi-server:latest
docker push mmuntakim/multi-server:$SHA

kubectl apply -f k8s
kubectl set image deployment/server-deployment server=mmuntakim/multi-server:$SHA

