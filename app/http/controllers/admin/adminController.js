const controller = require('app/http/controllers/controller')

class indexController extends controller {
  index(req, res) {
    res.json('Admin page')
  }

  courses(req, res) {
    res.json('course page')
  }
}

module.exports = new indexController()