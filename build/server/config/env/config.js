var extension = 'js';
if (process.env.NODE_ENV == 'development') {
    extension = 'js';
}
module.exports = function () { return require("../env/" + process.env.NODE_ENV + ".env." + extension); };
