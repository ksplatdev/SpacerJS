# Run File from SpacerJS Root
# sh scripts/build.sh

# Main Script
echo "Running build.sh"
tsc
echo "Compiled"
npm run minify
echo "Minified"

# ESM Module

> ./build/Spacer.esm.js
echo "Emptied ESM"

value=`cat ./build/Spacer.js`
echo "$value" >> ./build/Spacer.esm.js
echo "Wrote to ESM"

echo "\nexport default _;export {body, head, _appendCustom};" >> ./build/Spacer.esm.js
echo "Finished ESM"

npm run minifyModule
echo "Finished ESM Minified"

# Docs
jsdoc ./build/Spacer.js -d ./docs
echo "Built Docs"

echo "Build Complete"