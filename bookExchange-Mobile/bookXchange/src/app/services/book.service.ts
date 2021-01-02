import { book } from './../book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(public httpClient:HttpClient,private router:Router) {

   }

   fetch(): Observable<book[]> {
    return this.httpClient.get<book[]>('http://localhost:3050/get_books');
  }

  searchBook(id):Observable<any> {
    return this.httpClient.get(`http://localhost:3050/get_book/${id}`);

  }

  searchBookOwner(id):Observable<any> {
    return this.httpClient.get(`http://localhost:3050/get_owner/${id}`);

  }

  searchOwnerEmail(email):Observable<any> {
    return this.httpClient.get(`http://localhost:3050/get_owner/${email}`);

  }

 adduserBorrower(registerForm) :Observable<any>{
  return this.httpClient.post(`http://localhost:3050/add_user/borrower`,registerForm);

}
adduserOwner(registerForm) :Observable<any>{
  return this.httpClient.post(`http://localhost:3050/add_user/owner`,registerForm);

}

addBook(registerForm) :Observable<any>{
  return this.httpClient.post(`http://localhost:3050/add_book`,registerForm);

}

postTransaction(user_email,book_id) :Observable<any>{
  return this.httpClient.post(`http://localhost:3050/add_transaction/`,{user_email:user_email,is_borrowed:1,bookId:book_id});

}

updateBookAvailability(book_id) :Observable<any>{
  return this.httpClient.patch(`http://localhost:3050/update_book_status/${book_id}`,{is_borrowed:1});
}


}
