module.exports = {
  // prettier-ignore
  "*.css": [
    "stylelint --fix",
    "prettier --write",
    "git add"
  ],
  // prettier-ignore
  'src/**/*.ts': [
    'yarn lint --fix',
    'prettier --write',
    'git add',
    'yarn test --bail --findRelatedTests',
  ],
  // prettier-ignore
  '*.json': [
    'prettier --write', 'git add'
  ],
  // images
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
};
