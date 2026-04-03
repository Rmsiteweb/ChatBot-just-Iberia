# Just Iberia Girona · Rodolfo Stempellato

Aplicación web estática, autónoma, compatible con GitHub Pages.

## Archivos
```
index.html                    ← Todo en un solo archivo (CSS + JS embebidos)
catalogo-just-iberia-2026.pdf ← Catálogo (copiar del ZIP original)
.nojekyll                     ← Necesario para GitHub Pages
```

## Funcionalidades
- Asistente de productos con perfil conversacional local
- Visor PDF del catálogo + fallback automático para móvil/iOS
- Formulario de consulta con botones WhatsApp y Gmail
- Módulo de eventos + inscripción
- Panel privado (contraseña: justgirona2026)
- Navegación hamburguesa en móvil
- Botón flotante WhatsApp

## Despliegue GitHub Pages
1. Sube index.html, .nojekyll y el PDF al repositorio (rama main)
2. Settings → Pages → Branch: main → / (root)
3. Listo en 1-2 minutos

## Sin dependencias externas
- Sin Google Fonts (Inter/Roboto eliminados → fuentes del sistema)
- Sin CDN, sin APIs, sin backend
- Todo el CSS y JS embebido en index.html
