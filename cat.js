var Mouse = require('./mouse');

function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    if(animal instanceof Mouse)
    {
        this.stomach.push(mouse);
    }else{
        throw new Error("Can't eat, please check and try again!!!");
    }
};

module.exports = Cat;