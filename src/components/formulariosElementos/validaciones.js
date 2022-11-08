const tecnico = {
  nombre: {
    required: { value: true, message: 'Nombres requerido' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres como máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  tipoIdentificacion: {
    required: { value: true, message: 'Tipo de Identificación requerido' },
    maxlength: { value: 12, message: 'Solo se permiten 30 caracteres' },
  },
  numeroIdentificacion: {
    required: { value: true, message: 'Número de identificación requerido' },
    pattern: { value: /^[0-9]*$/, message: 'Solo se permiten números' },
    maxlength: { value: 12, message: 'Solo se permiten 12 caracteres' },
  },
  correoElectronico: {
    required: { value: true, message: 'Correo requerido' },
    minLength: { value: 8, message: 'Debe tener 8 caracteres mínimo' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
    pattern: {
      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      message: 'No se permiten puntos ni caracteres especiales ',
    },
  },
  organizacion: {
    required: { value: true, message: 'Organización requerido' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
  },
  codigoCertificado: {
    required: { value: true, message: 'Código de certificado requerido' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
  },
  fechaVigencia: {
    required: { value: true, message: 'Fecha de vigencia requerida' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
  },
  estado: {
    required: { value: true, message: 'Estado requerido' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
  },
};

export const empresa = {
  nit: {
    required: { value: true, message: 'NIT requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 15, message: 'solo se permiten 15 caracteres' },
  },
  razonSocial: {
    required: { value: true, message: 'Razón social requerido' },
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  id: {
    required: { value: true, message: 'id requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 15, message: 'solo se permiten 15 caracteres' },
  },
  name: {
    required: { value: true, message: 'nombre del representa legal requerido' },
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  addres: {
    required: {
      value: true,
      message: 'dirección del representa legal requerido',
    },
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  addresOp: {
    required: { value: true, message: 'dirección del organismo requerido' },
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  nameC: {
    required: { value: true, message: 'nombre de contacto requerido' },
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  number: {
    required: { value: true, message: 'numero de contacto requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 15, message: 'solo se permiten 15 caracteres' },
  },
  email: {
    required: { value: true, message: 'Correo requerido' },
    minLength: { value: 8, message: 'Debe tener 8 caracteres mínimo' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
    pattern: {
      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      message: 'No se permiten puntos ni caracteres especiales ',
    },
  },
};

export const empresaActualizar = {
  nit: {
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 15, message: 'solo se permiten 15 caracteres' },
  },
  razonSocial: {
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  idRepre: {
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 15, message: 'solo se permiten 15 caracteres' },
  },
  nombre: {
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  addres: {
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  addresOp: {
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  nameC: {
    maxlength: { value: 50, message: 'solo se permiten 50 caracteres' },
  },
  number: {
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 15, message: 'solo se permiten 15 caracteres' },
  },
  email: {
    minLength: { value: 8, message: 'Debe tener 8 caracteres mínimo' },
    maxLength: { value: 50, message: 'Debe tener 50 caracteres máximo' },
    pattern: {
      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      message: 'No se permiten puntos ni caracteres especiales ',
    },
  },
};

export const Agendamiento = {
  contract: {
    required: { value: true, message: 'Contrato requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'No se permiten puntos, ni caracteres especiales, ni letras',
    },
  },
  name: {
    required: { value: true, message: 'Nombres requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  lastName: {
    required: { value: true, message: 'Apellidos requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  email: {
    required: { value: true, message: 'Correo requerido' },
    minLength: { value: 8, message: 'Debe tener 8 caracteres mínimo' },
    maxLength: { value: 80, message: 'Debe tener 80 caracteres máximo' },
    pattern: {
      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      message: 'No se permiten puntos ni caracteres especiales ',
    },
  },
  address: {
    required: { value: true, message: 'Dirección requerida' },
    minLength: { value: 2, message: 'Debe tener 8 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ#.( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  phone: {
    required: { value: true, message: 'número celular requerido' },
    minLength: { value: 3, message: 'Debe tener 10 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'No se permiten puntos ni caracteres especiales ni letras',
    },
  },
  houseType: {
    required: { value: true, message: 'tipo de vivienda requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  description: {
    required: { value: true, message: 'Descripción  requerida' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    maxLength: { value: 80, message: 'Debe tener 80 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ#.( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
    typeHouse: {
      required: { value: true, message: 'municipio requerido' },
      minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
      pattern: {
        value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
        message: 'No se permiten puntos ni caracteres especiales',
      },
    },
  },
};

export const menu = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  descripcion: {
    required: { value: true, message: 'descripción requerida' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    maxLength: { value: 80, message: 'Debe tener 80 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  icono: {
    required: { value: false, message: 'icono requerido' },
    minLength: { value: 5, message: 'Debe tener 5 caracteres mínimo' },
    maxLength: { value: 80, message: 'Debe tener 80 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};

export const modulo = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  descripcion: {
    required: { value: true, message: 'descripción requerida' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    maxLength: { value: 80, message: 'Debe tener 80 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  icono: {
    required: { value: false, message: 'icono requerido' },
    minLength: { value: 5, message: 'Debe tener 5 caracteres mínimo' },
    maxLength: { value: 80, message: 'Debe tener 80 caracteres máximo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};

export const UnidadOpv = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 1, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  codigo: {
    required: { value: true, message: 'el codigo requerido' },
    minLength: { value: 3, message: 'Debe tener 3 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'No se permiten puntos ni caracteres especiales ni letras',
    },
  },
};

export const zonasOp = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  codigo: {
    required: { value: true, message: 'número celular requerido' },
    minLength: { value: 3, message: 'Debe tener 10 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'No se permiten puntos ni caracteres especiales ni letras',
    },
  },
  unidadOp: {
    required: { value: true, message: 'número celular requerido' },
    minLength: { value: 1, message: 'Debe tener 10 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'No se permiten puntos ni caracteres especiales ni letras',
    },
  },
  tiempoD: {
    required: { value: true, message: 'número celular requerido' },
    minLength: { value: 1, message: 'Debe tener 10 caracteres mínimo' },
    maxLength: { value: 10, message: 'Debe tener 10 caracteres máximo' },
    pattern: {
      value: /^[0-9]*$/,
      message: 'No se permiten puntos ni caracteres especiales ni letras',
    },
  },
};

export const sectorOp = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  zonaOp: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  nombreZona: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  id: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
};

export const tipoTrabajo = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  id: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
  tiempoR: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
  tiempoC: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
  tiempoI: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
  diaI: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
  diaF: {
    required: { value: true, message: 'numero de identidad requerido' },
    pattern: { value: /^[0-9]*$/, message: 'solo se permiten números' },
    maxlength: { value: 12, message: 'solo se permiten 12 caracteres' },
  },
};

export const tipoJornada = {
  nombre: {
    required: { value: true, message: 'Nombre requerido' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    maxlength: { value: 40, message: 'solo se permiten maxímo 40 caracteres' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  categoria: {
    required: { value: false, message: 'categoria requerida' },
    minLength: { value: 2, message: 'Debe tener 2 caracteres mínimo' },
    maxlength: { value: 40, message: 'solo se permiten maxímo 40 caracteres' },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ( )_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};
export const tiempo = {
  horaInicio: {
    required: { value: true, message: 'la hora es requerida' },
    minLength: { value: 1, message: 'Debe tener 1 caracteres mínimo' },
    maxlength: { value: 15, message: 'solo se permiten maxímo 15 caracteres' },
    pattern: {
      value: /^[a-z0-9:_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
  horaFin: {
    required: { value: true, message: 'la hora es requerida' },
    minLength: { value: 1, message: 'Debe tener 1 caracteres mínimo' },
    maxlength: { value: 15, message: 'solo se permiten maxímo 15 caracteres' },
    pattern: {
      value: /^[a-z0-9:_-]*$/,
      message: 'No se permiten puntos ni caracteres especiales',
    },
  },
};

export default tecnico;
