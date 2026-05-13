# Migration Notes

This is a clean copy of the Extra Sauce Agency website prepared for migration to a new GitHub repository and Vercel project.

## Source

Original repository: https://github.com/Extra-Sauce-Agency/Extra-sauce-agency
Source commit copied: 2161fb199bd85035dbae8ca1dca3427d95f2eaa8

## Stack

The project is a Vite + React site. Vercel should use:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.x recommended, matching the current Vercel project

## Next steps

1. Create a new GitHub repository.
2. Add it as `origin` in this folder.
3. Push branch `main`.
4. Import the new repository into Vercel.
5. Deploy and verify the generated Vercel URL.
