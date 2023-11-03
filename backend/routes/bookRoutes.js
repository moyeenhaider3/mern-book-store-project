import express from "express";
import { Book } from "../models/bookModel.js";

const router=express.Router();
//Route for fetching all books

router.get("/",async (req,res)=> {
    try {
        const books=await Book.find({});
        // return res.status(200).json({
        //     count:books.length,
        //     data:books});
        return res.status(200).json(books);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

//Route for fetching a book

router.get("/:id",async (req,res)=> {
    try {
        const {id}=req.params;
        const result=await Book.findById(id);
        // return res.status(200).json({
        //     count:books.length,
        //     data:books});
        if(!result){
            return res.status(404).send("Book not found");
        }else{
            return res.status(200).json(result);
        }
        // return res.status(200).json(book);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});



//Route for updating book
router.put("/:id",async(req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
           return res.status(303).send("Please send all required fields");
        }
        const {id}=req.params;

        const result=await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).send("Book not found");
        }else{
            return res.status(200).send("Book Successfully updated");
        }
    } catch (error) {
        console.log(error);
    }
});

//Route for creating book
router.post("/",async(req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
           return res.status(303).send("Please send all required fields");
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book=await Book.create(newBook);
       return res.status(200).send(book);
    } catch (error) {
        console.log(error);
    }
});



//Route for deleting a book
router.delete("/:id",async(req,res)=>{
    try {
     const {id}= req.params;
     const result= Book.findByIdAndDelete(id);

     if(!result){
        return res.status(404).send("Book not found");
    }else{
        return res.status(200).send("Book Successfully delete");
    }
    } catch (error) {
        console.log(error);
    }
});

export default router;