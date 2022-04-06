const { Usuario } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const UsuarioController = {};


//Funciones del controlador

UsuarioController.traeUsuarios = (req, res) => {
    //Búsqueda trayendo a todos los usuarios
    Usuario.findAll()
    .then(data => {

        res.send(data)
    });

};

UsuarioController.traerUsuarioId = (req, res) => {
    //Búsqueda buscando una Id
    Usuario.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

UsuarioController.traerUsuarioEmail = (req, res) => {
    //Búsqueda comparando un campo
    Usuario.findOne({ where : { correo : req.params.correo }})
    .then(data => {
        res.send(data)
    });
}

UsuarioController.registraUsuario = async (req, res) => {

    if (/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(req.body.password) !== true) {
        return res.send("La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres.")
    }
    
    //Registrando un usuario
    
        let nombre = req.body.nombre;
        let apellidos = req.body.apellidos;
        let fecha = req.body.fecha;
        let correo = req.body.correo;
        let dni = req.body.dni;
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
        let telefono = req.body.telefono;
        let cuenta = req.body.cuenta;
        //Comprobación de errores.....
        
        //Guardamos en sequelize el usuario

        Usuario.findAll({
            where : {

                [Op.or] : [
                    {
                        correo : {
                            [Op.like] : correo
                        }
                    }
                ]

            }

        }).then(datosRepetidos => {

            if(datosRepetidos == 0){

                    Usuario.create({
                    nombre : nombre,
                    apellidos : apellidos,
                    fecha : fecha,
                    correo : correo,
                    dni : dni,
                    password : password,
                    telefono : telefono,
                    cuenta : cuenta
                }).then(usuario => {
                    res.send(`${usuario.nombre}, bienvenida a este infierno`);
                })
                .catch((error) => {
                    res.send(error);
                });

            }else {
                res.send("El usuario con ese e-mail ya existe en nuestra base de datos");
            }
        }).catch(error => {
            res.send(error)
        });
};

UsuarioController.updateProfile = async (req, res) => {

    let datos = req.body;

    let id = req.params.id;

    try {

        Usuario.update(datos, {
            where: {id : id}
        })
        .then(actualizado => {
            res.send(actualizado);
        });

    } catch (error) {

    }

};

UsuarioController.deleteAll = async (req, res) => {

    try {

        Usuario.destroy({
            where : {},
            truncate : false
        })
        .then(usuariosEliminados => {
            res.send(`Se han eliminado ${usuariosEliminados} usuarios`);
        })

    } catch (error) {
        res.send(error);
    }

};

UsuarioController.deleteById = async (req, res) => {

    let id = req.params.id;

    try {

        Usuario.destroy({
            where : { id : id },
            truncate : false
        })
        .then(usuarioEliminado => {
            console.log(usuarioEliminado);
            res.send(`El usuario con la id ${id} ha sido eliminado`);
        })

    } catch (error) {
        res.send(error);
    }

};

UsuarioController.logUsuario = (req, res) => {

    let correo = req.body.correo;
    let password = req.body.password;

    Usuario.findOne({
        where : {correo : correo}
    }).then(Usuario => {

        if(!Usuario){
            res.send("Usuario o contraseña inválido");
        }else {
            //el usuario existe, por lo tanto, vamos a comprobar
            //si el password es correcto

            if (bcrypt.compareSync(password, Usuario.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR

                console.log(Usuario.password);

                let token = jwt.sign({ usuario: Usuario }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    usuario: Usuario,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Usuario o contraseña inválidos" });
            }
        };


    }).catch(error => {
        res.send(error);
    })
};

module.exports = UsuarioController;