# 💸MegaSena💸 full-stack project:
### Preview:
<img src="https://i.imgur.com/BLx00LO.gif" alt="Winning page">

### Objective:

This project was created for a technical challenge, the idea was to create a betting game called "Megasena", where you can register multiple bets and then simulate a raffle.  
  
The aplication has a Backend built with springboot integrated with mongoDB running locally and a frontend built with ReactJS.  
  
Users can register by providing their name, CPF, and bet numbers. Adding bets is done using the player's CPF and the bet. The system validates inputs and updates and persist the information on a MongoDB database. Clicking the play button triggers the backend to execute the game logic, draw numbers, and return results. Prizes are calculated based on the number of players and rounds. Users can return to the homepage to restart the game or register more players, the homepage also features buttons for creating fake players, generating 15 fake players as an example.

<strong>Website to play the game: </strong>http://18.116.82.192:5173/
### Features:

- :white_check_mark: Docker integration
- :white_check_mark: AWS Cloud deployment
- :white_check_mark: Player registration and validation (CPF)
- :white_check_mark: Registration of multiple bets
- :white_check_mark: Input validation on bets
- :white_check_mark: Creation of sample players
- :white_check_mark: Database integration (player and bets persistence)

### Built with:
- Java
- SpringBoot
- MongoDB
- ReactJS
- Docker
- AWS EC2

## How to run:

**Access deployed website**:
http://18.116.82.192:5173/
or try these other options:

**Running locally with docker-compose**:

`git clone https://github.com/Reiss1x/megasena-fullstack-project.git` - to clone this repository  
`cd megasena-fullstack-project` - access project directory  
`docker-compose up` - run containers  
`http://localhost:5173/` - access website  

**Running locally without docker**:  
Backend:  
`git clone https://github.com/Reiss1x/megasena-fullstack-project.git` - to clone this repository    
`cd megasena-fullstack-project` - access backend directory  
`cd server` - access project directory  
`mvn clean install` - install dependencies  
`mvn spring-boot:run` - run backend  
Frontend:  
`cd megasena-fullstack-project` - access frontend directory  
`cd client` - access frontend directory  
`npm install` - install dependencies  
`npm run dev` - run frontend  

`http://localhost:5173/` - access website  



### What i learned:

Learned a lot about backend and frontend integration as well as database. It was my first experience dockerizing an aplication and deploying it to AWS utilizing EC2.

### Challenge repository:

https://github.com/Reiss1x/megasena-fullstack-project.git
