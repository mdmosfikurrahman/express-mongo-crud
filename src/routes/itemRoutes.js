const express = require('express');
const { body, param, validationResult } = require('express-validator');
const router = express.Router();
const itemController = require('../controllers/itemController');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post(
    '/items',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than zero'),
        body('category').notEmpty().withMessage('Category is required'),
        validate
    ],
    itemController.createItem
);

router.get('/items', itemController.getItems);

router.get(
    '/items/:id',
    [
        param('id').isInt({ gt: 0 }).withMessage('Invalid item ID, must be a positive integer'),
        validate
    ],
    itemController.getItemById
);

router.put(
    '/items/:id',
    [
        param('id').isInt({ gt: 0 }).withMessage('Invalid item ID, must be a positive integer'),
        body('name').optional().notEmpty().withMessage('Name cannot be empty'),
        body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be greater than zero'),
        body('category').optional().notEmpty().withMessage('Category cannot be empty'),
        validate
    ],
    itemController.updateItem
);

router.delete(
    '/items/:id',
    [
        param('id').isInt({ gt: 0 }).withMessage('Invalid item ID, must be a positive integer'),
        validate
    ],
    itemController.deleteItem
);

module.exports = router;
