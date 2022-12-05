<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/nextjs-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/nextjs-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>

<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/nextjs-starter-tpl/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnextjs-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://github.com/wayofdev/nextjs-starter-tpl/tags"><img src="https://img.shields.io/github/v/tag/wayofdev/nextjs-starter-tpl?sort=semver&style=flat-square" alt="Latest Version"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/nextjs-starter-tpl.svg?style=flat-square&color=blue" alt="Software License"/></a>
<a href="#"><img alt="Commits since latest release" src="https://img.shields.io/github/commits-since/wayofdev/nextjs-starter-tpl/latest?style=flat-square"></a>
</div>
<br>

This repository contains boilerplate and starter kit written in [Next.js](https://nextjs.org). Used together with backend API part — [laravel-starter-tpl](https://github.com/wayofdev/laravel-starter-tpl)

<br>

## 🚀 Features

-   [NextJS 13.x](https://nextjs.org/blog/next-13)
-   [Typescript](https://www.typescriptlang.org/) support out of the box
-   Integrated with [Tailwind CSS](https://tailwindcss.com/)
-   Strict Mode for TypeScript and React 18
-   Linter with [ESLint](https://eslint.org/) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
-   Code formatting with [Prettier](https://prettier.io/)
-   [Husky](https://typicode.github.io/husky/#/) for modern native git hooks
-   [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
-   [GitHub Actions](https://github.com/features/actions) support out of the box
-   SEO metadata, JSON-LD and Open Graph tags with Next SEO
-   [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) — Visualize size of webpack output files with an interactive zoomable treemap
-   Optimized [Lighthouse](https://web.dev/performance-scoring/) performance score

<br>

## 📑 Requirements

-   **macOS** Monterey or **Linux**
-   **Docker** 20.10 or newer
    -   [How To Install and Use Docker on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)
-   **Cloned, configured and running** [docker-shared-services](https://github.com/wayofdev/docker-shared-services), to support system wide DNS, Routing and SSL support via Traefik.

<br>

## 💿 Installation

> Warning: Repository with [docker-shared-services](https://github.com/wayofdev/docker-shared-services) should be configured, up and running before

### → Instructions

-   First, setup, for this repository, compatible backend by following instructions in [laravel-starter-tpl](https://github.com/wayofdev/laravel-starter-tpl)

-   After backend is set up done, clone this repository:

    ```bash
    $ git@github.com:wayofdev/nextjs-starter-tpl.git
    ```

-   Create `.env` file:

    ```bash
    $ make env \
    	APP_NAME=tpl \
    	SYSTEM_SERVICES_NAMESPACE=ss \
    	PROJECT_SERVICES_NAMESPACE=wod
    ```

-   Build, install and run application:

    ```bash
    $ make
    ```

-   Now, project is running, and, if default settings were used, available at [https://tpl.wod.docker](https://tpl.wod.docker)

<br>

## 🧪 Testing

You can check `Makefile` to get full list of commands for local testing. For testing, you can use these commands to test whole role or separate tasks:

Testing docker-compose using dcgoss:

```bash
$ make test
```

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/nextjs-starter-tpl?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🙆🏼‍♂️ Author Information

This repository was created in **2022** by [lotyp / wayofdev](https://github.com/wayofdev).

<br>

## 🫡 Contributors

<img align="left" src="https://img.shields.io/github/contributors-anon/wayofdev/nextjs-starter-tpl?style=for-the-badge" alt="Contributors"/>

<a href="https://github.com/wayofdev/docker-nginx/graphs/contributors">
  <img src="https://opencollective.com/wod/contributors.svg?width=890&button=false" alt="Contributors">
</a>

<br>
