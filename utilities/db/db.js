const mongoose = require('mongoose');

module.exports.postToDB = async (model, document) => {
    const modelFound = await mongoose.model(model);
    const resultPromise = await modelFound.create(document);

    return resultPromise;
}

module.exports.getFromDB = async (model, params, populatekey) => {
    const modelFound = await mongoose.model(model);
    let documentFound;

    if (populatekey) {
        documentFound = await modelFound.find(params).populate(populatekey);
    }
    else {
        documentFound = await modelFound.find(params);
    }

    return documentFound;
}
