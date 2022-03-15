

-- a. Obtener el listado de clientes que han utilizado los servicios de transporte al menos 
-- en una ocasión en los departamentos de El Progreso y Zacapa, pero que no han 
-- transportado productos refrigerados. Los datos que debe visualizar Nit, Nombre y 
-- datos de contacto.

SELECT c.id_cliente as 'NIT',c.nombre as 'Nombre', c.telefono as 'Telefono', c.correo as 'Correo'
FROM  cliente c
INNER JOIN servicio s on c.id_cliente = s.id_cliente
INNER JOIN departamento d on d.id_departamento = s.id_departamento
INNER JOIN vehiculo_servicio vs on vs.id_servicio = s.id_servicio
INNER JOIN carga_vehiculo cv  on cv.id_vehiculo =  vs.id_vehiculo
INNER JOIN carga ca  on ca.id_carga =  cv.id_carga
WHERE d.descripcion in ("El Progreso","Zacapa")
AND
WHERE ca.descripcion not in ("Refrigerados")

-- b. Obtener el monto de gastos de los servicios prestados durante el mes de enero de 
-- 2018, el promedio de los servicios facturados durante el mes de enero 2018,
-- posteriormente especifique el monto de ganancia que obtuvo la empresa
