
Proyecto Security-Node
========================================

Este proyecto es una aplicación de generación de tokens para otras aplicaciones.

# Requerimientos iniciales
- Instalar Git
- Instalar NodeJS
- Instalar y configurar MongoDB
- Contar con un servidor web configurado(Apache, Nginx)


# Configuración Cliente (Interfaz de Usuario)

## Configuración Inicial
Abrir la consola y acceder hasta la carpeta `/client` del proyecto y ejecutar el siguiente comando para crear el archivo .env
```
touch .env

```
Tambien puede realizar la acción dirigiendose a la carpeta `/client` a traves del explorador y creando manualmente el archivo con el nombre `.env`

A continuación, debera copiar el contenido del archivo `/client/.env.example` a su archivo `.env`

El archivo `.env` debera contener las siguientes variable:

- `REACT_APP_SERVER_URL`, indica la dirección del servidor de security-node
- `PORT`, indica el puerto sobre el cual se quiere inicializar la aplicación cliente cuando esta en modo desarrollo
- `PUBLIC_URL`, indica la ruta base de los archivos estáticos

## Iniciando la aplicación

### Modo Desarrollo
Lo primero a realizar para iniciar la aplicación es instalar las dependencias necesarias ejecutando el siguiente comando sobre el directo `/client`:
```
npm install

```
y a continuación ejecutar el comando:
```
npm start

```

### Modo Producción
Para ejecutar elproyecto en modo producción se deberá ejecutar el siguiente comando:
```
sh build.sh
```
el cual se encargará de compilar el proyecto y copiarlo al folder correspondiente. El archivo build.sh contiene lo siguiente:
```
npm install
npm run build
cp -a ./build/. /var/www/html/security-node
```
Donde `/var/www/html/security-node` es la ubicación del directorio donde deseamos generar los archivos compilados del proyecto. Esta ubicación puede variar dependiendo de la ruta de su servidor web.

# Configuración Servidor (Servidor Web de servicios)

## Requerimientos iniciales
Se recomienda instalar pm2 para ejecutar las aplicaciones como servicios, el cual puede ser instalado con el siguient comando:
```
npm install pm2 -g
```
Para mayor información revisar la documentación de `pm2` en: [http://pm2.keymetrics.io/](http://pm2.keymetrics.io/)

### Instalando la aplicación como servicio

A continuación el paso a realizar es dirigirse hacia la carpeta `/server`del proyecto y ejecutar los siguientes comandos

```
npm install
pm2 start src/index.js --name security-node
pm2 save
pm2 startup

```


