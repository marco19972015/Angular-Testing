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
  // We will be focusing on the implementations of the it('should add two numbers') specification
  // The first thing we'll need is an instance of the CalculatorService service in the spec file
  // we create it under the specification
    // const calculator = new CalculatorService();

  // Now the calculator service is going to take a single dependency, which is the logger service
  // The logger service itself does not have any dependencies, 
  // so we can instatiate it inside the parameter of the CalculatorService instance by calling its contructor
    //   it('should add two numbers', () => {
    //     const calculator = new CalculatorService( new LoggerService);
    // });
  // Now we have an instance of our CalculatorService

  // We can now use it in order to add two numbers 
    // const result = calculator.add(2, 2);


  // Now we need to ensure that this result is the expected result
  // To do this we write first TEST ASSUR-SHANCE
  // We use the expect() function utility from Jasmine as so
    // expect();
  // And we say we are going to expect() the result to be 4
    // expect(result).toBe(4);
  
  // Jasmine provides us multiple methods such as toBeCloseTo, toBeDefined, toBeGreaterThan, etc... to write 
  // all types of ASSUR-SHANCE
  
  // This is our test ASSUR-SHANCE, this will make sure the test fails if it's not 4


  // OUR FIRST SPECIFICATION LOOKS LIKE THIS
    //   it('should add two numbers', () => {
  // First, we have a setup phase, where we are preparing the components or services we want to test 
    //     const calculator = new CalculatorService( new LoggerService());
  // Second, we have an execution phase, where we are going to trigger the operation we want to test 
    //     const result = calculator.add(2, 2);
  // Lastly, we write a series of test ASSUR-SHANCE, that are either going to fail marking the test as fail
  // or they are going to be successful, which marks the test as successful
    //     expect(result).toBe(4);
    // });
  
  // If we fail intentially (done in the subtraction service class)
  // After the toBe(0, ), we can add a second argument that describes why the assurshance has failed such as 
    // expect(result).toBe(0, "Unexpected subtraction result");
  // The ability to add this description is available in all of Jasmin assurance utility methods 


  // LETS SAY WE WANT TO TAKE THIS TEST ONE STEP FURTHER
  // lets say we want to not only do we want to test the result of the calculation is correct
  // BUT also we want to make sure that the logger service is only called once whenever we call this operation
  
  // Lets imagine that the LoggerSerive consumes expensive resources that should not be overused 
  // So we'll make sure that it only gets called once per operation
  // In order to test this we'll introduce the concept of Jasmine SPIE
 
}

