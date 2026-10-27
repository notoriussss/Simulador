# Simulacro de Robótica · Parcial 1

Simulacro de examen para el primer parcial de Robótica (UCAB), basado en las láminas ROB-02, ROB-03 y ROB-04.
Mismo formato que el parcial: 10 preguntas de selección simple, 4 opciones, 2 puntos cada una y factor de corrección (−2 o −1) por respuesta incorrecta.

## Cómo usarlo

Descomprime la carpeta y abre `index.html` con doble clic. No necesita instalar nada ni conexión a internet
(sin internet solo cambia el tipo de letra). Funciona en el celular: guarda la carpeta y ábrela con Chrome.

## Qué trae

| Modo | Para qué sirve |
|---|---|
| **Simulacro** | Parcial de 10 preguntas con Seguro / Dudo / Dejar en blanco. Al corregir te dice si te convenía arriesgar. Hay 20 modelos fijos (A–T) que juntos cubren las 200 preguntas sin repetir, y un generador aleatorio. |
| **Práctica por tema** | Respondes y ves la explicación al instante. Barras de dominio por tema (acertada 2 veces seguidas = dominada). |
| **Mis errores** | Repite lo que fallaste, con las opciones en otro orden, hasta acertarlo 2 veces seguidas. |
| **Contrastes** | 31 tablas con los términos que se confunden (arreglos de ruedas, paradigmas, cronología, sensores…), cada una con su botón para ponerte a prueba. |
| **Cómo estudiar** | Método, tabla de cuándo arriesgar y el patrón de preguntas del profesor. |

Cada error muestra por qué la opción elegida no era, por qué no son las otras y de qué lámina sale.
El progreso se guarda en el navegador de cada persona.

## Estructura

```
index.html           Página; carga todo en orden
css/                 tokens.css (colores y fuentes) · base.css · components.css
js/
  util.js            Utilidades (aleatorio con semilla, almacenamiento)
  state.js           Preferencias y estadísticas por pregunta
  exam.js            Armado de modelos, parcial aleatorio y nota (sin DOM)
  ui.js              Piezas de interfaz compartidas
  app.js             Arranque y navegación
  views/             sim.js · prac.js · err.js · cmp.js · how.js (una vista por modo)
data/
  schema.js          Formato del banco
  course.js          Textos, temas y estilos de pregunta
  bank/              Un archivo por tema (historia, definiciones, movil, ruedas, sensores,
                     actuadores, paradigmas, arquitecturas)
  contrastes.js      Las tablas de contraste
tools/check.js       Validador del banco
```

## Agregar o corregir preguntas

Abre el archivo del tema en `data/bank/` y añade una fila al arreglo:

```js
['def', 'arreglos', 'Enunciado de la pregunta.', 'Respuesta correcta',
  'Por qué es la correcta.',
  ['Distractor 1', 'Por qué no es.'],
  ['Distractor 2', 'Por qué no es.'],
  ['Distractor 3', 'Por qué no es.'],
  'ROB-03 · Diferencial'],
```

Los campos, en orden: estilo (`def`, `alias`, `casi`, `neg`, `app`, `dato`), grupo de contraste (o `''`), enunciado,
correcta, explicación, tres distractores con su nota, y la fuente. Las opciones se barajan solas.

Después ejecuta el validador (necesita Node.js):

```
node tools/check.js
```

Comprueba que cada pregunta tenga 4 opciones distintas, notas completas y fuente, y que el total sea múltiplo de 10
para que los modelos sigan teniendo 10 preguntas cada uno.

## Créditos

La idea de los modos (simulacro, práctica, errores y contrastes) viene del simulador de Computación en la Nube de un compañero.
