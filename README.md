# Tomas Toler

## clonar el repo
```
git clone https://github.com/etec-integration-project/etec-pi-2024-backend-TolerTomas.git
```
```
cd etec-pi-2024-backend-TolerTomas
```

## Iniciar el contenedor
```
docker compose up --build
```

## Hacer las migraciones

### Ingresar al contenedor
```
docker exec -it <docker-id> bash
```

### Ejecutar el comando:
```
pnpm run db:migrate
```