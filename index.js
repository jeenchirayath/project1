
const hobbies ={
    name:'Jeen',
    age : 21,
    greet(){
        console.log(this.name);
    }
};
const printName=({name})=>{
    console.log(name);
}

printName(hobbies);
hobbies.greet();