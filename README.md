# Affiniti | Sitio web corporativo

![React](https://img.shields.io/badge/React-149ECA?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Descripción

Sitio web corporativo desarrollado para **Affiniti**, empresa dedicada a servicios de ciberseguridad y redes. El objetivo fue presentar la empresa, sus servicios y sus canales de contacto mediante una interfaz visual y navegable.

Este repositorio conserva **la versión original que diseñé y desarrollé de manera independiente en 2024**. El sitio oficial de la empresa fue actualizado posteriormente por terceros; ese rediseño no forma parte de este repositorio.

**[Ver versión original desplegada](https://affiniti.onrender.com/)**

## Funcionalidades y secciones

- **Inicio:** banner con identidad visual y fondo animado.
- **Nosotros:** presentación de la empresa, sus virtudes y acordeones interactivos para misión y visión.
- **Servicios:** siete servicios presentados mediante tarjetas con efecto de giro, imagen y descripción.
- **Contacto:** información de contacto y ubicación de la empresa.
- **Navegación:** menú para desplazarse entre las secciones del sitio y acceso al portal de soporte.
- **Diseño adaptable:** uso de Bootstrap y estilos CSS específicos para las distintas secciones.

## Mi participación

Me encargué del diseño de la interfaz y del desarrollo frontend del sitio original, incluyendo:

- Definición de la estructura visual y organización de las secciones.
- Implementación de componentes reutilizables en React.
- Estilización con CSS y Bootstrap.
- Integración de contenido, imágenes y elementos interactivos.
- Publicación de la versión original en Render.

> **Alcance:** proyecto frontend. Este repositorio no incluye una API ni un backend propio.

## Tecnologías

| Tecnología | Uso en el proyecto |
| --- | --- |
| React | Componentes y composición de la interfaz |
| JavaScript | Lógica de componentes y navegación |
| Vite | Entorno de desarrollo y compilación |
| Bootstrap | Componentes y utilidades de diseño adaptable |
| CSS | Estilos e interacciones visuales |

## Estructura principal

```text
src/
├── components/
│   ├── banner.jsx
│   ├── contacto.jsx
│   ├── footer.jsx
│   ├── navbar.jsx
│   ├── nosotros.jsx
│   └── servicios.jsx
├── stylesheets/
├── imgs/
├── videos/
├── utilities/
│   └── scrollFunction.js
├── App.jsx
└── main.jsx
```

## Ejecutar el proyecto localmente

**Requisitos:** Node.js y npm.

```bash
git clone https://github.com/LanderosPaolo/affiniti.git
cd affiniti
npm install
npm run dev
```

Abre en el navegador la dirección local indicada por Vite en la terminal.

Para generar una versión de producción:

```bash
npm run build
npm run preview
```

## Vista previa

Puedes explorar el sitio original en **[affiniti.onrender.com](https://affiniti.onrender.com/)**.

<!-- Opcional: agrega aquí capturas de la versión original, guardadas dentro del repositorio, por ejemplo en docs/img/. -->

## Contexto del proyecto

Este trabajo forma parte de mi experiencia desarrollando sitios web para clientes reales. Me permitió aplicar React en un encargo comercial y tomar decisiones de diseño, implementación y despliegue.

## Autor

**Paolo Landeros** — [GitHub](https://github.com/LanderosPaolo)
