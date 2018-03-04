exports.up = function (knex) {
    return knex.schema.createTable('postsInfoTable', function (t) {
        t.increments('postId').primary()
        t.string('userId').notNullable()
        t.string('content').notNullable()
        t.timestamps(false, true)
    })
}
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('postsInfoTable')
}