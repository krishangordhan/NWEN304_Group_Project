--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE products (
    isbn bigint NOT NULL,
    book_name text NOT NULL,
    author text NOT NULL,
    description text,
    price real,
    image_link text,
    have_stock boolean,
    stock integer,
    genre text,
    tags text[],
    no_visitors integer,
    no_bought integer
);


ALTER TABLE products OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    user_id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    admin boolean,
    products_viewed bigint[],
    shopping_cart bigint[],
    history text[]
);


ALTER TABLE users OWNER TO postgres;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY products (isbn, book_name, author, description, price, image_link, have_stock, stock, genre, tags, no_visitors, no_bought) FROM stdin;
9780679805274	Oh, the Places You'll Go!	Dr. Seuss	From soaring to high heights and seeing great sights to being left in a Lurch on a prickle-ly perch, Dr. Seuss addresses life's ups and downs with his trademark humorous verse and illustrations, while encouraging readers to find the success that lies within. In a starred review, Booklist notes, "Seuss's message is simple but never sappy: life may be a 'Great Balancing Act,' but through it all 'There's fun to be done.'" A perennial favorite and a perfect gift for anyone starting a new phase in their life!	10	Images/9780679805274.jpg	t	9	Children	{"dr. seuss",seuss,children,oh,the,places,you'll,go,"oh the places you'll go"}	0	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (user_id, username, password, admin, products_viewed, shopping_cart, history) FROM stdin;
\.


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_pkey PRIMARY KEY (isbn);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

