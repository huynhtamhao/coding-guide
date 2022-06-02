# Kairos's Links

## Develope Environment

### [Kairos System](http://192.168.210.201:4200/)

### [Queue System](http://192.168.210.201:15672)

- Using RabbitMQ

### [Log System](http://192.168.210.201:3000/)

- Sử dụng grafana, promtail, loki.

### [Git System](http://192.168.210.201:18080/)

- Sử dụng Gitlab để lưu trữ source code.

### [Nexus Repository](http://192.168.210.201:18081/)

- Repository System Lưu trữ docker images (like Docker Hub) và lưu trữ Jar file (like maven).

### [Jenkins (CI/CDシステム)](http://192.168.210.201:18083/)

- Continuous integration and continuous delivery or continuous deployment System.
- Hệ thống sẽ tự động
  - Build source code
  - Tạo Docker image
  - Push Docker image to Docker Repository Hub (Nexus Repository)
  - Access vào môi trường deployment, pull docker images and run docker images.

### Các hệ thống dự định triển khai trong tương lai

- Review Source Code
- Monitoring System : Spring boot actuator, Spring boot Admin, Prometheus,
- LoadTest, Performance Test: K6
