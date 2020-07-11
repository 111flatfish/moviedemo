module.exports = {
    publicPath:"/",
    devServer : {
        // disableHostCheck:true,
        proxy : {
            "/api":{
                target:"http://localhost:3000",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":''
                }
            }
        },
        port:90
    }
}