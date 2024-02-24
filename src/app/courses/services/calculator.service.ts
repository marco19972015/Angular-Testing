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
  // In this lesson we are going to continue the implementation of the unit test of the calculator sercice
  // And we are going to talk about some typical ways of structuring our test
  // We are going to introduce the notion of dependency injection in Angular testing

  // INSTEAD of creating an instance of the LoggerService
    // const calculator = new CalculatorService( new LoggerService());

  // We can do the same thing using the Jasmine to create a SPY object using createSpyObj utility
  // We create a fake dependency using Jasmine SPY method
  // we create the createSpyObj and give the Spy object a name, and then we define an array containing a list of methods 
  // of our fake logger implementation. We only add the log method, 
  // if we pass nothing it will create a fake logger service with no methods

  // So now we have a complete fake implementation of a logger service
  // THIS IS AN OBJECT CREATED BY JASMINE THAT CONTAINS ONLY 1 METHOD CALLED 'log'

  // Where the first argument is the basename and the second argument is the method name
    // const logger = jasmine.createSpyObj('LoggerService', ["log"]);
    // const calculator = new CalculatorService( logger );
  
  // We can then add an extra assurshance to make sure the the Logger service is being called once 
  // Whenever we call the subtract method by using the toHaveBeenCalledTimes() utility function
    //  expect(logger.log).toHaveBeenCalledTimes(1);

  // PROBLEM - we repeate the initialization loggic twice in the two specification
    // const logger = jasmine.createSpyObj('LoggerService', ["log"]);
    // const calculator = new CalculatorService( logger);

  // In more complex test, they become a problem
  // In order to avoid this problem we have the Jasmine beforeEach EXECUTION BLOCK
    // beforeEach(() => {   
    // })
  
  // The beforeEach Block is going to be executed before each of the specification
  // So in this current case, since we have two specification the beforeEach Block will be called two times 
  
  // This block is the ideal place to put the repeated initialization loggic

  // PROBLEM - both the variables that are declared from creating the instances of both services will not be in scope
  // To fix this we define the variables a level above the test suites
  // We define the following variables as so...
    // let calculator: CalculatorService;
    // let loggerSpy: any;
  // We define it as type any, because it can have any function that can return any sort of value
  // This solves the issue


  // By creating the two variable in the outer scope we not remove the const from the variable in the beforeEach block
    //   beforeEach(() => {
    //     loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
    //     calculator = new CalculatorService( loggerSpy);
    // }) 

  // Each instnance of the calculator and loggerSpy variables are independent from eachother when 
  // assigned in each specification 


  // IF WE FIND OURSELVES IN A SITUATION WHERE THE ORDER OF TEST MATTER AND CHANGING THE ORDER OF THE TEST CAUSES 
  // THE TEST TO EITHER FAIL OR COMPLETE AS WE SWITCH THE ORDER OF THE TEST...
  // THAT IS AN INDICATION THE TEST ARE NOT WELL ISOLATED 
  // AND THAT SOME OF THE SET UP OF ONE TEST IS TYPICALLY INTERFERING WITH ANOTHER TEST UNINTENTIONALY
  // That would be a good time to check the beforeEach block to make sure that all the test dependencies are getting initialized correctly 
  // Before each test


}

