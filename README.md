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

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_mySQL_QueriesInRoutes: 

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

(13) Navigate to the routes/index.js file and update. Need to require the mySQL: ![open index js file (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911132-a4a1ef00-fb42-11e9-9092-3b18cd7fc390.JPG)

![add require mySQL index js file (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911162-ce5b1600-fb42-11e9-8429-116df0b0048c.JPG)

(14) Add the connection information to connect to mySQL in routes/index.js file: ![add info to connect to mySQL index js file (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911187-f2b6f280-fb42-11e9-96e6-9caed90d1af5.JPG)

(15) Add info for idQuery and the req.params.id to the index.js file: ![add info for idQuery and req params id to index js file (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911237-1da14680-fb43-11e9-8813-b255bc699138.JPG)

(16) Navigate to views/index.hbs file: ![open index hbs file (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911307-53dec600-fb43-11e9-8fe8-273f9414cf4d.JPG)

(17) Update views/index.hbs file: ![update index hbs file (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911353-7a9cfc80-fb43-11e9-897e-035ef1b63d1c.JPG)

(18) Navigate to localhost:3000/actor/1 to test: ![navigate to localhost3000 to check for actor-1 (express_mySQL_QueriesInRoutes)](https://user-images.githubusercontent.com/35668707/67911391-9b655200-fb43-11e9-822c-b29277f3f700.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
