import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';


// We can tell it's an angular service, since we see the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // The first method in this service will add two numbers 
  // The second method will subtract two numbers


  // This service has only once dependency... 
  // That being the LoggerService
  constructor(private logger: LoggerService) {
  }

  add(n1: number, n2:number) {
    this.logger.log("Addition operation called");
    return n1 + n2;
  }

  subtract(n1: number, n2:number) {
    this.logger.log("Subtraction operation called");
    return n1 - n2;
  }


  // SIDE NOTES 
  // Just like we use dependency injection in our code we can do the same in Jasmine
  // This is useful when we are testing components instaed of services, that way Angular will be able to
  // provide fake implementation of some of its internal services that will make it simple for us 
  // to simulate DOM interaction

  // Going back to our calculator service test suite, we will introduce Angular TestBed utility
  
  // What will it allow us to do?
  // The Angular testBed will allow us to provide the dependency to our services by using dependency 
  // injection, instead of calling the constructor explicitly as we were doing. so...
    // calculator = new CalculatorService(loggerSpy);

  // To start we will cal Angular's TestBed and we will call the method configureTestingModule.
  // This method takes 1 configuration object that contains properties that are very similiar to the ones 
  // present in an Angulars module (such as declarations, imports, providers, schemas)
    // TestBed.configureTestingModule({
    
    // })
  
  // In our case, since we aren't using components yet we will start off with providers
    //   TestBed.configureTestingModule({
    //     providers: {
        
    //     }
    // })
  
  // Inside the providers array is where we can start to provide the services we want 
    //   TestBed.configureTestingModule({
    //     providers: [
    //         CalculatorService, 
    //         LoggerService,
    //         // {provide: LoggerService, useValue: loggerSpy}
    //     ]
    // })
  
  // PROBLEM - if we inject LoggerService, we will loose the ability to check how many times 
  // the service is running since it will no longer be considered a spy
  // SOLUTION - Using the code below we can create our own provider 

  // FIRST identify exactly what we are providing to the Angular dependency injection (so we place a 
  // dependency injection token.) The token is a unique identifier that identifies what we are injecting
  // So our dependency injection key is going to be the name of the logger service class itself (LoggerService)

  // SECOND we need to specify how we are going to inject our logger service, for that we use the property useValue 
  // useValue is used whenever we want to provide a value that is going to be used. In our case whenever we need a logger service anywhere in the application
  // Our value in this cause is going to be the Jasmine (loggerSpy) itself

  // With this we have used the TestBed to configure a simple testing module that currently only has a 
  // couple of services

  // now we can use the TestBed to retrieve our CalculatorService instead of calling the constructor explicitly
  // It goes from...
    // calculator = new CalculatorService(loggerSpy);

  // To 
    // calculator = TestBed.inject(CalculatorService);
  // Where we call the TestBed.inject method and we pass in a unique identifier that identifies what
  // service we are trying to retrieve (which in this case is the CalculatorService constructor function
  // as a unique dependency injection key that will indicate that in this case we need the singleton
  // instance of the calculator service that is part of the testing module)

  // If we run our test we can see things works. There are pros to using the TestBed over a constructor when injecting
  // instances of our services



}

