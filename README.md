# Readme

Assuming you have docker-compose 3 and docker, you can launch the demo app in interactive mode (non-detached) with:

```sh
docker-compose up --build
```

## docker-compose.yml

For this example, we're building the same docker twice, but it could be two different dockers just as well. In our simple case, we must provide two entry points, one for each of the node server we want to run.

Note that the `internal` service is not available publicly but `external` is mapped to the public on port 80.

```yaml
version: '3'
services:
  internal:
    build:
      context: .

    entrypoint:
     - node
     - internal

    # Port will only be visible within docker
    ports:
     - 3000

  external:
    build:
      context: .

    entrypoint:
     - node
     - external

    # Port 80 is visible publicly
    ports:
     - 80:3000
```
