// // // // // // // const secret='SUPER SECRET'
// // // // // // // const john='john'
// // // // // // // const peter='peter'

// // // // // // // const sayhi=(name)=>{
// // // // // // //     console.log(`Hello there ${name}`)
// // // // // // // }

// // // // // // // const names =require('./4_nano')
// // // // // // // const sayhi=require('./5_nano')
// // // // // // // const data=require('./6_alternate')
// // // // // // // require('./7_nano')
// // // // // // // console.log(data)
// // // // // // // sayhi('Rihan')
// // // // // // // sayhi(names.john)
// // // // // // // sayhi(names.peter)


// // // // // // // const http=require('http');
// // // // // // // const server=http.createServer((req ,res)=>{
// // // // // // //     console.log(req)
// // // // // // //     res.write("Welcome to our hime page")
// // // // // // //     res.end()
// // // // // // // })

// // // // // // // server.listen(5000)


// // // // // // const {readFile} =require('fs')

// // // // // // const getText=(path)=>{
// // // // // //     return new Promise((resolve,reject)=>{
// // // // // //         readFile(path,'utf8',(err,data)=>{
// // // // // //             if(err){
// // // // // //                 reject(err)
// // // // // //             }else{
// // // // // //                 resolve(data)
// // // // // //             }
// // // // // //         })
// // // // // //     })
// // // // // // }

// // // // // const os=require('os')
// // // // // const user=os.userInfo()
// // // // // console.log(user)

// // // // // console.log(`The System Uptime is ${os.uptime()} seconds`)


// // // // // const currentOs={
// // // // //     name:os.type(),
// // // // //     release:os.type(),
// // // // //     totalMem:os.totalmem(),
// // // // //     freeMem:os.freemem(),
// // // // // }

// // // // // console.log(currentOs)


// // // // // const path=require('path')
// // // // // console.log(path.sep)

// // // // // const filePath=path.join('/content/','subfolder','test.txt')
// // // // // console.log(filePath)

// // // // // const {readFileSync ,writeFileSync}=require('fs')

// // // // // const first=readFileSync('./test.txt','utf8')

// // // // // writeFileSync(
// // // // //     './first.txt',
// // // // //     `here is the result :${first}`,
// // // // // )


// // // // const {readFile ,writeFile}=require('fs')

// // // // const start=async()=>{
// // // //     try{
    
// // // //         const first=await readFilePromise('./content/test.txt','utf8')
// // // //      console.log(first)
// // // //     }catch(error){
// // // //  console.log(error)
// // // //     }
    
// // // // }

// // // const http = require('http')

// // // const server=http.createServer((req,res)=>{
// // //     console.log("User present")
// // //     res.end('home Page')
// // // })

// // // server.listen(4000)


// // const express=require('express')
// // const path=require('path')
// // const people=require('./data')
// // const app=express()
// // app.use(express.static('./methods-public'))
// // app.use(express.urlencoded({extended:false}))
// // app.get('/',(req,res)=>{
// // //    res.send('Home page')
// // //    res.status(200).send('Home page')
// // // res.sendFile(path.resolve(__dirname,'./index.html'))

// // res.json(people)
// // })

// // app.get('/api/people/:age',(req,res)=>{
// //     // const info= people.map((people)=>{
// //     //     const {id,name}=people;
// //     //     return{id,name}
// //     // })s
// //    const {age} =req.params
// //     const getId = people.find(
// //         (people)=>people.age==Number(age))

// //     if(!getId){
// //         return res.status(404).send("Product does not Exist")
// //     }
// //     res.json(getId)
// // })


// // app.get('/api/people/:id/reviews/:reviewID',(req,res)=>{
// //     console.log(req.params)
// //     res.send('hello worlld')
// // })

// // app.get('/api/v1/query',(req,res)=>{
// //     // console.log(req.query)
// //     const { search,limit}=req.query
// //     let sortedProducts=[...people]

// //     if(search){
// //         sortedProducts=sortedProducts.filter((people)=>{
// //             return people.name.startsWith(search)
// //         })
// //     }
// //     if(limit){
// //         sortedProducts=sortedProducts.slice(0,Number(limit))
// //     }
// //     res.status(200).json(sortedProducts)
// //     res.send('hello world')
// // })
// // app.get('/about',(req,res)=>{
// //     res.send('about page')
// // })


// // app.post('/login',(req,res)=>{
// //     res.send('POST')
// // })
// // app.listen(5000,()=>{
// //     console.log('server is running on port 5000' )
// // })


// const express=require('express');
// const userRoute=require('./routes/userRoutes');
// const app=express();
// const PORT=5000;

// app.use(express.json());


// // const students=[
// //   {  id:'i',name:'johhn'},
// //   {id:'2',name:'riys'}
// // ];

// // app.get('/students',(req,res)=>{
// //     // res.send("Welcome to backend server");
// //     res.status(200).json(students);
// // });

// // app.get('/about',(req,res)=>{
// //     res.send('this is the about page');
// // });

// // app.get('/contact',(req,res)=>{
// //     res.send('contact us at ');
// // })

// // app.get('/services',(req,res)=>{
// //     res.send("Hare at our services");
// // })

// // app.get('/students/:id',(req,res)=>{
// //     const student=students.find(student=>student.id==req.params.id);
// //     if(!student){
// //         return res.status(404).send('Student not found');
// //     }
// //     res.json(student);
// // })

// const user=[
//     { id:'1',name:'john',productID:'24'},
//     { id:'2',name:'Tiya',productID:'34'},
//     { id:'3',name:'jiya',productID:'44'},
//     { id:'4',name:'Diya',productID:'54'},
//     { id:'5',name:'Riya',productID:'64'},
// ];
// //app.use('/user',userRoute);
// app.get('/user', (req, res) => {
//     res.status(200).json(user);  // Return the user array
// });


// app.post('/user',(req,res)=>{
//     const newUser={
//         id: req.body.id,
//         name: req.body.name,
//         productID: req.body.productID
//     }
//     user.push(newUser)
//     res.status(200).send(user)
// })

// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`);
// });


const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// const user = [
//   { id: '1', name: 'john', productID: '24' },
//   { id: '2', name: 'Tiya', productID: '34' }
// ];

// app.get('/user', (req, res) => {
//   console.log("GET /user hit");
//   res.status(200).json(user);
// });
app.post('/bfhl',(req,res)=>{
    const {data}=req.body;
    if(!Array.isArray(data)){
        return res.status(400).json({is_success:false})
    }
let isNumber = (str) => {
return [...str].every(char => char >= '0' && char <= '9');
};

let numbers = data.filter(item => isNumber(item));

let alphabets = data.filter(item => {
  return [...item].every(char => {
    let code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); // A-Z or a-z
  });
});

res.status(200).json({
    is_success:true,
    user_is:"Bhumika_Tekam_13Dec2004",
    Email:"bhumi@gmail.com",
    numbers,
    alphabets
});
});



// app.post('/user', (req, res) => {
//   const newUser = {
//     id: req.body.id,
//     name: req.body.name,
//     productID: req.body.productID
//   };
//   user.push(newUser);
//   res.status(200).json(user);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
