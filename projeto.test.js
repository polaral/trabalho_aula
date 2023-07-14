const test = require('tape')
const supertest = require('supertest')
const divisao = require ('./projeto.js')

    test('teste api 30-5', (t) => {
        supertest(divisao)
        .get('/aplicarDesconto/30')
        .expect('Content-Type',/json/)
        .expect(200)
        .end((err, res) => {
            t.assert(res.body.valorDescontado === 30, 'Desconto correto')
            t.end()       
         })
 })