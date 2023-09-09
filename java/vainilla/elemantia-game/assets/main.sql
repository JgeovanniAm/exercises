USE master 

DROP DATABASE  IF EXISTS Elementia

GO

CREATE DATABASE Elementia 

GO

USE Elementia

CREATE TABLE alquimista(
	alquimistaID INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	fechaNacimiento DATE NOT NULL,
	riqueza DECIMAL NOT NULL DEFAULT '1000.0', 
	password VARCHAR(50) NOT NULL,
	correo VARCHAR(50) NOT NULL
)

CREATE TABLE TipoAlquimista(
	tipoAlquimistaID INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(20) NOT NULL
)

CREATE TABLE tierra(
	tierraID INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	precioSugerido DECIMAL NOT NULL,
	maxYacimientos INT NOT NUll,
	impuesto DECIMAL(12,2) NOT NULL
)

CREATE TABLE tipoTierra(
	tipoTierraID INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(10) NOT NULL
)

CREATE TABLE estadoTierra(
	estadoTierraID INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(15) NOT NULL,
)

CREATE TABLE yacimiento(
	yacimientoID INT IDENTITY PRIMARY KEY NOT NULL,
	maxTiempoRecoleccion DECIMAL NOT NULL,
	horaRecoleccion DATETIME NOT NULL,
	ubicacion VARCHAR(10) NOT NULL,
	fechaCreacion DATETIME NOT NULL,
	unidadesDisponibles INT NOT NULL
)

CREATE TABLE elemento(
	elementoID INT IDENTITY PRIMARY KEY NOT NULL,
	nombre VARCHAR(15) NOT NULL,
	simbolo VARCHAR(5) NOT NULL,
	color VARCHAR(20) NOT NULL,
	numeroAtomico INT NOT NULL,
	colorHex VARCHAR(10) NOT NULL,
	precioSugerido DECIMAL NOT NULL,
	CONSTRAINT CK_elemento_precioSugerido CHECK (precioSugerido >= 300 AND 600 >= precioSugerido)
)

CREATE TABLE elementosRecolectados(
	elementosRecolectadosID INT IDENTITY PRIMARY KEY NOT NULL,
	cantidad DECIMAL NOT NULL,
)

GO

ALTER TABLE elementosRecolectados 
	ADD elementoID INT NOT NULL
	CONSTRAINT FK_elementosRecolectados_elementoID FOREIGN KEY(elementoID) REFERENCES dbo.elemento(elementoID)

ALTER TABLE elementosRecolectados 
	ADD alquimistaID INT,
	CONSTRAINT FK_elementosRecolectados_alquimistaID FOREIGN KEY(alquimistaID) REFERENCES dbo.alquimista(alquimistaID)

ALTER TABLE alquimista 
	ADD elementoID INT NOT NULL
	CONSTRAINT FK_alquimista_elementoID FOREIGN KEY(elementoID) REFERENCES dbo.elemento(elementoID)

ALTER TABLE alquimista 
	ADD tipoAlquimistaID INT NOT NULL
		CONSTRAINT FK_alquimista_tipoAlquimistaID FOREIGN KEY(tipoAlquimistaID) REFERENCES dbo.tipoAlquimista(tipoAlquimistaID)

ALTER TABLE tierra
	ADD estadoTierraID INT NOT NULL,
	CONSTRAINT FK_tierra_estadoTierraID FOREIGN KEY(estadoTierraID) REFERENCES dbo.estadoTierra(estadoTierraID)

ALTER TABLE tierra
	ADD tipoTierraID INT NOT NULL,
	CONSTRAINT FK_tierra_tipoTierraID FOREIGN KEY(tipoTierraID) REFERENCES dbo.tipoTierra(tipoTierraID)

ALTER TABLE tierra
	ADD elementoID INT,
	CONSTRAINT FK_tierra_elementoID FOREIGN KEY(elementoID) REFERENCES dbo.elemento(elementoID)

ALTER TABLE tierra
	ADD alquimistaID INT,
	CONSTRAINT FK_tierra_alquimistaID FOREIGN KEY(alquimistaID) REFERENCES dbo.alquimista(alquimistaID)

ALTER TABLE yacimiento
	ADD elementoID INT NOT NULL,
	CONSTRAINT FK_yacimiento_elementoID FOREIGN KEY(elementoID) REFERENCES dbo.elemento(elementoID)
	
ALTER TABLE yacimiento
	ADD tierraID INT NOT NULL,
	CONSTRAINT FK_yacimiento_tierraID FOREIGN KEY(tierraID) REFERENCES dbo.tierra(tierraID)
	
GO

--

INSERT INTO tipoAlquimista(
	nombre
) VALUES ('Rey')

INSERT INTO tipoAlquimista(
	nombre
) VALUES ('Aldeano')

INSERT INTO elemento(
	nombre,
	simbolo,
	color,
	numeroAtomico,
	colorHex,
	precioSugerido

)VALUES('Oro', 'Au', 'Amarillo Brillante', 79, '#FFD700', 600)

INSERT INTO elemento(
	nombre,
	simbolo,
	color,
	numeroAtomico,
	colorHex,
	precioSugerido
)VALUES('Plata', 'Ag', 'Blanco Brillante', 47, '#COCOCO', 400)

INSERT INTO alquimista(
	nombre,
	correo,
	password,
	fechaNacimiento,
	tipoAlquimistaID,
	elementoID
) VALUES ('Aurelius Elementum', 'aurelius.elementum@gmail.com', '123', '1999-10-15', 1, 1)

INSERT INTO alquimista(
	nombre,
	correo,
	password,
	fechaNacimiento,
	tipoAlquimistaID,
	elementoID
) VALUES ('admin', 'admin@gmail.com', 'admin', '1999-10-15', 2, 2)

INSERT INTO estadoTierra(
	nombre
)VALUES('Disponible')

INSERT INTO estadoTierra(
	nombre
)VALUES('NoDisponible')

INSERT INTO estadoTierra(
	nombre
)VALUES('VENDIDA')

INSERT INTO tipoTierra(
	nombre
)VALUES('Normal')

INSERT INTO tipoTierra(
	nombre
)VALUES('Fertil')

INSERT INTO tipoTierra(
	nombre
)VALUES('Rara')


INSERT INTO tierra(
	nombre,
	precioSugerido,
	estadoTierraID,
	tipoTierraID,
	elementoID,
	alquimistaID,
	maxYacimientos,
	impuesto
)VALUES('Inca', 700, 3, 2, 1, 2, 4, 0.10)


INSERT INTO tierra(
	nombre,
	precioSugerido,
	estadoTierraID,
	tipoTierraID,
	elementoID,
	maxYacimientos,
	impuesto
)VALUES('Maya', 400, 1, 3, 2, 5, 0.10)

INSERT INTO yacimiento(
	unidadesDisponibles,
	fechaCreacion,
	ubicacion,
	horaRecoleccion,
	maxTiempoRecoleccion,
	elementoID,
	tierraID
)
VALUES(900, '2023-02-9 12:22:09', 'Este', '2023-01-9 12:22:09', 2, 2, 1)


INSERT INTO yacimiento(
	unidadesDisponibles,
	fechaCreacion,
	ubicacion,
	horaRecoleccion,
	maxTiempoRecoleccion,
	elementoID,
	tierraID
)
VALUES(300, '2023-01-9 12:22:09', 'Este', '2023-01-9 12:22:09', 2, 2, 1)


GO

CREATE PROCEDURE registroDeAlquimista 
	@nombre VARCHAR(50),
	@fechaNacimiento DATE,
	@correo VARCHAR(50),
	@password VARCHAR(50)
AS
BEGIN

	IF EXISTS(SELECT * FROM alquimista A where a.correo =  @correo )
		BEGIN
			 RAISERROR ('Error raised, correo duplicado.', -- Message text.
               16, -- Severity.
               1 -- State.
               );
		END
	ELSE
		BEGIN 

			DECLARE @elementos INT;
			DECLARE @idElemento INT;

			SET @elementos = (SELECT COUNT(e.elementoID) FROM elemento e) 

			SET @idElemento = FLOOR(RAND() * (@elementos - 1)) + 1 
			
			INSERT INTO alquimista(
				nombre,
				fechaNacimiento,
				password,
				correo,
				elementoID,
				tipoAlquimistaID
			)VALUES(@nombre, @fechaNacimiento, @password, @correo, @idElemento, 2)

			RETURN 1
		END
END

GO

CREATE PROCEDURE inicioSessionAlquimista 
	@correo VARCHAR(50),
	@password VARCHAR(50)
AS
BEGIN
	IF EXISTS(SELECT * FROM alquimista A where a.correo =  @correo AND a.password = @password )
		BEGIN
			 RETURN 1
		END
	ELSE
		BEGIN 
			RAISERROR ('Error raised, usuario incorrecto.', -- Message text.
               16, -- Severity.
               1 -- State.
               );
		END
END

GO


CREATE PROCEDURE registroDeElementos 
	@nombre VARCHAR(50),
	@simbolo VARCHAR(5),
	@color VARCHAR(20),
	@numericoAtomico INT,
	@colorHex VARCHAR(20),
	@precioSugerido DECIMAL
AS
BEGIN

	IF EXISTS(SELECT * FROM elemento E where e.nombre =  @nombre )
		BEGIN
			 RAISERROR ('Error raised, nombre duplicado.', -- Message text.
               16, -- Severity.
               1 -- State.
               );
		END
	ELSE
		BEGIN 
			INSERT INTO elemento(
				nombre,
				simbolo,
				color,
				numeroAtomico,
				colorHex,
				precioSugerido
			)VALUES(@nombre, @simbolo, @color, @numericoAtomico, @colorHex, @precioSugerido)
			RETURN 1
		END
END

GO

CREATE PROCEDURE registroDeTierras 
	@nombre VARCHAR(50),
	@precioDeVentaSugerido DECIMAL,
	@tipoTierra INT,
	@hasElement BIT
AS
BEGIN

	DECLARE @maxYacimientos INT;
	DECLARE @impuesto DECIMAL(5,2);
	
	IF(@tipoTierra = 1)
		BEGIN
			SET @maxYacimientos = FLOOR(RAND() * (8-1)) + 1
		PRINT @maxYacimientos
		END
	IF(@tipoTierra = 2)
		BEGIN
			SET @maxYacimientos = FLOOR(RAND() * (8-4)) + 4
		END
	IF(@tipoTierra = 3)
		BEGIN
			SET @maxYacimientos = FLOOR(RAND() * (6-2)) + 2
		END

	IF(@maxYacimientos = 2 OR @maxYacimientos = 3)
		BEGIN
			SET @impuesto = 0
		END
	IF(@maxYacimientos = 4 OR @maxYacimientos = 5)
		BEGIN
			SET @impuesto = 0.10
		END
	IF(@maxYacimientos = 6 OR @maxYacimientos = 7 OR @maxYacimientos = 8)
		BEGIN
			SET @impuesto = 0.15
		END
	
	IF(@hasElement = 1)
		BEGIN
			DECLARE @elementos INT;
			DECLARE @idElemento INT;

			SET @elementos = (SELECT COUNT(e.elementoID) FROM elemento e) 

			SET @idElemento = FLOOR(RAND() * (@elementos - 1)) + 1 

			INSERT INTO tierra(
				nombre,
				precioSugerido,
				estadoTierraID,
				tipoTierraID,
				elementoID,
				maxYacimientos,
				impuesto
			)VALUES(@nombre, @precioDeVentaSugerido, 1, @tipoTierra, @idElemento, @maxYacimientos, @impuesto)

		END
	ELSE
		BEGIN 
			INSERT INTO tierra(
				nombre,
				precioSugerido,
				estadoTierraID,
				tipoTierraID,
				maxYacimientos,
				impuesto
			)VALUES(@nombre, @precioDeVentaSugerido, 2, @tipoTierra, @maxYacimientos, @impuesto)
		END
END

GO


CREATE PROCEDURE comprarTierras 
	@tierraID INT,
	@alquimistaID INT,
	@expense DECIMAL
AS
BEGIN

	UPDATE t 
	SET	t.alquimistaID = @alquimistaID, t.estadoTierraID = 3
	FROM tierra T
	WHERE t.tierraID = @tierraID

	UPDATE a
	SET a.riqueza = (a.riqueza - @expense) 
	FROM alquimista A
	WHERE a.alquimistaID = @alquimistaID

END

GO

CREATE PROCEDURE creacionYacimientos 
	@tierraID INT
AS
BEGIN
	IF EXISTS(SELECT COUNT(y.tierraID) FROM yacimiento Y WHERE y.tierraID = @tierraID HAVING COUNT(y.tierraID) < (SELECT t.maxYacimientos FROM tierra T where t.tierraID = @tierraID) )
	BEGIN
		DECLARE @unidadesDisponibles INT =  FLOOR((RAND() * (1450 / 50)) * 50) + 50;
		DECLARE @ubicacionNumero INT =  FLOOR(RAND() * (4-1)) + 1;
		PRINT @ubicacionNumero
		DECLARE @ubicacion VARCHAR(10);
		DECLARE @elementos INT;
		DECLARE @idElemento INT;
		DECLARE @intervaloTiempo INT;

		SELECT @intervaloTiempo = CASE
									WHEN RAND() < 0.33 THEN 1
									WHEN RAND() < 0.67 THEN 3
									ELSE 5
								  END

		SET @elementos = (SELECT COUNT(e.elementoID) FROM elemento e) 

		SET @idElemento = FLOOR(RAND() * (@elementos - 1)) + 1 

		IF(@ubicacionNumero = 1)
			BEGIN
				SET @ubicacion = 'norte'
			END
		IF(@ubicacionNumero = 2)
			BEGIN
				SET @ubicacion = 'este'
			END
		IF(@ubicacionNumero = 3)
			BEGIN
				SET @ubicacion = 'sur'
			END
		IF(@ubicacionNumero = 4)
			BEGIN
				SET @ubicacion = 'oeste'
			END

		INSERT INTO yacimiento(
			unidadesDisponibles,
			ubicacion,
			elementoID,
			fechaCreacion,
			horaRecoleccion,
			maxTiempoRecoleccion,
			tierraID
		)VALUES(@unidadesDisponibles, @ubicacion, @idElemento, GETDATE(), GETDATE(), @intervaloTiempo, @tierraID )
	
		RETURN
	END
		 RAISERROR ('Error raised, max capacity.', -- Message text.
               16, -- Severity.
               1 -- State.
               );
END

GO


CREATE PROCEDURE recogerElemento 
	@cantidad DECIMAL,
	@yacimientoID INT,
	@tierraID INT, -- tierra del yacimiento
	@alquimistaID INT
AS
BEGIN
	
	DECLARE @ratio DECIMAL(10,2);
	DECLARE @ubicacion DECIMAL(10,2);
	DECLARE @A INT;
	DECLARE @B INT;
	DECLARE @elementoA INT = (SELECT t.elementoID FROM tierra T WHERE T.tierraID = @tierraID);
	DECLARE @elementoB INT = (SELECT y.elementoID FROM yacimiento Y WHERE y.yacimientoID = @yacimientoID);

	IF(@elementoA = @elementoB)
		BEGIN
		SET @A = 1
		END
	ELSE 
		BEGIN
		SET @A = 0
		END

	DECLARE @elementoC INT = (SELECT y.elementoID FROM yacimiento Y WHERE y.yacimientoID = @yacimientoID);
	DECLARE @elementoD INT = (SELECT a.elementoID FROM alquimista A WHERE a.tipoAlquimistaID = 1)
	
	IF (@elementoC = @elementoD)
		BEGIN
		SET @B = 1
		END
	ELSE 
		BEGIN
		SET @B = 0
		END

	IF(@A = 1 AND @B = 1)
		BEGIN
			SET @ratio = 1.5
		END
	IF(@A = 0 AND @B = 1)
		BEGIN
			SET @ratio = 1.3
		END
	IF(@A = 1 AND @B = 0)
		BEGIN
			SET @ratio = 1.2
		END
	IF(@A = 0 AND @B = 0)
		BEGIN
			SET @ratio = 1.1
		END

	DECLARE @yacimientoUbicacion VARCHAR(10) = (SELECT y.ubicacion FROM yacimiento Y WHERE y.yacimientoID = @yacimientoID);
	
	IF(@yacimientoUbicacion = 'norte')
		BEGIN
			SET @ubicacion = 1.2
		END
	IF(@yacimientoUbicacion = 'sur')
		BEGIN
			SET @ubicacion = 1.1
		END
	IF(@yacimientoUbicacion = 'este')
		BEGIN
			SET @ubicacion = 1.3
		END
	IF(@yacimientoUbicacion = 'oeste')
		BEGIN
			SET @ubicacion = 1.05
		END
	
	DECLARE @ultimarecolecion INT;

	DECLARE @intervaloMax INT = (SELECT y.maxTiempoRecoleccion FROM yacimiento Y WHERE y.yacimientoID = @yacimientoID)
	DECLARE @unidadesDis INT = (SELECT y.unidadesDisponibles FROM yacimiento Y WHERE y.yacimientoID = @yacimientoID)
	DECLARE @hora DATETIME = (SELECT y.horaRecoleccion FROM yacimiento Y WHERE y.yacimientoID = @yacimientoID)
	SET @ultimarecolecion = DATEPART(HOUR, @hora)
	
	DECLARE @FACTORHORA INT = (DATEPART(HOUR, GETDATE()) - @ultimarecolecion) / @intervaloMax
	
	DECLARE @unidadesAdi INT = @unidadesDis + (@unidadesDis * @ratio * @FACTORHORA * @ubicacion)
	
	DECLARE @elementoID INT = (SELECT y.elementoID FROM yacimiento Y WHERE Y.yacimientoID = @yacimientoID) 

	IF EXISTS(SELECT * FROM elementosRecolectados ER WHERE er.alquimistaID = @alquimistaID AND er.elementoID = @elementoID)
		BEGIN
			UPDATE ER
			SET	er.cantidad = er.cantidad + @cantidad
			FROM elementosRecolectados ER
		END
	ELSE
		BEGIN
			INSERT INTO elementosRecolectados (
				cantidad,
				elementoID,
				alquimistaID
			)VALUES(@cantidad, @elementoID, @alquimistaID)
		END
	UPDATE Y 
	SET	y.unidadesDisponibles = ABS(@unidadesAdi), y.horaRecoleccion = GETDATE()
	FROM  yacimiento Y
	WHERE Y.yacimientoID = @yacimientoID
	
END

GO

CREATE FUNCTION contarVocal(@texto VARCHAR(50))
RETURNS TABLE
AS
RETURN (
	SELECT
	(LEN(@texto)-LEN(REPLACE(@texto, 'a', ''))) +
	(LEN(@texto)-LEN(REPLACE(@texto, 'e', ''))) +
	(LEN(@texto)-LEN(REPLACE(@texto, 'i', ''))) +
	(LEN(@texto)-LEN(REPLACE(@texto, 'o', ''))) +
	(LEN(@texto)-LEN(REPLACE(@texto, 'u', '')))  AS 'cantidadVocales'
)

GO

CREATE PROCEDURE ventaDeElementos 
	@elementoID INT,
	@cantidad DECIMAL(12,2),
	@alquimistaID INT
AS
BEGIN
	DECLARE @precioSugerido DECIMAL(10,2) = (SELECT e.precioSugerido FROM elemento E WHERE E.elementoID = @elementoID)
	DECLARE @nombreElemento VARCHAR(15) = (SELECT e.nombre FROM elemento E WHERE E.elementoID = 2)
	DECLARE @cantidadVocales INT = (SELECT v.cantidadVocales FROM contarVocal(@nombreElemento) V)
	DECLARE @factorVenta DECIMAL(10,2);
	PRINT 'elemento'
	PRINT @nombreElemento

	PRINT 'cantidad vocales'
	PRINT @cantidadVocales

	IF(@cantidadVocales = 1 AND LEN(@nombreElemento) < 4)
		BEGIN
			SET @factorVenta = 1
		END
	IF(@cantidadVocales = 1 AND LEN(@nombreElemento) >= 4)
		BEGIN
			SET @factorVenta = 1.2
		END
	IF(@cantidadVocales = 2 AND LEN(@nombreElemento) < 4)
		BEGIN
			SET @factorVenta = 1.4
		END
	IF(@cantidadVocales = 2 AND LEN(@nombreElemento) >= 4)
		BEGIN
			SET @factorVenta = 1.6
		END
	IF(@cantidadVocales > 3 AND LEN(@nombreElemento) < 4)
		BEGIN
			SET @factorVenta = 1.8
		END
	IF(@cantidadVocales > 3 AND LEN(@nombreElemento) >= 4)
		BEGIN
			SET @factorVenta = 2
		END

	PRINT 'cantidad'
	PRINT @cantidad
	PRINT 'factor'
	PRINT @factorVenta
	PRINT 'precio'
	PRINT @precioSugerido

	DECLARE @ganancia DECIMAL(10,2) = @cantidad*@factorVenta*@precioSugerido;

	PRINT 'ganancia'
	PRINT @ganancia

	UPDATE A 
	SET a.riqueza = a.riqueza + @ganancia
	FROM alquimista A
	WHERE a.alquimistaID = @alquimistaID

	UPDATE ER
	SET	er.cantidad = er.cantidad -  @cantidad
	FROM elementosRecolectados ER
	WHERE er.alquimistaID = @alquimistaID AND er.elementoID = @elementoID

END

GO

CREATE FUNCTION visualizarAlquimista(@correo VARCHAR(100))
RETURNS TABLE
AS
RETURN (SELECT tp.nombre 'tipo', a.alquimistaID, a.nombre 'nombre', a.correo, a.fechaNacimiento, a.riqueza, e.color, e.colorHex,e.elementoID, e.nombre'nombreElemento', e.numeroAtomico, e.precioSugerido, e.simbolo FROM alquimista A
	INNER JOIN TipoAlquimista TP ON tp.tipoAlquimistaID = a.tipoAlquimistaID
	INNER JOIN elemento E ON e.elementoID = a.elementoID
	WHERE A.correo = @correo)
GO


CREATE FUNCTION visualizarTierrasAlquimista(@id INT)
RETURNS TABLE
AS
RETURN (SELECT * FROM  tierra T WHERE t.alquimistaID = @id)
GO

CREATE FUNCTION visualizarYacimientosTierras(@id INT)
RETURNS TABLE
AS
RETURN (
SELECT Y.yacimientoID, Y.elementoID, Y.maxTiempoRecoleccion, Y.horaRecoleccion, Y.ubicacion, Y.fechaCreacion, Y.unidadesDisponibles,  e.color, e.colorHex, e.nombre'nombreElemento', e.numeroAtomico, e.precioSugerido, e.simbolo FROM  yacimiento Y 
INNER JOIN elemento E ON e.elementoID = y.elementoID
WHERE y.tierraID = @id)

GO

CREATE FUNCTION visualizarElementosRecolectados(@id INT)
RETURNS TABLE
AS
RETURN (
SELECT er.alquimistaID,  e.color, e.colorHex, e.nombre'nombreElemento', e.numeroAtomico, e.precioSugerido, e.simbolo, er.elementoID, er.cantidad  FROM  elementosRecolectados ER
INNER JOIN elemento E ON e.elementoID = ER.elementoID
INNER JOIN alquimista A ON a.alquimistaID = ER.alquimistaID
WHERE ER.alquimistaID = @id
)


GO

CREATE VIEW topAlquimistas AS
	SELECT * FROM alquimista;
GO

CREATE VIEW crearTierras AS
	SELECT T.elementoID, TT.nombre 'tipo', T.nombre'nombre', T.precioSugerido, T.maxYacimientos, T.impuesto, ET.nombre 'estado' FROM tierra T
	INNER JOIN tipoTierra TT ON TT.tipoTierraID = T.tipoTierraID
	INNER JOIN estadoTierra ET ON et.estadoTierraID = t.estadoTierraID
GO

--SELECT * FROM visualizarElementosRecolectados(2)

--SELECT * FROM visualizarTierrasAlquimista(2)

--SELECT * FROM visualizarAlquimista('admin@gmail.com')

 
--CREATE VIEW visualiizarTierras AS
--SELECT * FROM tierra T
--INNER JOIN yacimiento Y ON Y.tierraID = T.tierraID


--EXEC registroDeAlquimista 'geo', '1998-10-15', 'geo@gmail.com' ,'123'  

--78c v

--exec inicioSessionAlquimista 'admin@gmail.com', 'admin'

--SELECT * FROM elemento

--EXEC registroDeElementos 'pl', 'Au', 'Amarrillo', '79', '#FFD700', '450'

--EXEC registroDeTierras 'espia',200.10,2,1

--SELECT * FROM alquimista

--SELECT * FROM tierra

--EXEC comprarTierras 4,1,200

--EXEC creacionYacimientos 2

--SELECT * FROM yacimiento

--SELECT * FROM tierra

--EXEC recogerElemento 100.80,2,1,2

--SELECT * FROM elementosRecolectados 909

--SELECT * FROM alquimista riqueza 56500

--SELECT * FROM elemento

--EXEC ventaDeElementos 2,100,2


--SELECT * FROM visualizarYacimientosTierras(1)
