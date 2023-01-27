from bs4 import BeautifulSoup
import requests
# TODO: Acomodar que el precio quede corregido con el punto y la coma para convertirlo a decimal (hay que usar locale)
import locale
from django.db import IntegrityError

from argaping.models import Propiedad, Barrio


def load_db():
    url = "https://www.argenprop.com/departamento-alquiler-partido-rosario"
    # Manda la GET request
    f = requests.get(url=url)
    # Parsing
    doc = BeautifulSoup(f.text, "html.parser")
    # FindAll
    info_propiedades = doc.findAll("div", {"class": "card__monetary-values"})

    Barrio.objects.all().delete()
    Propiedad.objects.all().delete()

    for info in info_propiedades:
        precio = float(info.find("span", {"class": "card__currency"}).next_sibling.text.strip())
        direccion = info.find("h2", {"class": "card__address"}).next_element.strip().split(",", 1)[0]
        moneda = "ARS" if info.find("span", {"class": "card__currency"}).next_element.strip() == "$" \
            else info.find("span", {"class": "card__currency"}).next_element.strip()
        nombre_barrio = \
            Barrio(info.find("p", {"class": "card__title--primary show-mobile"}).next_element.strip().split(",", 1)[0])

        barrio_actual = Barrio.objects.get_or_create(nombre=nombre_barrio)[0]

        propiedad_actual = Propiedad(precio=precio, direccion=direccion, moneda=moneda)
        propiedad_actual.barrio = barrio_actual
        propiedad_actual.save()
