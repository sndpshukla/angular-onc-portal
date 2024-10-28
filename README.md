# OncologyPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```
oncology-portal
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  │
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ angular.json
├─ eslint.config.js
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.config.ts
│  │  ├─ app.routes.ts
│  │  ├─ appointment
│  │  │  ├─ appointment-details
│  │  │  │  ├─ appointment-details.component.html
│  │  │  │  ├─ appointment-details.component.scss
│  │  │  │  ├─ appointment-details.component.spec.ts
│  │  │  │  └─ appointment-details.component.ts
│  │  │  ├─ appointment-list
│  │  │  │  ├─ appointment-list.component.html
│  │  │  │  ├─ appointment-list.component.scss
│  │  │  │  ├─ appointment-list.component.spec.ts
│  │  │  │  └─ appointment-list.component.ts
│  │  │  └─ book-appointment
│  │  │     ├─ book-appointment.component.html
│  │  │     ├─ book-appointment.component.scss
│  │  │     ├─ book-appointment.component.spec.ts
│  │  │     └─ book-appointment.component.ts
│  │  ├─ guards
│  │  │  ├─ oncology-route.guard.spec.ts
│  │  │  └─ oncology-route.guard.ts
│  │  ├─ patient
│  │  │  ├─ add-patient
│  │  │  │  ├─ add-patient.component.html
│  │  │  │  ├─ add-patient.component.scss
│  │  │  │  ├─ add-patient.component.spec.ts
│  │  │  │  └─ add-patient.component.ts
│  │  │  ├─ patient-details
│  │  │  │  ├─ patient-details.component.html
│  │  │  │  ├─ patient-details.component.scss
│  │  │  │  ├─ patient-details.component.spec.ts
│  │  │  │  └─ patient-details.component.ts
│  │  │  └─ patient-list
│  │  │     ├─ patient-list.component.html
│  │  │     ├─ patient-list.component.scss
│  │  │     ├─ patient-list.component.spec.ts
│  │  │     └─ patient-list.component.ts
│  │  ├─ reports
│  │  │  ├─ generate-report
│  │  │  │  ├─ generate-report.component.html
│  │  │  │  ├─ generate-report.component.scss
│  │  │  │  ├─ generate-report.component.spec.ts
│  │  │  │  └─ generate-report.component.ts
│  │  │  ├─ report-details
│  │  │  │  ├─ report-details.component.html
│  │  │  │  ├─ report-details.component.scss
│  │  │  │  ├─ report-details.component.spec.ts
│  │  │  │  └─ report-details.component.ts
│  │  │  └─ report-list
│  │  │     ├─ report-list.component.html
│  │  │     ├─ report-list.component.scss
│  │  │     ├─ report-list.component.spec.ts
│  │  │     └─ report-list.component.ts
│  │  ├─ shared
│  │  │  └─ service
│  │  │     ├─ communication.service.spec.ts
│  │  │     └─ communication.service.ts
│  │  └─ treatment
│  │     ├─ add-treatment-plan
│  │     │  ├─ add-treatment-plan.component.html
│  │     │  ├─ add-treatment-plan.component.scss
│  │     │  ├─ add-treatment-plan.component.spec.ts
│  │     │  └─ add-treatment-plan.component.ts
│  │     ├─ treatment-details
│  │     │  ├─ treatment-details.component.html
│  │     │  ├─ treatment-details.component.scss
│  │     │  ├─ treatment-details.component.spec.ts
│  │     │  └─ treatment-details.component.ts
│  │     └─ treatment-list
│  │        ├─ treatment-list.component.html
│  │        ├─ treatment-list.component.scss
│  │        ├─ treatment-list.component.spec.ts
│  │        └─ treatment-list.component.ts
│  ├─ index.html
│  ├─ main.ts
│  └─ styles.scss
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
