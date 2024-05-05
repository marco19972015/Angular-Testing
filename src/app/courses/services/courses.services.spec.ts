import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { CoursesService } from "./courses.service"

// FIRST we define our Jasmine test suite
describe("CourseService", () => {
    // THIRD - in order to test the CoursesService we're going to need an instance of the service
    // SEVENTH - in order to specify test data for our http test, we will need the http testing controller
    let coursesService: CoursesService;
    let httpTestingController: HttpTestingController;
    

    beforeEach(() => {
        // FOURTH - we use angular TestBed
        // It allows us to implement an angular testing module, that will contain an instance of our service
        TestBed.configureTestingModule({
            // SIXTH - we create a mock of an HTTP service (this is the implementation that gets injected in service's contructor)
            // This implementation will contain all the same methods of the real HTTP Client (get, put, post...)
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService,
            ]
        });

        // FIFTH we can now use the TestBed to retrieve an instance of the coursesService
        // We use .inject pass in an identifier of the injectable that we need
        // so we pass the contructor function itself.
        coursesService = TestBed.inject(CoursesService)
        // EIGHTH - we can now populate the httpTestingController variable using angular TestBed 
        httpTestingController = TestBed.inject(HttpTestingController)
    })

    // SECOND we define the multiple test that we are going to implement
    // We have to think functionaly how the service is going to behave. So we start with the first method
    it("should retrieve all courses", () => {

    })

    // Video: Testing Angular HTTP Services - Test Setup with the HttpClientTestingModule
    // The concept here is that we want to make sure that all dependencies are created within this spec file. 
    // We can check which dependencies we need by looking at the contructor. 
    

    // We can't add HttpClient to the provider. This would cause our test start issueing actual http request
    // that would attemp to contact the server, retrieve result ect...
                        // providers: [
                        //     CoursesService,
                        //     HttpClient
                        // ]

    // Instead we want to provide a mock implementation of an http cliemt 
    // This will return test data that will define at the level of the test
    // In order to replace this HttpClient with a mock version, we can import [HttpClientTestingModule] testing module
    // This module is also part of Angular core

    // This Http Testing module also includes a mock implementation of an Http service
    // So that's the implementation that will be injected in the constructor
        // This implementation will contain all the same methods of the real HttpClient 
        // For example get, put, post
        // But instead of making actuall http request, the mock implementation will be returning test data
        // That we'll define for each test.
    // The mock implementation will also be able to assert things such as a given Http request was called once/ not cancelled ect...


    // In order to be able to specify test data, we'll need the httpTestingController
    // We can then populate the variable using the angular test bed

    // The pattern here is we define the variable at the top, then in the beforeEach we use that instance along with the TestBed
    // Which we inject the instances created inside the configureTestingModule
})