docker pull mysql
docker run --name pengu-oaut-database -e MYSQL_ROOT_PASSWORD=Password123# -e MYSQL_DATABASE=pengu_oauth_db -e MYSQL_USER=pengu_admin -e MYSQL_PASSWORD=Password123# -d mysql
