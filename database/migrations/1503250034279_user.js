'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {

    this.create('roles', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 60).notNullable()
      table.timestamps()
    })

    this.create('users', (table) => {
      table.increments()
      table.integer('role_id').references('id').inTable('roles')
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('roles')
    this.drop('users')
  }
}

module.exports = UserSchema
