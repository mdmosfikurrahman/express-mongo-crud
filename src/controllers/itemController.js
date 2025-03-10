const itemService = require('../services/itemService');
const itemServiceImpl = require('../services/impl/itemServiceImpl');
const { CreateItemRequest, UpdateItemRequest, ItemResponse } = require('../dtos/itemDto');

Object.assign(itemService, itemServiceImpl);

exports.createItem = async (req, res) => {
    try {
        const createItemRequest = new CreateItemRequest(req.body);
        const newItem = await itemService.createItem(createItemRequest);
        res.status(201).json(new ItemResponse(newItem));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await itemService.getItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const updateItemRequest = new UpdateItemRequest(req.body);
        const updatedItem = await itemService.updateItem(req.params.id, updateItemRequest);
        res.json(updatedItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const result = await itemService.deleteItem(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
