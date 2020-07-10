const express =  require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const app = express();
const Contact = require('./models/contact');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// var contactList = [
//     {
//         name: "Bhavuk",
//         phone: "123456789"
//     },
//     {
//         name: "Ironman",
//         phone: "9999999999"
//     },
//     {
//         name: "Coding Ninjas",
//         phone: "555555555"
//     }
// ]


app.get('/', function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;

        }
        console.log(contacts);
        return res.render('home', 
        {
            title: "My Contacts List",
            contact_list: contacts
        });
    })


  
});
app.get('/practice', function(req,res){
    
    return res.render('practice', 
    {
        title: "Let's Practice"
    });
});


app.post('/create-contact',function(req,res){
    //contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err,newContact){
        if(err){
            console.log('error in creating a contact');
            return;
        }

        //console.log('***********',newContact);
        res.redirect('back');
    });
    
});


app.get('/practice2',function(req,res){
    return res.render('practice2', {
        title: "practice2"
    })
});

app.get('/delete-contact/',function(req,res){
    Contact.findByIdAndDelete("req.query.id",function(err,contacts){
        if(err){
            console.log('Error in deleting object from  db');
            return;

        }
        
        res.redirect('back');
    })
    
    
});
app.listen(port, function(err){

    if(err){
        Console.log('Error in running the server', err);
        Console.log('Error in running the server', err);
        Console.log('Error in running the server', err);
    }

    console.log('Yup! My Express server is running on Port:', port);
});
