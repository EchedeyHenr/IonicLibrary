# Librería Osmosis

Una librería puede ser vista como un lugar donde el conocimiento fluye de los libros a las personas. Así como el agua se mueve para equilibrar las concentraciones, los libros pueden influir y enriquecer a los lectores, llevándolos a un estado de mayor comprensión y sabiduría.

La aplicación permite al usuario añadir libros a una base de datos, así como visualizar todos los libros que contiene, borrarlos o modificarlos.

En un futuro se añadirán otras opciones.

## Comenzando 🚀

Mira **Instalación** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

* **[IDE]** - Entorno de Desarrollo Integrado. En nuestro caso hemos utilizado el Visual Studio Code (https://code.visualstudio.com). Se puede descargar 
desde su web oficial.

* **[Node]** -  Entorno de ejecución que permite a los desarrolladores ejecutar JavaScript del lado del servidor. Podemos descargarlo desde la web oficial
(https://nodejs.org/en/) recomendable usar la versión LTS.

* **[MySQL Server 8.0]** - Base de Datos. Lo descargaremos desde la web oficial (https://dev.mysql.com/downloads/installer/). IMPORTANTE: Durante la instalación
se nos pedirá crear la contraseña de administrador, es importante recordarla para su posterior uso.

* **[MySQL Workbench 8.0]** - Herramienta gráfica que permite a los usuarios diseñar, administrar y modelar bases de datos MySQL. Podemos descargarla desde la
web oficial (https://dev.mysql.com/downloads/workbench/).

### Instalación 🔧

* Comenzaremos clonando el repositorio en nuestra máquina local.

```
git clone https://github.com/EchedeyHenr/IonicLibrary.git
```

* Una vez clonado, accederemos a la carpeta del proyecto. Hay que instalar las dependencias en backend y frontend.

```
cd Library
cd backend
npm install
cd ../frontend
npm install
```

* Tendremos que crear la base de datos. Podremos hacerlo escribiendo el siguiente código en MySQL Workbench

```
CREATE DATABASE db_library;
```
O creándola manualmente.

* Para poder iniciar el servidor backend y el ionic, tendremos que modificar las credenciales de acceso a la base de datos.

Para ello accedemos a la carpeta frontend > config > db.config.js y modificamos la password añadiendo la contraseña de 
administrador de nuestro usuario root de MySQL.

* Ahora podremos iniciar la aplicación:

```
cd backend
node index.js
```
Y en otra terminal
```
cd frontend
ionic serve
```

## Ejecutando las pruebas ⚙️

Para realizar las pruebas únicamente deberemos acceder a la [API Documentation Postman](https://documenter.getpostman.com/view/38432279/2sAXxLCaFV)

Tendremos las pruebas get, post, put y delete.

También puede acceder a la aplicación y hacer un uso normal de esta.

## Construido con 🛠️

* [IONIC] - Framework de código abierto que permite crear aplicaciones móviles multiplataforma utilizando tecnologías web como HTML, CSS y Javascript.
* [Node.js] - Entorno de ejecución que permite a los desarrolladores ejecutar JavaScript del lado del servidor.
* [Express.js] - Framework para el desarrollo de aplicaciones web en Node.js.
* [Sequelize] - ORM (Object-Relational Mapping) para Node.js que permite interactuar con bases de datos SQL.
* [MySQL] - Herramienta para la gestión de bases de datos relacionales.

## Autores ✒️

* **Echedey Henríquez Hernández** - *Trabajo Inicial* - [EchedeyHenr](https://github.com/EchedeyHenr)
* **Andrés Villanueva** - *ReadMe* - [Villanuevand](https://github.com/Villanuevand)

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---
⌨️ con ❤️ por [EchedeyHenr](https://github.com/EchedeyHenr) 😊
