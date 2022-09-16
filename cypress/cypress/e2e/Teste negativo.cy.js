describe ('Cadastro no site Melhor Envio', ()=>{

    var dados = {
        name: 'Pedro',
        email: 'pedro56@gmail.com',
        last_name: 'Freitas',
        cpf: '70747858063',
        birth_date: '26051993',
        phone_number: '21999888942',
        password: 'Pedro@123',
        shop_name: 'pedro store 2',
        cnpj: '72.611.763/0001-80',
        cep: '21710190 ',
        adress_number: '300',
        address_complement: 'Fundos'
     }

    it ('Usuário deve acessar o site e informar os primeiros dados', ()=> {
        cy.wait(1000)
        cy.visit('https://sandbox.melhorenvio.com.br/cadastre-se')
        cy.wait(100)
        cy.get('input[id="iptNome"]').type(dados.name)
        cy.get('input[id="iptEmail"]').type(dados.email)
        cy.wait(1000)
        cy.get('button[name="Avançar formulário"]').click()
        cy.wait(1000)
    })

    it ('Usuário deve finalizar o cadastro de dados pessoais', ()=> {
        cy.get('input[id="iptSobrenome"]').type(dados.last_name)
        cy.get('input[id="iptCPF"]').type(dados.cpf)
        cy.get('input[id="iptDtNascimento"]').type(dados.birth_date)
        cy.get('input[id="iptCelular"]').type('21987654abc') //dado incorreto para testar a validação
        cy.get('input[id="iptConfirmaEmail"]').type(dados.email)
        cy.get('input[id="iptSenha"]').type(dados.password)
        cy.get('input[id="iptConfirmaSenha"]').type(dados.password)
        cy.get('label[for="chkTermos"]').click()
        cy.get('button[name="Avançar formulário"]').click().click().click()
        cy.wait(1000)
    })

    it ('Usuário deve preencher as informações sobre o seu negócio', ()=> {
        cy.get('input[id="iptNomeFantasiaEmpresa"]').type(dados.shop_name)
        cy.get('input[id="iptCNPJ"]').type(dados.cnpj)
        cy.get('input[id="iptCepEmpresa"]').type(dados.cep)
        cy.get('input[id="iptNumeroEmpresa"]')
        cy.get('input[id="iptNumeroEmpresa"]').type(dados.adress_number)
        cy.get('input[id="iptComplementoEmpresa"]').type(dados.address_complement)
        cy.get('button[name="Avançar formulário"]').click()
        cy.wait(500)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it ('Usuário deve realizar login', ()=> {
        cy.visit('https://sandbox.melhorenvio.com.br/login')
        cy.get('input[id="username"]').type(dados.email)
        cy.get('input[id="password"]').type(dados.password)
        cy.get('button[name="Acessar o Melhor Envio"]').click()
        cy.get('div[class="card-container card-container--center-align"]').contains('Ainda não').click()
        cy.get('button[name="Avançar formulário"]').click()
        cy.wait(5000)
        cy.visit('https://sandbox.melhorenvio.com.br/login')
    })

})