# Libreria de componentes de React

## Requisitos

1. Tener una cuenta en NPM. Sino tienes una podes crearla [aqui.](https://docs.npmjs.com/creating-a-new-npm-user-account])
2. Tener instalado npm en tu equipo.
3. Git.
4. Visual Studio Code.
5. Una terminal.
6. Acceso a internet.

## Dependencias

- Babel para poder transpilar el codigo
  
    ```text
    npm i --save-dev @babel/cli @babel/core @babel/preset-env
    npm i @babel/polyfill
    ```

## Estructura del proyecto

1. Dentro de `src` debemos crear la carpeta `lib`. Dentro de `lib` creamos la carpeta `components` la cual contendra los componentes que exportaremos.
2. Cada componente tendra su propia carpeta con sus estilos correspondientes, en este ejemplo estamos utilizando `CSS Modules`.
3. En la raiz de la carpeta `lib` creamos un archivo llamado `index.js` el cual sera nuestro punto de entrada a los componente, basicamente vamos a importar los componetes desde la carpeta `components` y los vamos a exportar.
4. En la raiz del proyecto debemos agregar el archivo `babel.config.json` con la siguiente configuracion basica.

```text
{
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.5"
            }
        ],
        "@babel/preset-react"
    ]
}
```

## package.json

```text
{
  "name": "@nadirss14/component-library",
  "description": "Example of react component library",
  "version": "0.1.0",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build:npm": "rm -rf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files"
  }
}
```

2. `description`: descripcion corta de los que es el paquete. [Package name guidelines](https://docs.npmjs.com/package-name-guidelines)
3. `version`: controla las versiones del paquete. [Semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
4. `main`: Especifica el punto de estrada a la aplicacion.
6. `files`: Listado de archivos que debemos incluir en el paquete.
7. `scripts`: Listado de scripts que ejecutaremos sobre el proyecto.
    - El script `build:npm` se encarga que de hacer el transpilado de los archivos de la carpeta `lib` y generar los nuevos archivos copilados dentro de la carpeta `dist` para ser publicados en NPM.

## Publish NPM

 1. Login with npm

```text
npm login
```

2. Por defecto `npm` viene configurado para publicar unicamente paquetes privados, para cambiar esto ejecutamos el siguiente comando en la terminal.

```text
npm config set access public
```

 3. Publicar el paquete.

```text
npm publish
```
