export function setCookie(name, value, days, cookieDomain) {
	document.cookie = name + '=' + (value || '')  + '; path=/;';
}

export function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function getCookie(name) {
	if (typeof document === 'undefined') {
		return false;
	}
	let nameEQ = name + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}