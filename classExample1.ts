class Item{
    id: number;
    name:string;
    price:number;
    category:string;
    constructor(id:number,name:string,price:number,category:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
  
    display=()=>{

        console.log("Id=" + this.id + " Name=" + this.name+" price="+this.price + " category=" + this.category);

    }
    
}

let item=new Item(1,'notebook',50,'stationery');

item.display();
  
  