# SWAPI API

Que la fuerza te acompañe en este ejercicio, revisa las siguientes slides para que puedas crear esta fenómenal app para los amantes de Star Wars.

## Implementación

Este proyecto está implementado con propositos demostrativos de:

- Peticiones Ajax con jQuery.

### Ajax

Esto es [Enfoque Ajax](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)

Es un enfoque para el desarrollo web que abarca las siguientes tecnologias web.

Todas estas piezas están aquí para que nosotras podamos desarrollar aplicaciones web que se puedan actualizar sin estar haciendo reload de la pagina.

- HTML (Ya lo conoces)
- JavaScript (Ya lo conoces)
- DOM (Ya lo conoces)
- CSS (Ya lo conoces)
- XMLHTTP Request (Implementado con jQuery)

    ```bash
     $.ajax({
             url:'api o url de donde vas a consumir la data'
             method: 'GET',
             contentType: 'application/json',
             crossOrigin: true,
             success: function(response) {},
              fail: function(request){}
            }
         });
    ```

## Comenzar con el proyecto

Para inicializar el proyecto debes tener node instalado, para correrlo en un servidor local, encontrarás un archivo `package.json`, donde se encuentran las dependencias y configuración. 
Para primero deberás instalar las dependecias con el comando.

```
npm install
```

Luego, debes ejecutar el script start que está especificado en el package json usando npm.
Para ello usamos el comando: 

```
nodemon server.js
```

## Bootstrap

Se está usando bootstrap como framework de css. Está enlazado mediante CDN en el header.

Así mismo, para hacer uso del componente modal, se hace el enlace del archivo js (CDN script en el Body).

```HTML
En el Header de tu html.

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

```HTML
En e body de tu HTML.

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```