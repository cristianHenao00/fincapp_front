/* eslint-disable import/prefer-default-export */
export const modules = {
  name: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  description: {
    required: { value: true, message: 'Descripción requerida' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 255, message: 'Debe tener 255 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  icon: {
    required: { value: false, message: 'icono requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  path: {
    required: { value: true, message: 'La ruta es requerida' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};
