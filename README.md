# Test unitarios en React
Los componentes en React son en realidad funciones de las que esperamos una salida. Dicha salida es susceptible de ser testeada.
En el mundo del desarrollo, cualquier cosa que se pueda automatizar, se debe automatizar.

## Test Drive Development
Se puede resumir en tres sencillos pasos:
- Creamos el test con la intención de que falle (RED). Así nos aseguramos de que funcionan.
- Escribimos la lógica justa para que pase el test (GREEN).
- Refactorizamos el código (REFACTOR). 

## React Testing Library
- Esta librería es nativa en react, de modo que importando sus métodos podremos usarlos en nuestros archivos de test.
- Es una librería enfocada al front-end, ya que tiene métodos muy similares a las querys de vanillaJS para capturar elementos renderizados.
- Estos métodos provienen de APIs cuya misión es comprobar el estado del componente renderizado. 

[Aquí tenéis la documentación completa](https://testing-library.com/docs/react-testing-library/intro/)

## Testing Library Jest-DOM
Añade algunas cláusulas al `expect()` para que nuestos test mejoren en legibilidad.