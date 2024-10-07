import Joi from "joi";

export const createsubCategorySchema=Joi.object({
    name:Joi.string().min(2).max(20).required(),
    category:Joi.string()
})

export const getAndDeletesubCategorySchema=Joi.object({
    id:Joi.string().hex().length(24).required()
})

export const updatesubCategorySchema=Joi.object({
    name:Joi.string().min(2).max(20).required(),
    id:Joi.string().hex().length(24).required(),
    category:Joi.string()
})