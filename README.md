NATS-NODE test

How to run this?

Install Docker Compose (https://docs.docker.com/compose/install/)

To run this test use following commands

docker-compose build
docker-compose up -d
npm i
npm run publish
npm run listen

To stop the containers use docker-compose stop

To delete the containers use docker-compose down

Test the NATS UI through http://localhost:8224
