// const getOptions = require('loader-utils').getOptions;
// const validate = require('schema-utils').validate;

// const schema = {
//     type: 'object',
//     properties: {
//         test: {
//             type: 'string',
//         },
//     },
// };

module.exports = function (source) {
    // const options = getOptions(this);

    // validate(schema, options, {
    //     name: 'Example Loader',
    //     baseDataPath: 'options',
    // });

    // Apply some transformations to the source...
    return `[${source}]`;
}