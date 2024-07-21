// * user apis
const reacturl = 'http://0.0.0.0:8000/api'

console.log('env', process.env.REACT_APP_API)

export const LoginAPI = (reqbody) => {
    const url = process.env.REACT_APP_API + '/user/verify'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
    const url = process.env.REACT_APP_API + '/user/signup'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

export const OauthLogin = (reqbody) => {
    const url = process.env.REACT_APP_API + '/user/oauth/verify'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

export const GetUserByUserid = (userid) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/user/' + userid
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
    const url = process.env.REACT_APP_API + '/user/' + userid
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
    const url = process.env.REACT_APP_API + '/user/password/' + userid
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
    const url = process.env.REACT_APP_API + '/user/password/' + userid
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

// * task apis

export const CreateTask = (reqbody) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/tasks/create'
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

export const GetTaskDetailsByTaskid = (taskid) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/tasks/' + taskid
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

export const SearchTasks = (query) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/tasks/search/query?' + query
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

export const UpdateTasksbyTaskid = (taskid, reqbody) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/tasks/' + taskid
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

export const AssignTask = (taskid, reqbody) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/tasks/assign/' + taskid
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

export const DeleteTask = (taskid) => {
    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_API + '/tasks/' + taskid
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