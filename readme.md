# eslint-config-gristow

A somewhat opinonated eslint configuration for js, ts and svelte.

npm install --dev eslint-config-gristow

## Local / Per Project Install

1. `yarn add -D eslint-config-gristow`;
2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-gristow
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc.js` file should look like this:

```js
  module.exports = {
    extends: ['gristow'],
    // This is critical for allowing the import parser to be aware
    // of any paths configured in .tsconfig.json
    settings: {
      'import/resolver/typescript': {
        project: './tsconfig.json',
      },
    },
  };
```

5. If your project uses, svelte, instead extend gristow/svelte:
```js
  module.exports = {
    extends: ['gristow/svelte'],
    // This is critical for allowing the import parser to be aware
    // of any paths configured in .tsconfig.json
    settings: {
      'import/resolver/typescript': {
        project: './tsconfig.json',
      },
    },
  };
```

6. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

7. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## With VS Code

Once you have the above installed, you probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```json
{  
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },  
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },  
  "[svelte]": {
		"editor.defaultFormatter": "svelte.svelte-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }    
  },
  // This line is CRITICAL for enabling eslint checking of svelte files,
  // otherwise they are ignored by default (despite the above!)
  "eslint.validate": ["javascript", "typescript", "svelte"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
