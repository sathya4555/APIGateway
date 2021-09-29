Documentation: How to set up and run Api Gateway on different enviroment

Download Node.Js from https://nodejs.org/en/ if you dont have it already.

1> Run "npm i --save" from the command line to install the necessary modules.
2> As this project is based on Nest.Js (You're required to download @Nest.js cli globally).
3> For installing nest js cli use the following command- "npm install -g @nestjs/cli"
4> For running the project on different environment you'd need to set the environment using this command before running the application
 Run the following command before running the application- "Set NODE_ENV=local"( for local)
                                                            "Set NODE_ENV=dev"( for dev)
                                                            "Set NODE_ENV=qa"( for qa)
                                                            "Set NODE_ENV=prod"( for local)
                                                            
5> For deploying the project as a docker container on cloud You'd need to create the Dockerfile using .sh or .bat files inside the project folder.
