export class book
{

  id:Number;
  title:string;
  author:string;
  publish_date: Number;
  image_source:Text;
  abstract:Text;
  owner_email:string;
  is_borrowed:Text;

  constructor(id:Number, title:string, author:string, publish_date: Number, image_source:Text,abstract:Text, owner_email:string,is_borrowed:Text)
  {
    this.id=id;
    this.title=title;
    this.author=author;
    this.publish_date = publish_date;
    this.image_source= image_source;
    this.abstract=abstract;
    this.owner_email=owner_email;
    this.is_borrowed=is_borrowed;

  }
}
