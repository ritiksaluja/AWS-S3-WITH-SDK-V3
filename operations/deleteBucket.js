import { S3Client , DeleteBucketCommand } from "@aws-sdk/client-s3";

const S3 = new S3Client()

const params = {
    Bucket : 'ritiksbuckets'
}

const deleteBucket = async ()=>{
      try{
          const data = await S3.send(new DeleteBucketCommand(params))
          console.log(data)
      }
      catch(err){
            console.log(err)
      }
}

deleteBucket()