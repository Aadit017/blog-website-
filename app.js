const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require('lodash')
const homeStartingContent = " This is a blog website project currently without having any database .   \
A DATABASE will be added pretty soon . To create a blog please go to the compose page"
const aboutContent ="This is a sample project created by Aadit Singh Bagga , a enthusiastic coder \
who wishes to be a full stack web developer . He has a keen interest in technologies like deno , socket io , firebase  \
.He likes creating ui/ux design in his free time. He knows Java, Javascript , Css+Html, Sass , Python , Rust(basics only). He wishes to learn typescript , angular and flutter \
and react native one day . His main strength in react and he can build fully fledged static and dynamic websites . "  
const contactContent = "this the contact me page"
const app = express();
var storage=[]
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get('/',function(req,res){ 
  res.render("home",{homeContent:homeStartingContent,posts:storage})
})
app.get('/about',function(req,res){ 
  res.render("about",{aboutContent:aboutContent})
})
app.get('/contact',function(req,res){ 
  res.render("contact",{contactContent:contactContent})
})
app.get('/compose',function(req,res){ 
  res.render("compose")
})
app.get("/posts/:topic",function(req,res){ 
  let message="Match not found"
    for(let i =0;i<storage.length;i++){
    if(req.params.topic == storage[i].title){ 
      message="Match Found!"    
      res.render("post",{postTitle:storage[i].title,postContent:storage[i].content})
}
// because the res render website in the for loop 
// so the storage[i]title .. is the same [i] where the found was mathced .
console.log(message)
}})
app.post('/compose',function(req,res){ 
  let post={ 
    title:req.body.title,
    content:req.body.textAr
  };
  storage.push(post)
  setTimeout(function (){ 
    res.redirect('/')
  },200)
})
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started 💩💩💩");
});
