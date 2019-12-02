const project = require('../controllers/project.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(project.getAll)
  .post(project.createNew)

router.route('/update')
  .post(project.updateExisting)
  
module.exports = router;