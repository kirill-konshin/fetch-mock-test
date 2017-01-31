(function() {

    var fetchMock = require('fetch-mock/es5/server');
    var nodeFetch = require('node-fetch');

    var Request = nodeFetch.Request;
    var fetch = fetchMock.fetchMock;

    fetchMock.once('http://whatever/foo', {
        body: '{"foo": "bar"}',
        status: 200,
        statusText: 'OK',
        sendAsJson: false
    }, {
        method: 'GET'
    });

    var req = new Request('http://whatever/foo', {
        method: 'GET'
    });

    fetch(req).then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    }).catch(function(e) {
        console.error(e.stack);
    });

})();