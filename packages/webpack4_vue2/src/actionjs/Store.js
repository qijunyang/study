export default class Store {
    constructor() {
        this.models = {};
    }
    persist(modelName, modelId) {

    }
    create(modelName, modelId) {

    }
    remove(modelName, modelId) {
        return "remove item " + modelId
    }
    fetch(modelName, modelId) {

    }
    fetchAll(modelName) {
        const rows = this.models[modelName].rows;
        for(let i = 0; i < 20; i++) {
            rows.push({});
        }
        return rows;
    }
    isLoaded(modelName, modelId) {

    }
    define(modelName, meta) {
        this.models[modelName] = {
            meta,
            rows: []
        };
    }
}