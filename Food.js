class Food {
constructor(x,y, width, height){

    this.image = loadImage("images/Milk.png");
    this.body = Bodies.rectangle(x, y, width, height);
    this.width=width;
    this.height=height;
    this.image = loadImage("images/Milk.png");
    World.add(world, this.body);
}
display(){
if(this.foodStock!=0){
    for(vari=0;i<this.foodStock;i++){}
        if(1%10==0){
            x = 80;
            y = y+50
        }
}
image(this.image, 0, 0, this.width, this.height);
}

getFoodStock(){

}
updateFoodStock(){

}
deductFood(){

}
}