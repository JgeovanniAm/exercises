USE master 

DROP DATABASE  IF EXISTS Libreria

GO

CREATE DATABASE Libreria 

GO

USE Libreria

CREATE TABLE libro(
	libroId INT IDENTITY PRIMARY KEY NOT NULL,
	precio DECIMAL NOT NULL,
	ibsm VARCHAR(50) NOT NULL, 
	titulo VARCHAR(50) NOT NULL,
	author VARCHAR(50) NOT NULL,
)

CREATE TABLE tipoLibro(
	tipoLibroId INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(15) NOT NULL,
)

CREATE TABLE inventario(
	inventarioId INT IDENTITY PRIMARY KEY NOT NULL,
	cantidad INT NOT NULL,
	stock BIT NOT NULL DEFAULT 1
)

CREATE TABLE reserva(
	reservaID INT IDENTITY PRIMARY KEY NOT NULL,
	fechaRealizacion DATETIME NOT NULL,
)

CREATE TABLE estadoReserva(
	estadoReservaId INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(10) NOT NULL,
	description VARCHAR(50) NOT NULL,
)

CREATE TABLE reservaDetalles(
	reservaDetallesId INT IDENTITY PRIMARY KEY NOT NULL,
)

CREATE TABLE miembro(
	miembroId INT IDENTITY PRIMARY KEY NOT NULL,
	dirreccion VARCHAR(50) NOT NULL,
	rol VARCHAR(15) NOT NULL,
	contrasena VARCHAR(20) NOT NULL,
	fechaNacimiento DATE NOT NULL,
	correo VARCHAR(30) NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	genero VARCHAR(10) NOT NULL,  
)

ALTER TABLE Libro 
	ADD tipoLibroId INT NOT NULL
	CONSTRAINT FK_Libro_tipoLibroId FOREIGN KEY(tipoLibroId) REFERENCES dbo.tipoLibro(tipoLibroId)

ALTER TABLE Libro 
	ADD inventarioId INT NOT NULL
	CONSTRAINT FK_Libro_inventarioId FOREIGN KEY(inventarioId) REFERENCES dbo.inventario(inventarioId) ON DELETE CASCADE

ALTER TABLE reservaDetalles
	ADD reservaID INT NOT NULL,
	CONSTRAINT FK_reservaDetalles_reservaID FOREIGN KEY(reservaID) REFERENCES dbo.reserva(reservaID) ON DELETE CASCADE

ALTER TABLE reservaDetalles
	ADD inventarioId INT NOT NULL,
	CONSTRAINT FK_reservaDetalles_inventarioId FOREIGN KEY(inventarioId) REFERENCES dbo.inventario(inventarioId) ON DELETE CASCADE

ALTER TABLE reserva 
	ADD miembroId INT NOT NULL,
	CONSTRAINT FK_reserva_miembroId  FOREIGN KEY(miembroId) REFERENCES dbo.miembro(miembroId) 

ALTER TABLE reserva 
	ADD estadoReservaId INT NOT NULL,
	CONSTRAINT FK_reserva_estadoReservaId  FOREIGN KEY(estadoReservaId) REFERENCES dbo.estadoReserva(estadoReservaId)

GO

--tipoLibro

INSERT INTO tipoLibro(
	nombre
) VALUES ('Fantasia')

INSERT INTO tipoLibro(
	nombre
) VALUES ('Infantil')

INSERT INTO tipoLibro(
 	nombre
) VALUES ('Misterio')

INSERT INTO tipoLibro(
	nombre
) VALUES ('YA')

--inventario

INSERT INTO inventario(
	cantidad
) VALUES(20)

INSERT INTO inventario(
	cantidad
) VALUES(5)

INSERT INTO inventario(
	cantidad
) VALUES(100)

--Libro

INSERT INTO libro (
	precio,
	ibsm,
	titulo,
	author,
	tipoLibroId,
	inventarioId
) VALUES (2000, '9080381J', 'Javacript Developer', 'Jimmy Alvarez Mendoza', 2, 1)

INSERT INTO libro (
	precio,
	ibsm,
	titulo,
	author,
	tipoLibroId,
	inventarioId
) VALUES (5000, 'JJDSAO09', 'CSS And HTML Developer', 'Castrilo Perez Mendez', 1, 2)

INSERT INTO libro (
	precio,
	ibsm,
	titulo,
	author,
	tipoLibroId,
	inventarioId
) VALUES (9000, 'I809342093J', 'JAVA Developer', 'Monica Perez Mendez', 1, 3)

--Miembro

INSERT INTO miembro (
	nombre,
	genero,
	correo,
	fechaNacimiento,
	contrasena,
	rol,
	dirreccion
) VALUES ('alvaro gonzalez alvarado', 'hombre', 'alv@gmail.com', '1999-10-15', '123', 'estudiante', 'del cristo sabannilla 300 metros San Jose Sampedro')

INSERT INTO miembro (
	nombre,
	genero,
	correo,
	fechaNacimiento,
	contrasena,
	rol,
	dirreccion
) VALUES ('geovanni alvarez mendoza', 'hombre', 'geo@gmail.com', '2003-06-12', '123', 'estudiante', 'San Jose Tibas de la inglesia san cristobal')

INSERT INTO miembro (
	nombre,
	genero,
	correo,
	fechaNacimiento,
	contrasena,
	rol,
	dirreccion
) VALUES ('Karla gonzales gonzales', 'mujer', 'gonzaKarla@gmail.com', '1980-01-05', '123', 'profesor', 'Heredia Cristobal Tinto')

--estadoReserva

INSERT INTO estadoReserva(
	nombre,
	description
) VALUES('Disponible', 'Estado Disponible')

INSERT INTO estadoReserva(
	nombre,
	description
) VALUES('Prestado', 'Estado Prestado')

INSERT INTO estadoReserva(
	nombre,
	description
) VALUES('Reservado', 'Estado Reservado')

INSERT INTO estadoReserva(
	nombre,
	description
) VALUES('Vencida', 'Estado Vencida')

--reserva

INSERT INTO reserva(
	fechaRealizacion,
	miembroId,
	estadoReservaId
) VALUES('2023-11-09 13:23:44', 2, 1)

--reservaDetalles

INSERT INTO reservaDetalles(
	reservaID,
	inventarioId
) VALUES(1, 3)

GO

CREATE TRIGGER trigger_inventario_stock ON inventario
AFTER UPDATE 
AS 
BEGIN

	IF EXISTS (SELECT cantidad FROM dbo.inventario WHERE cantidad <= 0)
		UPDATE inventario SET stock = 0 FROM inventario inv
		INNER JOIN inserted i on inv.stock = i.stock
		WHERE i.inventarioId = inv.inventarioId
	ELSE 
		UPDATE inventario SET stock = 1 FROM inventario inv
		INNER JOIN inserted i on inv.stock = i.stock
		WHERE i.inventarioId = inv.inventarioId

END

GO

CREATE PROCEDURE createLibroInventario 
	@cantidad int, 
	@precio DECIMAL,
	@ibsm VARCHAR(50),
	@titulo VARCHAR(50),
	@author VARCHAR(50),
	@categoriaLibro INT
AS
BEGIN

	DECLARE @idPKInventario TABLE (id INT)

	INSERT INTO inventario(
		cantidad
	)
	OUTPUT inserted.inventarioId INTO @idPKInventario
	VALUES(@cantidad)

	-- get last id generated 

	DECLARE @lastIdInserted INT = (SELECT id FROM @idPKInventario)

	--Insert Libro

	INSERT INTO libro (
		precio,
		ibsm,
		titulo,
		author,
		tipoLibroId,
		inventarioId
	) 
	VALUES (@precio, @ibsm, @titulo, @author, @categoriaLibro, @lastIdInserted)

END

GO

CREATE PROCEDURE updateLibroInventario 
	@id int,
	@cantidadInventario INT,
	@precio DECIMAL,
	@ibsm VARCHAR(50),
	@titulo VARCHAR(50),
	@author VARCHAR(50),
	@categoriaLibro INT
AS
BEGIN

	UPDATE L 
	SET precio = @precio, ibsm = @ibsm, titulo = @titulo, author = @author, tipoLibroId = @categoriaLibro
	FROM libro L
	WHERE L.inventarioId = @id; 

	UPDATE I 
	SET cantidad = @cantidadInventario
	FROM inventario I
	INNER JOIN libro L on L.inventarioId = I.inventarioId
	WHERE L.libroId = @id; 

END

GO

CREATE PROCEDURE deleteLibroInventario 
	@id int
AS
BEGIN

	DELETE I FROM inventario I
	INNER JOIN libro L on L.inventarioId = I.inventarioId
	WHERE L.libroId = @id; 

END

GO

CREATE PROCEDURE createMember 
	@nombre VARCHAR(30),
	@genero VARCHAR(10),
	@correo VARCHAR(30),
	@fechaNacimiento DATE,
	@contrasena VARCHAR(20),
	@rol VARCHAR(15),
	@dirreccion VARCHAR(50)
AS
BEGIN

	INSERT INTO miembro (
		nombre,
		genero,
		correo,
		fechaNacimiento,
		contrasena,
		rol,
		dirreccion
	) VALUES (@nombre, @genero, @correo, @fechaNacimiento,  @contrasena, @rol, @dirreccion)

END

GO

CREATE PROCEDURE updateMiembro 
	@id INT,
	@nombre VARCHAR(30),
	@genero VARCHAR(10),
	@correo VARCHAR(30),
	@fechaNacimiento DATE,
	@contrasena VARCHAR(20),
	@rol VARCHAR(15),
	@dirreccion VARCHAR(50)
AS
BEGIN
	
	UPDATE M
	SET nombre = @nombre, genero = @genero, correo = @correo, fechaNacimiento = @fechaNacimiento, contrasena = @contrasena, rol = @rol, dirreccion = @dirreccion
	FROM miembro M
	WHERE miembroId = @id; 

END

GO

CREATE PROCEDURE deleteMiembro 
	@id INT
AS
BEGIN
	
	DELETE miembro WHERE miembroId = @id; 

END

GO

CREATE PROCEDURE createReserva
	@idMiembro INT,
	@idLibro INT,
	@tipoReserva INT
AS
BEGIN
	
	DECLARE @idPKReserva TABLE (id INT)

	INSERT INTO reserva(
		fechaRealizacion,
		miembroId,
		estadoReservaId
	) 
	OUTPUT inserted.reservaID INTO @idPKReserva
	VALUES( GETDATE() , @idMiembro, @tipoReserva)

	DECLARE @lastIdInserted INT = (SELECT id FROM @idPKReserva)

	DECLARE @inventarioID INT = (
		SELECT i.inventarioId FROM inventario I
		INNER JOIN libro L on l.inventarioId = i.inventarioId
		WHERE l.libroId = @idLibro
	)

	PRINT @inventarioID

	PRINT @lastIdInserted

	INSERT INTO reservaDetalles(
		reservaID,
		inventarioId
	) VALUES( @lastIdInserted, @inventarioID)
END

GO

CREATE PROCEDURE updateReserva
	@idRerserva INT,
	@idMiembro INT,
	@idLibro INT,
	@tipoReserva INT,
	@fecha DATETIME
AS
BEGIN

	UPDATE R 
	SET R.miembroId = @idMiembro, R.fechaRealizacion = @fecha, R.estadoReservaId = @tipoReserva
	FROM reserva R
	WHERE R.reservaID = @idRerserva; 

	UPDATE RD 
	SET RD.inventarioId = @idLibro 
	FROM reservaDetalles RD
	WHERE RD.inventarioId = @idLibro 

END

GO

CREATE PROCEDURE deleteReserva
	@idRerserva INT
AS
BEGIN

	DELETE RD FROM  reserva RD
	INNER JOIN reservaDetalles R  on R.reservaID = RD.reservaID
	WHERE R.reservaID = @idRerserva;

END

GO

--EXEC createReserva 2,2,3

--EXEC updateReserva 2, 1, 1, 1, '2023-11-09 13:23:11.000'

--SELECT * FROM reserva R
--INNER JOIN miembro M ON M.miembroId = R.miembroId
--INNER JOIN reservaDetalles RD on RD.reservaID = R.reservaID 

--EXEC deleteReserva 1

SELECT l.libroId, i.inventarioId, i.stock, i.cantidad, l.author, l.precio, l.titulo, tl.nombre FROM libro l
inner join inventario i on i.inventarioId = l.inventarioId
inner join tipoLibro tl on tl.tipoLibroId = l.tipoLibroId

--EXEC createLibroInventario 20, 5000, 308019199, 'Google Expert', 'LUISIO Kika Kgaju', 1

--GO

--EXEC updateLibroInventario 4, 0, 5010, 19, 'Google Expert BETA', 'Luisito Kika Kgaju', 1

--GO

--EXEC deleteLibroInventario 1

--GO

--EXEC createMember 'David', 'hombre', 'david123@gmail.com', '2005-04-12', '123', 'estudiante', 'Alajuelita de la iglesia cristiana 300 metros'
--SELECT * FROM miembro

--GO

--EXEC updateMiembro 4, 'David', 'mujer', 'david123@gmail.com', '2005-04-12', '123', 'estudiante', 'Alajuelita de la iglesia cristiana 300 metros'

--GO

GO

CREATE VIEW inventariosView AS
SELECT l.libroId, i.inventarioId,l.precio, i.stock, i.cantidad, l.author,l.ibsm, tl.tipoLibroId, l.titulo, tl.tipoLibroId 'categoria'  FROM libro l
inner join inventario i on i.inventarioId = l.inventarioId
inner join tipoLibro tl on tl.tipoLibroId = l.tipoLibroId

GO  

SELECT * FROM inventariosView

GO

CREATE VIEW miembrosView AS
SELECT * FROM miembro
  

GO

SELECT * FROM miembrosView

GO
CREATE VIEW reservaView AS
SELECT R.reservaID, M.contrasena, M.correo, M.dirreccion, M.fechaNacimiento, M.genero, M.miembroId, M.nombre 'miembroNombre',
ER.estadoReservaId, R.fechaRealizacion, I.cantidad, I.inventarioId, I.stock, l.author,l.ibsm, tl.tipoLibroId, l.precio, l.titulo, tl.nombre 'nombreLibro', l.libroId
FROM reserva R
INNER JOIN miembro M on M.miembroId = R.miembroId
INNER JOIN estadoReserva ER on ER.estadoReservaId = R.estadoReservaId
INNER JOIN reservaDetalles RD ON RD.reservaID = R.reservaID
INNER JOIN inventario I ON I.inventarioId = RD.inventarioId
INNER JOIN libro L ON L.inventarioId = I.inventarioId
INNER JOIN tipoLibro TL ON tl.tipoLibroId = L.tipoLibroId
GO

 



