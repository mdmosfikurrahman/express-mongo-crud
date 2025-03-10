const Item = require('../models/itemModel');

const itemRepository = {
    create: async (itemData) => {
        const newItem = new Item(itemData);
        return newItem.save();
    },

    findAll: async () => {
        return Item.find();
    },

    findById: async (id) => {
        return Item.findOne({itemId: id});
    },

    update: async (id, updateData) => {
        return Item.findOneAndUpdate(
            {itemId: id},
            updateData,
            {new: true, runValidators: true}
        );
    },

    delete: async (id) => {
        return Item.findOneAndDelete({itemId: id});
    }
};

module.exports = itemRepository;
