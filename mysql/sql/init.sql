DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE
    big_questions (
      id INT NOT NULL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );

INSERT INTO big_questions
SET
  id = 1,
  name = "東京の難読地名クイズ";

INSERT INTO big_questions
SET
  id = 2,
  name = "広島の難読地名クイズ";

DROP TABLE IF EXISTS questions;

CREATE TABLE
    questions (
      id INT NOT NULL PRIMARY KEY,
      big_questions_id INT NOT NULL PRIMARY KEY,
      image VARCHAR(255) NOT NULL
    );

INSERT INTO questions
SET
  id = 1,
  big_questions_id = 1,
  image = "takanawa.png";

INSERT INTO questions
SET
  id = 2,
  big_questions_id = 2,
  image = "kameido.png";

INSERT INTO questions
SET
  id = 3,
  big_questions_id = 3,
  image = "mukainada.jpg";

CREATE TABLE
    choices (
      id INT NOT NULL PRIMARY KEY,
      questions_id INT NOT NULL PRIMARY KEY,
      image VARCHAR(255) NOT NULL,
      valid VARCHAR(255) NOT NULL
    );

INSERT INTO choices
SET
  id = 1,
  questions_id = 1,
  name = "たかなわ",
  valid = 1;

INSERT INTO choices
SET
  id = 2,
  questions_id = 1,
  name = "たかわ",
  valid = 0;

INSERT INTO choices
SET
  id = 3,
  questions_id = 1,
  name = "こうわ",
  valid = 0;

INSERT INTO choices
SET
  id = 4,
  questions_id = 2,
  name = "かめと",
  valid = 0;

INSERT INTO choices
SET
  id = 5,
  questions_id = 2,
  name = "かめど",
  valid = 0;

INSERT INTO choices
SET
  id = 6,
  questions_id = 2,
  name = "かめいど",
  valid = 1;

INSERT INTO choices
SET
  id = 7,
  questions_id = 3,
  name = "むこうひら",
  valid = 0;

INSERT INTO choices
SET
  id = 8,
  questions_id = 3,
  name = "むきひら",
  valid = 0;

INSERT INTO choices
SET
  id = 9,
  questions_id = 3,
  name = "むかいなだ",
  valid = 1;