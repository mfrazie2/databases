/*
+----------------+
| Tables_in_chat |
+----------------+
| message        |
| roomnames      |
| users          |
+----------------+
3 rows in set (0.00 sec)

mysql> show columns from message;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int(200)     | NO   | PRI | NULL    | auto_increment |
| text         | varchar(250) | YES  |     | NULL    |                |
| id_users     | int(20)      | YES  | MUL | NULL    |                |
| id_roomnames | int(20)      | YES  | MUL | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+
4 rows in set (0.12 sec)

mysql> show columns from roomnames;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int(50)     | NO   | PRI | NULL    | auto_increment |
| roomname | varchar(25) | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
2 rows in set (0.02 sec)

mysql> show columns from users;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int(50)     | NO   | PRI | NULL    | auto_increment |
| username | varchar(20) | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)

mysql> describe users;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int(50)     | NO   | PRI | NULL    | auto_increment |
| username | varchar(20) | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
2 rows in set (0.03 sec)

*/