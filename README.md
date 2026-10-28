# Simulacros de estudio

Simuladores de parcial con el formato del profesor: 10 preguntas de selección simple, 4 opciones, 2 puntos cada una y factor de
corrección por respuesta incorrecta. Cada curso es una página que se abre con doble clic (no necesita instalar nada ni servidor;
sin internet solo cambia el tipo de letra). Funciona en el celular: guarda la carpeta y ábrela con Chrome.

| Curso | Página | Preguntas |
|---|---|---|
| Robótica (ROB-02 a ROB-04) | `robotica/index.html` | 320 |
| Computación en la Nube (CEN-02 a CEN-05) | `nube/index.html` | 390 |
| Desarrollo de Software | `dessoft/index.html` | 118 |

La portada es `index.html`, con un enlace a cada curso.

## Qué trae cada simulador

| Modo | Para qué sirve |
|---|---|
| **Simulacro** | Parcial de 10 preguntas con Seguro / Dudo / Dejar en blanco. Al corregir te dice si te convenía arriesgar. Modelos fijos que juntos cubren todo el banco sin repetir, y un generador aleatorio. |
| **Práctica por tema** | Respondes y ves la explicación al instante. Barras de dominio por tema (acertada 2 veces seguidas = dominada). |
| **Mis errores** | Repite lo que fallaste, con las opciones en otro orden, hasta acertarlo 2 veces seguidas. |
| **Contrastes** | Tablas con los términos que se confunden, cada una con su botón para ponerte a prueba. |
| **Cómo estudiar** | Método, tabla de cuándo arriesgar y el patrón de preguntas del profesor. |

Cada error muestra por qué la opción elegida no era, por qué no son las otras y de qué lámina sale. El progreso se guarda en el
navegador de cada persona.

## Estructura

```
index.html                 Portada con los cursos
css/                       tokens.css (colores y fuentes) · base.css · components.css
js/                        Motor, compartido por todos los cursos
  util.js                  Utilidades (aleatorio con semilla, almacenamiento)
  schema.js                Formato del banco: Sim.add y Sim.addSet (documentado al inicio del archivo)
  state.js                 Preferencias y estadísticas por pregunta
  exam.js                  Armado de modelos, parcial aleatorio y nota (sin DOM)
  ui.js                    Piezas de interfaz compartidas
  app.js                   Arranque y navegación
  views/                   sim.js · prac.js · err.js · cmp.js · how.js (una vista por modo)
robotica/, nube/, dessoft/ Un curso por carpeta
  index.html               Página del curso: carga el motor y sus datos
  theme.css                (solo Robótica) colores y fuentes propios; los demás usan los de css/tokens.css
  data/course.js           Textos, temas y estilos de pregunta
  data/bank/               Un archivo por tema (con bloques.js para los bloques de opciones compartidas)
  data/contrastes.js       Las tablas de contraste
tools/check.js             Validador de los bancos
```

## Agregar o corregir preguntas

Abre el archivo del tema en `<curso>/data/bank/` y añade una fila al arreglo:

```js
['def', 'arreglos', 'Enunciado de la pregunta.', 'Respuesta correcta',
  'Por qué es la correcta.',
  ['Distractor 1', 'Por qué no es.'],
  ['Distractor 2', 'Por qué no es.'],
  ['Distractor 3', 'Por qué no es.'],
  'ROB-03 · Diferencial'],
```

Los campos, en orden: estilo, grupo de contraste (o `''`), enunciado, correcta, explicación, tres distractores con su nota, la fuente y,
si es temario extra, `true`. Las opciones se barajan solas.

**Para no perder el progreso guardado, agrega las preguntas nuevas al final del orden de carga** (por ejemplo en `bloques.js`) y no
reordenes las existentes: el progreso de cada persona se guarda por el número de pregunta, que es su posición de carga.

### Bloques de opciones compartidas

El profesor pone varias preguntas seguidas que comparten las mismas 4 opciones, cada una con una respuesta distinta. Se escriben
con `Sim.addSet` (ver `robotica/data/bank/bloques.js`): de 2 a 4 preguntas por bloque, y salen juntas, seguidas y con las opciones en
el mismo orden, tanto en los modelos fijos como en el parcial aleatorio y en la práctica.

```js
Sim.addSet('RU', 'id-del-bloque', 'arreglos', 'ROB-03 · Arreglo de ruedas', [
  ['Diferencial', 'Dos ruedas en un eje común, controladas de forma independiente.'],
  ['Síncrono', 'Ruedas ligadas que apuntan siempre en la misma dirección; requiere torreta.'],
  ['Triciclo', 'Rueda delantera de dirección; buena estabilidad.'],
  ['Carro (Ackermann)', 'Dos ruedas de tracción y dos de dirección.'],
], [
  ['Arreglo cuyas ruedas giran juntas y requiere una torreta:', 1],   // índice de la correcta (0 a 3)
  ['Arreglo con dos ruedas de tracción y dos de dirección:', 3],
]);
```

La frase de cada opción sirve de explicación cuando es la correcta y de «por qué no» cuando no lo es.

### Agregar un curso nuevo

Copia una carpeta de curso (por ejemplo `dessoft/`), cambia `course.js`, el banco y las tablas, ajusta la lista de `<script>` de su
`index.html`, añade su carpeta a `COURSES` en `tools/check.js` y enlázala desde la portada. Si quieres colores propios, crea un
`theme.css` como el de `robotica/`.

### Validar

```
node tools/check.js              # todos los cursos (necesita Node.js)
node tools/check.js robotica     # uno solo
```

Comprueba que cada pregunta tenga 4 opciones distintas, notas completas y fuente; que los bloques estén bien armados; que los modelos
fijos sean de 10 preguntas sin repetir ninguna y con los bloques seguidos; y que el parcial aleatorio siempre sume 10. Avisa si sobran
preguntas que no caben en ningún modelo (para que entren todas, el total debe ser múltiplo de 10).

## Créditos

La idea de los modos (simulacro, práctica, errores y contrastes) y los cursos de Computación en la Nube y Desarrollo de Software
vienen del repositorio [iadev0721/simulador](https://github.com/iadev0721/simulador), que aquí se amplió con bloques de opciones
compartidas, modelos que cubren todo el banco y más preguntas.
