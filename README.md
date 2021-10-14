## READ ME

**PG-REST-API** is a REST API built with JavaScript and Node for PostgreSQL as a framework for a to-do list. The database used ("todo_database") includes an ID column ("todo_id") and a DESCRIPTION column ("description").

**API:**
<br>
/todos
- ```GET``` : Get all todos
- ```POST``` : Create a new todo

/todos/:todo_id
- ```GET``` : Get a todo
- ```PUT``` : Update a todo
- ```DELETE``` : Delete a todo

**To run**:
```
- Update the database config with your credentials in the db.js file
- PostgreSQL database called "todo_database" with a 'todo_id' (1) and a 'description' (2)
- "cd pg-rest-api" (relative) to open project folder
- "nodemon index" to start
```

**When running**:
```
- Open your HTTP Client! To start, GET a list of all todos via http://localhost:9876/todos
- "\c todo_database" in terminal to connect with the PostgreSQL database
- "SELECT * FROM todo;" in terminal to view todo_database tables
```

**Built with**:
```
- JavaScript
- Node
- CRUD
- PostgreSQL
```
