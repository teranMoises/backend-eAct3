const connection = require('../config/conexion');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UsuarioModel{
    mostrar_usuarios(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT `id_usuario`, `cedula_usuario`, `nombre_usuario` FROM `usuarios`', function(err, rows, fields) {
                if (err){
                    reject(err)
                }else {
                    resolve(rows)  
                }
            })
        })
    }
    buscar_usuario(id){
        return new Promise((resolve, reject) => {
            connection.query('SELECT `id_usuario`, `cedula_usuario`, `nombre_usuario` FROM `usuarios` WHERE `id_usuario` = ?', id, function(err, rows, fields) {
                if(err) {
                    reject(err)
                }else {
                    resolve(rows)  
                }
            })
        })
    }
    guardar_usuario(nuevo){ 
        return new Promise((resolve, reject) => { 
            //if (nuevo.rol_user) delete nuevo.rol_user; 
            if (!nuevo.clave_usuario) reject("Ingrese una contraseña válida");
            nuevo.clave_usuario = bcrypt.hashSync(nuevo.clave_usuario, saltRounds);
            //console.log("clave: ", nuevo.clave_usuario)
            connection.query('INSERT INTO usuarios SET ?',nuevo, function (error, results, fields) {
                if (error) {
                    if (error.errno == 1062) reject("La cédula '" + nuevo.cedula_usuario + "' ya existe");
                    if (error.errno == 1048) reject("No ingresó nungún dato en: " + error.sqlMessage.substring(7).replace(' cannot be null', ''));
                    reject(error);
                    console.error("Error SQL: ",error.sqlMessage);
                };
                if (results) {
                    console.log('ID CREADO:', results.insertId);
                    resolve(results);
                };
            });
        }) 
    }
    login(usuario){
        return new Promise((resolve, reject) => { 
            //usuario.clave_usuario = bcrypt.hashSync(usuario.clave_usuario, saltRounds);
            //console.log(usuario.clave_usuario)
            connection.query('SELECT * FROM `usuarios` WHERE cedula_usuario = ?', usuario.cedula_usuario , function (error, results, fields) {
                if (error) reject(error);
                if (results[0]) {
                    console.log('consulta:', results);
                    if (bcrypt.compareSync(usuario.clave_usuario, results[0].clave_usuario)) {
                        //Roles
                        let rol = 'user'
                        if (results[0].rol_usuario) rol = results[0].rol_usuario;

                        var token = jwt.sign({ nombre: results[0].nombre_usuario, id: results[0].cedula_usuario, rol: rol }, process.env.JWT_SECRET);
                        console.log(token);
                        results[1] = token;
                        resolve(results);
                    } else {
                        console.log('Clave errada');
                        reject('Clave errada');
                    }
                } else {
                    console.log('Usuario no existe');
                    reject('No existe ningún usuario con la cédula indicada: ' + data.cedula_user);
                }
            });
        }) 
    }
    modificar_usuario(id, actualizar){
        return new Promise((resolve, reject) => { 
            //  Almacena el hash en tu base de datos de contraseña.
            actualizar.clave_usuario = bcrypt.hashSync(actualizar.clave_usuario, saltRounds);
            connection.query('UPDATE `usuarios` SET ? WHERE `id_usuario` = ?',[actualizar, id], function(err, rows, fields) {
                if (err){
                    reject(err)
                }else {
                    resolve()  
                }
            })
        }) 
    }
    eliminar_usuario(id){
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM `usuarios` WHERE `id_usuario` = ?', id, function(err, rows, fields) {
                if (err){
                    reject(err)
                }else {
                    resolve()  
                }
            })
        })
    }
}

module.exports = new UsuarioModel();