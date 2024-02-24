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

  // WHAT IS JASMINE
  // Jasmine is behavior drive JS framework, with Jasmine we have everything we need to test our code
  // We have a way of both creating creating our test, we can run them, we can produce test reports 
  // A complete batteries included solution

  // In Jasmine our test are known as specification, or specs and they are group in test suites

  // CREATING OUR FIRST TEST
  // First we create a spec filed called calculator.service.spec.ts
  // In order to define the test suite we use the Jasmine describe() function
  // Inside the parameter we can give it a name, in this case we call it 'CalculatorService'
  // So we give to the test suite the same name as the service we want to test
    // describe('CalculatorService')

  // Nest we pass in an in line function
  // The function will contain a series of specifications
  // A group of specifications is called a test suite 
  // and a specification is simply a functional test

    // describe('CalculatorService', () => {
    
    // })

  // So a specification is meant to test a particular functional feature of the application

  // We can now define our first specification.
  // In order to define a specification we use the it() function

  // Each specification should be described by a sentence starting with the word it
  
  // For example lets create a specification to test the add function
  // the specification name for that could be it('should add two numbers')
  // The goal being it should describe a functional feature of our application
  // This should not be mean to test a functional aspect of our application
  // It's really meant to test a functional feature

    //   describe('CalculatorService', () => {
    //     it('should add two numbers')
    // })

  // In our case, our Calculator service, it should be able to add two numbers

  // The next argument is going to be a function 
  // This function is going to contain the body of the specification

    //   describe('CalculatorService', () => {
    //     it('should add two numbers', () => {
        
    //     });
    //   })
  
  // One test suite can contain multiple specifications

  // for example we can add a second specification to test the second method in the service (the subtract method)
    //   describe('CalculatorService', () => {
    //     it('should add two numbers', () => {

    //     });

    //     it('should subtract two numbers', () => {

    //     });
    //   })

  // NOTE WE HAVE NOT IMPLEMENTED THEM YET
  // In order to tell Jasmine it's not yet ready to be executed we are going to use the
  // pending() utility function on both test

    //   it('should add two numbers', () => {
    //     pending();
    //   });

  // NOW we can run our inital test suite
  // In the terminal we run 
  // ng test
  
  // ng test will compile all of our application code as well as our specifications
  // and it will run our test specification using the Karm test runner 
  // Karma is used internally by the Angular CLI 
  // ng test will also lanch an instance of the chrome browser where the test are going to be executed 
  
  // In the browser we can see 2 specs were found 
  // They belong to CalculatorService test suite
  // We have our two test specifications below that (we can see they are marked in yellow meaning they are pending)

  // FEATURES OF THE KARMA TEST RUNNER ARE...
  // Hot Reload Mode - Meaning if we change our test in calculator.service.spec.ts, the test report is going to get refreshed
  // For example, we can simulate a failing test using the fail() utility function
    //   it('should subtract two numbers', () => {
    //     fail();
    // });
  // If we hit save, Karma will reconpile and we will have 1 failed test
  // This is useful in order to fail a test in case a certain condition is reached in our code that should never be reached 
  // if the code is working correctly 

  // If we don't want to use the Hot Reload mode, in the terminal we can run the command 
  //  ng test --no-watch
  

}

