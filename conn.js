const express=require('express')
const {MongoCLient}=require('mongodb')
const url='mongodb://0.0.0.0:27017/'
const client=new MongoCLient(url)
async function connection(){
    let result=await client.connect()
    let db=result.db('mia_mutaq')
    return db
}
module.exports=connection()