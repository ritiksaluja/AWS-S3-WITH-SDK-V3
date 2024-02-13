import { S3Client , DeleteObjectsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client()

const params = {
    Bucket : 'ritiksbucket' , 
    Delete : {
        Objects : [
            {
                Key : 'img.jpg'
            } , 
            {
                Key : 'imgs.jpg'
            }
        ]
    }
}

const deleteObjects = async ()=>{
    try{
        const data = await s3.send(new DeleteObjectsCommand(params))
        console.log(data)
    }
    catch(err){
          console.log(err)
    }
}

deleteObjects()