Run a Demo of the mqtt-smarthome project inside Docker. Start off within just a few seconds.

## Start

    git clone https://github.com/dersimn/mqtt-smarthome-demo.git
    cd mqtt-smarthome-demo
    docker-compose up -d

Check if all services are running with `docker ps`.

## First steps

Without further configuration, the following services will be available:

- [http://localhost:8000](http://localhost:8000) - [mqtt-smarthome-webui](https://github.com/dersimn/mqtt-smarthome-webui): End-user frontend
- [http://localhost:8001](http://localhost:8001) - [mqtt-admin](https://github.com/dersimn/mqtt-admin): Investigate activity on MQTT, view and manipulate variables
- [http://localhost:8002](http://localhost:8002) - [Grafana](https://grafana.com) to view and graph previous data that has been stored to [InfluxDB](https://www.influxdata.com). See /docs folder on how to configure Grafana.

You can try-out the demo using real hardware such as the Hue or Homematic components. Open `docker-compose.yml` and uncomment the according services.

## Further steps

### View logs from Docker services

Get container id from `docker ps`:

    docker logs --tail 100 -f <container id>