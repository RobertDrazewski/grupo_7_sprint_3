const path = require('path');
const mainController = {


index: (req,res)=>{
    res.render('index')
},
productCart: (req,res)=>{
    res.render('productCart')
},
register: (req,res)=>{
    res.render('register')
},
productDetail: (req,res)=>{
    res.render('productDetail')
},
login: (req,res)=>{
    res.render('login')
}


}

module.exports= mainController