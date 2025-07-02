# env-sync-cli-tool

> ⚡ **Automatically generate and sync your `.env.example` from your `.env` files in Node.js projects, with watch mode support.**

---

## 🚀 Features

✅ Generates `.env.example` from `.env` by stripping values (keeping keys and comments)  
✅ Automatically syncs on `.env` changes with `--watch` flag  
✅ Prevents missing environment variables in teams and CI  
✅ Simple CLI for local and CI workflows

---

## 📦 Installation

### Using npm:

````bash
npm install env-sync-cli-tool
```

Or globally:
```bash
npm install -g env-sync-cli-tool
````

### ⚙️ Usage

Ensure your .env file exists in your project root.

Generate .env.example once

Using npx:

```bash

npx envsync

```

Using globally:

```bash

envsync

```

This will generate or update .env.example in your project.

#### Watch mode

Automatically regenerate .env.example whenever .env changes:

```bash

npx envsync --watch

```

or

```bash

envsync --watch

```

Press Ctrl + C to stop the watcher when done.

Add to your project scripts
To automate, add to your package.json:

```bash
"scripts": {
  "sync-env": "envsync",
  "sync-env:watch": "envsync --watch"
}
```

Now you can run:

```bash
npm run sync-env
```

or

```bash
npm run sync-env:watch
```

for continuous syncing during development.

#### 👥 Recommended Workflow

✅ Commit your .env.example to your repository (never your .env).
✅ Team members can copy it when setting up locally:

```bash

cp .env.example .env

```

✅ Run npx envsync after updating .env to keep .env.example current.

## 📸 Example

Given .env:

```bash
# Database configuration
DB_HOST=localhost
DB_USER=root
DB_PASS=password123
```

Generated .env.example:

```bash
# Database configuration
DB_HOST=
DB_USER=
DB_PASS=
```

## 🤝 Contributing

PRs and issues are welcome to improve the tool or add new features.

## ✨ Author

Built with ❤️ by [`Codehouze`](https://codehouze.dev)


###
