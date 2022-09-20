CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
--set extension

create extension if not exists "uuid-ossp";

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--insert fake users

INSERT INTO users (user_name, user_email, user_password)
VALUES ('henry', 'henry123@gmail', '12345678');
