const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
var uuid = require('node-uuid');
var randomID = uuid.v4();
var url = '/reviewed' + randomID; 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.get('/siberian',function(req,res,next){
    res.sendFile(__dirname+'/public/siberian.html');
    })

app.get('/see_review',function(req,res){
    var data = fs.readFileSync('comments/'+randomID+'.txt', 'utf8');
    res.send(data);

})

app.get('/id',function(req,res){
    res.send(randomID)
})



app.get('/bengal',function(req,res,next){
    res.sendFile(__dirname+'/public/bengal.html');
    })

app.get('/indochinese',function(req,res,next){
    res.sendFile(__dirname+'/public/indochinese.html');
    })

app.get('/malayan',function(req,res,next){
    res.sendFile(__dirname+'/public/malayan.html');
    })
    
app.get('/southchinatiger',function(req,res,next){
    res.sendFile(__dirname+'/public/south china.html');
    })

app.get('/error_find',function(req,res,next){
    res.sendFile(__dirname+'/public/error.html');
    })

app.get('/about_tigers',function(req,res){
    res.sendFile(__dirname+'/public/abouttigers.html');
})


app.get('/review',function(req,res){
    var uuid = require('node-uuid');
    var randomID = uuid.v4();
    var url = '/reviewed' + randomID; 
    res.sendFile(__dirname+'/public/review.html');
})
app.post('/review',function(req,res){
    if (req.body.username === ""){
        res.send({redirect:true, url:"http://localhost:3000/review"});

    }
    else {
    res.send({redirect:true, url:url})
    res.end()
    console.log(req.body.username)
    console.log(req.body.comment)
    var stream = fs.writeFile('comments/'+randomID+'.txt', req.body.username +'\n'+ req.body.comment, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }); 
    
    }
    })
app.get(url,function(req,res){
    res.sendFile(__dirname+'/public/thank.html')
})

app.post('/review',function(req,res){
    console.log(req.body.per);
})

app.get('/review/:id',function(req,res){
    res.send(req.params.id);
    console.log(req.params);
    console.log('test')

})

    app.post('/',function(req,res){
        console.log(req.body.name);
        var src=req.body.name
        if (src === 'Siberian Tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/siberian"})
            //res.end()
            //console.log('Siberian');
        }else if(src === 'Siberian'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/siberian"})
            //res.end()
            //console.log('Siberian');
        }else if(src==='siberian'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/siberian"})
            //res.end()
            //console.log('Siberian');  
        }else if(src ==='siberian tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/siberian"})
            //res.end()
            //console.log('Siberian');  
        }else if(src === 'Bengal Tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/bengal"})
        }else if(src === 'Bengal'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/bengal"})
        }else if(src === 'bengal tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/bengal"})
        }else if(src === 'bengal'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/bengal"})
        }else if(src === 'Indochinese Tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/indochinese"})
        }else if(src === 'indochinese tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/indochinese"})
        }else if(src === 'Indochinese'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/indochinese"})
        }else if(src === 'indochinese'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/indochinese"})
        }else if(src === 'Malayan Tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/malayan"})
        }else if(src === 'malayan tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/malayan"})
        }else if(src === 'Malayan'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/malayan"})
        }else if(src === 'malayan'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/malayan"})
        }else if(src === 'South China Tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})
        }else if(src === 'South Chinese Tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})
        }else if(src === 'south china tiger'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})
        }else if(src === 'South China'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})
        }else if(src === 'south china '){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})
        }else if(src === 'South Chinese '){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})
        }else if(src === 'south chinese'){
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/southchinatiger"})

        }else if(src === ''){
            return
        }
        else{
            console.log('redirect')
            res.send({redirect:true, url:"http://localhost:3000/error_find"})
        }
       })
app.listen(3000)