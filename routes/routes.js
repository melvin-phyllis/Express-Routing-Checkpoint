import express from "express"

const routes = express.Router()

routes.get('/',(req,res)=>{

  console.log("accueil ok")
  res.render("accueil")
  
}).get('/service',(req,res)=>{

  console.log("service ok")
  res.render("service")
  
}).get("/contact",(req,res)=>{
  console.log("contact ok")
  res.render("contact")
})

routes.post("/api/sendmail",(req,res)=>{
  const body = req.body
  console.log(body)

  res.json({message :"Nous vous contacterons bientot"})
 
  
})
export default routes