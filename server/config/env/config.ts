let extension: string = 'js';
if(process.env.NODE_ENV == 'development') {
  extension = 'js';
}
module.exports = () => require(`../env/${ process.env.NODE_ENV }.env.${ extension }`);
