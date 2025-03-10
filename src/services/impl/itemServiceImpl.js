const itemService = require('../itemService');
const itemRepository = require('../../repositories/itemRepository');
const { ItemResponse } = require('../../dtos/itemDto');

const itemServiceImpl = Object.create(itemService);

itemServiceImpl.createItem = async (itemData) => {
    const createdItem = await itemRepository.create(itemData);
    return new ItemResponse(createdItem);
};

itemServiceImpl.getItems = async () => {
    const items = await itemRepository.findAll();
    return items.map(item => new ItemResponse(item));
};

itemServiceImpl.getItemById = async (id) => {
    const item = await itemRepository.findById(id);
    if (!item) throw new Error('Item not found');
    return new ItemResponse(item);
};

itemServiceImpl.updateItem = async (id, updateData) => {
    const updatedItem = await itemRepository.update(id, updateData);
    if (!updatedItem) throw new Error('Item not found');
    return new ItemResponse(updatedItem);
};

itemServiceImpl.deleteItem = async (id) => {
    const deletedItem = await itemRepository.delete(id);
    if (!deletedItem) throw new Error('Item not found');
    return { message: 'Item deleted' };
};

module.exports = itemServiceImpl;
