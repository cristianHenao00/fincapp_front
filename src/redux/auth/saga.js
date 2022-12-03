/* eslint-disable */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../helpers/Firebase';
import { adminRoot, currentUser } from '../../constants/config';
import { setCurrentUser } from '../../helpers/Utils';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../contants';

import {
  loginUserSuccess,
  // loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from './actions';

import login, { getModulesMenus } from '../../services/login';

export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) => {
  const body = {
    email,
    password,
  };

  return login(body)
    .then((user) => user)
    .catch((error) => error);
};

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;

  // borrar desde aca que es manual
  /**
  const item = { 
    id: 1,
    idPerfil: 1,          
    token: "muestratoken",       
    role: "admin",
  };
  const array = [
    {
      "id":3,
      "nombre":"Inicio",
      "descripcion":"MODULO PRE-CONFIGURADO PARA EMPLEADO PORTERIA",
      "fechaCreacion":null,
      "fechaActualizacion":null,
      "ruta":null,
      "titulo":null,
      "icono":"",
      "clase":null,
      "insignia":null,
      "claseInsignia":null,
      "idCreador":1,
      "idUltimoUsuarioModifico":null,
      "menus":[],"checked":false},
    {
      "id":1,
      "nombre":"Configuración",
      "descripcion":"MODULO PRE-CONFIGURADO PARA SUPER",
      "fechaCreacion":null,
      "fechaActualizacion":null,
      "ruta":null,
      "titulo":null,
      "icono":"icono-super",
      "clase":null,
      "insignia":null,
      "claseInsignia":null,
      "idCreador":1,
      "idUltimoUsuarioModifico":null,
      "menus":
        [
          {
            "id":3,
            "nombre":"Gestión de perfiles",
            "descripcion":null,
            "ruta":"perfiles",
            "icono":"fa fa-road",
            "checked":false,
            "idModificador":null,
            "fechaCreacion":1576126800000,
            "fechaActualizacion":1576126800000,
            "accionVer":true,
            "accionCrear":true,
            "accionActualizar":false,
            "accionEliminar":false
          },
          {
            "id":4,
            "nombre":"Gestión de módulos",
            "descripcion":"prueba acciones2",
            "ruta":"modulo",
            "icono":"fa fa-book",
            "checked":false,
            "idModificador":null,
            "fechaCreacion":1576126800000,
            "fechaActualizacion":1576126800000,
            "accionVer":true,
            "accionCrear":true,
            "accionActualizar":true,
            "accionEliminar":true
          },
          {
            "id":2,
            "nombre":"Gestión de usuarios",
            "descripcion":null,
            "ruta":"usuarios",
            "icono":"fa fa-user",
            "checked":false,
            "idModificador":null,
            "fechaCreacion":1576126800000,
            "fechaActualizacion":1576126800000,
            "accionVer":false,
            "accionCrear":false,
            "accionActualizar":false,
            "accionEliminar":false
          },
          {
            "id":34,
            "nombre":"Gestión de menus",
            "descripcion":"prueba acciones2",
            "ruta":"menu","icono":"icono-2",
            "checked":false,
            "idModificador":null,
            "fechaCreacion":null,
            "fechaActualizacion":null,
            "accionVer":true,
            "accionCrear":true,
            "accionActualizar":true,
            "accionEliminar":false
          }
        ],
      "checked":false
    }
  ];
  item.modulo = array;
  setCurrentUser(item); 
  history.push(adminRoot);
  yield put(loginUserSuccess(item));
  window.location.reload(true);
   */
  // borrar hast aca que es manual
  try {
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
    if (!loginUser.message) {
      const item = {
        id: loginUser.data.user.id,
        idRole: loginUser.data.user.role_id,
        role: loginUser.data.user.role_name,
        token: loginUser.data.token.token,
      };
      const headers = {
        Authorization: `Bearer ${item.token}`,
      };
      getModulesMenus(item.idRole, headers).then((response) => {
        item.modules = response.data.modules;
        setCurrentUser(item);
        history.push(adminRoot);
        window.location.reload(true);
      });
      yield put(loginUserSuccess(item));
    } else {
      // yield put(loginUserError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) =>
  // eslint-disable-next-line no-return-await
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => error);

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      const item = { uid: registerUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(registerUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await auth
    .signOut()
    .then((user) => user)
    .catch((error) => error);
  history.push(adminRoot);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess('success'));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess('success'));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
