const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ItemSchema = new mongoose.Schema({
    itemId: { type: Number, unique: true },
    name: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
}, { timestamps: true });

ItemSchema.plugin(AutoIncrement, { inc_field: 'itemId' });

module.exports = mongoose.model('Item', ItemSchema);
