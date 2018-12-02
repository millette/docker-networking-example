# Readme

Assuming you have docker-compose 3 and docker, you can launch the demo app in interactive mode (non-detached) with:

```sh
docker-compose up --build
```

## docker-compose.yml

For this example, we're building the same docker twice, but it could be two different dockers just as well. In our simple case, we must provide two entry points, one for each of the node server we want to run.

For a real use case, `external` would probably be an `nginx` container to proxy to the `internal` container.

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

## node servers
We're using two node servers to show how services are isolated and linked.

### internal
Only available internally, should never be public on the internet.

It responds to a few routes, some of which are never called since nothing can reach them. Others are proxied thru our next server.

### external
Available on the internet, it could be an `nginx` or other web server/proxy.

We use it to show how to access its own address (to proxy itself as a demontration) direcly or by name (provided by docker).
