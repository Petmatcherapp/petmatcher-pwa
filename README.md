# Petmatcher Progressive Web App

Welcome to the Directory for the PWA. If you are looking for the website repository it is located here - [Petmatcher Website](https://github.com/Petmatcherapp/petmatcher-website)

## Begin Development

1. clone the repository
2. cd into the directory
3. install dependancies by running:
   ```bash
   npm install
   ```
4. start local environment by running:
   ```bash
   npm run dev
   ```
5. A local environment will be served at - [http://localhost:3000](http://localhost:3000) in your browser. Visit that url to see the results

---

## Organization

Next.js is a little bit different than vanilla react.js, so here is a mini tutorial on how the Petmatcher files are structured.

### Pages

To create a page, simply add a file in the pages directory that is located at the root level. These files are treated exactly like a react component.

#### Pages - Nested

To create nested routes, create a folder and file structure that resembles the path you wish to create.

#### Pages - Content

Generally the goal that we try to achieve is to not have functionality in the page components. In other words - the only content that pages should have is text and components.

### Components

All components are located in the `Components` folder.

#### Components - Root Level

Components that are root level within the `Components` folder are global components that may be used everywhere within the system. Folders inside `Components` may be created in order to maintain organization.

#### Components - PageSpecific

Inside of `Components` there is a folder labeled `PageSpecific`. Here are the components that are scoped to pages which are not global.

### CSS

All styles are in the `styles` directory. Do not use inline styling _anywhere_.

#### CSS - Globals

The file `globals.css` is for all global styles. We try and design it so you can build pages & components without needing to create more css.

#### CSS - Pages & Components

We try and set up `gloabal.css` so you can build anything withough needing to create aditional styles, but there will always be some specific styles that are not globally assigned. Page specific and component specific styles have their own folder, and use module styling.

---

## Petmatcher API

The Petmatcher custom API is used to communicate with any other backend service that is relative to petmatcher (_duh_).
It is located in the root `pages` folder and can be organized how seen fit.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
