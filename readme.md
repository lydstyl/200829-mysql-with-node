# A quick CRUD to learn using MySQL with node & express

1. install dependencies

   '''
   npm i
   '''

2. comment line database: 'nodemysql', in app.js

   '''
   // Create connection
   const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   //database: 'nodemysql',
   })
   '''

3. run npm start

4. Launch http://localhost:3000/createdb to create the nodemysql database

5. uncomment line database: 'nodemysql', in app.js

   '''
   // Create connection
   const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'nodemysql',
   })
   '''

6. Try other routes like http://localhost:3000/createpoststable http://localhost:3000/addpost1 and so on
