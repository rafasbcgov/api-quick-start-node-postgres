const Router = require('express-promise-router')
const router = new Router()

const db = require('../db/db')

router.get('user/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    res.send({
        result: rows[0]
    })
  })

router.get('/sample', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM test')
    res.send({
        result: rows[0]
    })
})

module.exports = router