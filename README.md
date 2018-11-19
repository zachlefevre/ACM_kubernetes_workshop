# ACM Kubernetes Workshop

*by Zach LeFevre*

# Getting Started

- Start up your minikube server
```
$ minikube start
```

- Take note of minikube's IP address
```
$ export MINI_IP=$(minikube ip)
$ echo $MINI_IP
```

- Throw everything on minikube
```
$ kubectl apply -f ./kub/workloads.yaml
```

- Access the containers
```
$ curl $(minikube ip):30080
$ curl $(minikube ip):30081
```

# Notes
The images found in `kub/workloads.yaml` are no longer available but the process is the same
