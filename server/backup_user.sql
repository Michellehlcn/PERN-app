--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

-- Started on 2022-10-09 14:34:25 AEDT

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
-- TOC entry 3275 (class 1262 OID 16618)
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
-- TOC entry 203 (class 1259 OID 16657)
-- Name: users; Type: TABLE; Schema: public; Owner: michelle
--

CREATE TABLE public.users (
    user_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_name character varying(255) NOT NULL,
    user_email character varying(255) NOT NULL,
    user_password character varying(255) NOT NULL,
    user_acess character varying(255) DEFAULT 1 NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3269 (class 0 OID 16657)
-- Dependencies: 203
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: michelle
--

INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('0d0a376d-df48-4ddf-bf07-df6206e13c6b', 'henry', 'henry123@gmail', '12345678', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('571a0553-d7e8-492d-9fea-d6ab7d907897', 'email1', 'email1@gmail.com', '$2b$10$hVNFYgW1kowX.GtpRdnVp.sapDXdSzk6D5aK8JuVR90JQ/qunBrHe', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('2b9712ba-9492-47ac-a37b-88917d4a1c25', 'email1', 'email1@gmail.com', '$2b$10$C24XtoxO9XCzETMPf2a5WOipsiglJhN.tDz6gXFPto.a1UkPGgbYm', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('30a46b37-c51c-4b11-bc42-a8d3dffa0065', 'email1', 'email1@gmail.com', '$2b$10$M7rkTeSTfP0SUJ3ROWbUL.m/R3XtI6ClBPhCN3325pH3geB8gnEeS', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('2b856e9c-48bf-44a7-b68d-f38bdac30a4b', 'email1', 'email1@gmail.com', '$2b$10$lEr5RZotrUFp2o6gA0qhSO8fYZ883PoqUK3Eq41js8YywS.DAeOOO', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('6ad70b1f-5f24-4f6a-83d3-a9e5e42080a2', 'testing', 'testing@gmail.com', '$2b$10$7OusVWxiWHXDocF.RnSW2.gJNkjCaBqNhV5vPw8KLkX5nbd3xSuYa', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('6d1c4fc1-a6d0-432e-9dc7-7eac7014a0ee', 'testing1', 'testing1@gmail.com', '$2b$10$8VIQsv1DxgY.Mrow.Wx8Bu8x4jvfdlHV7z1OBUGLvRfhq7Oh.PbVK', '1');
INSERT INTO public.users (user_id, user_name, user_email, user_password, user_acess) VALUES ('d30d2fd6-bec9-4a12-9ece-4734ae3c093c', 'testing2', 'testng2@gmail.com', '$2b$10$RMS03hxclJpCW.IQxx1R5uMmCoj6Sn54fkQTVqlruStKBrO8x7b/i', '1');


--
-- TOC entry 3138 (class 2606 OID 16665)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: michelle
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


-- Completed on 2022-10-09 14:34:25 AEDT

--
-- PostgreSQL database dump complete
--

