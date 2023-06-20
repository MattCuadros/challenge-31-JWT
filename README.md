> # Challenge #29 - **NodeJS - Express - SQL - React - PG - Likeme**

---

In this Challenge, i used NodeJs, Express, SQL and React for set up a Express.js server that interacts with a PostgreSQL database to perform CRUD operations on a 'posts' Table.

The code initializes a connection pool to the PostgreSQL database using the provided configuration options. It utilizes the dotenv package to load environment variables from a .env file.

Finally, the server provides five routes:

GET /posts: Retrieves a list of posts from the posts table in the database. It returns a JSON response containing the retrieved posts.

POST /posts: Adds a new post to the posts table. The request body should include titulo, url, and descripcion properties. The route executes an SQL INSERT query and returns a JSON response with the added post.

GET /posts/:id: Retrieves a specific post by its ID from the posts table. The route expects the ID as a route parameter. It executes an SQL SELECT query with the specified ID and returns the JSON response containing the found post.

PUT /posts/likes/:id: Modifies the count of "likes" that haves a post.

DELETE /posts/:id: Removes from table the selected id.

---

---

###### Contact me in:

> - :bust_in_silhouette: Matias Cuadros
>   -:telephone_receiver: +569 4154 9653
>   -:email: <a href="mailto:mcuadrose@gmail.com" target="_blank">mcuadrose@gmail.com</a>

---

> ###### :warning: _All Rights Reserved - Visit my :briefcase: Briefcase in_ <a href="https://mattcuadros.github.io/" target="_blank">https://mattcuadros.github.io/</a> :copyright:
