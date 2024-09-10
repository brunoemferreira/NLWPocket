// biome-ignore lint/style/useImportType: <explanation>
import {
    serializerCompiler,
    validatorCompiler,
    ZodTypeProvider
} from "fastify-type-provider-zod";
import fastify from "fastify";
import { createGoal } from "../functions/create-goal";
import z from "zod";


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.post('/goals', {
    schema: {
        body: z.object({
            title: z.string(),
            desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
    },
})














app.post('/goals', async (request) => {




    const createGoalSchema = z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
    })

    const body = createGoalSchema.parse(request.body);

    await createGoal({
        title: body.title,
        desiredWeeklyFrequency: body.desiredWeeklyFrequency
    })
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('🚀 HTTP Server Running !!!')
})