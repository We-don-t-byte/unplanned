## Unplanned Plans

La app fue desarrollada principalmente en entornos Linux x86 utilizando el editor de código Visual Studio Code, por lo que se recomienda utilizar entornos similares.

Para ejecutar la App localmente, primero se deben instalar las dependencias que se utilizaron en el proyecto usando uno de los siguientes comandos:

```bash
npm i
# o
npm install
```
En caso de que no funcione ninguno también se puede forzar con el siguiente comando:

```bash
npm install --legacy-peer-deps
```
Posteriormente se deberá ejecutar el comando build para comprobar que se está compilando el aplicativo correctamente, esto normalmente se ejecuta en el momento de la instalación pero es recomendable hacerlo manualmente con el siguiente comando:

```bash
npm run build
```
Posteriormente se debe tener un archivo .env con las siguientes variables de entorno (environment variables) declaradas:

    - DATABASE_URL: En este caso se usó una base de datos de postgres.
    - NEXTAUTH_SECRET: Utilizado para encriptar datos de auth.
    - NEXTAUTH_URL: La ruta para el auth.
    - GITHUB_ID y GITHUB_SECRET: Para permitir el login con github, similarmente se puede usar GOOGLE_ID, GOOGLE_SECRET, FACEBOOK_ID y FACEBOOK_SECRET para permitir login con los servicios respectivos.
    - MAPS_API_KEY: Para importar la API de Google Maps y permitir la localización del usuario.

Una vez se tiene todo configurado correctamente se deberá ejecutar el siguiente comando:

```bash
npm run dev
```
Ahora, el aplicativo va a ejecutarse localmente y se puede visitar la pagina [http://localhost:3000](http://localhost:3000) para ver el resultado

## Despliege en Vercel

Se utilizó la plataforma [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), una herramienta proveída por los creadores de Next.js para realizar el despliege del aplicativo.

Se puede visitar el aplicativo en el siguiente [Link](https://vercel-unplanned.vercel.app/)
