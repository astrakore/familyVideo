# Proyecto de backend de un videoclub: Family Video

## Introducción

Como cuarto proyecto del Bootcamp FullStack Developer de GeeksHubs Academy, se nos encargó realizar el backend de un videoclub a domicilio.

## Tabla de contenidos

* [Pre-requisitos](#pre-requisitos)
* [Creando la base de datos](#creando-la-base-de-datos)
* [Dependencias utilizadas en el proyecto](#dependencias-utilizadas-en-el-proyecto)
* [Endpoints](#endpoints)

## Pre-requisitos

* Tener instalado en nuestro equipo [Node.js.](https://nodejs.org/es/)
* Clonar el proyecto en nuestro equipo:
`$ git clone "url de este repositorio"`
* Instalar las dependencias utilizadas (detalladas más adelante) con el siguiente comando:
`npm install`
* Levantar el servidor con el siguiente comando:
`npm run dev`

## Creando la base de datos

Se modificará el archivo en la siguiente ruta: ../config/config.js con los datos deseados del servidor MySQL, es decir: username (nuestro usuario), password (nuestra contraseña) y database (el nombre de nuestra base de datos) y acto seguido se ejecutarán los siguientes comandos:
`sequelize db:create`
`sequelize db:migrate`

## Dependencias utilizadas en el proyecto

* Axios:
`npm i axios`
* Bcrypt:
`npm i bcrypt`
* CORS:
`npm i cors`
* Express:
`npm i express`
* JSONWebToken
`npm i jsonwebtoken`
* Morgan:
`npm i morgan`
* MySQL2:
`npm i mysql2`
* Nodemon:
`npm i nodemon`
* Sequelize:
`npm i sequelize`
* Winston:
`npm i winston`

## Endpoints

### Usuario

* `https://astrakorevideoclub.herokuapp.com/usuarios` (GET) Leer todos los usuarios.
* `https://astrakorevideoclub.herokuapp.com/usuarios/email/:email` (GET) Traer a un usuario por email.
* `https://astrakorevideoclub.herokuapp.com/usuarios/:id` (GET) Traer a un usuario por id.
* `https://astrakorevideoclub.herokuapp.com/usuarios` (POST) Registrar a un usuario.
* `https://astrakorevideoclub.herokuapp.com/usuarios/:id` (PUT) Modificar los datos de un usuario.
* `https://astrakorevideoclub.herokuapp.com/usuarios`(DELETE) Borrar a todos los usuarios.
* `https://astrakorevideoclub.herokuapp.com/usuarios/:id` (DELETE) Borrar a un usuario por id.
* `https://astrakorevideoclub.herokuapp.com/usuarios/login` (POST) Loguear a un usuario.

### Películas

* `https://astrakorevideoclub.herokuapp.com/peliculas` (GET) Ver todas las películas.
* `https://astrakorevideoclub.herokuapp.com/peliculas/favoritas` (GET) Ver las películas favoritas de la crítica.
* `https://astrakorevideoclub.herokuapp.com/peliculas/adultos` (GET) Ver las películas con contenido adulto.
* `https://astrakorevideoclub.herokuapp.com/peliculas/titulo` (GET) Ver las películas haciendo una búsqueda por título.
* `https://astrakorevideoclub.herokuapp.com/peliculas/novedades` (GET) Ver las películas que están al llegar.

### Pedidos

* `https://astrakorevideoclub.herokuapp.com/orders` (POST) Crear un nuevo pedido.