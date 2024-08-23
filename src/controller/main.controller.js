const logger = require('./../config/logger')
const handler = async(req,res) => {
    logger.info('server in running')
    res.status(201).send({'msg':'Data Fetched'});
}
module.exports = {handler}