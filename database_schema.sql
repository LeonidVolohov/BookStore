
CREATE TABLE user_profile
(
    id         SERIAL PRIMARY KEY,
    username   TEXT,
    password   TEXT,
    first_name TEXT,
    last_name  TEXT,
    patronymic TEXT,
    phone      TEXT UNIQUE,
    info       TEXT,
    role       TEXT
);

CREATE TABLE book
(
    id          SERIAL PRIMARY KEY,
    name        TEXT UNIQUE,
    publisher   TEXT,
    authors     TEXT,
    description TEXT,
    sell_price  INTEGER
);

CREATE TABLE "order"
(
    id          	SERIAL	PRIMARY KEY,
    id_book     	INTEGER   NOT NULL REFERENCES book (id),
    id_user		    INTEGER   NOT NULL REFERENCES user_profile (id),
    price_per_book	INTEGER,
    count	 	    INTEGER,
    buy_date      	TIMESTAMP,
    summary_price   INTEGER
);

INSERT INTO user_profile (username, password, first_name, last_name, patronymic, phone, info, role) VALUES ('superuser', '123', 'first_name', 'last_name', 'patronymic', '+79210000000', 'info', 'superuser');
INSERT INTO user_profile (username, password, first_name, last_name, patronymic, phone, info, role) VALUES ('user', '123', 'Ivan', 'Ivanov', 'Ivanovich', '+79211230000', 'info', 'user');


INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Евгений Онегин', 'Москва', 'Пушкин А.С', 'Описание книги', '999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Борис Годунов', 'Москва', 'Пушкин А.С', 'Описание книги', '1999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Моцарт и Сальери', 'Москва', 'Пушкин А.С', 'Описание книги', '2999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Каменный гость', 'Москва', 'Пушкин А.С', 'Описание книги', '3999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Пир во время чумы', 'Москва', 'Пушкин А.С', 'Описание книги', '4999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Скупной рыцарь', 'Москва', 'Пушкин А.С', 'Описание книги', '5999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Русалка', 'Москва', 'Пушкин А.С', 'Описание книги', '6999');
INSERT INTO book (name, publisher, authors, description, sell_price) VALUES ('Демон Онегина', 'Москва', 'Пушкин А.С', 'Описание книги', '7999');
