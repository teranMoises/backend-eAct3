const Modalidad_Model = require('../models/Modalidad_model');
const { Respuesta } = require('../models/metodos');

class ModalidadController {
    ver_modalidad() {
        //console.log('controlers GET')
        return new Promise((resolve, reject) => {
            Modalidad_Model.ver_modalidad()
                .then((resultado) => { resolve(resultado) })
                .catch((error) => { reject(error); })
        })
    }
    ver_modalidad_y_categoria(id) {
        return new Promise((resolve, reject) => {
            if (isNaN(Number(id))) return reject(new Respuesta(400, 'Formato inválido', null));
            Modalidad_Model.ver_modalidad_y_categoria(id).then((retorno) => { resolve(retorno) }).catch((error) => { reject(error) });
        })
    }
    ingresar_modalidad(modalidad) {
        console.log("en controller", modalidad);
        return new Promise((resolve, reject) => {
            if (modalidad == undefined) return reject(new Respuesta(400, 'No se recibió información', null));
            if (typeof modalidad !== "object") return reject(new Respuesta(400, 'Formato inválido', null));
            if (Object.keys(modalidad).length === 0) return reject(new Respuesta(400, 'No se ingresó información', null));

            Modalidad_Model.ingresar_modalidad(modalidad)
                .then(() => { resolve(Modalidad_Model.ver_modalidad()) })
                .catch((error) => { reject(error); })
        })
    }
}

module.exports = new ModalidadController();