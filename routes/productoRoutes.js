const express=require('express')
const router = express.Router();
const Item = require('../models/Producto');

//Registrar un producto 

router.post('/',async(req,res)=>{
    try{
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);

    }catch{error}{
        res.status(400).json({error:error.message});
    }
    });

//Consultar todos los productos

router.post('/',async(req,res)=>{
    try{
        const items = await Item.find();
        res.json(items)

    }catch{error}{
        res.status(500).json({error:error.message});
    }
    });

//Consultar productos por ID

router.post('/.id',async(req,res)=>{
    try{
        const item = await Item.findById(req.params.id);
        if (!item)return res.status(404).json({error:"producto no encontrado"})
        res.json(item);

    }catch{error}{
        res.status(500).json({error:error.message});
    }
    });

//Modificar datos del producto

router.put('/.id',async(req,res)=>{
    try{
        const item = await Item.findByIdAndUpdate(req.params.id, req.params.body,{new:true});
        if (!item)return res.status(404).json({error:"producto no encontrado"})
        res.json(item);

    }catch{error}{
        res.status(500).json({error:error.message});
    }
    });

//Eliminar un producto 

router.delete('/.id',async(req,res)=>{
    try{
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item)return res.status(404).json({error:"producto no encontrado"})
        res.json(item);

    }catch{error}{
        res.status(500).json({error:error.message});
    }
    });


module.exports=router;