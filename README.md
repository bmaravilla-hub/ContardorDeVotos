# 🗳️ Contador de Votos

Aplicación desarrollada con **React** que permite votar entre distintos frameworks de frontend y visualizar los resultados en un gráfico dinámico.  
El proyecto forma parte de la entrega final con despliegue en **AWS S3**.

---

## 🚀 Demo en Producción

👉 [Ver aplicación en línea](https://contador-react.s3.us-east-2.amazonaws.com/index.html)

---

## 📌 Características

- Votación por frameworks: **React, Vue, Angular, Svelte y Ember**.  
- Cálculo automático de porcentajes.  
- Visualización gráfica de los resultados en tiempo real.  
- Botón para **reiniciar votos**.  
- Interfaz moderna con **Tailwind CSS**.  

---

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/)  
- [Chart.js](https://www.chartjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [AWS S3](https://aws.amazon.com/s3/) para hosting del frontend.  

---

## 📂 Instalación y Uso

Clonar el repositorio:

```bash
git clone https://github.com/bmaravilla-hub/ContardorDeVotos.git
cd ContardorDeVotos
```

Instalar dependencias:
```bash
npm install
```

Ejecutar en desarrollo:
```bash
npm start
```


Generar build para producción:
```bash
npm run build
```

## ☁️ Despliegue en AWS S3

1. Construir el proyecto con npm run build.
2. Subir la carpeta build/ a un bucket de S3:
```bash
aws s3 sync build/ s3://NOMBRE-DE-TU-BUCKET --acl public-read
```


Configurar el bucket en Static website hosting:

- Index document: index.html
- Error document: index.html

Acceder mediante la URL pública del bucket.

## 👩‍💻 Autora

Proyecto desarrollado por Blanca Maravilla

