# Blog Application with MERN Stack

This is a full-stack blog application built with the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to create, read, update, and delete blog posts. It incorporates modern web development practices and provides a seamless user experience.

## Features
<ul>
    <li> <b>User Authentication</b>: Secure user authentication system to ensure the privacy and security of user data.</li>
    <li> <b>Create and Edit Posts</b>: Users can create new blog posts and edit existing ones with a user-friendly editor.</li>
    <li> <b>Real-time Updates</b>: Utilizes WebSocket technology for real-time updates on blog posts, comments, and other activities.</li>
    <li> <b>Responsive Design</b>: The application is designed to work seamlessly on various devices and screen sizes.</li>
    <li> <b>Search Functionality</b>: Allows users to search for specific blog posts based on keywords.</li>
    <li> <b>Comment System</b>: Users can leave comments on blog posts, fostering engagement and discussions.</li>
</ul>

## Technologies Used

<ul>
    <li> <b>MongoDB</b>: NoSQL database for storing blog posts, user data, and comments.</li>
    <li> <b>Express.js</b>: Back-end framework for building the RESTful API.</li>
    <li> <b>React</b>: Front-end library for building the user interface.</li>
    <li> <b>Node.js</b>: JavaScript runtime for server-side development.</li>
    <li> <b>WebSocket</b>: Real-time communication for instant updates.</li>
    <li> <b>JWT Authentication</b>: JSON Web Token for secure user authentication.</li>
    <li> <b>Responsive Design</b>: Utilizes modern CSS frameworks for a responsive and visually appealing design.</li>
</ul>

## Getting Started
<ol>
<li>Clone the Repository</li>
    <code>
        git clone https://github.com/iamLeb/blog.git<br>
        cd blog
    </code>

<li> Install Dependencies </li>
    <code> 
        <span class="gray"># Install server dependencies</span><br>cd server<br>npm i<br><br><span class="gray"># Install client dependencies</span><br>cd ../client npm i
    </code> 

<li>Set up MongoDB</li>
    <ul>
        <li>Create a MongoDB database and obtain the connection URI.</li>
        <li>Update the <code>server/database/connect.js</code> file with your MongoDB URI.</li>
    </ul>

<li> Start the Application </li>
    <code> 
        <span class="gray"># Start the server</span><br>
        cd server <br>
        npm start<br>
        <br>
        <span class="gray"># Start the client</span><br>
        cd ../client npm run dev
    </code> 
</ol>
The application should now be running on <code>http://localhost:3001</code> & <code>http://localhost:8080</code>

## Contributing
If you'd like to contribute to this project, please follow the contribution guidelines.

## Author 
Designed by iamLeb (Caleb Aguziendu)

Feel free to explore and enhance the application! If you have any questions or suggestions, please open an issue or reach out Happy coding!
- [Contact me]() on [Linkdin](https://www.linkedin.com/in/iamleb) for question

<style>
    .gray {
        color: gray;
    }
</style>