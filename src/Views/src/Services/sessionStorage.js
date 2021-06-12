const TOKEN_KEY = '&app-token';
const ID_USUARIO = '&id-usuario';
const NOME_USUARIO = '&nome-usuario';
const COLOR_PICK = '&color-agree'
const NOTIF_PREFERENCE = '&notif-user';
const PROFILE_LINK = '&profile-link';

export const login = token => { sessionStorage.setItem(TOKEN_KEY, token) };
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const logout = () => {
    document.cookie.split(";").forEach((c) => {
        document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/");
    });

    sessionStorage.clear()

    window.location.href = '/admin/login';
};

export const setIdUsuario = id => sessionStorage.setItem(ID_USUARIO, id);
export const getIdUsuario = () => sessionStorage.getItem(ID_USUARIO);

export const setNomeUsuario = id => sessionStorage.setItem(NOME_USUARIO, id);
export const getNomeUsuario = () => sessionStorage.getItem(NOME_USUARIO);

export const setProfileLinkUsuario = id => sessionStorage.setItem(PROFILE_LINK, id);
export const getProfileLinkUsuario = () => sessionStorage.getItem(PROFILE_LINK);

export const setPreferenceColor = id => localStorage.setItem(COLOR_PICK, id);
export const getPreferenceColor = () => localStorage.getItem(COLOR_PICK);

export const setNotifPreference = id => sessionStorage.setItem(NOTIF_PREFERENCE, id);
export const getNotifPreference = () => sessionStorage.getItem(NOTIF_PREFERENCE);