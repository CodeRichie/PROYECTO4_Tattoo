# Proyecto 4 Estudio de Tatuajes Backend

## Informacion
El proyecto de estudio de tatuajes, es un backend donde podemos gestionar citas y usuarios dentro de un estudio de tatuajes. 

## Los Requisitos:
Un cliente tendra una aplicacion para logearse y entrar en el client area y podra ver el listado de citas que tiene para poderlas gestionar en un futuro:

1. Registro de usuarios.
2. Login de usuarios.
3. Perfil de usuario.
4. Modificación de datos del perfil.
5. Creación de citas.
6. Editar citas.
7. Eliminación de citas
8. Ver todas las citas que tengo como cliente (solo las propias).
9. Ver todas las citas existentes conmigo (role tatuador).
10. Listar tatuadores

## Diagrama

![Captura de pantalla 2024-03-26 143636](https://github.com/CodeRichie/PROYECTO4_Tattoo/assets/154466364/4b0bd23e-76c2-4fd9-a452-9818b0d9e7b6)


## Endpoints

- REGISTER/LOGIN

    //ADMIN ARTIST, CLIENT
    - Registro de usuarios.

            POST http://localhost:3000/api/users/create
        body:
        ``` js
            {
                 "firstName": "admin Ricard",
                 "email": "ricardadmin@gmail.com",
                 "password": "12345678",
                 "role": "ADMIN"
            }
        ```
- USERS INFO

    //ADMIN, ARTIST, CLIENT
    - Ver perfil.
            
            GET http://localhost:3000/api/users/profile/
    

    //ADMIN, ARTIST, CLIENT
    - Modificar los datos.
    
            PUT http://localhost:3000/api/users/profile/update

         body:
        ```js
	{
		"id": 36,
		"firstName": "Dennis",
		"lastName": "O'Keefe",
		"email": "Kiley_Heaney62@hotmail.com",
		"phone": 290867512,
		"isActive": true
	}


    //ADMIN ARTIST, CLIENT
    - Logear el user. 

            POST http://localhost:3000/api/auth/login  
        body:
        ``` js
            {
                "email": "ricardadmin@gmail.com",
                "password": "87654321"
            }
        ```
    
- APPOINTMENTS INFO

    //ADMIN, ARTIST
    - pedir la cita.
    
            POST http://localhost:3000/api/appointments/create
        
        body:
        ```js
            {
                "day_date": "2024-01-26",
	            "description": "little moon",
	            "artist":1,
	            "client":34,
	            "price":50 
                
            }

        - ARTISTS INFO

    //ADMIN, ARTIST, CLIENT
    - Lista de los artistas
            
            GET http://localhost:3000/api/artists
      //ARTIST
    - Ver las citas de cada artista.
    
            GET http://localhost:3000/api/appointments/artist/appointment
    
    //CLIENT
    - Ver mis citas con un get
        
            GET http://localhost:3000/api/appointments/client/appointment


    //ADMIN, ARTIST, CLIENT
    - Eliminar citas con el delete
    
            DELETE http://localhost:3000/api/appointments/8
    
    
    //ADMIN, ARTIST
    - Editar citas con el put
    
            PUT http://localhost:3000/api/appointments/1

        body:
        ```js
	{
		"id": 2,
		"day_date": "2024-07-15T06:33:45.000Z",
		"description": "Somnus cubicularis distinctio urbanus.",
		"price": 2917
	}

    //ARTIST
    - Ver todas las citas existentes conmigo (role tatuador).
    
            GET http://localhost:3000/api/appointments/artist/appointment
