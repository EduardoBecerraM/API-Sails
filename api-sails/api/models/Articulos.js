/**
 * Articulos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: { type: 'string', required: true},
    proveedor: { type: 'string', allowNull: false},
    cantidad: { type: 'number', allowNull: false},

  },

};

