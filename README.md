# Práctica: Creando un servidor TCP

Servidor simple de node.js que lee y envía mensajes entre el cliente y el servidor.

## Getting Started

Estas instrucciones le permitirán poner en marcha una copia del proyecto en su máquina local para fines de desarrollo y pruebas. Consulte el despliegue para las notas sobre cómo desplegar el proyecto en un sistema en vivo.

### Prerequisitos

#### Node.js

Descargar [Node.js](https://nodejs.org/es) y seguir las instrucciones del instalador.

#### readline-sync

En una terminal del proyecto ejecutar:

```
npm i readline-sync
```

### Instalación

Una vez que haya clonado el repositorio en su dispositivo, abra una terminal en el directorio del proyecto y colóquese en la carpeta "server":

```
cd server
```

Para ejecutar el servidor, utilizar el comando:

```
node server.js
```

Abra otra terminal en el directorio del proyecto y colóquese en la carpeta "client":

```
cd client
```

Para ejecutar el client, utilizar el comando:

```
node client.js
```

Digite la información y presione ENTER.
Si no ha presionado 0, la conexión continuará abierta, pudiendo enviar y recibir mensajes entre ambas consolas.

Para cerrar la conexión, envíe '0' desde cualquier terminal y luego presione el siguiente comando en consola que se encuentra ejecutando server.js (Windows):

```
CTRL + C
```

## Implementación

Para crear la imagen de Docker, ejecutar en la carpeta del proyecto:

### `docker build -f Dockerfile.server -t tcp-server .`
### `docker build -f Dockerfile.client -t tcp-client .`

Crear red:

### `docker network create tcp-net`

Para ejecutar:

### `docker run -d -it --name server --network tcp-net -p 4000:4000 tcp-server`

Seguido de:

### `docker run -it --name client --network tcp-net tcp-client`

Para correr el programa en Docker con interactividad.

## Construido con

* [Node.js](https://nodejs.org/es) - Runtime environment

## Contribuciones

Favor de leer [CONTRIBUTING.md](./CONTRIBUTING.md) para los detalles del código de conducta y el proceso para enviar pull requests.

## Versiones

Usamos [SemVer](http://semver.org/) para las versiones.

## Autores

* **Damaris Naomi Trujillo García** - *Trabajo inicial* - [a376818](https://github.com/a376818/)

## Licencia

Este proyecto está licenciado bajo MIT License - ver [The MIT License](https://mit-license.org/) para más información

## Agradecimientos

**Tutoriales**
* [Cliente-Servidor TCP con Node js - Comunicación via Socket](https://www.youtube.com/watch?v=LFU7gJAOegA)
