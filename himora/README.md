# Himora Travels

## Run it locally (Python)

```bash
pip install flask
python app.py
```

Then open **http://127.0.0.1:5000** in your browser. `debug=True` means the
page auto-reloads whenever you edit a file.

## Where to edit things

- **WhatsApp number / Instagram handle** → top of `app.py`, in the `CONTACT` dict.
- **Packages (name, price, days, blurb)** → top of `app.py`, in the `PACKAGES` list. Add or remove a dict to add/remove a card — the page updates automatically.
- **Page layout & copy** → `templates/index.html`
- **Colors, fonts, animation** → `static/css/style.css` (color tokens are at the very top under `:root`)
- **Footer year + scroll animation** → `static/js/script.js`

## Structure

```
himora/
├── app.py                 ← Python/Flask entry point
├── templates/
│   └── index.html         ← page markup (Jinja template)
└── static/
    ├── css/style.css      ← all styling + animations
    ├── js/script.js       ← small interactions
    └── img/               ← put real photos here later
```

## Notes for going live

- Replace the WhatsApp number and Instagram handle placeholders first.
- The postcard photo blocks are currently color gradients — drop real photos
  into `static/img/` and swap them in when you have them, no rush.
- For a static host (like GitHub Pages), this would need converting to plain
  HTML since Pages can't run Python — happy to make that version too once
  you're ready to deploy. For now this runs great locally, or on any host
  that supports Python (Render, PythonAnywhere, Railway, etc.).
