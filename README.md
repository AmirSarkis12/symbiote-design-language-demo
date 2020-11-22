# Symbiote Design Language Demo


## Using styles in isolation

If you wish to just use the styles and provide your own HTML structures, from your project you must import some base sass files before the specific components

```
@import '../node_modules/symbiote-design-language-library/src/styles/variables/colors';
@import '../node_modules/symbiote-design-language-library/src/styles/variables/settings';
@import '../node_modules/symbiote-design-language-library/src/styles/variables/fonts';

@import '../node_modules/symbiote-design-language-library/src/styles/atoms/normalize';
@import '../node_modules/symbiote-design-language-library/src/styles/atoms/mixins';


// then specific components

@import '../node_modules/symbiote-design-language-library/src/styles/atoms/buttons';
@import '../node_modules/symbiote-design-language-library/src/styles/atoms/grid';

```

## Troubleshooting

### Font loading

If your webpack config can't resolve the .ttf files

```
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleNotFoundError: Module not found: Error: Can't resolve '../../assets/fonts/open-sans/OpenSans-Bold.ttf' in '/tmp/work/themes/sds/src'
```

You'll need to manually copy the `assets` folder from node_modules into a path relative to your entrypoint (ie ../../assets). This will be addressed in a future release

### Font URL references

Your compiled css file ends up with something like the following instead of a font file

```
@font-face: url([object Module]);
```

Update your file-loader to not treat .tff files as  esmodules!

```
{
    test: /.(svg|ttf|otf|eot|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "[name]-[hash].[ext]",
                // publicPath: "/themes/ptv-mpw/public/fonts",
                outputPath: "fonts",
                esModule: false
            }
        }
    ]
},
            
```
