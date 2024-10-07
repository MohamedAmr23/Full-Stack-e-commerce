export const validation=(schema)=>{
    return(req,res,next)=>{
        const inputs={...req.body,...req.query,...req.params}
        const {error}=schema.validate(inputs,{abortEarly:false})
        if(error){
            let errors= error.details.map((detail)=>detail.message)
            res.json(errors)
        }else{
            next()
        }
    }
}