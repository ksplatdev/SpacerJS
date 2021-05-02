# Changelog

## Versions

### 1.0.0

-   Released SpacerJS

### 1.0.1

-   Made element global
-   Added changelog.md
-   Tweaked tsconfig

### 1.0.2

-   Fixed version number
-   Publish as npm package
-   Updated README.md
-   Removed useless script in package.json

### 1.1.0

-   Added new methods
-   -   **Chainable**
-   -   -   normalize
-   -   -   removeChild
-   -   -   replaceChild
-   -   **Non-Chainable**
-   -   -   compareNode
-   -   -   hasChildren
-   Repository
-   -   Added .vscode/settings.json
-   -   Added .vscode/extentions.json
-   -   Added .editorconfig
-   -   Tweaked tsconfig.json
-   -   Rebuilt Docs

### 1.1.1

-   Made elements node list spreader be type any for false error fix
-   Rebuilt docs

### 1.2.0

-   **Changed Methods**

    -   Changed iHtml => html
    -   Changed iText => text

-   **New Methods**

    -   **Chainable**
        -   Added setMeta(obj)
        -   Added show()
        -   Added hide()
        -   Added on(event, cb)
        -   Added addClass(className)
        -   Added removeClass(className)
        -   Added dbclick()
        -   Added sleep(ms): Promise
        -   Added keydown(cb) listener
        -   Added keyup(cb) listener
        -   Added debug(...args) which console logs args
    -   **Non-Chainable**
        -   Added children(): NodeList of ChildNodes

-   **New Returns**

    -   myElement.meta

-   **Misc**
    -   Rebuilt docs
    -   Updated examples
    -   Changed .gitignore
    -   Updated Readme.md
    -   Updated package.json
    -   Rebuilt src
    -   Prettified test.html
    -   Updated test.js
