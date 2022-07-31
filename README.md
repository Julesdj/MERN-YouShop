# MERN-YouShop

YouShop is our submission for the MERN Stack project. It's an online E-Commerce website much like Amazon, Etsy, and Ebay. You can updated and delete products. Also this website has many different pages with good styling. The concept is that of a website that's products channel your interests and lifestyle better. For this website we mostly used react-bootstrap and react-router-dom. React-bootstrap is a very useful tool, and it helped us create a functional and well styled Navbar.

With contributions from Kokutse Djoguenou, Shawn Greene, and Connor Kline.

## Technologies Used

M-MongoDB
E-Express
R-React
N-Node

React-bootstrap,
React-router-dom,
axios,
multer
mongoose

## Challenges Faced

The implementation of some of the style elements used in our Figma mockup. Shawn Greene did a good amount of the Figma part, though some features couldn't be put in due to constraints.

In the future, when submitting something like this to employers we'd like to go back and add some of the features that would really differentiate this from other online E-Commerce websites in the space. Initial ideas proposed at the beginning of the project included things such as having an interest quiz available and tags on every product and storefront which took from that quiz's answers.

## Getting Started

In order to use this project on your own computer you first need to fork from the repository <a href='https://github.com/Julesdj/MERN-YouShop.git'>here.</a>

From there enter your terminal, cd into whichever directory holds this project (simply typing the start of the directory name and pressing tab will autocomplete for you), and cd into the project folder.

Use 'npm run build' to create a production build of the project. That'll install the required packages and running 'npm start' from the main folder afterward will start the project in the default browser.

In short:

1. Enter your terminal.
2. CD into the directory you wish to install this project in.
3. Fork <a href='https://github.com/Julesdj/MERN-YouShop.git'>this</a> repository.
4. Copy the link provided.
5. Type 'git clone' and the link you were given, then press enter.
6. Wait for the repository to finish being loaded to your computer.
7. CD into the project folder, then type 'Code .' to open the project in your IDE of choice.
8. Add a file into the main project folder within your IDE, making sure to name it '.env' and pasting the below code into the new file. If this isn't done the project will NOT run correctly, or even at all.

PORT=3001
MONGO_URI= [Create and Paste your own MongoDB link here.]

9. Type npm run build in the terminal and wait for it to create an optimized production build of the project. This is what will allow you to actually see everything in action. Otherwise errors such as 'no index.html detected' will be thrown in the browser on the next step, alongside terminal errors due to dependencies missing.
10. Type npm start and wait for the server to start.
11. Go to your browser and type http://localhost:3001/ into the address bar. In the past, the project would go to the default browser and open itself, but that had to be removed due to issues with heroku deployment.
12. Enjoy looking through our project: Youshop!
