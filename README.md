# Data Lovers

## Índice

* [1. Studio Ghibli](#1-Studio)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios del proyecto Studio Ghibli](#4-criterios-del-proyecto-studio-ghibli)
* [5. Hacker edition](#5-hacker-edition)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)

***

## 1. Studio Ghibli

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido
varias nominaciones y premios. De todo este fandom hay un grupo que desea poder
interactuar y ver la información de las animaciones y sus personajes.

## 2. Resumen del proyecto

En este proyecto **se construyó una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúa a los seguidores del Studio Ghibli

En la página web se permite **visualizar la data,
filtra las peliculas por director, productor y año, se pueden ordenar de la A-Z y 
viceversa, el seguidor puede hacer una búsqueda por el título de la película y 
por último se hace un cálculo agregado que muestra el TOP10 de Studio Ghibli**. 


## 3. Objetivos de aprendizaje
Los Objetivos de aprendizaje alcanzados:

### HTML
- [✓] **Uso de HTML semántico**

### CSS
- [✓] **Uso de selectores de CSS**
- [✓] **Modelo de caja (box model): borde, margen, padding**
- [✓] **Uso de flexbox en CSS**
  
### Web APIs
- [✓] **Uso de selectores del DOM**
- [✓] **Manejo de eventos del DOM (listeners)**
- [✓] **Manipulación dinámica del DOM**

### JavaScript
- [✓] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [✓] **Arrays (arreglos)**
- [✓] **Objetos (key, value)**
- [✓] **Variables (declaración, asignación, ámbito)**
- [✓] **Uso de condicionales (if-else, operador ternario, lógica booleana)**
- [✓] **Uso de ciclos (for)**
- [✓] **Funciones (params, args, return)**
- [✓] **Pruebas unitarias (unit tests)**
- [✓] **Módulos de ECMAScript (ES Modules)**
- [✓] **Uso de linter (ESLINT)**
- [✓] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [✓] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)
- [✓] **Git: Instalación y configuración**
- [✓] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [✓] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [✓] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [✓] **GitHub: Despliegue con GitHub Pages**
- [✓] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### user-centricity
- [✓] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design
- [✓] **Crear prototipos de alta fidelidad que incluyan interacciones**
- [✓] **Seguir los principios básicos de diseño visual**


## 4. Criterios del proyecto Studio Ghibli
Realizamos la planeación del proyecto en Trello
[Trello](https://trello.com/b/MNjh2I1y/kanban-template)

Los criterios que consideramos para desarrollar este proyecto son:

### Historias de usuario
Para este proyecto generamos dos historia de usuario
HU1 "Yo como usuario quiero visualizar las películas del Studio Ghibli para conocer sus nombres y 
posters de cada película" 
![Historia de Usuario1](/imgreadme/HU1.png)

HU2 "Yo como usuario quiero conocer los personajes de las películas para entender su rol"
![Historia de Usuario1](/imgreadme/HU2.png)

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
Tomamos foto de los diseños que prentendimos realizar a papel y lápiz.
![Boceto Nan](/imgreadme/bocetonan.png)
![Boceto Rox](/imgreadme/bocetorox.png)


#### Prototipo de alta fidelidad
Se diseñó la Interfaz de Usuario utilizando de manera colaborativa la herramienta de
diseño visual
[Figma](https://www.figma.com/file/mUfLVQ3ShK9n7oGL1s8MyG/Data-Lover-Studio-Ghibli?node-id=0%3A1) 

Esta es la _ideal_ de nuestra solución.
![Prototipo](/imgreadme/Figma.png) 

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)
1. Muestra la data en la interfaz.
2. Permitir al seguidor interactuar para obtener la infomación que necesita.
3. Es _responsive_, se visualiza sin problemas en: móviles y desktops.
![Interfaz](/imgreadme/InterfazFilms.png)
![Film](/imgreadme/interfazfilm.png)


### Pruebas unitarias
Se realizarón  Pruebas Unitarias de lasfunciones escritas en data.js 
![Pruebas Unitarias](/imgreadme/TestUnitarios.png) 

## 5. Hacker edition
Se realizaron cálculos para obtener el TOP10 de las películas de Studio Ghibli, 
la gráfica se hizo con la ayuda de la libreria Chart.js 
![Grafica](/imgreadme/Grafica.png)

## 6. Consideraciones técnicas
La lógica del proyecto se implementó completamente en JavaScript
(ES6), HTML y CSS.vanilla JavaScript, con la excepción de librerías para hacer gráficas (charts).

#### Herramientas Github Colaborativo
Se realizó GitHub Colaborativo donde  2 autores (Roxana Hdz & Nanci Mondragón) enviaron 22 confirmaciones a main y 22 confirmaciones
a todas las sucursales. En main, 24 archivos han cambiado y ha habido 15.098 adiciones y 50 eliminaciones .  
![GitHub Colaborativo](/imgreadme/GithubColaborativo.png)

Data Lovers Copyright 2022 by Roxana Hernández & Nanci Mondragón 

