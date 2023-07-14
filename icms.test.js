const test = require('tape')
const supertest = require('supertest')
const divisao = require ('./icms')

    test('teste api 30-5', (t) => {
        supertest(divisao)
        .get('/aplicarDesconto/100')
        .expect('Content-Type',/json/)
        .expect(200)
        .end((err, res) => {
            t.assert(res.body.valorDescontado === 18, 'Desconto correto')
            t.end()       
         })
 })