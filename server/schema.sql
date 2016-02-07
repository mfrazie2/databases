CREATE DATABASE chat;

USE chat;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR (20) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'message'
-- 
-- ---

DROP TABLE IF EXISTS `message`;
    
CREATE TABLE `message` (
  `id` INTEGER NOT NULL AUTO_INCREMENT ,
  `text` VARCHAR (200) NOT NULL,
  `roomname` VARCHAR (20) NOT NULL,
  `id_users` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `message` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);







-- CREATE TABLE messages (
--   user_id number(10), room_id number(10), message varchar(250) 
-- );

--  Create other tables and define schemas for them here! 
-- CREATE TABLE users (
--   user_id number(10), username varchar(20)
-- );

-- CREATE TABLE rooms (
--   room_id number(10), roomname varchar(20)
-- );


-- DROP TABLE IF EXISTS `users`;
    
-- CREATE TABLE `users` (
--   `id` INTEGER (20) /*AUTO_INCREMENT DEFAULT NULL*/,
--   `username` VARCHAR (20) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'roomnames'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `roomnames`;
    
-- CREATE TABLE `roomnames` (
--   `id` INTEGER (20) AUTO_INCREMENT DEFAULT NULL,
--   `roomname` VARCHAR (20) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'message'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `message`;
    
-- CREATE TABLE `message` (
--   `id` INTEGER (20) AUTO_INCREMENT DEFAULT NULL,
--   `text` MEDIUMTEXT (250) DEFAULT NULL,
--   `id_users` INTEGER (20) DEFAULT NULL,
--   `id_roomnames` INTEGER (20) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );







/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

