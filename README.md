# Youtube Clone

## Installing tailwind css and SupaBase js Client

### Installation of tailwind css

1. Installing the package using npm

```
npm install -D tailwindcss
npx tailwindcss init
```

2. adding this in the `tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. adding the Tailwind directives to my CSS `index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. starting my server

```
npm start
```

### Installing the SupaBase js Client

The fastest way to get started is to use the supabase-js client library which provides a convenient interface for working with Supabase from a React app. Navigate to the React app and install supabase-js.

```
npm install @supabase/supabase-js
```
