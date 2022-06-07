*En el repositorio encontrarás la colección de postman para probar el API Rest.

CREACIÓN DE LA IMAGEN DE POSTGERSQL EN DOCKER:

docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

docker exec -it postgres-db psql -U postgres

CREACIÓN DE LA BASE DE DATOS Y LA TABLA:

CREATE DATABASE covinoc;

\c covinoc

CREATE TABLE customer(id SERIAL PRIMARY KEY, name VARCHAR(255), phone VARCHAR(10));

RESULTADO:

Listar:
![img](https://github.com/Elmigue10/Prueba-tecnica-covinoc/blob/master/Imagenes/Listar.png)

Crear:
![img](https://github.com/Elmigue10/Prueba-tecnica-covinoc/blob/master/Imagenes/Crear.png)

Actualizar:
![img](https://github.com/Elmigue10/Prueba-tecnica-covinoc/blob/master/Imagenes/Actualizar.png)