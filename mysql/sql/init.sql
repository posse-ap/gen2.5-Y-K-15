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
      big_question_id INT NOT NULL,
      image VARCHAR(255) NOT NULL
    );

INSERT INTO questions
SET
  id = 1,
  big_question_id = 1,
  image = "takanawa.png";

INSERT INTO questions
SET
  id = 2,
  big_question_id = 1,
  image = "kameido.png";

INSERT INTO questions
SET
  id = 3,
  big_question_id = 2,
  image = "mukainada.jpg";

DROP TABLE IF EXISTS choices;

CREATE TABLE
    choices (
      id INT NOT NULL PRIMARY KEY,
      question_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      valid VARCHAR(255) NOT NULL
    );

INSERT INTO choices
SET
  id = 1,
  question_id = 1,
  name = "takanawa",
  valid = 1;

INSERT INTO choices
SET
  id = 2,
  question_id = 1,
  name = "takawa",
  valid = 0;

INSERT INTO choices
SET
  id = 3,
  question_id = 1,
  name = "kouwa",
  valid = 0;

INSERT INTO choices
SET
  id = 4,
  question_id = 2,
  name = "kameto",
  valid = 0;

INSERT INTO choices
SET
  id = 5,
  question_id = 2,
  name = "kamedo",
  valid = 0;

INSERT INTO choices
SET
  id = 6,
  question_id = 2,
  name = "kameido",
  valid = 1;

INSERT INTO choices
SET
  id = 7,
  question_id = 3,
  name = "mukouhira",
  valid = 0;

INSERT INTO choices
SET
  id = 8,
  question_id = 3,
  name = "mukihira",
  valid = 0;

INSERT INTO choices
SET
  id = 9,
  question_id = 3,
  name = "mukainada",
  valid = 1;