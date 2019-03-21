# Filmaton

[**Filmaton**](https://josefin-ferrada.github.io/project-hackaton/src/index.html) es una nueva aplicación que tiene como objetivo principal  entregar información específica sobre cualquier  película que el usuario o usuaria quiera ver, pudiendo escogerla según el tiempo disponible que tenga, el género que más le guste o encontrar a las mejor calificadas. 

## 🚀 Planificación 

La planificación comienza reconociendo en conjunto la API de [OMDB](http://www.omdbapi.com/), la que contiene infinita información de películas y series. 

El squad decidió trabajar en base a _historias de usuario_, complementadas con _dailys_ y _retrospectivas diarias_. 

Fué fundamental identificar de qué forma los usuarios podrían aprovechar dicha información de manera atractiva y amigable, por lo que la segunda gran tarea fué dar con nuestro usuario tipo. 

### Definición: ¿Quién es nuestro usuario?

Para reconocer al usuario se realizó una [encuesta](https://docs.google.com/forms/d/1aO8hlz2itFtdo4geyIVtPiId-vu4sH11hqalF0JRgUk/edit?fbclid=IwAR3H3CgSMhgIBNOxPIEOJUh9V2yMdIU09xRWxZsNEMMwdwufV7k55hYQ_aA) que obtuvo como resultado las siguientes respuestas: 

* La encuesta tuvo un alcance de 57 personas
* Rango de edad de nuestros usuarios: el 71,4% tienen entre 22-35 años. 
* El 98.2% disfruta de ver películas en casa. 
* Las 57 personas encuestadas utilizan la plataforma Netflix. 
* Los principales intereses del usuario para escoger una película son: el reparto (77,2%), el género (84,2%), y la reseña(56,1%).
* El 69,4% del total identifica como problema lo difícil que es escoger una película que les guste, mientras que el 24,6% se aqueja de no tener el tiempo suficiente para verlas. 
* El feedback general respecto a qué esperan de una aplicación como esta apunta a: accesibilidad, simpleza, diversidad. 

### 📋 1° Fase de Prototipado

**-Diagrama de flujo**

Una vez reconocido el usuario, comienza el proceso creativo compuesto  en primer lugar po un diagrama de flujo que grafica el flujo que debería tener la aplicación, considerando cambios de interfaces y filtración de información.

![Diagrama de flujo](image_readme/diagrama_de_flujo.jpg)

**- Prototipo de baja fidelidad**

A partir del diagrama de flujo y el reconocimiento del usuario, y por medio de lápiz y papel, se creó un boceto con las diferentes interfaces y usos que se proponen para la app web.

* A la izquierda se muestra la página principal y a la derecha se muestra la página de búsqueda, luego de presionar el botón de "COMENZAR". 

![Prototipo 1](image_readme/pbf1.png)

* A la izquierda se muestra desplegado el select por género y a la derecha se despliega una ficha modal con la información de alguna película que seleccionó el usuario, luego de presionar su imagen. 

![Prototipo 2](image_readme/pbf2.png)

### 👩 User persona 

A partir de la construcción del User Persona  es posible profundizar en las necesidades de dos usuarias específicas.

Se consideran los siguientes elementos para optimizar el uso de la página:

* Saber cuáles son sus características, intereses, y gustos
* Cómo definen su personalidad, en cuanto a objetivos y metas.
* Cuáles son sus aplicaciones favoritas y que espera de ellas.

![User persona Javiera](image_readme/user_persona_Java.png)
![User persona Camila](image_readme/user_persona_Camila.png)

### 💡 Psicología del color 

El propósito es identificar las percepciones que tienen los usuarios respecto a los colores que serán ocupados por la aplicación. Pensando en los usuarios (identificados a partir de la encuesta abierta y la utilización del user persona) e inspirado distinas aplicaciones que tratan de películas o temas relacionados al cine, la elección fue la siguiente:

**Colores base**

1. Negro: se relaciona con la sofisticación, el valor y lo atemporal. Generalmente se asocia a aplicaciones que en las que se puedan ver películas, pues simula el estar en el cine, pero desde el hogar y en cualquier momento del día. 

**Colores de contraste**

2. Amarillo: calidez, positividad, estímulos, luz. En este caso fue escogido para contrastar con el negro, simulando la tenue luz del cine. 

3. Blanco: simpleza absoluta.

![Colores](image_readme/colores.jpg)

### Planificación mediante Historias de Usuario (HU)

**¿Cuál es la necesidad de nuestro usuario?**

Las distintas historias de usuario (HU) describen las necesidades de los usuarios, buscando cubrirlas a partir de los criterios de aceptación (CA) que se desarrollan en cada una de ellas.

1. **HU1**: Yo como fanático de las películas quiero ocupar esta aplicación desde mi computador para poder escoger una película desde mi hogar.

**CA**: Crear esqueleto de HTML, definiendo las pantallas de la app y sus funcionalidades.

2. **HU2**: Yo como fanático de las películas quiero  poder ver todas las películas para  elegir entre todas las que existen.

**CA**: Cuando el usuario acceda a la pantalla para realizar la búsqueda, esta debe mostrar todas las películas. 

3. **HU3**: Yo como fanático de las películas quiero filtrar las películas de género "drama" para poder escoger la que más me guste.

**CA**: La página debe mostrar un selector que filtre las películas de acuerdo a lo que busque el usuario; en este caso que encuentre las de género “drama” según la necesidad que el usuario/a tenga en un momento específico.  Este criterio nos sirve para realizar la filtración de todos los géneros.

4. **HU4**:Yo como fanático de las películas quiero filtrar las películas que duren más de 2 horas para escoger una y poder verla durante las 2h 30m que tengo libre. 

**CA**: La página debe tener un selector que permita filtrar aquellas películas que  cumplan con la duración de más de 2h, según la disponibilidad horaria que tenga el usuario en un momento específico. Este criterio nos sirve para realizar la filtración por 1h y +, 2h y +, 3h y +. 

5. **HU5**: Yo como fanático de las películas quiero filtrar las películas que estén mejor calificadas  para escoger una que tenga buena crítica de especialistas. 

**CA**: La página debe tener un selector que permita filtrar aquellas películas que tengan buena evaluación. Este criterio nos sirve para realizar la filtración por 

6. **HU7**: Yo como fanático de las películas quiero poder ver la ficha de una película para conocer la reseña y principales características de ella. 

**CA**: La página debe mostrar una ficha con las características de la película que el usuario seleccione. La ficha debe tener una imagen representativa e información del director, año, reparto, etc.

### ✒️Segunda fase de Prototipado 

**- Inspiración de distintas páginas**

Se rescataron diferentes elementos de páginas para la creación de Filmaton. En este caso sirvió la identificación de colores, distribución del espacio, uso del menú y tarjetas.

1. [Netflix](https://www.netflix.com/cl/)
2. [YTS.am](https://yts.am/movie/helldriver-2010)
3. [Eastern European Movies](https://easterneuropeanmovies.com/)

**- Prototipo de alta fidelidad**

Se crea utilizando la plataforma [Figma](https://www.figma.com/proto/YnrXEy8snWyLJzkDo3hEzUQw/Hackaton-Pel%C3%ADculas?node-id=1%3A2&scaling=scale-down), luego de reconocer al usuario y definir los colores, el tipo de información (a partir de la problemática) y su distribución a desplegarse en la app web. 

![Figma página búsqueda](image_readme/figma1.png)

![Figma ficha de película](image_readme/figma2.png)

**- Testeo Usabilidad**

A partir de ello, se testeó a 5 usuarios con distintos intereses por las películas, quienes orientaron a mejorar la app por medio de feedback.

* La tarea a realizar fue:

1. Encontrar las películas de género "drama" y ver la descripción de alguna.
2. Ver la ficha de "Forrest Gump"
3. Lograr buscar por el tiempo disponible
4. Volver a la página de inicio

Los videos del testeo de alta fidelidad se encuentran [aquí](https://drive.google.com/drive/folders/1_5sZKIW4IiTnKs-ByGJYGITUj3YYh1Cb?usp=sharing).

* Dificultades identificadas a partir del prototipo de alta fidelidad:

1. El prototipo de alta fidelidad genera confusión para hacer el cambio de buscar por "género" a buscar por "tiempo disponible"
2. Cuesta identificar el logo como un botón que permite volver a la página de inicio.
3. La letra se muestra muy grande 

* Mejoras identificadas a partir del prototipo de alta fidelidad:

1. Es posible cambiar de búsqueda al escoger otro select diferente al escogido en un principio. 
2. El logo debe indicar que permite llegar a la página de inicio. 
3. Modificación del font-size para que sea de mejor agrado para el usuario. 

### ⌨️ Consideraciones en el desarrollo 

**Ejecución del interfaz de usuario HTML, CSS, JS**

* HTML para mostrar la página al usuario y unir los script de JavaScript y links de CSS, y el framework Materialize
* Uso de HTML dinámico desde el main.js
* Manejo del DOM desde main.js
* Desarrollo de funciones de filtrado desde data.js
* Uso de la data de películas a partir de 
* Manejo de estilos CSS para la página de escritorio.
* Trabajo colaborativo mediante el uso de Git y GitHub
* Deploy con gh-pages de la aplicación [Filmaton]()

### Organización del trabajo 

Trabajamos de forma colaborativa, cada una aportó en las distintas implicancias que tuvo el proyecto.

Josefin Ferrada estuvo a cargo del código, la lógica del proyecto, construcción de funciones y el manejo de la data. 

Tatiana Castro estuvo a cargo del manejo del DOM, utilización del framework Materialize, y complementó el trabajo de Josefin en cuanto a la funcionalidad y filtrado. 

Fabiola Tapia estuvo a cargo del manejo del DOM, creación de interfaces, uso de Materialize y la aplicación de estilos con CSS.

Constanza Urbina (quien escribe) estuvo a cargo del trabajo investigativo para dar con las necesidades de un usuario específico, dando apoyo en el manejo del DOM, uso de Materialize y CSS. 

El squad estuvo trabajando muy de cerca y dándose apoyo constantemente, sobre todo en momentos en los que costó avanzar.  

El resultado del trabajo se encuentra [aquí](https://josefin-ferrada.github.io/project-hackaton/src/index.html)

### 🛠️ Próximas mejoras 

* Filtrar por el tiempo que dura la película fue uno de los objetivos que se propusieron para llevar a cabo este proyecto, por lo que queda pendiente para una próxima entrega. 
* Lograr que la aplicación sea 100% responsive (con sus respectivos test y mejoras a partir del feedback de los usuarios).
* Realizar testeos de la aplicación real. 
* Acceder a filtros más específicos como la banda sonora de cada película o tráiler.
* Mostrar reseñas más atractivas. 
* Realizar una evaluación heurística completa para mejorar la app. 

### 📌 Autoras

* Tatiana Castro
* Josefin Ferrada
* Fabiola Tapia
* Constanza Urbina

8° Generación de Laboratoria.

Marzo, 2019.


 










