# Template Project

Webpack Multi-Page Template is a starter kit for building multi-page websites with Webpack. It offers optimized asset bundling, automated HTML generation, and efficient build processes, making it perfect for personal portfolios, corporate sites, and various web applications. Accelerate your development workflow with this robust template.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Development](#development)
    - [Production Build](#production-build)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **Multi-Page Setup**: Easily manage multiple HTML pages with corresponding JavaScript and CSS.
- **Babel Integration**: Transpile modern JavaScript using `@babel/preset-env`.
- **CSS Handling**: Extract and minimize CSS using `mini-css-extract-plugin`.
- **Asset Management**: Handle images and other assets with `file-loader`.
- **Development Server**: Live reloading and hot module replacement with `webpack-dev-server`.
- **Optimizations**: Minimize JavaScript and CSS for production builds.

## Installation

1. Clone the repository:
        ```
        git clone https://github.com/your-username/template-project.git
        cd template-project
        ```
2. Install dependencies:
        ```
        npm install
        ```

## Usage

### Development

Start the development server with hot reloading:
```sh
npm run start
```
This will open the application in your default browser at `http://localhost:9000`.

### Production Build

Generate optimized production-ready files:
```sh
npm run build
```
The output will be in the `dist` directory.

## Project Structure

```
.
├── .babelrc
├── .gitignore
├── package.json
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── images
│   │   └── js
│   │       ├── about.js
│   │       ├── contact.js
│   │       └── index.js
│   ├── index.js
│   └── templates
│       ├── about.html
│       ├── contact.html
│       └── index.html
├── webpack.config.js
└── README.md
```

## Scripts

- **Start Development Server**:
        ```
        npm run start
        ```
- **Build for Production**:
        ```
        npm run build
        ```

## Dependencies

### Development Dependencies

- `@babel/core` - Babel compiler core
- `@babel/preset-env` - Smart preset for Babel
- `babel-loader` - Webpack loader for Babel
- `clean-webpack-plugin` - Cleans the dist folder
- `css-loader` - Resolves `@import` and `url()` in CSS
- `css-minimizer-webpack-plugin` - Minimize CSS
- `file-loader` - Resolves `import/require()` on files
- `html-loader` - Exports HTML as string
- `html-webpack-plugin` - Simplifies creation of HTML files
- `mini-css-extract-plugin` - Extracts CSS into files
- `sass` - Sass compiler
- `sass-loader` - Loads a Sass/SCSS file and compiles it
- `terser-webpack-plugin` - Minimize JavaScript
- `webpack` - Module bundler
- `webpack-cli` - Command line interface for Webpack
- `webpack-dev-server` - Development server for Webpack

## License

MIT
