import { S3Client , PutBucketPolicyCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client()

const Bucket = 'ritiksbucket'

const readOnlyUserPolicy = {
    Version : '2012-10-17' , 
    Statement : [
        {
            Sid : "AddPrem" , 
            Effect : "Allow" ,
            Principal: "*",
            Action : ['s3:GetObject'] , 
            Resource : ["arn:aws:s3:::ritiksbucket/*"]
        }
    ]
}

const params = {
    Bucket : Bucket , 
    Policy : JSON.stringify(readOnlyUserPolicy)
}


const createPolicy = async ()=>{
    try{
        const data = await s3.send(new PutBucketPolicyCommand(params))
        console.log(data)

    }

    catch(err){
        console.log(err)
    }
}

createPolicy()