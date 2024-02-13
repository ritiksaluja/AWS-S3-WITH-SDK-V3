import { S3Client , DeleteObjectCommand } from "@aws-sdk/client-s3";

const S3 = new S3Client()

const params = {
    Bucket : 'ritiksbuckets' , 
    Key :'copyimg.jpg'
}

const deleteObject = async ()=>{
      try{
          const data = await S3.send(new DeleteObjectCommand(params))
          console.log(data)
      }
      catch(err){
            console.log(err)
      }
}

deleteObject()