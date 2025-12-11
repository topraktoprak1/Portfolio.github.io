# Personal Portfolio — Refik Toprak Telli

This is a small static personal portfolio page built with plain HTML, CSS and JavaScript.

## Features

- Responsive layout with a centered header and profile picture.
- Horizontal navigation bar with mobile toggle (hamburger) and sticky behavior.
- Section anchor links for: About, Education, Experience, Technical Skills, Projects, Contact.
- Education and Technical Skills headings have small logos aligned to the right of the heading.
- `app.js` includes optional features (theme toggle, project filters, modal) guarded so missing elements won't break the page.

## Files

- `index.html` — main page markup.
- `style.css` — page styles, nav styles, responsive rules.
- `app.js` — JavaScript for navigation (mobile toggle, sticky nav, scrollspy) and optional interactions.
- Image files used as icons/logos are kept in the project root in your current setup (replace them with your own optimized images).

## Preview locally (Windows PowerShell)

Open the project folder in PowerShell and run:

```powershell
Start-Process .\index.html
```

This opens the page in your default browser. Resize the window to test the mobile nav. Click the ☰ button to open the menu and click a link to jump to a section.

## How the navigation works

- On wide viewports the nav is shown as a horizontal list of links.
- On small viewports (≤700px) the nav is hidden and a hamburger button (`#nav-toggle`) appears.
  - Click the hamburger to open/close the menu.
  - The menu closes automatically when a link is clicked.
- The nav becomes sticky when the page is scrolled past it.
- The current section link gets the `active` class while scrolling (scrollspy).

## Replace or add logos (recommended)

- Replace the placeholder image files in the project root with square, optimized images (SVG or PNG preferred):
  - Education logos: update `1200x630bb.png`, `images.png` (or change filenames in `index.html`).
  - Technical skills icons: replace `create-a-python-script.webp`, `images (1).png`, `Sql_data_base_with_logo.png`, `javascript-logo.png`, `pngtree-html-file-document-icon-png-image_909888.jpg`, `Official_CSS_Logo.svg` with your preferred files.
- To change icon size, edit the rules in `style.css`:
  - `#technical-skills-logos img` and `#education-logos img` widths/heights (currently `28px`).

## Tips / Next steps

- Make the nav sticky without JS by setting `nav.main-nav { position: sticky; top: 0; }` if you want to remove the JS sticky behavior.
- Add a hamburger animation or slide-in panel for a more polished mobile experience.
- Optimize images (resize, compress) and prefer SVGs for crisp icons.
- If you'd like, I can split `app.js` into modular files (e.g., `nav.js`, `ui.js`).

## Contact

If you want me to update the README with example logos, or automatically generate simple SVG placeholders and wire them into the page, tell me which logos you want and I will add them.

---

Created by edits in this workspace. Preview with the `Start-Process` command above.
