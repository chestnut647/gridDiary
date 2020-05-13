/*
 * @Descripttion: 
 */
module.exports = app => {
    // NOTE: 这里一定要等next prepare好再启动服务，否则js、css资源加载会有问题
    app.next.prepare().then(() => {
        app.beforeStart(() => {
            process.on('unhandledRejection', (reason, p) => {
                
            });
            process.on('uncaughtException', (reason) => {
                
            });
        });
    });
};