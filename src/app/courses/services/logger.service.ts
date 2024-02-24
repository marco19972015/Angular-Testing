import {Injectable} from '@angular/core';


// This is an Injectable service that simple has one method 
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // The method is called log, it logs a message
  log(message:string) {
    console.log(message);
  }

}
