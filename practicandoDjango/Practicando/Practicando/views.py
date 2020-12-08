from django.http import HttpResponse
import datetime
from django.template import Template, Context


def saludo(request):
    doc_externo = open("C:/Users/Usuario/Desktop/UNL/5to/Desarrollo de aplicaciones/PracticasPropias/practicandoDjango/Practicando/plantillas/miplantilla.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)


def despedida(request):
    return HttpResponse("Hasta Luego")


def dameFecha(request):
    fecha_actual = datetime.datetime.now()
    documento = """<html>    
    <body>
    <h2>
    Fecha y hora Actuales %s
    </h2>
    </body>
    </html>""" % fecha_actual
    return HttpResponse(documento)
