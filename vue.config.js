module.exports = {
    publicPath:"./",
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://pv.sohu.com/cityjson',
                changeOrigin : true
            }
        }
    }
}