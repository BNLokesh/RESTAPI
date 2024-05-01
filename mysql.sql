-- CREATE TABLE Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password_hash TEXT);

-- CREATE TABLE Tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, status TEXT, assignee_id INTEGER, created_at DATETIME, updated_at DATETIME, FOREIGN KEY(assignee_id) REFERENCES Users(id));


-- INSERT INTO Users (username, password_hash) VALUES
--   ('john_doe', 'password123'),
--   ('jane_smith', 'securepass'),
--   ('alice_jones', 'mysecretpassword');


-- SELECT * FROM Users;

-- INSERT INTO Tasks (title, description, status, assignee_id, created_at, updated_at) VALUES
--   ('Task 1', 'Lorem ipsum dolor sit amet', 'pending', 1, '2024-04-30 08:00:00', '2024-04-30 08:00:00'),
--   ('Task 2', 'Consectetur adipiscing elit', 'in progress', 2, '2024-04-30 09:30:00', '2024-04-30 09:30:00'),
--   ('Task 3', 'Sed do eiusmod tempor incididunt', 'completed', 3, '2024-04-30 10:45:00', '2024-04-30 10:45:00');

-- SELECT * FROM Tasks;