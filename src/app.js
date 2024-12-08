const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const url = 'mongodb://127.0.0.1:27017'

const dbName = "Task"

mongoClient.connect(url, (error, res) =>{
    if(error){
        return  console.log('error has connected to mongoDB')
    }
    console.log('connected to mongoDB')

    const db = res.db(dbName)

    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : insert one user")

    // db.collection('users').insertOne({
    //     name : 'Mostafa',
    //     age : 21
    // },(error , data) => {
    //     if(error){
    //         console.log('Unable to insert Data')
    //     }
    //     console.log(data.insertedId)
    // })

    // console.log("===========================================")
    // console.log("Users : insert one user")

    // db.collection('users').insertOne({
    //     name : 'Ahmed',
    //     age : 26
    // },(error , data) => {
    //     if(error){
    //         console.log('Unable to insert Data')
    //     }
    //     console.log(data.insertedId)
    // })

    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : add 10 users")

    // db.collection ('users').insertMany(
    //     [ {
    //         name: 'islam',
    //         age: 27                 // 1 // 27 // 1 
    //     },
    //     {
    //         name: 'adel',
    //         age: 30                 // 2
    //     },
    //     {
    //         name: 'reem',
    //         age: 27                 // 3 // 27 // 2
    //     },
    //     {
    //         name: 'tasneem',
    //         age: 21                 // 4
    //     },
    //     {
    //         name: 'zaki',
    //         age: 27                 // 5 // 27 // 3
    //     },
    //     {
    //         name: 'shika',
    //         age: 22                 // 6
    //     },
    //     {
    //         name: 'mahmoud',
    //         age: 27                 // 7 // 27 // 4
    //     },
    //     {
    //         name: 'esraa',
    //         age: 26                 // 8
    //     },
    //     {
    //         name: 'aya',
    //         age: 27                 // 9 // 27 // 5
    //     },
    //     {
    //         name: 'mohamed',
    //         age: 25                 // 10
    //     }
    // ] , (error,data)=>{
    //         if(error){
    //             console.log('Unable to insert data')
    //         }
    //         console.log(data.insertedCount)
    //     } 
    // )
    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : find age 27")

    // db.collection('users').find({age:27}).toArray((error , users)=>{
    //     if (error) {
    //         return console.log('error has occured')
    //     }
    //     console.log(users)
    //     console.log("Length of users " + users.length)
    // })

    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : find age 27 limit 3")

    // db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
    //     if (error) {
    //         return console.log('error has occured')
    //     }
    //     console.log(users)
    // })

    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : first 4 update $set name user")

    // const updateNameUsers = ["Abdallah" , "Ali" , "Shaima" , "Sherif"]

    // db.collection("users").find({}).limit(4).toArray().then((data) =>{
    //     data.forEach((user, index) => {
    //         db.collection("users").updateOne({_id:mongodb.ObjectId(user._id)},{
    //             $set:{name: updateNameUsers[index]},
    //         })
    //         .then((data1)=>{console.log(data1.modifiedCount)})
    //         .catch((error)=> {console.log(error)})
    //     });
    // })
    
    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : first 4 age 27 update $inc 4")

    // db.collection("users").find({age:27}).limit(4).toArray().then((data) =>{
    //     data.forEach((user) => {
    //         db.collection("users").updateOne({_id:mongodb.ObjectId(user._id)},{
    //             $inc: {age: 4}
    //         })
    //         .then((data1)=>{console.log(data1.modifiedCount)})
    //         .catch((error)=> {console.log(error)})
    //     });
    // })

    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : all users age $inc 10")

    // db.collection('users').updateMany({},{
    //     $inc: {age: 10}
    // }).
    // then((data1)=>{console.log(data1.modifiedCount)})
    // .catch((error)=> {console.log(error)})

    ////////////////////////////////////////////////////////////////////////////////////

    // console.log("===========================================")
    // console.log("Users : all users age 41 delete")

    // db.collection('users').deleteMany({age:41})
    // .then((data1)=>{console.log(data1.deletedCount)})
    // .catch((error)=> {console.log(error)})

})