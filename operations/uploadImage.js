import { S3Client , PutObjectCommand } from "@aws-sdk/client-s3";
import {readFileSync} from 'fs'
// import img from '../img/img.jpg'
const S3 = new S3Client()

const uploadImage = async(fileName)=>{
try{
const fileContent = readFileSync(fileName)
const params = {
    Bucket : 'ritiksbucket' , 
    ACL : 'private' , 
    Key : 'img.jpg' , 
    Body : fileContent
}

const data = await S3.send(new PutObjectCommand(params))
console.log(data)


}
catch(err){
   console.log(err)
}
}

uploadImage('../img/img.jpg')