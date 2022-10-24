# Información dobre el proyecto

Este proyecto para Jump2Digital lo he hecho con HTML, CSS y JS vanilla. Optimizando las imagenes png y svg y realizando un código que puede ser reutilizable en el caso de hacerlo en mayor escala.

En la versión móbil he decidido hacer que al pulsar una tarjeta, se ponga delante de las demas, dando siempre visión de todas las tarjetas, pero pudiendo elegir la deseada para tener más información.

En el caso del email, he puesto una validación regex aparte de la nativa de HTML, para poder validar que sea un email con un dominio final. No se guarda el email, ni se utiliza para nada, no tengáis reparo en probar el vuestro o cualquier inventado.

# Como acceder a la aplicación

La manera más fácil de acceder a la aplicación es a través de:\
[https://price-plans.netlify.app/](https://price-plans.netlify.app/)\
He subido la aplicación a través de netlify con GitHub Actions.\
\
Si preferís descargar el código ahora os explico cómo.\

## Descargar la aplicación

Para descargarla desde GitHub, hay dos maneras:

### En zip

Desde la misma pestanya del repositorio,en el botón verde que pone "Code", se despliegan unas opciones. Al darle en la opcion "Download ZIP" se nos descargará el proyecto.

### Desde terminal

#### Clone command
```shell
    git clone https://github.com/Marcsc99/price-plans
```

## Arrancar el proyecto

Ya en el directorio del proyecto, solo hay que iniciar el index.html, ya sea arrastrandolo a un motor de búsqueda, o dándole doble click al archivo desde el explorador de archivos.

## Porqué he decidio hacerlo únicamente con HTML, CSS y JS

La razón principal es porque no creo que sea necesario usar un framework potente como React o Angular para un proyecto tan pequeño, que con unas pocas líneas de HTML, CSS y JS se puede realizar sin ningún tipo de problemas.

## Calidad del código

### CodeFactor
[![CodeFactor](https://www.codefactor.io/repository/github/marcsc99/price-plans/badge)](https://www.codefactor.io/repository/github/marcsc99/price-plans)

### SonarCloud
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Marcsc99_price-plans&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Marcsc99_price-plans)

## Architectura del proyecto

│   about.txt\
│   android-chrome-192x192.png\
│   android-chrome-512x512.png\
│   apple-touch-icon.png\
│   favicon-16x16.png\
│   favicon-32x32.png\
│   favicon.ico\
│   index.html\
│   index.js\
│   README.md\
│   site.webmanifest\
│\
├───.github\
│   └───workflows\
│           main.yml\
│\
└───assets\
    ├───imgs\
    │       pro.png\
    │       starter.png\
    │       team.png\
    │       tick-min-white.svg\
    │       tick-min.svg\
    │\
    └───styles\
            style.css\

## Contact info

> marc.sanchez.civantos@gmail.com || Marc Sanchez Civantos