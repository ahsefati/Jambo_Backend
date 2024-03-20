// Importing necessary modules for testing
import request from 'supertest'; // Importing supertest for making HTTP requests
import { expect } from 'chai'; // Importing chai for assertion library

const baseUrl = `http://localhost:5000`; // Base URL for the API being tested

// Test suite for Wiki API
describe('** WIKI API TESTING **', () => {
  
  // Test case: Should return 404 on a different route
  it('Should return 404 on a different route', async () => {
    const postData = { cityName: 'Calgary' }; // Sample data to be sent in the request

    // Sending a POST request to an invalid route
    const response = await request(baseUrl)
      .post('/wiki/citysummary1') // Invalid route
      .send(postData);

    // Asserting that the response status is 404
    expect(response.status).to.equal(404);
  });

  // Test case: Should return 200 on Calgary
  it('Should return 200 on Calgary', async () => {
    const postData = { cityName: 'Calgary' }; // Sample data to be sent in the request

    // Sending a POST request to fetch city summary for Calgary
    const response = await request(baseUrl)
      .post('/wiki/citysummary') // Route for fetching city summary
      .send(postData);

    // Asserting that the response status is 200
    expect(response.status).to.equal(200);
  });

  // Test case: Should return 500 on an undefined city
  it('Should return 500 on an undefined city', async () => {
    const postData = { cityName: 'Calgarysfsfghh' }; // Sample data with undefined city name

    // Sending a POST request to fetch city summary for an undefined city
    const response = await request(baseUrl)
      .post('/wiki/citysummary') // Route for fetching city summary
      .send(postData);

    // Asserting that the response status is 404 and the response body contains an appropriate error message
    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'City not found on Wikipedia.' });
  });
});