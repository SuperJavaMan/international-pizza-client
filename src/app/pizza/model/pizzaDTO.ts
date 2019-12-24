export class PizzaDTO {
  id: number;
  name: string;
  size: string;
  price: number;
  icon: File;

  constructor(name: string, size: string, price: number, icon: File) {
    this.id = 0;
    this.name = name;
    this.size = size;
    this.price = price;
    this.icon = icon;
  }
}
