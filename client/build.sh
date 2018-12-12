
#La ruta "/var/www/html/security-node" puede variar dependiendo de la ubicación del servidor web
npm install
npm run build
cp -a ./build/. /var/www/html/security-node