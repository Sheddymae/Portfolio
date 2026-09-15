export const getAuthReturnTo=()=>sessionStorage.getItem('auth_return_to')||'/';
export const setAuthReturnTo=(path)=>sessionStorage.setItem('auth_return_to',path);
export const clearAuthReturnTo=()=>sessionStorage.removeItem('auth_return_to');
