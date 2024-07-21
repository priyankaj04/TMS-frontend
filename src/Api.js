// * user apis
const reacturl = 'http://0.0.0.0:8000/api'


export const Login = (reqbody) => {
    const url = import.meta.env.VITE_APP_APIURL + '/user/verify'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JWT
        },
        body: JSON.stringify(reqbody)
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return ({ status: 0, msg: error.message })
        });
}

export const SignUp = (reqbody) => {
    const url = import.meta.env.VITE_APP_APIURL + '/user/signup'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JWT
        },
        body: JSON.stringify(reqbody)
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return ({ status: 0, msg: error.message })
        });
}

export const GetUserByUserid = (userid, reqbody) => {
    const JWT = sessionStorage.getItem('token')
    const url = import.meta.env.VITE_APP_APIURL + '/user/' + userid
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JWT
        },
    };
    return fetch(url, fetchOptions)
        .then((response) => {
            if (response.status === 401) {
                sessionStorage.clear();
                return ({ status: 0, msg: "Session Expired! Login again" });
            } else
                return response.json()
        })
        .catch((error) => {
            console.log(error);
            return ({ status: 0, msg: error.message })
        });
}

export const UpdateUserByUserid = (userid, reqbody) => {
    const JWT = sessionStorage.getItem('token')
    const url = import.meta.env.VITE_APP_APIURL + '/user/' + userid
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JWT
        },
        body: JSON.stringify(reqbody)
    };
    return fetch(url, fetchOptions)
        .then((response) => {
            if (response.status === 401) {
                sessionStorage.clear();
                return ({ status: 0, msg: "Session Expired! Login again" });
            } else
                return response.json()
        })
        .catch((error) => {
            console.log(error);
            return ({ status: 0, msg: error.message })
        });
}

export const ChangePassword = (userid, reqbody) => {
    const JWT = sessionStorage.getItem('token')
    const url = import.meta.env.VITE_APP_APIURL + '/user/password/' + userid
    const fetchOptions = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JWT
        },
        body: JSON.stringify(reqbody)
    };
    return fetch(url, fetchOptions)
        .then((response) => {
            if (response.status === 401) {
                sessionStorage.clear();
                return ({ status: 0, msg: "Session Expired! Login again" });
            } else
                return response.json()
        })
        .catch((error) => {
            console.log(error);
            return ({ status: 0, msg: error.message })
        });
}

export const DeleteUser = (userid) => {
    const JWT = sessionStorage.getItem('token')
    const url = import.meta.env.VITE_APP_APIURL + '/user/password/' + userid
    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JWT
        },
    };
    return fetch(url, fetchOptions)
        .then((response) => {
            if (response.status === 401) {
                sessionStorage.clear();
                return ({ status: 0, msg: "Session Expired! Login again" });
            } else
                return response.json()
        })
        .catch((error) => {
            console.log(error);
            return ({ status: 0, msg: error.message })
        });
}