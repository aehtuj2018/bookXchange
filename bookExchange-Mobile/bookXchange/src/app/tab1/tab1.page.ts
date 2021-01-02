import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  books:any;

  constructor(private bookService:BookService,public navCtrl: NavController, public httpClient: HttpClient, public toastController: ToastController, private _router: Router) {

    this.bookService.fetch().subscribe(data => {
      this.books = data;
    
    });
  }
 
  truncateChar(text: string): string {
    let charlimit = 150;
    if(!text || text.length <= charlimit )
    {
        return text;
    }

  let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
  let shortened = without_html.substring(0, charlimit) + "...";
  return shortened;
}

openDetails(book) {

  this.navCtrl.navigateForward([`book-detail/${book.id}`]);

}
}

