USE zs63mEQ7Cb;

CREATE TABLE users (
id INT AUTO_INCREMENT,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE events (
id INT AUTO_INCREMENT,
event_name VARCHAR(255) NOT NULL,
event_description VARCHAR(255),
event_time INT,
event_location VARCHAR(255) NOT NULL,
event_creator_username VARCHAR(255),
user_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
id INT AUTO_INCREMENT,
comment_content VARCHAR(255) NOT NULL,
comment_creator_username VARCHAR (255) NOT NULL,
event_id INT NOT NULL,
user_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (event_id) REFERENCES events(id),
FOREIGN KEY (user_id) REFERENCES users(id)
);

-- DO NOT RUN --