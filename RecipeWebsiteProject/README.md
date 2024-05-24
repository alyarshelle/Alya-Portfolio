p# cosi-103a

Name      
Email

Garret Rieden
grieden11@brandeis.edu

Adam Rieden
arieden@brandeis.edu

Alya Campbell
alyacampbell@brandeis.edu

Arun Shrestha
arunshrestha@brandeis.edu


-----------------------------------------------------
# Recipe Book
     Currently in our project, we have created a landing page with a caurosel that moves through our 7
     recipes. On the top is a navigation bar with 9 different links to different pages. All pages include 
     pictures and a description of the item of choice. 
     You can now add your own recipes to our recipe book!!


### Infrastructure Overview
     JavaScript Files - drives interactivity in our pages:
          -Carousel.js handles the carousel functionality
          -Navbar handles the navbar functionality
          -App.js helps the navbar routing for direction to 'subpages.' 
          -LandingPage.js holds the Carousel component. 
          -GroceryList.js holds all items the user wants to add.
          -ParentComponent.js adds functionality to the GroceryList by including actions on recipes
          -SubmissionPage.js handles JSON data to add a recipe into the recipe book
          -NutritionData.js handles the env API KEY and searches for recipe matches on the FoodData Central website
     CSS Files + Images - Styling our pages 
          Images for our recipes (stored in Images) as well as team+homebutton images stored in TeamPageImages
          Images for instructions in InstructionImages
     Third-party Library - React
          -React: A JavaScript library for building user interfaces.
          -React Router: Provides routing capabilities within a React application.
          -React Bootstrap: A front-end framework for React, offering pre-designed components and styles
          -React Link: Encorporates back buttons to previous pages.


### Developer Process
     This section provides detailed instructions for developers to get started with the project

     - Setting Up the Development Environment
          Installation: use terminal (cd to landingpage/src) to run and install 3 dependencies *all current versions*: 
          npm install && npm install react-bootstrap && npm install --save-dev jest.

     - Running the Express server
          Build the React app from the landingPage folder using the command npm run build
          cd into the backend folder and run the following to run the Express server
          node index.js

     - Testing
          For Carousel functionality (unit test) - navigate to folder (landinPage) where Carousel.test.js in the terminal, 
          then run npx jest Carousel.test.js in terminal to execute the test suite.
          For Webstite functionality - test suite ensures that all functions of the webstite (links, carousel, grocery) work 
          accordingly and render properly.
          For Server Testing - Index.test ensures the GET request is made and the server responds with HTML
                               Routes.test tests if the route handler functions correctly       

     - Deployment
          How to run app: npm start
          How to create docker image: Run command: "docker image build -t <Name of your image>:latest ."
          There is an Azure container registry created called "Recipe Project," then a container app was created for the docker image to be uploaded to, being deployed after.
          
     - Continuous Integration/Continuous Deployment (CI/CD)
          Every push, test actions run to make sure the deployment is working. 
          This ensures the quality that does make it to our main branch is working properly through automatic testing.
          Everytime there is a push, updated codebase is sent to Azure database

### Documentation
     -Updated README file with current codebase.
     -Code comments to help navigate the code's purpose. This is necessary as it helps everyone understand what this code does

### New updates to implement
     N/A





