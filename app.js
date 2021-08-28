var express = require('express');
var path = require('path');
const session = require('express-session');


var fs= require('fs');
const { constants } = require('buffer');
const { on } = require('process');
const { randomInt } = require('crypto');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'Books',
  resave: true,
  saveUninitialized: false
}))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res){
  res.render('login',{error:""})
});
app.post('/',function(req, res){
  var x= req.body.username;
   var xx= req.body.password;
  // all1=x;
  // all2=xx;
  // see2=[];
    da = fs.readFileSync("users.json");
  var yy= 0;
  var z = JSON.parse(da);

  if (x=== "" && xx === ""){
    res.render('login',{error:"username and  password cannot be empty"})
    yy=2;

  }
  
  else if (x=== "" && xx != ""){
    res.render('login',{error:"  username cannot be empty"})
    yy=2;

  }

  else if (x != "" && xx === ""){
    res.render('login',{error:"password  cannot be empty"})
    yy=2;

  }
  
  else{
  for (var i=0;z.length>i;i++){
    

    if(z[i].username===x && z[i].password===xx){
     // see2=z[i].readli;

      req.session.currentuser=z[i]

      res.render('home');
      yy=1;
    }

  }
}

  if(yy===0){
    res.render('login',{error:"wrong username or password"})
  }

}
);
 

app.get('/home',function(req, res){
  res.render('home')
  
});

app.get('/readlist',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  see2=[];
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      see2=z[i].readli;
      res.render('readlist')
     
    }
  
}
   
});

app.get('/novel',function(req, res){
 
 da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('novel')
    }
  }
});
app.get('/poetry',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('poetry')
    }
  }
});
app.get('/fiction',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('fiction')
    }
  }
});
app.get('/sun',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('sun',{error:""})
    }
  }
});

app.post('/search',function(req, res){
   ss= (req.body.Search).toUpperCase();
  var names = [{name:"Lord of the Flies",url:"flies"},{name:"The Grapes of Wrath",url:"grapes"},
  {name:"Leaves of Grass",url:"leaves"},{name:"The Sun And her Flowers",url:"sun"},{name:"Dune",url:"dune"},{name:"To Kill a Mockingbird",url:"mockingbird"}];
   sea=[];
  var i =0;
  for ( i;i<names.length;i++){
    if (names[i].name.toUpperCase().includes(ss)){
    sea.push(names[i]);
  }
}
if (sea.length===0){
  res.render('searchresults',{error:"book not found"});

}
else {
  res.render('searchresults',{error:""})
}});
app.get('/mockingbird',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('mockingbird',{error:""})
    }
  }
});
app.get('/leaves',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('leaves',{error:""})
    }
  }

  
});

app.get('/grapes',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('grapes',{error:""})
    }
  }
});
app.get('/flies',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('flies',{error:""})
    }
  }
});

app.post('/flies',function(req, res){
  

  var see={name:"Lord of the Flies",url:"flies"};
  var z3=0;
  var da = fs.readFileSync("users.json");
  var z1 = JSON.parse(da);
  
  for (var i=0 ; i<z1.length;i++){
    if (z1[i].username===req.session.currentuser.username && z1[i].password===req.session.currentuser.password){
      z3=0;
      for(var j=0;j<z1[i].readli.length;j++){
      if(z1[i].readli[j].name === see.name){ 
        z3=1; 
        res.render('flies',{error:"Book already exists in want to read list"});
    }}
    if(z3===0){
      z1[i].readli.push(see);
        see2=z1[i].readli;
        var all3=JSON.stringify(z1);
        fs.writeFileSync("users.json",all3);
  }
  }
  }
 // res.render('flies',{error:""});
})
app.post('/dune',function(req,res){
  var z3=0;
  var da = fs.readFileSync("users.json");
  var z1 = JSON.parse(da);
  var see={name:"Dune",url:"dune"};
  for (var i=0 ; i<z1.length;i++){
    if (z1[i].username===req.session.currentuser.username && z1[i].password===req.session.currentuser.password){
      z3=0;
      for(var j=0;j<z1[i].readli.length;j++){
      if(z1[i].readli[j].name === see.name){ 
        z3=1; 
        res.render('dune',{error:"Book already exists in want to read list"});
        
    }}
    if(z3===0){
      z1[i].readli.push(see);
        see2=z1[i].readli;
        var all3=JSON.stringify(z1);
        fs.writeFileSync("users.json",all3);
  }
  }
  }
 // res.render('dune',{error:""});
})

app.post('/grapes',function(req,res){
  
  var see={name:"The Grapes of Wrath",url:"grapes"};
  var z3=0;
  var da = fs.readFileSync("users.json");
  var z1 = JSON.parse(da);
  
  for (var i=0 ; i<z1.length;i++){
    if (z1[i].username===req.session.currentuser.username && z1[i].password===req.session.currentuser.password){
      z3=0;
      for(var j=0;j<z1[i].readli.length;j++){
      if(z1[i].readli[j].name === see.name){ 
        z3=1; 
        res.render('grapes',{error:"Book already exists in want to read list"});
    }}
    if(z3===0){
      z1[i].readli.push(see);
        see2=z1[i].readli;
        var all3=JSON.stringify(z1);
        fs.writeFileSync("users.json",all3);
  }
  }
  }
  //res.render('grapes',{error:""});
})
app.post('/leaves',function(req,res){
  
  var see={name:"Leaves of Grass",url:"leaves"};
  var z3=0;
  var da = fs.readFileSync("users.json");
  var z1 = JSON.parse(da);
  
  for (var i=0 ; i<z1.length;i++){
    if (z1[i].username===req.session.currentuser.username && z1[i].password===req.session.currentuser.password){
      z3=0;
      for(var j=0;j<z1[i].readli.length;j++){
      if(z1[i].readli[j].name === see.name){ 
        z3=1; 
        res.render('leaves',{error:"Book already exists in want to read list"});
    }}
    if(z3===0){
      z1[i].readli.push(see);
        see2=z1[i].readli;
        var all3=JSON.stringify(z1);
        fs.writeFileSync("users.json",all3);
  }
  }
  }
 // res.render('leaves',{error:""});
})

app.post('/mockingbird',function(req,res){
  
  var see={name:"To Kill a Mockingbird",url:"mockingbird"};
  var z3=0;
  var da = fs.readFileSync("users.json");
  var z1 = JSON.parse(da);
  
  for (var i=0 ; i<z1.length;i++){
    if (z1[i].username===req.session.currentuser.username && z1[i].password===req.session.currentuser.password){
      z3=0;
      for(var j=0;j<z1[i].readli.length;j++){
      if(z1[i].readli[j].name === see.name){ 
        z3=1; 
        res.render('mockingbird',{error:"Book already exists in want to read list"});
    }}
    if(z3===0){
      z1[i].readli.push(see);
        see2=z1[i].readli;
        var all3=JSON.stringify(z1);
        fs.writeFileSync("users.json",all3);
  }
  }
  }
//  res.render('mockingbird',{error:""});
})
app.post('/sun',function(req,res){
  
  var see={name:"The Sun And her Flowers",url:"sun"};
  var z3=0;
  var da = fs.readFileSync("users.json");
  var z1 = JSON.parse(da);
  
  for (var i=0 ; i<z1.length;i++){
    if (z1[i].username===req.session.currentuser.username && z1[i].password===req.session.currentuser.password){
      z3=0;
      for(var j=0;j<z1[i].readli.length;j++){
      if(z1[i].readli[j].name === see.name){ 
        z3=1; 
        res.render('sun',{error:"Book already exists in want to read list"});
    }}
    if(z3===0){
      z1[i].readli.push(see);
        see2=z1[i].readli;
        var all3=JSON.stringify(z1);
        fs.writeFileSync("users.json",all3);
  }
  }
  }
 // res.render('sun',{error:""});
})

app.get('/dune',function(req, res){
  da = fs.readFileSync("users.json");
  var z = JSON.parse(da);
  for (var i=0;z.length>i;i++){
    if(z[i].username===req.session.currentuser.username && z[i].password===req.session.currentuser.password){
      
      res.render('dune',{error:""})
    }
  }
});
app.get('/registration',function(req, res){

    res.render('registration',{error:""})
  
});
app.post('/register',function(req, res){
  var x= req.body.username;
  var xx= req.body.password;
  var xy=[];
  var daa = fs.readFileSync("users.json");
  var yy= 0;
  if (x=== "" && xx === ""){
    res.render('registration',{error:"username and  password cannot be empty"})
    yy=1

  }
  
  else if (x=== "" && xx != ""){
    res.render('registration',{error:"  username cannot be empty"})
    yy=1

  }


  else if (x != "" && xx === ""){
    res.render('registration',{error:"password  cannot be empty"})
    yy=1

  }


  else{
   var z = JSON.parse(daa);
  var newUser= {username:x,password:xx,readli:xy};
  
  if(z.length===0){
  z.push(newUser);
  var y=JSON.stringify(z);
  fs.writeFileSync("users.json",y);
  yy=2;
  }
  else{
  for (var i=0;z.length>i;i++){
    

    if(z[i].username===x){
      res.render('registration',{error:"already used username"})
      yy=1;
    }

  }
}
  if(yy===0){
    res.render('login',{error:""});
    z.push(newUser);
    var y=JSON.stringify(z);
    fs.writeFileSync("users.json",y);
   // res.render('login',{error:""});
   // res.render('home');
  }
 // res.render('home');
}
  
});
app.listen(process.env.PORT || 3000);