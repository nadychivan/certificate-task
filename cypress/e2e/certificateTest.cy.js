import 'cypress-file-upload';

describe('Certificate test', () => {

    before(() => {
        cy.visit('/')
        cy.get('[onclick="__runProject()"]').contains('Run this project').click();
    })


    it('Verify sertificate is successfully uploded to the form', () => {
        //Certificate owner test data
        const table = {
            name: 'Таксер Тест Тестерович',
            subject: 'SubjectCN:'
        };
        //Click the add buton
        cy.contains('Добавить').click();
        cy.get('.ng-isolate-scope').selectFile("cypress/fixtures/cert.cer", { action: 'drag-drop' });

        //Validation if certificate is uploaded 
        //const subjectData = 'Таксер Тест Тестерович';
        cy.get('table tbody tr').eq(0).then(($name) => {
            cy.wrap($name).find('th').should('contain', table.subject);
            cy.wrap($name).find('td').should('contain', table.name);

        });
        //Verify if SubjectCN is displayd at top header
        cy.get('div .list-group').find('a').should(($div) => {
            expect($div.get(0).innerText).to.eq(table.name);
        })



    });


});