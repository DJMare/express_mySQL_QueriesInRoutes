# express_mySQL_QueriesInRoutes
Queries within routes using SQL in a simple express app. 

Install mySQL: https://dev.mysql.com/downloads/installer/ 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_mySQL: 

    express --view=hbs express_mySQL_QueriesInRoutes

(6) Once the process is complete, navigate into the express_mySQL_QueriesInRoutes directory: 
   cd express_mySQL_QueriesInRoutes 

(7) Now in the express_mySQL_QueriesInRoutes directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_mySQL_QueriesInRoutes directory:

    npm install -save-dev nodemon
    
(10) Install mySQL:

    npm install --save mysql

(11) Start the server with Nodemon with the following command: 

    nodemon

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and update. Need to require the mySQL: 


(14) Add the connection information to connect to mySQL in routes/index.js file: 

