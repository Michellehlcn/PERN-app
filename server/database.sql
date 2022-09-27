CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
/*--set extension-------*/
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


---create table form_schedule
CREATE SEQUENCE form_id_seq START WITH 1;

CREATE TABLE form_schedule (
    form_id INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('form_id_seq'),

    subject VARCHAR(255) NOT NULL,
    campus VARCHAR(255) NOT NULL DEFAULT 'remote',
    day VARCHAR(255) NOT NULL,
    am_pm_eve VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL,
    _group VARCHAR(255) NOT NULL,
    zoom_id_for_trainer VARCHAR(255),
    zoom_password_for_trainer VARCHAR(255),
    zoom_link_for_students VARCHAR(255),
    campus_room_no_capacity VARCHAR(255),
    classrom_capacity VARCHAR(255),
    number_of_student VARCHAR(255),
    student_profile VARCHAR(255),
    class_size_utilization VARCHAR(255),
    unique_group VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    posting_date TIMESTAMP NOT NULL DEFAULT NOW(),
    owner_id VARCHAR(255)
);