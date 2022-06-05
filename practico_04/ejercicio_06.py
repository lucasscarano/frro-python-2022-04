"""Base de Datos SQL - Creación de tablas auxiliares"""
import sqlite3

from practico_04.ejercicio_01 import borrar_tabla, crear_tabla


def crear_tabla_peso():
    """Implementar la funcion crear_tabla_peso, que cree una tabla PersonaPeso con:
        - IdPersona: Int() (Clave Foranea Persona)
        - Fecha: Date()
        - Peso: Int()
    """
    conn = sqlite3.connect('example.db')
    cursor = conn.cursor()
    sql = """CREATE TABLE if not exists PERSONAPESO (
           IDPERSONA integer primary key,
           FECHA date,
           PESO integer not null,
           foreign key (IDPERSONA) references PERSONA(IDPERSONA)
        );"""
    cursor.execute(sql)
    conn.commit()
    cursor.close()
    conn.close()


def borrar_tabla_peso():
    """Implementar la funcion borrar_tabla, que borra la tabla creada 
    anteriormente."""
    conn = sqlite3.connect('example.db')
    cursor = conn.cursor()
    sql = """DELETE PERSONAPESO if exists;"""
    cursor.execute(sql)
    conn.commit()
    cursor.close()
    conn.close()


# NO MODIFICAR - INICIO
def reset_tabla(func):
    def func_wrapper():
        crear_tabla()
        crear_tabla_peso()
        func()
        borrar_tabla_peso()
        borrar_tabla()

    return func_wrapper
# NO MODIFICAR - FIN
