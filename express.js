// // always write type:module Enables import/export syntax: Allows you to break code into reusable, organized modules.

// import express from "express"
// import {celbrity} from data.js

// const PORT = 8000

// const app = express

// const celebrity ={
//     type:"hero",
//     name:"uday"
// }

// we  can aceess date using this
// app.get('/',(req,res)=>{
//     res.json(celebrity)
// })

// app.listen(PORT,()=> console.log("done"))

// Quey param (means accesing anything by typing stuf)

// app.get('/',(req,res)=>{
//    let finaldata = celebrity 
//     const {industry, country,is_need_role}=req.query
//     if(industry){
//      finaldata=finaldata.filter(celeb=> celeb.industry.toLowecase()===industry.toLowercase())}   
// "for bollean now"
//    if(is_role){
//    finaldata=finaldata.filter(celeb=>celeb.is_role===json.parse(is_role.tolowwecase()))}  })
