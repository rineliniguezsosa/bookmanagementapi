CREATE TABLE Authors (
	id INT PRIMARY KEY IDENTITY(1,1),
	firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	birthdate DATE NULL,
	nationality VARCHAR(50) NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Genres (
	id INT PRIMARY KEY IDENTITY(1,1),
	name VARCHAR(50) UNIQUE NOT NULL,
	description TEXT NULL, 
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Publishers (
	id INT PRIMARY KEY IDENTITY(1,1),
	name VARCHAR(100) UNIQUE NOT NULL,
	country VARCHAR(50) NULL,
	established_year SMALLINT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Users (
	id INT PRIMARY KEY IDENTITY(1,1),
	username VARCHAR(10) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(16) NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Books (
	id INT PRIMARY KEY IDENTITY(1,1),
	title VARCHAR(150) NOT NULL,
	isbn VARCHAR(20) UNIQUE NOT NULL,
	publication_date DATE NULL, 
	number_of_pages INT NULL,
	author_id INT NOT NULL,
	publisher_id INT NOT NULL,
	genre_id INT NOT NULL,
	FOREIGN KEY (author_id) 
		REFERENCES Authors(id),
	FOREIGN KEY (publisher_id)
		REFERENCES Publishers(id),
	FOREIGN KEY (genre_id)
		REFERENCES Genres(id)
);

CREATE TABLE BookAuthors (
	book_id INT NOT NULL,
	author_id INT NOT NULL,
	FOREIGN KEY (book_id)
		REFERENCES Books(id),
	FOREIGN KEY (author_id)
		REFERENCES Authors(id)
);

CREATE TABLE Reviews (
	id INT PRIMARY KEY IDENTITY(1,1),
	content TEXT NOT NULL,
	rating TINYINT NOT NULL CHECK(rating BETWEEN 1 AND 5),
	book_id INT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (book_id)
		REFERENCES Books(id),
	FOREIGN KEY (user_id)
		REFERENCES Users(id),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ALTERS
ALTER TABLE Books 
ADD created_at DATETIME DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE Publishers DROP CONSTRAINT UQ__Publishe__72E12F1B771515A6;

-- SELECT