sudo docker pull mongo
sudo docker run --name database -d -p 54677:27017 mongo
sudo docker exec -it database mongosh
use database
db.createCollection('users')
db.createCollection('freekafkatopics')
show collections
db.users.insertOne({username:"Leratophi355",useremail:"lerato@gmail.com",userpassword:"Lerato123#",kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:5362"})


db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53620"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53620"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53620"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53620"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53621"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53621"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53621"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53621"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53621"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53622"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53622"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53622"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53622"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53622"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53623"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53623"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53623"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53623"})
db.freekafkatopics.insertOne({kafkacluser:"zone2",kafkabrokerIP:"127.0.0.1:53623"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53624"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53624"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53624"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53624"})
db.freekafkatopics.insertOne({kafkacluser:"zone1",kafkabrokerIP:"127.0.0.1:53624"})

db.users.find()
db.freekafkatopics.find()
