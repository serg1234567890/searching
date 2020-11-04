
export class Httpservice {
    static post(cmd, body, resulttype) {
        const postsettings = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(body) // body data type MUST !!! match "Content-Type" header
        };
        const fetchdata = async() => {
            if(resulttype == 'json') return await( await fetch('http://localhost:5000/' + cmd + '?t=' + Date.now(), postsettings)).json();
            else  return await( await fetch('http://localhost:5000/' + cmd + '?t=' + Date.now(), postsettings)).text();
        }
        return fetchdata();
        //var data = fetch('http://127.0.0.1:5000/' + cmd, postsettings)
        //    .then(response => response.json())
        //return data;
    }
    static get(cmd) {
        const getsettings = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        };
        const fetchdata = async() => {
            return await( await fetch('http://localhost:5000/' + cmd + '?t=' + Date.now(), getsettings)).json();
        }
        return fetchdata();
    }
}
