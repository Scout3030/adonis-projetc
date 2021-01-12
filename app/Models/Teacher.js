'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teacher extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  courses () {
    return this.hasMany('App/Models/Course')
  }
}

module.exports = Teacher
