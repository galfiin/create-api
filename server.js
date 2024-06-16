import express from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())

const users = []


app.post('/usuarios', async (req, res) =>{
   await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }
    })
    res.status(201).json(req.body) //200 - que deu certo -> 201 - que deu certo e a pessoa criou o que voce pediu pra criar
})

app.get('/usuarios', async (req, res) =>{

    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) =>{
    
    await prisma.user.update({
        where:{
            id: req.params.id,
        },
         data: {
             name: req.body.name,
             age: req.body.age,
             email: req.body.email,
         }
     })
     res.status(201).json(req.body) 
 })


app.listen(3000)

/* 
query params(get) -> quando voce salva as informações na url ex: www.google.com/series?filme=comedia&streaming=netflix
route params(get/put/delete) -> quando busca algo expecifico ex: 
get servidor.com/usuario/22 
put servidor.com/usuario/22 
delete servidor.com/usuario/22 

body params(post e put)

{
"nome": Rodolfo
"idade": 22
}

*/





/*

    Criar nossa API de usuarios

    - Criar um usuário
    - listar todos os usuários
    - Editar um usuario 
    - Deletar um usuário

*/

/*
metodos http


get = listar
post = criar
put = editar varios
patch = editar um 
delete = deletar
*/ 

/*
rotas precisam de metodos http -> a rota
e o endereço para onde vai

ex: www.pedro.com/gostoso   
*/

/*
Http status:

2xx - Sucesso
4xx - erro do cliente
5xx - erro do servidor
*/