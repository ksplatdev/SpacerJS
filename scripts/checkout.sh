# Run File from SpacerJS Root
# sh scripts/checkout.sh
# Pushes changes to github and creates a release

# Main

main() {
    # Build
    sh ./scripts/build.sh

    # Pushs to github
    echo "Pushing Changes to Github"

    git add .
    echo "Staged Changes"

    read -p "Commit Message: " message
    git commit -m "$message"
    echo "Commited Changes"

    git push -u origin main
    echo "Pushed Changes"

    echo "Creating release"
    read -p "Version: " version
    read -p "Files: " files
    gh release create version -t version $files

    echo "Checkout complete"
}

# Ask for messages & confirm
while true; do
    read -p "Are you sure you want to checkout? Y/n " yn
    case $yn in
        [Yy]* ) main; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done




