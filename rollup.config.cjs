const terser = require('@rollup/plugin-terser')



module.exports = {
    input:'./src/index.js',
    output:{
        file:'./dist/index.js',
        format:'umd',
        sourcemap:true
    },
    plugins:[
        terser()
    ]
}




