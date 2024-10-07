import Joi from "joi";

export const createProductSchema=Joi.object({
    title:Joi.string().min(2).max(20).required(),
    price:Joi.string().min(0).required(),
    ratingAvg:Joi.string().min(1).max(5).required(),
    ratingCount:Joi.string().min(0).required(),
    description:Joi.string().min(2).max(300).required(),
    quantity:Joi.string().min(0).required(),
    sold:Joi.string().min(0).required(),
    image:Joi.string().required(),
    category:Joi.string(),
    subCategory:Joi.string()
})

export const getAndDeleteProductSchema=Joi.object({
    id:Joi.string().hex().length(24).required()
})

export const updateProductSchema=Joi.object({
    title:Joi.string().min(2).max(20).required(),
    id:Joi.string().hex().length(24).required(),
    category:Joi.string(),
    price:Joi.string().min(0).required(),
    ratingAvg:Joi.string().min(1).max(5),
    ratingCount:Joi.string().min(0),
    description:Joi.string().min(2).max(300),
    quantity:Joi.string().min(0),
    sold:Joi.string().min(0),
    image:Joi.string(),
    subCategory:Joi.string()
})