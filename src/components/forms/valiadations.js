/* eslint-disable no-restricted-globals */
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

export const menus = {
  name: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
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

export const roles = {
  name: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};

export const categories = {
  name: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};

export const products = {
  name: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  id_category: {
    required: { value: true, message: 'Categoría requerida' },
    valueAsNumber: { value: true, message: '' },
    validate: {
      isNull: (value) => !isNaN(value) || 'Categoría requerida',
    },
  },
  id_farm: {
    required: { value: true, message: 'Finca requerida' },
    valueAsNumber: { value: true, message: '' },
    validate: {
      isNull: (value) => !isNaN(value) || 'Finca requerida',
    },
  },
};

export const farms = {
  name: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  address: {
    required: { value: true, message: 'Dirección requerida' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 60, message: 'Debe tener 60 caracteres máximo' },
  },
  number_license: {
    required: {
      value: true,
      message: 'Número de matrícula inmobiliaria es requerido',
    },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 30, message: 'Debe tener 30 caracteres máximo' },
  },
};

export const stock = {
  id_product: {
    required: { value: true, message: 'Producto es requerido' },
    valueAsNumber: { value: true, message: '' },
    validate: {
      isNull: (value) => !isNaN(value) || 'Producto requerida',
    },
  },
  value: {
    required: { value: true, message: 'Valor requerido' },
    minLength: { value: 1, message: 'Debe tener 1 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'Solo se permiten números',
    },
    valueAsNumber: { value: true, message: '' },
  },
  amount: {
    required: { value: true, message: 'Cantidad requerida' },
    minLength: { value: 1, message: 'Debe tener 1 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'Solo se permiten números',
    },
    valueAsNumber: { value: true, message: '' },
  },
};

export const buy = {
  amount: {
    required: { value: true, message: 'Debe ingresar una cantidad' },
    valueAsNumber: { value: true, message: '' },
    validate: {
      notZero: (value) => value > 0 || 'Debe ingresar una cantidad',
    },
  },
};
