import { S3Client , ListBucketsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client()

const list = async()=>{
    try{
        const data = await s3.send(new ListBucketsCommand({}))
    
    console.log(data)
    }

    catch(err){
        console.log(err)
    }
    
}

list()

