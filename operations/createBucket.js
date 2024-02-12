import { S3Client , CreateBucketCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client()

const params = {

    Bucket : "ritiksbucket" , 
    ACL : 'private' 

}


const cretaeBucket = async ()=>{

    try{

        let data  =  await s3.send(new CreateBucketCommand(params))

        console.log(data)

      
      
    }
    catch(err){
        console.log(err)
    }

   
}

cretaeBucket()