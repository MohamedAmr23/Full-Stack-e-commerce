import Joi from "joi";

export const createBrandSchema=Joi.object({
    name:Joi.string().min(2).max(20).required()
})

export const getAndDeleteBrandSchema=Joi.object({
    id:Joi.string().hex().length(24).required()
})

export const updateBrandSchema=Joi.object({
    name:Joi.string().min(2).max(20).required(),
    id:Joi.string().hex().length(24).required(),
    logo:Joi.string().min(2)
})