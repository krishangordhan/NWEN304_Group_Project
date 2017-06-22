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
9780718177027	Me Before You	Jojo Moyes	Lou Clark knows lots of things. She knows how many footsteps there are between the bus stop and home. She knows she likes working in The Buttered Bun tea shop and she knows she might not love her boyfriend Patrick. What Lou doesn’t know is she’s about to lose her job or that knowing what’s coming is what keeps her sane. Will Traynor knows his motorcycle accident took away his desire to live. He knows everything feels very small and rather joyless now and he knows exactly how he’s going to put a stop to that. What Will doesn’t know is that Lou is about to burst into his world in a riot of colour. And neither of them knows they’re going to change the other for all time.	12.5	Images/9780718177027.jpg	t	10	Romance	{"jojo moyes",moyes,jojo,romance,adult,novel,"me before you",me,before,you,realistic,fiction}	0	0
9781408855652	Harry Potter #01: Harry Potter And The Philosopher's Stone	J.K Rowling	Harry Potter is an orphan brought up by his aunt and uncle who do not like him at all. Together with his cousin Dudley they wish that he didn't exist at all and make him live in the cupboard under the stairs. Harry though, is special. He finds out that he is a wizard and that he is to go to Hogwarts School of Witchcraft and Wizardry to learn magic. Only when he arrives at Hogwarts does he realise how special he actually is…	7.5	Images/9781408855652.png	t	20	Children	{series,fantasy,J.K,Rowling,harry,potter,philosopher's,stone,"harry potter",magic,hogwarts,"j.k rowling","harry potter and the philosopher stone"}	0	0
9780552160964	I Am Pilgrim	Terry Hayes	A breakneck race against time...and an implacable enemy. An anonymous young woman murdered in a run-down hotel, all identifying characteristics dissolved by acid. A father publicly beheaded in the blistering heat of a Saudi Arabian public square. A notorious Syrian biotech expert found eyeless in a Damascus junkyard. Smoldering human remains on a remote mountainside in Afghanistan. A flawless plot to commit an appalling crime against humanity. One path links them all, and only one man can make the journey.	10	Images/9780552160964.jpg	t	5	Thriller	{"terry hayes",terry,hayes,thriller,spy,crime,"i am",pilgrim,fiction,"i am pilgrim"}	0	0
9780007548699	All the Light We Cannot See	Anthony Doerr	Marie-Laure lives with her father in Paris near the Museum of Natural History, where he works as the master of its thousands of locks. When she is six, Marie-Laure goes blind and her father builds a perfect miniature of their neighborhood so she can memorize it by touch and navigate her way home. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure's reclusive great-uncle lives in a tall house by the sea. With them they carry what might be the museum's most valuable and dangerous jewel. In a mining town in Germany, the orphan Werner grows up with his younger sister, enchanted by a crude radio they find. Werner becomes an expert at building and fixing these crucial new instruments, a talent that wins him a place at a brutal academy for Hitler Youth, then a special assignment to track the resistance. More and more aware of the human cost of his intelligence, Werner travels through the heart of the war and, finally, into Saint-Malo, where his story and Marie-Laure's converge.	10	Images/9780007548699.png	t	4	Historical	{"world war 2","world war","anthony doerr",anthony,doerr,all,the,light,we,cannot,see,"all the light we cannot see",historical,fiction,france}	0	0
9780006479888	A Song of Ice and Fire #01: A Game of Thrones	George R. R. Martin	Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty. The old gods have no power in the south, Star's family is split and there is treachery at court. Worse, the vengeance-mad heir of the deposed Dragon King has grown to maturity in exile in the Free Cities. He claims the Iron Throne.	15	Images/9780006479888.jpg	t	12	Fantasy	{"song of ice and fire","game of thrones",game,of,thrones,song,ice,fire,fiction,fantasy,winter,north,dragon,george,martin,"george r. r. martin"}	0	0
9781405910705	Orphan X #01: Orphan X	Gregg Andrew Hurwitz	The Nowhere Man is a legendary figure spoken about only in whispers. It's said that when he's reached by the truly desperate and deserving, the Nowhere Man can and will do anything to protect and save them. But he's no legend. Evan Smoak is a man with skills, resources, and a personal mission to help those with nowhere else to turn. He's also a man with a dangerous past. Chosen as a child, he was raised and trained as part of the off-the-books black box Orphan program, designed to create the perfect deniable intelligence assets—i.e. assassins. He was Orphan X. Evan broke with the program, using everything he learned to disappear. Now, however, someone is on his tail. Someone with similar skills and training. Someone who knows Orphan X. Someone who is getting closer and closer. And will exploit Evan's weakness—his work as The Nowhere Man—to find him and eliminate him. Grabbing the reader from the very first page, Orphan X is a masterful thriller, the first in Gregg Hurwitz's electrifying new series featuring Evan Smoak.	7.5	Images/9781405910705.png	t	12	thriller	{thriller,fantasy,gregg,hurwitz,"gregg hurwitz",series,orpan,"orphan x"}	0	0
9781784751371	Outlander #01: Outlander	Diana Gabaldon	The year is 1945. Claire Randall, a former combat nurse, is just back from the war and reunited with her husband on a second honeymoon when she walks through a standing stone in one of the ancient circles that dot the British Isles. Suddenly she is a Sassenach—an "outlander"—in a Scotland torn by war and raiding border clans in the year of Our Lord...1743. Hurled back in time by forces she cannot understand, Claire is catapulted into the intrigues of lairds and spies that may threaten her life, and shatter her heart. For here James Fraser, a gallant young Scots warrior, shows her a love so absolute that Claire becomes a woman torn between fidelity and desire—and between two vastly different men in two irreconcilable lives.	12	Images/9781784751371.jpg	t	12	Romance	{romance,historical,fiction,"science fiction","world war 2","time travel",outlander,series,diana,gabaldon,"diana gabaldon"}	0	0
9781743515860	The Book Thief	Markus Zusak	It's just a small story really, about among other things: a girl, some words, an accordionist, some fanatical Germans, a Jewish fist-fighter, and quite a lot of thievery Set during World War II in Germany, Markus Zusak's groundbreaking new novel is the story of Liesel Meminger, a foster girl living outside of Munich. Liesel scratches out a meager existence for herself by stealing when she encounters something she can't resist-books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement before he is marched to Dachau. This is an unforgettable story about the ability of books to feed the soul.	10	Images/9781743515860.png	t	18	Historical	{historical,fiction,"world war","world war 2","the book",book,thief,war,"the book thief",markus,zusak,"markus zusak"}	0	0
9781784161750	The Girl on the Train	Paula Hawkins	EVERY DAY THE SAME Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She's even started to feel like she knows them. Jess and Jason, she calls them. Their life—as she sees it—is perfect. Not unlike the life she recently lost. UNTIL TODAY And then she sees something shocking. It’s only a minute until the train moves on, but it's enough. Now everything's changed. Unable to keep it to herself, Rachel goes to the police. But is she really as unreliable as they say? Soon she is deeply entangled not only in the investigation but in the lives of everyone involved. Has she done more harm than good? 	14	Images/9781784161750.jpg	t	12	thriller	{thriller,psychological,fiction,girl,"on the",train,"the girl on the train",paula,hawkins,"paula hawkins"}	0	0
9780857054036	The Girl with the Dragon Tattoo	Stieg Larsson, Martin Wenner	Mikael Blomkvist, a once-respected financial journalist, watches his professional life rapidly crumble around him. Prospects appear bleak until an unexpected (and unsettling) offer to resurrect his name is extended by an old-school titan of Swedish industry. The catch—and there's always a catch—is that Blomkvist must first spend a year researching a mysterious disappearance that has remained unsolved for nearly four decades. With few other options, he accepts and enlists the help of investigator Lisbeth Salander, a misunderstood genius with a cache of authority issues. Little is as it seems in Larsson's novel, but there is at least one constant: you really don't want to mess with the girl with the dragon tattoo.	12	Images/9780857054036.jpg	t	12	thriller	{thriller,crime,fiction,mystery,"scandenavian noir","the girl",girl,"with the",dragon,tattoo,stiegg,larsson,"stiegg larsson",martin,wenner,"martin wenner","the girl with the dragon tattoo"}	0	0
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

