INSERT INTO users(username, password)
VALUES ('test_user1', 'test_password1'),
        ('test_user2', 'test_password2'),
        ('test_user3', 'test_password3');


INSERT INTO events (event_name, event_description, event_time, event_location, event_creator_username, user_id)
VALUES ('test_event', 'test_description', 1200, 'test_location', 'test_creator', 1);

INSERT INTO comments (comment_content, comment_creator_username, event_id, user_id)
VALUES ('test_comment', 'test_commentor', 1, 2);

SELECT * FROM users;

SELECT * FROM events;

SELECT * FROM comments;