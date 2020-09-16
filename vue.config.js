module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://34f1319a72.zicp.vip',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        },
    },

    productionSourceMap:true,
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}