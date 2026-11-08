# Connection

Public project page: https://vt-13.github.io/connection/

Connection is an early shared-workspace concept for people using several AI coding agents. This page describes the idea; the agent workspace itself is not yet available.

## Hosting

This repository contains static HTML, CSS, JavaScript, and a favicon. GitHub Pages publishes `main` from the repository root. `.nojekyll` preserves the static assets. No build dependencies or GitHub Actions workflow are required.

The sign-up links open the existing form at https://connection-agent-workspace.ratnatirumala.chatgpt.site/#access. That separate site saves the email list. GitHub Pages does not run the database or mailer. Incoming UTM campaign labels are carried to the form; defaults identify the GitHub project page.

Keep the hosted form available while using these links. No server secrets, subscriber data, or administrator credentials belong in this public repository. The original hosted URL remains valid, including links already submitted to directories.

## Editing

Edit `index.html`, `privacy/index.html`, or the files under `assets/`, then commit to `main`. The concept review demo is local to the browser and has no external effects. If the form URL changes, update every `data-signup-link` URL in `index.html`, the privacy notice, and this README.
