# Just Iberia Girona · Rodolfo Stempellato · v4

Aplicación web estática con **bot experto** basado en la base de conocimiento oficial de justiberia.es.

## Archivos
```
index.html                    ← Todo embebido (CSS + JS + KB completa)
catalogo-just-iberia-2026.pdf ← Catálogo local
.nojekyll                     ← GitHub Pages
```

## Bot experto — Conocimiento real de Just Iberia
El bot incluye base de datos de 40+ productos con:
- Nombre, descripción, ingredientes clave, uso recomendado
- Tipo de piel al que va dirigido
- Problemas que resuelve (palabras clave)
- URL oficial de cada producto en justiberia.es

### Intenciones que reconoce:
- Piernas cansadas / circulación / varices
- Relax, estrés, insomnio, ansiedad
- Piel seca, sensible, atópica, hidratación
- Rutina facial / antiedad / arrugas
- Músculos y articulaciones / deporte
- Cabello: caída, caspa, grasa, volumen, daño
- Baby & Kids (bebés y niños)
- Acné e impurezas
- Pies y talones
- Precios / contacto / catálogo / marca

## Contraseñas (cambiar antes de publicar)
- Panel admin: `justgirona2026`

## Despliegue GitHub Pages
1. Subir index.html, .nojekyll y el PDF al repo (rama main)
2. Settings → Pages → Branch: main → / (root)
