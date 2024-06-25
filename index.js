const express=require('express')
const {MongoClient}=require('mongodb')
const bodyParser=require('body-parser')
const url='mongodb+srv://tcollegewala30:fOcy87YhffoTWgnJ@cluster0.qqtdpgf.mongodb.net/b.net/'
const database='mia_mustaq'
const client=new MongoClient(url)
const port=process.env.PORT || 5000;
const app=express()
const path=require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'/public')))
app.get('/',async(req,resp)=>{
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('details')
    let data=await collection.find({}).limit(12).toArray()
    //resp.send(JSON.stringify(data))
    //console.log(data)
    var p1=1
    var p2=2
    var p3=3
    var p4=4
    var p11=11

    //resp.send(data)
    resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
})
app.post('/pagination',async(req,resp)=>{
    var result=await client.connect()
    var db=result.db(database)
    var collection=db.collection('details')
    
    var alldata=await collection.find({}).toArray()
    var pdata=[]
    pdata=alldata

    //resp.send(fdata)
    //var data=await collection.find({}).limit(12).toArray()
    var value=parseInt(req.body.value)
    //resp.send(value)
    var p1=1
    var p2=2
    var p3=3
    var p4=4
    var p11=11
    if(value==1){
        p1=1
        p2=2
        p3=3
        p4=4
        p5=11
        var data=[]
    //var fdata
    for (i=0;i<12;i++){
        //data[0]= fdata=await collection.findOne({"num":1})
        //data[i]= fdata=await collection.findOne({"num":i+1})
        data[i]=pdata[i]
    }
    resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
    //resp.send(data)
    }
    else if(value==2){
        p1=1
        p2=3
        p3=4
        p4=5
        p5=11
        var data=[]
        for (i=12;i<24;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<12;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
        //resp.send(data)
    }
    else if(value==3){
        p1=1
        p2=2
        p3=4
        p4=5
        p5=11
        var data=[]
        for (i=24;i<36;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<24;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
        //resp.send(data)
    }
    else if(value==4){
        p1=1
        p2=2
        p3=3
        p4=5
        p5=11
        var data=[]
        for (i=36;i<48;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<36;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
    }
    else if(value==5){
        p1=1
        p2=2
        p3=3
        p4=6
        p5=11
        var data=[]
        for (i=48;i<60;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<48;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
    }
    else if(value==6){
        p1=1
        p2=2
        p3=3
        p4=7
        p5=11
        var data=[]
        for (i=60;i<72;i++){
            ddata[i]=pdata[i]
        }
        for (i=0;i<60;i++){
            data.shift()
        }
        resp.render('index.ejs',{fdata,p1,p2,p3,p4,p11})
    }
    else if(value==7){
        p1=1
        p2=2
        p3=3
        p4=8
        p5=11
        var data=[]
        for (i=72;i<84;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<72;i++){
            data.shift()
        }
        resp.render('index.ejs',{fdata,p1,p2,p3,p4,p11})
    }
    else if(value==8){
        p1=1
        p2=2
        p3=3
        p4=9
        p5=11
        var data=[]
        for (i=84;i<96;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<84;i++){
            data.shift()
        }
        resp.render('index.ejs',{fdata,p1,p2,p3,p4,p11})
    }
    else if(value==9){
        p1=1
        p2=2
        p3=3
        p4=10
        p5=11
        var data=[]
        for (i=96;i<108;i++){
            ddata[i]=pdata[i]
        }
        for (i=0;i<96;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
    }
    else if(value==10){
        p1=1
        p2=2
        p3=3
        p4=4
        p5=11
        var data=[]
        for (i=108;i<120;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<108;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
    }
    else if(value==11){
        p1=1
        p2=2
        p3=3
        p4=5
        p5=11
        var data=[]
        for (i=120;i<127;i++){
            data[i]=pdata[i]
        }
        for (i=0;i<120;i++){
            data.shift()
        }
        resp.render('index.ejs',{data,p1,p2,p3,p4,p11})
    }
    
})
app.post('/Search',async(req,resp)=>{
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('details')
    var search_query=req.body.search
    var resu=await collection.find({"name":{$regex:".*"+search_query+".*",$options:'i'}}).toArray()
    if(result){
        resp.render(`search_result.ejs`,{resu})
    }
    else {
        resp.send("No Result found")
    }
})
app.get('/Search',async(req,resp)=>{
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('details')
    var search_query=req.query.search
    var resu=await collection.find({"name":{$regex:".*"+search_query+".*",$options:'i'}}).toArray()
    if(result){
        resp.render(`search_result.ejs`,{resu})
    }
    else {
        resp.send("No Result found")
    }
})
app.get('/FullVideo',async(req,resp)=>{
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('details')
    let collection2=db.collection('comments')
    var ran1=Math.floor(Math.random()*6)
    var ran2=Math.floor(Math.random()*6)
    let id=parseInt(req.query.id)
    let data=await collection.findOne({num:id})
    let comm=await collection2.find({"id":req.query.id}).toArray()
    let m1=Math.floor(Math.random()*127)
    let m2=Math.floor(Math.random()*127)
    let m3=Math.floor(Math.random()*127)
    let m4=Math.floor(Math.random()*127)
    let m5=Math.floor(Math.random()*127)
    let m6=Math.floor(Math.random()*127)
    let m7=Math.floor(Math.random()*127)
    let m8=Math.floor(Math.random()*127)
    var sm1=await collection.findOne({num:parseInt(m1)})
    var sm2=await collection.findOne({num:parseInt(m2)})
    var sm3=await collection.findOne({num:parseInt(m3)})
    var sm4=await collection.findOne({num:parseInt(m4)})
    var sm5=await collection.findOne({num:parseInt(m5)})
    var sm6=await collection.findOne({num:parseInt(m6)})
    var sm7=await collection.findOne({num:parseInt(m7)})
    var sm8=await collection.findOne({num:parseInt(m8)})
    if (comm==[]){
    let comm="undefined"
    resp.render('fullvideo.ejs',{data,ran1,ran2,comm,sm1,sm2,sm3,sm4,sm5,sm6,sm7,sm8})
    }
    else{
        resp.render('fullvideo.ejs',{data,ran1,ran2,comm,sm1,sm2,sm3,sm4,sm5,sm6,sm7,sm8})
    }
    
})
app.post('/comment',async(req,resp)=>{
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection('comments')
    let collection2=db.collection('details')
    let comment=req.body.comment
    let id=req.body.id
    let insert=await collection.insertOne({
        "comments":comment,
        "id":id
    })
    let comm=await collection.find({"id":id}).toArray()
    var ran1=Math.floor(Math.random()*6)
    var ran2=Math.floor(Math.random()*6)
    let did=parseInt(id)
    let m1=Math.floor(Math.random()*127)
    let m2=Math.floor(Math.random()*127)
    let m3=Math.floor(Math.random()*127)
    let m4=Math.floor(Math.random()*127)
    let m5=Math.floor(Math.random()*127)
    let m6=Math.floor(Math.random()*127)
    let m7=Math.floor(Math.random()*127)
    let m8=Math.floor(Math.random()*127)
    var sm1=await collection2.findOne({num:parseInt(m1)})
    var sm2=await collection2.findOne({num:parseInt(m2)})
    var sm3=await collection2.findOne({num:parseInt(m3)})
    var sm4=await collection2.findOne({num:parseInt(m4)})
    var sm5=await collection2.findOne({num:parseInt(m5)})
    var sm6=await collection2.findOne({num:parseInt(m6)})
    var sm7=await collection2.findOne({num:parseInt(m7)})
    var sm8=await collection2.findOne({num:parseInt(m8)})
    let data=await collection2.findOne({"num":did})
    resp.render('fullvideo.ejs',{data,ran1,ran2,comm,sm1,sm2,sm3,sm4,sm5,sm6,sm7,sm8})
})
app.listen(port)