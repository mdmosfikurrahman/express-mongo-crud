class CreateItemRequest {
    constructor({ name, category, price }) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

class UpdateItemRequest {
    constructor({ name, category, price }) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

class ItemResponse {
    constructor(item) {
        this.itemId = item.itemId;
        this.name = item.name;
        this.category = item.category;
        this.price = item.price;
        this.createdAt = item.createdAt;
        this.updatedAt = item.updatedAt;
    }
}

module.exports = {
    CreateItemRequest,
    UpdateItemRequest,
    ItemResponse,
};
