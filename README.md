# backend-eAct3
e-actividad 3.1. Entornos y sesiones

*Instructivo de uso para el repositorio*  

Una vez descargado el repositorio sigue los siguientes pasos para que puedas visualizar su funcionamiento:  

1.	Descomprime la carpeta que contiene el proyecto.  

2.	Abre en el editor de código de tu preferencia, la carpeta e inicia tu terminal con:  <br>
•	npm install (este comando instala los paquetes y dependencias necesarias utilizadas en el proyecto). Dentro de ellas están: express, express-generator, mysql, dotenv y nodemon (para el desarrollo).  

3.	Crea en tu editor de código un archivo << .env >> .  
•	Como ayuda te explicamos un ejemplo sobre los datos que contendrá tu archivo   << .env >>:
DB_HOST=localhost
DB_DATABASE= (nombre de la base de datos)
DB_USER= root
DB_PASSWORD= (preferiblemente deja este campo vacío)  

4.	Busca en la carpeta config el archivo de instalación de la base de datos.  


5.	Inicia el programa Xampp (el servidor de MySQL o el de tu preferencia).  


6.	Importa la base de datos a phpMyAdmin.  


7.	Inicia el proyecto con el siguiente comando:      

•	npm run start (Este comando se utiliza para iniciar el proyecto y gestionar los paquetes utilizados).  

8.	Para hacer las consultas desde la base de datos usa la extensión ThunderClient, POSTMAN o la de tu preferencia, elige que operación deseas realizar y elige que entidad deseas consultar u operar. 
-URL para cada operación en ThunderClient:  


/// Método GET
1.	Mostrar patrocinantes  

•	GET => http://localhost:3000/patrocinador/   

2.	Mostrar Modalidades y sus categorías  

•	GET => http://localhost:3000/modalidad/2  

3.	Mostrar los equipos participantes  

•	GET => http://localhost:3000/equipo/  

4.	Mostrar modalidades  

•	GET => http://localhost:3000/modalidad/  

5.	Mostrar categorías  

•	GET => http://localhost:3000/categoria/  

6.	Mostrar los equipos participantes inscritos en cada categoría  

•	GET=> http://localhost:3000/categoria/participantes (Con el objeto)  

Ejemplo:
{
  "nombre_categoria": "Recolección de objetos"
}  


•	GET=> http://localhost:3000/categoria/equipos/1 (Con la url)  

7.	Mostrar Equipos y sus padrinos  

•	GET=> http://localhost:3000/equipo/padrinos  


///	Método POST  


1.	Ingresar equipos participantes
•	POST => http://localhost:3000/equipo/
-Para este ejemplo puedes tomar el objeto e insertar que nuevos valores va a llevar cada propiedad.  


{
    "representante": "Miguel",
    "email": "M1key9090@gmail.com",
    "telefono": "0412-7544567",
    "nombre_de_equipo": "Robots de la suerte",
    "participantes": "Miguel,Orlando",
    "comentario": ""
  }
  

2.	Ingresar patrocinantes  

•	POST => http://localhost:3000/patrocinador/  

3.	Ingresar modalidad  

•	POST=> http://localhost:3000/modalidad/  

4.	Ingresar categoría a cada modalidad  

•	POST=> http://localhost:3000/categoria  

///	Método PUT  


1.	Editar patrocinador (Ejemplo)  

•	PUT=> http://localhost:3000/patrocinador/2 (el 2 representa el id de la entidad que se desea actualizar)  


-Para este ejemplo puedes tomar el objeto y modificar las propiedades que necesites actualizar.

{
   "nombre_comercial": "Uni",
    "persona_de_contacto": "Mari",
    "telefono": "0414-7542212",
    "idPatrocinio": 2,
    "comentario": "suerte a todos"
}  


2.	Editar equipo participante  

•	PUT=> http://localhost:3000/equipo/2  

3.	Editar categoría (PATCH y PUT)  

•	PATCH=> http://localhost:3000/categoria/3  


///	Método DELETE  


1.	Eliminar de la inscripción de un equipo participante alguna categoría inscrita  

•	DELETE=> http://localhost:3000/equipo/sin_categoria/3/2  

2.	Eliminar equipo  

•	DELETE=> http://localhost:3000/equipo/3  

3.	Eliminar categoría  

•	DELETE=> http://localhost:3000/categoria/3  

4.	Eliminar patrocinador  

•	DELETE=> http://localhost:3000/patrocinador/2

