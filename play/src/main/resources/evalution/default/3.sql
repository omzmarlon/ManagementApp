# --- !Ups

CREATE TABLE IF NOT EXISTS ItemsComposeQuizes (
  quiz_id BIGINT NOT NULL,
  item_id BIGINT NOT NULL,
  PRIMARY KEY (quiz_id, item_id),
  FOREIGN KEY (quiz_id)
  REFERENCES Quizes (id)
    ON DELETE CASCADE,
  FOREIGN KEY (item_id)
  REFERENCES QuizItems (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS QuizesAssignToGroups (
  quiz_id BIGINT NOT NULL,
  group_id BIGINT NOT NULL,
  assign_at BIGINT NOT NULL,
  PRIMARY KEY (quiz_id, group_id),
  FOREIGN KEY (quiz_id)
  REFERENCES Quizes (id)
    ON DELETE CASCADE,
  FOREIGN KEY (group_id)
  REFERENCES Groups (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS StudentsJoinGroups (
  user_id BIGINT NOT NULL,
  group_id BIGINT NOT NULL,
  join_at BIGINT NOT NULL,
  PRIMARY KEY (user_id, group_id),
  FOREIGN KEY (user_id)
  REFERENCES Students (user_id)
    ON DELETE CASCADE,
  FOREIGN KEY (group_id)
  REFERENCES Groups (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS StudentsWorkOnQuizes (
  user_id BIGINT NOT NULL,
  quiz_id BIGINT NOT NULL,
  grade INT(3) NOT NULL,
  stuAnswer VARCHAR(20) NOT NULL,
  start_at BIGINT NOT NULL,
  end_at BIGINT NOT NULL,
  PRIMARY KEY (user_id, quiz_id),
  FOREIGN KEY (user_id)
  REFERENCES Students (user_id)
    ON DELETE CASCADE,
  FOREIGN KEY (quiz_id)
  REFERENCES Quizes (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TutorsCreateGroups (
  user_id BIGINT NOT NULL,
  group_id BIGINT NOT NULL,
  create_at BIGINT NOT NULL,
  PRIMARY KEY (group_id),
  FOREIGN KEY (user_id)
  REFERENCES Users (id)
    ON DELETE CASCADE,
  FOREIGN KEY (group_id)
  REFERENCES Groups (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TutorsCreateQuizes (
  user_id BIGINT NOT NULL,
  quiz_id BIGINT NOT NULL,
  create_at BIGINT NOT NULL,
  PRIMARY KEY (quiz_id),
  FOREIGN KEY (user_id)
  REFERENCES Users (id)
    ON DELETE CASCADE,
  FOREIGN KEY (quiz_id)
  REFERENCES Quizes (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS UserImages (
  user_id BIGINT NOT NULL,
  image_id BIGINT NOT NULL,
  category ENUM('Avatar', 'Passport', 'Insurance') NOT NULL,
  PRIMARY KEY (image_id),
  FOREIGN KEY (user_id)
  REFERENCES Users (id)
    ON DELETE CASCADE,
  FOREIGN KEY (image_id)
  REFERENCES Images (id)
    ON DELETE CASCADE
);

# --- !Downs

DROP TABLE IF EXISTS ItemsComposeQuizes CASCADE;
DROP TABLE IF EXISTS QuizesAssignToGroups CASCADE;
DROP TABLE IF EXISTS StudentsJoinGroups CASCADE;
DROP TABLE IF EXISTS StudentsWorkOnQuizes CASCADE;
DROP TABLE IF EXISTS TutorsCreateGroups CASCADE;
DROP TABLE IF EXISTS TutorsCreateQuizes CASCADE;
DROP TABLE IF EXISTS UserImages CASCADE;