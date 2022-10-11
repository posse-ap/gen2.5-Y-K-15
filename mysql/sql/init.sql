DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;

-- table
DROP TABLE IF EXISTS logs;

CREATE TABLE
    logs (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        language_id INT NOT NULL,
        content_id INT NOT NULL,
        date DATE,
        time INT NOT NULL
    );

DROP TABLE IF EXISTS language;

CREATE TABLE
    languages (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        language VARCHAR(255) NOT NULL
    );

DROP TABLE IF EXISTS contents;

CREATE TABLE
    contents (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        material VARCHAR(255) NOT NULL
    );

-- dummy data

INSERT INTO languages (id,language) VALUES
(1,"HTML"),
(2,"CSS"),
(3,"JavaScript"),
(4,"PHP"),
(5,"Laravel"),
(6,"SQL"),
(7,"SHELL"),
(8,"情報システム基礎知識(その他)");

INSERT INTO contents (id,material) VALUES
(1,"N予備校"),
(2,"ドットインストール"),
(3,"POSSE課題");

INSERT INTO logs (user_id,language_id,content_id,date,time) VALUES
(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -28 day),
FLOOR(RAND() * 11) + 1 
),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -27 day),
FLOOR(RAND() * 11) + 1 
),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -27 day),
FLOOR(RAND() * 11) + 1 
),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -26 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -26 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -25 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -24 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -20 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -19 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -17 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -14 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -12 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -9 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -8 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -7 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -6 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -5 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -4 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -3 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -2 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -1 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval -1 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 1 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 1 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 3 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 4 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 5 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 6 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 8 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 8 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 10 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 11 day),
FLOOR(RAND() * 11) + 1),

(FLOOR(RAND() * 3) + 1,
FLOOR(RAND() * 9) + 1,
FLOOR(RAND() * 4) + 1,
ADDDATE('2022-10-01',interval 12 day),
FLOOR(RAND() * 11) + 1);
