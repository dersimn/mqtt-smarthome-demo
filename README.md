Run a Demo of the mqtt-smarthome project inside Docker. Start off within just a few seconds.

## Start using Docker Compose

    git clone 
    cd mqtt-smarthome-demo
    docker-compose up -d

Check if all services are running with `docker ps`.

Without further configuration, the following services will be available:

- [http://localhost:8000](http://localhost:8000) - [WebUI](https://github.com/dersimn/mqtt-smarthome-webui)
- [http://localhost:8001](http://localhost:8001) - [mqtt-admin](https://github.com/dersimn/mqtt-admin)
- [http://localhost:8002](http://localhost:8002) - Grafana to explore InfluxDB recordings (for configuration see /docs folder)

You can try-out the demo using real hardware such as the Hue or Homematic components. Open `docker-compose.yml` and uncomment the according services.
