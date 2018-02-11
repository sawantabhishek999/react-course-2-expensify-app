//entry -> output -> 
const path = require('path');
console.log(path.join(__dirname,'public'));
module.exports = {
    entry : './src/app.js',
    output: {
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,   //files ending in js
            exclude:/node_modules/   //exclude all node modules files as they are production ready
        },{
            test:/\.s?css$/,
            use:['style-loader','css-loader','sass-loader']
        }]
    },//loaders
    devtool:'cheap-module-eval-source-map',  //it is difficult to find errors or debug as we have multiple files, hence use source maps
    //it shows the file from where the error arised or the console.log statement was executed

    devServer:{
        contentBase:path.join(__dirname,'public'), //path to the public files
        historyApiFallback: true
    }
};

//loader - loader can be used to trnasform app.js using babel
//if we want to do some action/transform on js file before loading use loader