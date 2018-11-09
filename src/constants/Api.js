const BASE_URL = 'http://bosgaurus.tk/api';

//Common API
export const LOGOUT_API = BASE_URL + '/logout';
export const LOGIN_API = BASE_URL + '/login';
export const DATA_API = BASE_URL + '/data';

//Admin API
//User
export const REGISTER_API = BASE_URL + '/register';
export const CHANGE_PASSWORD_API = BASE_URL + '/change';

export const USER_LIST_API = BASE_URL + '/list/user';
export const ADMIN_LIST_API = BASE_URL + '/list/admin';
export const MANAGER_LIST_API = BASE_URL + '/list/manager';

export const DEACTIVE_USER_API = BASE_URL + '/deactive/';
export const ACTIVE_USER_API = BASE_URL + '/active/';

//Area
export const AREA_ZONE_API = BASE_URL + '/zone';
export const PH_ZONE_API = BASE_URL + '/dataph';