import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { CoursesService } from "./courses.service"

// FIRST we define our Jasmine test suite
describe("CourseService", () => {
    // THIRD - in order to test the CoursesService we're going to need an instance of the service
    // SEVENTH - in order to specify test data for our http test, we will need the http testing controller
    let coursesService: CoursesService,
        httpTestingController: HttpTestingController;
    

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
})