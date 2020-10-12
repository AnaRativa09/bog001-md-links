# MD-Links

Librería que permite extraer y validar links en archivos markdown (.md), obteniendo estadísticas de links totales, únicos y rotos.

## 1. CLI
### 1.1 Instalación

``` js
$ npm install --g @anarativa09/md-links@0.1.0
```

### 1.2 Uso
Recibe como argumento un path/ruta de un archivo ".md" o una carpeta que contenga un archivo ".md". También recibe las opciones a ejecutar.

```js
md-links <path-to-file> [options]
```
- #### Default

  Al ejecutar el comando, imprime un array de objetos con url `(href)`, la referencia dada al enlace `(text)` y  el archivo `(file)` en donde se encontró el link.

  ```js

  $ md-links ./some/example.md

      {
        href: 'http://algo.com/2/3/',
        text: 'Link a algo',
        file: './some/example.md'
      },
      {
        href: 'http://google.com/',
        text: 'Google',
        file: './some/example.md'
      }
      {
        href: 'https://nodejs.dev/',
        text: 'Node JS',
        file: './some/example.md'
      }
  ```

- #### Options

  ##### `--validate` / `-v`
  El _output_ imprime el status de la respuesta recibida a la petición HTTP a dicha URL y la palabra `OK` o `fail` para determinar su estado.

  ```js
  $ md-links ./some/example.md --validate

      {
        href: 'http://algo.com/2/3/',
        text: 'Link a algo',
        file: './some/example.md',
        status: '404',
        statusText: 'Fail'
      },
      {
        href: 'http://google.com/',
        text: 'Google',
        file: './some/example.md'
        status: '200',
        statusText: 'OK'
      }
      {
        href: 'https://nodejs.dev/',
        text: 'Node JS',
        file: './some/example.md',
        status: '301',
        statusText: 'OK'
      }
    ```

  ##### `--stats` / `-s`
  El output imprime un texto con estadísticas básicas sobre los links.

  ```js
  $ md-links ./some/example.md --stats
  Total: 3
  Unique: 3
  ```

  ##### `-- validate --stats` / `-v -s`
  El output imprime un texto con estadísticas que necesiten el resultado de la validación.

  ```js
  $ md-links ./some/example.md --stats
  Total: 3
  Unique: 3
  Broken: 1
  ```
---
## 2. Módulo JavaScript API

### 2.1 Instalación

Desde el terminal:
``` js
$ npm install @anarativa09/md-links@0.1.0
```
Desde el package.json:
  ``` js
  "@anarativa09/md-links": "0.1.0"
  ```

### 2.2 Uso

```js
const mdlinks = require('@anarativa09/md-links@0.1.0');

// Default file
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);


// Option validate
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, statusText }]
  })
  .catch(console.error);


// Default directory
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```
