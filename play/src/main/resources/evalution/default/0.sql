/**
 * This file is not a typical evolution sql script. It is needed for now, before
 * we have a server to hold our database.
 *
 * You only need to run these mysql commands the first time you open this project.
 * It will create the right database and the right user we need for this project.
 * The user created can only access to `management_app_db` (for your security)
 */

# -- Created by Tom on 2017.4.5 branch:tom/add-sql-script (Any .sql script should follow this convention)

# create database `management_app_db`
CREATE DATABASE IF NOT EXISTS `management_app_db`;

# create user
CREATE USER 'management_app_admin'@'localhost' IDENTIFIED BY 'tupotianji';

# add user permission
GRANT ALL PRIVILEGES ON management_app_db.* TO 'management_app_admin'@'localhost';

FLUSH PRIVILEGES;