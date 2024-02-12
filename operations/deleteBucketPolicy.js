import { S3Client , DeleteBucketPolicyCommand } from "@aws-sdk/client-s3";


const s3 = new S3Client()



const params = {
    Bucket : 'ritiksbucket'
}

let deletePolicy = async ()=>{
    try{
        const data = await s3.send(new DeleteBucketPolicyCommand(params))
        console.log(data)

    }

    catch(err){
        console.log(err)
    }
}

deletePolicy()