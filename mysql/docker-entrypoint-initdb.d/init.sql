SET
  character_set_client = utf8mb4;

SET
  character_set_connection = utf8mb4;

SET
  character_set_results = utf8mb4;

DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;


DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions(
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
INSERT INTO
  big_questions(id, name);
VALUES
  (1, "東京の難読地名クイズ");

INSERT INTO
  big_questions(id, name);
VALUES
  (2, "広島の難読地名クイズ");


