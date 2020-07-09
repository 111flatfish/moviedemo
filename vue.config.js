module.exports = {
    publicPath:"./",
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://pv.sohu.com/',
            }
        },
        port:90
    }
}