# Portafolio

Este es el código para generar un portafolio basado en la API de github. Es generado estáticamente con Astro, pero las partes que necesitan ser dinámicas están desarrolladas con Solid js.


## Como iniciar el server de desarrollo
Dentro de la carpeta del proyecto ejecuta estos comandos
```
pnpm i
pnpm dev --host // la opción --host muestra la ip (muy útil si quieres probar como se ve en un móvil real)
```


## Como modificar el contenido a mi gusto
Dentro del proyecto encontraras el archivo "data.ts" (src/data/data.ts) donde podrás modificar el contenido.
|        Opción         |                         Que hace?                             |
|-----------------------|---------------------------------------------------------------|
|githubUser             |Nombre del usuario en GitHub                                   |
|nameOwner              |Nombre completo de la persona                                  |
|aboutOwnerDescription  |Una pequeña descripción la persona                             |
|socialNetworks         |Lista de las redes sociales                                    |
|levels                 |Breve descripcion de el sognificado de los niveles (estrellas) |
|firstTableTitle        |Titulo de la primera tabla                                     |
|firstTableDescription  |Descripcion de que quiere expresar la primera tabla            |
|firstTableHeaders      |Cabezeras de la primera tabla                                  |
|firstTableContent      |Contenido de cada fila de la primera tabla                     |
|secondTableTitle       |Titulo de la segunda tabla                                     |
|secondTableDescription |Descripción de que quiere expresar la segunda tabla            |
|secondTableHeaders     |Cabeceras de la segunda tabla                                  |
|secondTableContent     |Contenido de cada fila de la segunda tabla                     |