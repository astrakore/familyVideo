const res = require("express/lib/response");
const { Order } = require("../models/index");

const OrdersController = {};

OrdersController.placeNewOrder = (req, res) => {
    
    let body = req.body;

    Order.create({
        price: body.price,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fecha: body.fecha
    })
    .then(pedido => {
        if(pedido){
            res.send(pedido);
        }else{
            res.send("La creación del nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error);
    }));

}

module.exports = OrdersController;