/**
 * CSE department – API connection layer (frontend ↔ backend).
 * HTML pages stay the same; only this file talks to the backend.
 */
(function (global) {
  function getApiRoot() {
    var params = new URLSearchParams(global.location.search);
    var fromQuery = params.get('api');
    if (fromQuery) {
      try {
        global.localStorage.setItem('cse_api_root', fromQuery);
      } catch (e) {}
      return fromQuery.replace(/\/$/, '');
    }
    try {
      var stored = global.localStorage.getItem('cse_api_root');
      if (stored) return stored.replace(/\/$/, '');
    } catch (e) {}
    return 'http://localhost:4000';
  }

  function getLanguage() {
    try {
      return global.localStorage.getItem('cse_lang') || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLanguage(lang) {
    try {
      global.localStorage.setItem('cse_lang', lang);
    } catch (e) {}
  }

  function cseBase() {
    return getApiRoot() + '/v1/departments/cse';
  }

  function cseFetch(path, lang) {
    var language = lang || getLanguage();
    var url = cseBase() + path;
    url += (path.indexOf('?') >= 0 ? '&' : '?') + 'language=' + encodeURIComponent(language);
    return fetch(url, { cache: 'no-store' }).then(function (res) {
      if (!res.ok) throw new Error('CSE API ' + res.status);
      return res.json();
    });
  }

  function field(row, key, fallback) {
    if (!row || row[key] == null) return fallback || '';
    return String(row[key]);
  }

  function parsePoints(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(String);
    if (typeof value === 'string') {
      try {
        var p = JSON.parse(value);
        return Array.isArray(p) ? p.map(String) : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  }

  global.CSEApi = {
    getApiRoot: getApiRoot,
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    fetch: cseFetch,
    field: field,
    parsePoints: parsePoints,
  };
})(window);
