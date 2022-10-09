--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

-- Started on 2022-10-09 14:33:58 AEDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE app;
--
-- TOC entry 3277 (class 1262 OID 16618)
-- Name: perntodo; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE app OWNER TO postgres;

\connect app

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 16716)
-- Name: form_schedule; Type: TABLE; Schema: public; Owner: michelle
--

CREATE TABLE public.form_schedule (
    form_id integer DEFAULT nextval('public.form_id_seq'::regclass) NOT NULL,
    subject character varying(255) NOT NULL,
    campus character varying(255) DEFAULT 'remote'::character varying NOT NULL,
    date character varying(255) NOT NULL,
    "time" character varying(255) NOT NULL,
    course character varying(255) NOT NULL,
    _group character varying(255),
    zoom_id_for_trainer character varying(255),
    zoom_password_for_trainer character varying(255),
    zoom_link_for_students character varying(255),
    campus_room_no_capacity character varying(255),
    classrom_capacity character varying(255),
    number_of_student character varying(255),
    student_profile character varying(255),
    class_size_utilization character varying(255),
    unique_group character varying(255),
    is_active boolean DEFAULT false,
    posting_date timestamp without time zone DEFAULT now() NOT NULL,
    owner_id character varying(255)
);


ALTER TABLE public.form_schedule OWNER TO postgres;

--
-- TOC entry 3271 (class 0 OID 16716)
-- Dependencies: 205
-- Data for Name: form_schedule; Type: TABLE DATA; Schema: public; Owner: michelle
--

INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (14, 'Cycle A Theory', 'PERTH', 'TUESDAY', 'PM 12:00 - 14:00', 'CIV YOGA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-03 20:51:08.094703', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (15, 'Massage Clinic C', 'PERTH', 'WEDNESDAY', 'AM 12:00 - 14:00', 'DIP Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-03 22:21:18.442965', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (16, 'Healthy Bodies Theory', 'MELBOURNE', 'TUESDAY', 'PM 12:00 - 14:00', 'DIP CNSL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-03 22:23:46.640739', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (17, 'Massage Clinic C', 'MELBOURNE', 'TUESDAY', 'AM 12:00 - 14:00', 'DIP Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-04 20:44:32.634595', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (18, 'Health Science A (1-3T)', 'PERTH', 'WEDNESDAY', 'PM 12:00 - 14:00', 'CIV Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-04 22:23:23.456648', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (23, 'Massage Clinic C', 'BRISBANE', 'TUESDAY', 'PM 12:00 - 14:00', 'CIV Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-07 21:54:11.828711', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (13, 'Human Resource Management', 'BRISBANE', 'WEDNESDAY', 'AM 12:00 - 14:00', 'DIP Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-03 20:50:51.042108', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (29, 'Counselling Specialisation', 'SYDNEY', 'FRIDAY', 'PM 12:00 - 14:00', 'DIP Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-08 23:37:24.108209', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (77, 'Curriculm Design', 'PERTH', 'TUESDAY', 'PM 12:00 - 14:00', 'DRSM FIT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2022-10-09 11:53:50.828949', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (21, 'Massage Clinic C', 'PERTH', 'TUESDAY', 'PM 12:00 - 14:00', 'CIV Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, false, '2022-10-05 21:58:26.773059', NULL);
INSERT INTO public.form_schedule (form_id, subject, campus, date, "time", course, _group, zoom_id_for_trainer, zoom_password_for_trainer, zoom_link_for_students, campus_room_no_capacity, classrom_capacity, number_of_student, student_profile, class_size_utilization, unique_group, is_active, posting_date, owner_id) VALUES (12, 'Leadership in Early Childhood Education', 'SYDNEY', 'THURSDAY', 'AM 12:00 - 14:00', 'CIV Massage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, false, '2022-10-03 20:50:19.974805', NULL);


--
-- TOC entry 3140 (class 2606 OID 16727)
-- Name: form_schedule form_schedule_pkey; Type: CONSTRAINT; Schema: public; Owner: michelle
--

ALTER TABLE ONLY public.form_schedule
    ADD CONSTRAINT form_schedule_pkey PRIMARY KEY (form_id);


-- Completed on 2022-10-09 14:33:59 AEDT

--
-- PostgreSQL database dump complete
--

