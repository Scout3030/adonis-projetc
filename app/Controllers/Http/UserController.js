'use strict'

class UserController {
  async store ({ request, response }) {
  	response.json("Creamos un usuario")
  }
}

module.exports = UserController
