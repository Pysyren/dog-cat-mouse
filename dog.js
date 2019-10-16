function Dog(){
    this.stomach = [];
}

Dog.prototype.ead = function(cat){
    this.stomach.push(cat);
}