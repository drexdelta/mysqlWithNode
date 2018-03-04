exports.up = function (knex) {
    return knex.schema.createTable('userInfoTable', function (t) {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('gender').notNullable()
        t.string('handle').notNullable()
        t.timestamps(false, true)
    })
}
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user')
}