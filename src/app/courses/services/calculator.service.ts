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
  // This lesson "Angular Unit Testing Best Practices and Commonly Used Test Utilities" is a summary 
  // and an intro to some Jasmine testing utilities
  
  // So how can we unit test Angular services?
  // The key thing is to define a series of functional specifications (so the 'it' blocks)
  // which tests ONE functionality of the service
  // So typically we want to test one of the methods of the service PER specification

  // All the test that we write follow a 3 step process 
  // 1. We set up the test. This is usually done by the use of a beforeEach() block that gets executed before each test.
  // 2. Once the test is set up, we perform the operation that we want to test. 
  // 3. After the operation is performed, we will run a series of assertions that will either pass the test or fail
  
  // It's important whenever we are unit testing the service that we mock ALL of its imediate dependencies 
  // So we should not inject REAL instances of dependencies in the service. 
  // Instead we should provide alternative test only implementations using for example Jasmine spys 
  
  // Jasmine spys will allow us to intercept the calls to an existant method in an existing service.
  // Or they will also allow us to create a complete mock implementation of a service (ex. being the 'LoggerService')

  // Why do we mock all the dependencies and only use the real instance for the service itself??
  // The goal is to test the CalculatorService in isolation (assuming all other parts that this service interacts with are working correctly)
  
  // If we instead DIDNT use a spy for the LoggerService, we would be injecting a REAL implementation of the logger service
  // then in this case it would no longer be a unit test. 
  // It would then become an INTEGRATION test, because we would be testing not only the CalculatorService in isolation
  // but we would be testing the CalculatorService, LoggerService and the way the two implementations work together.
  // That's why we MOCK our dependencies so we can still consider this a unit test and not an integration test.

  // EXTRA JASMINE TEST UTILITIES
  // If we want to disable the complete test suite, we can do so by adding an x before the describe 
    // ex. xdescribe('CalculatorService',
  
  // We can also disable specific test using the same method. (skips execution of a test)
    // xit('should add two numbers', () => {

  // when debugging and have multiple test we can focus on one specfic test or suite
  // We can use the focus function 
  // fdescribe('CalculatorService',

  // We can do the same with test
  // it('should add two numbers', () => {

}

