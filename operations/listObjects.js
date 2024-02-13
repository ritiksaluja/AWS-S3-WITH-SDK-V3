import { S3Client , ListObjectsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client()

const params = {
    Bucket : 'ritiksbucket'
}

const listObjects = async ()=>{
    try{
        const data = await s3.send(new ListObjectsCommand(params))
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

listObjects()