import fastify from 'fastify'
import { createTrip } from './routes/create-trip'
import { confirmTrip } from './routes/confirm-trip'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
    origin: '*',
})

app.register(createTrip)
app.register(confirmTrip)

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.listen({ port:3333 }).then(() => {
    console.log('Server running!')
})