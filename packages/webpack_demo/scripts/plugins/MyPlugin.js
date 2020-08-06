class MyPlugin {
    apply(compiler) {
        console.log("my plugin is applied");
        compiler.hooks.beforeCompile.tapAsync('MyPlugin', (params, callback) => {
            console.log("beforeCompile", params);
            params['MyPlugin - data'] = 'important stuff my plugin will use later';
            callback();
        });
    }
}

module.exports = MyPlugin;