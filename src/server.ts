import fastify from 'fastify'
import {prisma} from './lib/prisma'

const app = fastify()

//http://localhost:3333/cadastrar
app.get('/cadastrar', async () => {
     await prisma.trip.create({
        data:{
            destination: 'Ribeirão Preto',
            ends_at: new Date,
            starts_at: new Date
        }
    })

    return 'Registro cadastrado com sucesso'
})

http://localhost:3333/listar
app.get('/listar', async () => {
    const trips = await prisma.trip.findMany()
    return trips
})

app.listen({ port:3333 }).then(() => {
    console.log('Server running!')
})