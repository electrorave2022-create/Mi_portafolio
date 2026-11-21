from django.shortcuts import render

def custom_404_view(request, exception=None):
    return render(request, 'portafolio/404.html', status=404)



def inicio(request):
    context = {
        'nombre': 'César Edyberto Chiroy Bocel',
        'rol': 'Estudiante de la Carrera Ingeniería en Sistemas'
    }
    return render(request, 'portafolio/inicio.html', context)

def sobre_mi(request):
    context = {
        'universidad': 'Universidad del Valle de Guatemala',
        'campus': 'Campus Altiplano'
    }
    return render(request, 'portafolio/sobre_mi.html', context)

def habilidades(request):
    skills = [
        {
            'categoria': 'Desarrollo Web', 
            'items': ['HTML5', 'CSS3', 'JavaScript Fetch API', 'Django', 'Bootstrap']
        },
        {
            'categoria': 'Bases de Datos', 
            'items': ['SQL Server 2022', 'MariaDB', 'SQLite', 'Firebase']
        },
        {
            'categoria': 'Móvil y Escritorio', 
            'items': ['Android Java (CameraX, ML Kit)', 'NetBeans Java Swing']
        }
    ]
    return render(request, 'portafolio/habilidades.html', {'skills': skills})

def proyectos(request):
    proyectos_lista = [
        {
            'titulo': 'ContaClick', 
            'desc': 'Aplicación web y móvil diseñada para rastrear micro-gastos y finanzas personales.', 
            'tech': 'Figma, HTML, CSS, JS'
        },
        {
            'titulo': 'Scanner Store', 
            'desc': 'Aplicación Android de comercio minorista con escaneo de códigos de barra usando CameraX y Google ML Kit.', 
            'tech': 'Java, Android Studio, ML Kit'
        },
        {
            'titulo': 'Directorio Web', 
            'desc': 'Aplicación web responsiva y móvil que consume la API JSONPlaceholder con almacenamiento en localStorage.', 
            'tech': 'JavaScript, CSS Grid, API'
        }
    ]
    return render(request, 'portafolio/proyectos.html', {'proyectos': proyectos_lista})

def contacto(request):
    return render(request, 'portafolio/contacto.html')

def custom_page_not_found_view(request, exception):
    return render(request, 'portafolio/404.html', status=404)
