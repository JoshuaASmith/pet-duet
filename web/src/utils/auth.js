const Auth0Lock = require('auth0-lock').default
const jwtDecode = require('jwt-decode')
const moment = require('moment')

module.exports = function(clientId, domain) {
    const lock = new Auth0Lock(clientId, domain)

    lock.on('authenticated', _doAuthentication)

    function login() {
        lock.show()
    }

    let notifyFunction = null

    function _doAuthentication(authResult) {
        setToken(authResult.idToken)
        lock.getUserInfo(authResult.accessToken, function(error, profile) {
            if (error)
                return console.log(error.message)
            localStorage.setItem('profile', JSON.stringify(profile))
            if (notifyFunction) {
                notifyFunction(profile)
            }

        })
    }

    function logout() {
        localStorage.removeItem('id_token')
        localStorage.removeItem('profile')
    }

    function setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    }

    function getToken() {
        return localStorage.getItem('id_token')
    }

    function loggedIn() {
        return getToken()
            ? true
            : false
    }

    function notify(fn) {
        notifyFunction = fn
    }
    // check it web token is expired
    // is so prompt the user to login again...
    if (getToken()) {
        const info = jwtDecode(getToken())
        // console.log('current ', moment().toString())
        // console.log('expires ', moment.unix(info.exp).toString())
        if (moment().isAfter(moment.unix(info.exp))) {
            logout()
        }
    }
    return {
        login,
        logout,
        loggedIn,
        setToken,
        getToken,
        notify
    }
}
