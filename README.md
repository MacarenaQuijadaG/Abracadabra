# Juego de Magia - Encuentra el Conejo

Este proyecto es un servidor desarrollado con Express que sirve un sitio web estático con temática de magia. En este sitio, los usuarios pueden interactuar con cuatro sombreros y al hacer clic en uno de ellos, tratar de encontrar el conejo oculto.

## Funcionalidades del Servidor

El servidor dispone de las siguientes rutas:

1. **/abracadabra/usuarios**: Devuelve un JSON con un arreglo de nombres alojado en el servidor.
2. **/abracadabra/juego/:usuario**: A través de un middleware, verifica que el usuario escrito como parámetro existe en el arreglo alojado en el servidor.
3. **/abracadabra/conejo/:n**: Basado en un número aleatorio del 1 al 4, devuelve la foto del conejo en caso de coincidir con el número recibido como parámetro o la foto de Voldemort en caso de no coincidir.

## Requisitos 🚀

Para ejecutar este proyecto, necesitas tener instalado Node.js y npm.

## Instalación 🔧

1. Clona el repositorio:
    ```sh
    git clone https://github.com/MacarenaQuijadaG/Abracadabra.git
    ```

2. Navega hasta el directorio del proyecto:
    ```sh
    cd abracadabra
    ```

3. Instala las dependencias:
    ```sh
    npm i
    ```

## Uso ⚙️

1. Inicia el servidor:
    ```sh
    node serverExpress.js
    ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver el sitio web.

## Construido Con 🛠️

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [Express](https://expressjs.com/es/) - Framework

---

⌨️ con ❤️ por [Macarena Quijada G](https://github.com/MacarenaQuijadaG) 😊
