# Aplicación de Encriptación de Textos

Esta aplicación te permite encriptar y desencriptar mensajes utilizando un método de sustitución simple. Puedes intercambiar mensajes secretos con otras personas que conozcan la clave de encriptación utilizada.

## Reglas de Encriptación

Las "llaves" de encriptación que utilizamos son las siguientes:

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

## Requisitos

- Debe funcionar solo con letras minúsculas.
- No se deben utilizar letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra a su versión encriptada y viceversa.

Ejemplo:

- `"gato"` se convierte en `"gaitober"`
- `"gaitober"` se convierte en `"gato"`

## Funcionalidades

- **Campo de Texto:** Permite la inserción del texto que será encriptado o desencriptado. El usuario puede elegir entre las dos opciones.
- **Botones:**
  - **Encriptar/Desencriptar:** Permite transformar el texto según las reglas establecidas.
  - **Subir Archivo:** Permite cargar un archivo de texto para encriptar o desencriptar su contenido.
  - **Descargar Archivo:** Permite descargar el archivo encriptado o desencriptado.
  - **Copiar Texto:** Copia el texto encriptado o desencriptado al portapapeles, funcionando como Ctrl+C o la opción "copiar" del menú de las aplicaciones.
