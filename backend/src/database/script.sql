-----------DDL-------------

create database mi_camioncito;

use mi_camioncito;

CREATE TABLE "Cliente" (
  "id_cliente"  int not null identity,
  "nombre" text not null,
  "apellido" text not null,
  "telefono" int not null,
  "correo" text not null,
  PRIMARY KEY ("id_cliente")
);

CREATE TABLE "Departamento" (
  "id_departamento" tinyint not null identity,
  "departamento" text,
  PRIMARY KEY ("id_departamento")
);

CREATE TABLE "Servicio" (
  "id_servicio" int not null identity,
  "cargo" float not null,
  "direccion_recepcion" text not null,
  "direccion_entrega" text not null,
  "viaticos" smallmoney not null,
  "total" int not null,
  "num_pilotos" smallint not null,
  "num_ayudantes" smallint not null,
  "url_comprobante" text,
  "id_cliente" int not null,
  "id_departamento" tinyint,
  PRIMARY KEY ("id_servicio"),
  FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente"),  
  FOREIGN KEY ("id_departamento") REFERENCES "Departamento"("id_departamento")
);

CREATE TABLE "Adicional" (
  "id_adicional" int not null identity,
  "precio" smallmoney not null,
  "descripcion" text not null,
  "id_servicio" int not null,  
  PRIMARY KEY ("id_adicional"),  
  FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id_servicio")
);

CREATE TABLE "Ayudante" (
  "id_ayudante" int not null identity,
  "nombre" text not null,
  "apellido"  text not null,
  "telefono" int not null,
  "correo"  text not null,
  PRIMARY KEY ("id_ayudante")
);

CREATE TABLE "Ayudante_Servicio" (
  "id_ayudante_piloto" int not null identity,
  "tiempo_ayudante" smallint,
  "id_servicio" int not null,
  "id_ayudante"int not null,
  PRIMARY KEY ("id_ayudante_piloto"),
  FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id_servicio"),
  FOREIGN KEY ("id_ayudante") REFERENCES "Ayudante"("id_ayudante")
);

CREATE TABLE "Piloto" (
  "id_piloto" int not null identity,
  "nombre" text not null,
  "apellido" text not null,
  "telefono" int not null,
  "correo" text not null,
  "fecha_disponible" date not null,
  PRIMARY KEY ("id_piloto")
);

CREATE TABLE "Piloto_Servicio" (
  "id_piloto_servicio" int not null identity,
  "tiempo_piloto" smallint ,
  "id_servicio" int not null,
  "id_piloto" int not null,
  PRIMARY KEY ("id_piloto_servicio"),
  FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id_servicio"),
  FOREIGN KEY ("id_piloto") REFERENCES "Piloto"("id_piloto")
);

CREATE TABLE "Vehiculo" (
  "id_vehiculo" int not null identity,
  "capacidad" smallint,
  "consumo" tinyint,
  "distancia_servicio" int,
  "fecha_disponible" date not null,
  "depreciacion" int,
  PRIMARY KEY ("id_vehiculo")
);

CREATE TABLE "Vehiculo_Servicio" (
  "id_vehiculo_servicio" int not null identity,
  "id_servicio" int not null,
  "id_vehiculo" int not null,
  PRIMARY KEY ("id_vehiculo_servicio"),
  FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id_servicio"),
  FOREIGN KEY ("id_vehiculo") REFERENCES "Vehiculo"("id_vehiculo")
);

CREATE TABLE "Carga" (
  "id_carga" int not null identity ,
  "descripcion" text not null,
  PRIMARY KEY ("id_carga")
);

CREATE TABLE "Carga_Vehiculo" (
  "id_carga_vehiculo" int not null identity,
  "id_vehiculo" int not null,
  "id_carga" int not null,
  PRIMARY KEY ("id_carga_vehiculo"),
  FOREIGN KEY ("id_carga") REFERENCES "Carga"("id_carga"),
  FOREIGN KEY ("id_vehiculo") REFERENCES "Vehiculo"("id_vehiculo")
);

----------- DML ------------------------


insert into Carga (descripcion) values ('Grocery');
insert into Carga (descripcion) values ('Kids');
insert into Carga (descripcion) values ('Beauty');
insert into Carga (descripcion) values ('Computers');
insert into Carga (descripcion) values ('Outdoors');
insert into Carga (descripcion) values ('Health');
insert into Carga (descripcion) values ('Games');
insert into Carga (descripcion) values ('Books');
insert into Carga (descripcion) values ('Shoes');
insert into Carga (descripcion) values ('Automotive');