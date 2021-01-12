'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SectionSchema extends Schema {
  up () {
    this.create('sections', (table) => {
      table.increments()
      table.integer('grade_id').references('id').inTable('grades')
      table.string('name')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('sections')
  }
}

module.exports = SectionSchema
