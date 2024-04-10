const mongoose = require('mongoose');

class MongoSingleton {
    static #instance; 

    constructor(){ 
        mongoose.connect('mongodb://localhost:27017/coder').then(()=>{
            console.log('connected successfuly')
        }).catch((error)=>{
            console.log('There was an error', error)
        })
    }

    static getInstance(){
        if(this.#instance){
            console.log('Already connected')
            return this.#instance;
        }

        console.log('getting new connection')
        this.#instance = new MongoSingleton();

        return this.#instance; 
    }
}   

module.exports = MongoSingleton; 