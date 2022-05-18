"""Constructor, Variables de instancia y métodos de instancia"""

from typing import Optional


class Rectangulo:
    """
    Implementar la clase Rectangulo que contiene una base y una altura, y el
    método area.
    """

    def __init__(self, base=None, altura=None):
        self.base = base
        self.altura = altura

    def area(self):
        if (self.base or self.altura) is None:
            return 0
        return self.base * self.altura


# NO MODIFICAR - INICIO

# Test Constructor
rec = Rectangulo(10, 10)
assert rec.base == 10
assert rec.altura == 10
assert rec.area() == 100

# Test Valores por defecto
rec = Rectangulo()
assert rec.base is None
assert rec.altura is None
assert rec.area() == 0

rec.base = 10
rec.altura = 10
assert rec.base == 10
assert rec.altura == 10
assert rec.area() == 100

# Test Instanciación sin variable
assert Rectangulo(10, 10).area() == 100
assert Rectangulo(10, 0).area() == 0
assert Rectangulo(0, 10).area() == 0
# NO MODIFICAR - FIN
