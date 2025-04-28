const mongoose=require("mongoose");
const chat=require("./models/chat.js");
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");    
}
let allchats=[
{
    from:"khushbu",
    to:"shalu",
    msg:"kab chutti hoga ?",
    created_at:new Date(),
},{
    from:"aadi",
    to:"aman",
    msg:"college aayega re ! ?",
    created_at:new Date(),
},{
    from:"vedant(c2)",
    to:"vedant frind ansh",
    msg:"kya bhai free fire me aao!",
    created_at:new Date(),
},
];

chat.insertMany(allchats);