
INSERT INTO users(name, age, password)
VALUES
('user 1', 50, 'a'),
('user 2', 30, 'a'),
('user 3', 21, 'a'),
('user 4', 25, 'a');


INSERT INTO gardens(name, zipcode, user_id)
VALUES
('garden1', '10023', 1),
('garden2', '10019', 1),
('garden3', '10023', 2),
('garden4', '10001', 3),
('garden5', '10021', 3),
('garden6', '10111', 4);

INSERT INTO produce(name, description)
VALUES
('carrot', 'seasonal'),
('pepper', 'plant during summer'),
('cilantro', 'herbs'),
('tomato', 'testing tomatoes'),
('beets', 'seasonal'),
('beans', 'no selection'),
('potato', 'plant during summer'),
('pumpkin', 'herbs'),
('basil', 'testing tomatoes'),
('sweet potato', 'seasonal'),
('garlic', 'seasonal'),
('zucchini', 'seasonal');

INSERT INTO quadrants(garden_id, produce_id, user_id)
VALUES
(1, 4, 1),
(1, 2, 1),
(1, 2, 1),
(1, 3, 3),
(1, 4, 3),
(1, 2, 2),
(1, 3, 1),
(1, 2, 4),
(1, 5, 1),
(2, 2, 3),
(2, 3, 3),
(2, 3, 1),
(2, 3, 2),
(2, 5, 3),
(2, 5, 4),
(2, 2, 4),
(2, 4, 3),
(2, 4, 2),
(3, 4, 1),
(3, 5, 1),
(3, 5, 1),
(3, 5, 2),
(3, 3, 2),
(3, 3, 3),
(3, 4, 4),
(3, 2, 4),
(3, 2, 4),
(4, 4, 1),
(4, 5, 1),
(4, 5, 1),
(4, 5, 2),
(4, 3, 2),
(4, 3, 3),
(4, 4, 4),
(4, 2, 4),
(4, 2, 4),
(5, 4, 1),
(5, 5, 1),
(5, 5, 1),
(5, 5, 2),
(5, 3, 2),
(5, 3, 3),
(5, 4, 4),
(5, 2, 4),
(5, 2, 4),
(6, 4, 1),
(6, 5, 1),
(6, 5, 1),
(6, 5, 2),
(6, 3, 2),
(6, 3, 3),
(6, 4, 4),
(6, 2, 4),
(6, 2, 4);