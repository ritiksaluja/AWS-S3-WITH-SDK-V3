import { S3Client , CopyObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client()

const params = {
    Bucket : 'ritiksbuckets' , 
    CopySource : 'ritiksbucket/img.jpg' , 
    Key : 'copyimg.jpg'


}


const copyObject = async ()=>{
    try{
        const data = await s3.send(new CopyObjectCommand(params))
        console.log(data)

    }
    catch(err){
        console.log(err)
    }
}

copyObject()