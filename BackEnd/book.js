const express = require('express');
const sequelize = require('./configuration/config');
const books = require ('./models/book');
const app = express();
const cors=require('cors');
//const exchange_transaction = require('./models/exchange_transaction');
const users = require('./models/user');
const exchange_transactions = require('./models/exchange_transaction');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

//get all the books 

app.get('/get_books',function(req,res){

books.findAll({ where: { is_borrowed:0}}).then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });

  // get all owners 

  app.get('/get_owners',function(req,res){

    users.findAll().then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });


  //get book owner Details


  app.get('/get_owner/:id',function(req,res){

    users.findByPk(req.params.id).then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  });
  
  // owner get user by Email 


  app.get('/get_owner/email/:email',function(req,res){

    users.findByPK( req.params.email).then(function(result){
  
      console.log("inside app get"+req.params.email);
      res.send(result);
    }).catch(function(err){
      console.log("inside app get"+req.params.email);
      res.send(err);
    });
  });
  
  
  //get book by ID

  

app.get('/get_book/:id',function(req,res){

  books.findByPk(req.params.id).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });
});





//Add book

app.post('/add_book',function(req,res){

  books.create({ title: req.body.title,author:req.body.author, publish_date:req.body.publish_date, image_source:req.body.image_source,abstract:req.body.abstract, owner_email:req.body.owner_email,is_borrowed:0}).then(function(result){

    console.log("registered"+result); 

  }).catch(function(err){
    res.send(err);
  });
  
});



//Add book borrower

app.post('/add_user/borrower',function(req,res){

  users.create({ name: req.body.name, phone:req.body.phone, email:req.body.email,Is_Owner:0, Is_Borrower:1 }).then(function(result){

    console.log("registered"+result); 

  }).catch(function(err){
    res.send(err);
  });
  
});


//Add book owner

app.post('/add_user/owner',function(req,res){

  users.create({ name: req.body.name,phone:req.body.phone, email:req.body.email, Is_Owner:1,Is_Borrower:0 }).then(function(result){

    console.log("registered"+result); 

  }).catch(function(err){
    res.send(err);
  });
  
});


//add transaction

app.post('/add_transaction',function(req,res){

  exchange_transactions.create({ user_email: req.body.user_email,is_borrowed:1,bookId:req.body.bookId }).then(function(result){

    //console.log("sucesss");

  }).catch(function(err){
    res.send(err);
  });
  
});

//update on transaction

app.patch('/update_book_status/:id',function(req,res,next){

  books.update({ is_borrowed: 1 }, { where: {id: req.params.id}}).then(function(result){
  
    console.log("PATCH call successful value returned in body", result);
      
    }).catch(function(err){
      res.send(err);
    });
    
  }); 

//console message: display server running

app.listen(3050, function () {
    console.log("server running on port 3050");
  });
  
