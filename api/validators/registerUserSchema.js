import joi from 'joi'

const registerUserSchema = joi.object({
  user: joi.object({})
})

export default registerUserSchema
