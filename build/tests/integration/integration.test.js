"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de integração', function () {
    describe('GET /', function () {
        it('Deve retornar a mensagem Hello, world! ', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello world');
                done(error);
            });
        });
    });
    describe('GET /ola/:nome', function () {
        it('Deve retornar a mensagem Hello, TypeScript Course', function (done) {
            var nome = 'TypeScript Course';
            helpers_1.request(helpers_1.app)
                .get('/ola/${nome}')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Olá ${req.params.nome}');
                done(error);
            });
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um json com todos os usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        }); //
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um json co apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/${1}')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', function () {
        it('Deve criar um novo usuário', function (done) {
            var user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/new')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id/edit', function () {
        it('Deve atualizar um  usuário', function (done) {
            var user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .put('/api/users/${1}/edit')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id/', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .put('/api/users/${1}')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
//
