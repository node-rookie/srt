var path = require('path');
var views = require('co-views');
var render= views(path.join(__dirname, '../../../web'), { map: { html: 'swig' }});

module.exports = function(router){
    router.get('/', function *(){
        this.response.body = yield render('index');
    });
    router.get('/mylove', function *(){
        this.redirect('http://viewer.maka.im/k/ZSK0W3RM');
    });
};