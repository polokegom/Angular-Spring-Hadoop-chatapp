sudo docker pull mongo
sudo docker run --name database -d -p 27000:27017 mongo
sudo docker exec -it database mongosh
use database
db.users.insertOne({"username":"Leratophi355","useremail":"lerato@gmail.com","password":"Lerato123#"})
