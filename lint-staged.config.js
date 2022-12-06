// More info — https://rizkicitra.dev/blog/how-to-setup-husky-nextjs
module.exports = {
    '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint', 'prettier --config ./.prettierrc.js --write'],
    '**/*.ts?(x)': () => 'yarn check-types',
    '*.json': ['prettier --config ./.prettierrc.js --write'],
    '**/*.{css,scss,md,html,json}': ['prettier --config ./.prettierrc.js --write'],
}
