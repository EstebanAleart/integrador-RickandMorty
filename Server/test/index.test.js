const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {

        it(' Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200)
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async () => {
            const response=(await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id")
            expect(response).toHaveProperty("name")
            expect(response).toHaveProperty("species")
            expect(response).toHaveProperty("gender")
            expect(response).toHaveProperty("status")
            expect(response).toHaveProperty("origin")
            expect(response).toHaveProperty("image")
            
        });

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/asd123').expect(500)
        });


        
    });
    describe('GET /rickandmorty/login', () => {
        it('La info de login es correcta', async () => {
            const response= (await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=1234567")).body
            expect(response.access).toEqual(true)
        });
        it('La info de login es incorrecta', async () => {
            const response= (await agent.get("/rickandmorty/login?email=lerolero@gmail.com&password=12")).body
            expect(response.access).toEqual(false)
        });
    
        
    });
    describe('POST /rickandmorty/fav', () => {
        const char = { name: 'Rick rick rick' };
        const charA= {name: "morty morty morty"};

        it('Debería devolver un arreglo con el elemento enviado por body', async () => {
            

            const response = await agent.post('/rickandmorty/fav').send(char);
            expect(response.body).toContainEqual(char);
        
            });
            it('Debería devolver un arreglo con el elemento enviado por body y el previo', async () => {
            

                const response = await agent.post('/rickandmorty/fav').send(charA);
                expect(response.body).toContainEqual(char);
                expect(response.body).toContainEqual(charA);
            
                });
        })
        describe('DELETE /rickandmorty/fav/:id', () => {
            const char = { id:1,name: 'Rick rick rick' };
            const charA= {id:2, name: "morty morty morty"};
            it('Debe devolver un arreglo con los elementos previos sin modificar si el ID no existe',async  () => {
                const {body}= await agent.delete("rickandmorty/fav/5");
                expect(body).toContainEqual(char);
                expect(body).toContainEqual(charA);
            });
            
        });
        
    
});
