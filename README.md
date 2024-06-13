# Tomas Toler

## Clonar el repo
```bash
git clone https://github.com/etec-integration-project/etec-pi-2024-backend-TolerTomas.git
```
```bash
cd etec-pi-2024-backend-TolerTomas
```

### Crear la red para el proyecto
```bash
docker network create toler-express-apps
```

## Iniciar el contenedor
```bash
docker compose up --build
```

## Hacer las migraciones

### Ingresar al contenedor
```bash
docker exec -it <docker-id> bash
```

### Ejecutar el comando:
```bash
pnpm run db:push
```

## Testear la app
### Testing para user
#### Register
En postman realizar una peticion POST a \<ip>:5050/api/users/register
Con un body (tipo json)
```json
{
    "name": "Tomas",
    "lastname": "Toler",
    "email": "tomastoler@gmail.com",
    "password": "123456"
}
```

Esta petición debería devolver un json con la información de tu usuario y una cookie con nombre **express-jwt-toler-app**

#### Login
En postman realizar una peticion POST a \<ip>:5050/api/users/login
Con un body (tipo json)
```json
{
    "email": "tomastoler@gmail.com",
    "password": "123456"
}
```

Esta petición debería devolver un json con la información de tu usuario y una cookie con nombre **express-jwt-toler-app**