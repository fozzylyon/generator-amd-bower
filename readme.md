# About
A yeoman generator to help build AMD bower components

# Installation
```shell
npm install -g git+ssh://git@github.com:fozzylyon/generator-amd-bower.git
```

# Usage
```shell
yo amd-bower
```

# Post Generation
After running the generator, you'll find the starting point to write your component in `lib/main.js`

## Grunt Tasks
`grunt` delegates to `build`
`grunt build` compiles and uglifies your component
`grunt build:js` only compiles your component