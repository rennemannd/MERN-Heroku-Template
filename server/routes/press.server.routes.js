const press = require('../controllers/press.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(press.getAll)
  .post(press.createNew)

<<<<<<< HEAD
router.route('/update')
=======
router.route('/u')
>>>>>>> 39c8c46274e5fd36309e8141f9b331aaf961127c
  .post(press.updateExisting)
  
module.exports = router;