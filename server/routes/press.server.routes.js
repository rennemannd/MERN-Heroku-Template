const press = require('../controllers/press.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(press.getAll)
  .post(press.createNew)

router.route('/update')
  .post(press.updateExisting)
  
module.exports = router;