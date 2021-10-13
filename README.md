Laura Londoño 55361 - Laura Garzón 55134

# Justificación

## Componentes

Se planteó de la manera más minimalista, teniendo en cuenta los elementos responsive y los elementos repetidos.

### - useWindowSize
Componente con la lógica para el cálculo del ancho de la pantalla para poder aplicar el responsive.

### - PinterestLayout
Se plantea en términos generales el espacio para el contenido y se importa PinCard como componente separado dada su repetición.

### - PinCard
Se compone de la imagen, los botones correspondientes (para el hover) y la descripción en la parte inferior.

### - HeaderLayout
Se plantea en términos generales el espacio para el Header y se utiliza el onWindowSize para determinar si incluir el Header1(Mayoría de pantallas) o Header2(Móvil).

### - Header1
Componente con distribución adecuada para la mayoría de dispositivos.

### - Header2
Componente con distribución adecuada para la vista de móvil.

### - HeaderIcon
Componente con los estilos aplicados específicamente para los iconos del Header1.

### - FooterLayout
Componente que contiene el footer que solo se visualiza desde la vista de móvil y se importa desde el App.js según responsive.

## Cajas

### - PinterestLayout
Solo se compone de un DIV con varias instancias del componente PinCard.

### - PinCard
Se compone de un DIV general que contiente la imagen, un subDIV con los botones correspondientes (para el hover) y otro subDIV correspondiente a la descripción en la parte inferior (texto y usuario).

### - HeaderLayout
Se compone de un DIV general en donde, según el responsive, inserta el Header1(Mayoría de pantallas) o Header2(Móvil).

### - Header1
Compuesto por un DIV general con instancia del componente HeaderIcon para el logo, un sub DIV correspondiente al input con instancia de HeaderIcon para la lupa y al final, 3 instancias más de HeaderIcon para los 4 íconos restantes.

### - Header2
Compuesto por un DIV general con los 3 botones visualizados.

### - HeaderIcon
Compuesto por un DIV general con un svg interno.

### - FooterLayout
Compuesto por un DIV general con los 4 botones con íconos. 







