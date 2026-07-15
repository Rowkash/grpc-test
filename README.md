### Test Task: GRPC Filtering Service
#### Developer: Ruslan Hamzin

To run apps locally

Run producer first:
```shell
cd producer
pnpm install # or npm/yarn
pnpm dev # dev running
```

Run consumer:
```shell
cd consumer
pnpm install # or npm/yarn
pnpm dev # dev running
```

And then in consumer terminal you can see result from producer

To run using Docker compose

```shell
docker compose up --build
```

To run using Podman compose (ensure you have installed podman-compose)
```shell
podman-compose up --build
```