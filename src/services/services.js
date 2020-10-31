export const services = {
    get,
    post,
    validate
};
function post(cmd, body) {
    const postsettings = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: body // body data type MUST !!! match "Content-Type" header
    };
    const fetchdata = async() => {
        return await( await fetch('http://localhost:5000/' + cmd, postsettings)).json();
    }
    return fetchdata();
}
function get(cmd) {
    const getsettings = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
    };
    var data = fetch('http://localhost:5000/' + cmd, getsettings)
        .then(response => response.json())
//console.log(getsettings);
        return data;

    //const fetchdata = async() => {
    //    return await( await fetch('http://localhost:5000/' + cmd, getsettings)).json();
    //}
    return fetchdata();
}
function validate(page){
    console.log(page);
}