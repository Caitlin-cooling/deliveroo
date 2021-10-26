# Deliveroo Tech Test
Deliveroo Tech Test is a VueJS SPA with a Browse page that shows users the restaurants in their area.

The project is split in to the following structure:
- `assets`: Contains static asset files
- `components`: Reusable components that are context agnostic
- `router`: TODO will contain router configuration
- `services`: Contains piece of complex logic and asynchronous calls
- `store`: Contains Vuex store
- `views`: Contains view files to be rendered at a single route

## Dependancies
- VueJs
- Vuex for state management
- Vue  test utils for unit tests

## Available commands
- Project setup: `npm install`
- Compiles and hot-reloads for development: `npm run serve`
- Compiles and minifies for production: `npm run build`
- Lints and fixes files: `npm run lint`

## TODO
With more time I would:
- Implement a design system, refactoring CSS so that it is reusable. Given the time constraints and size of the application this felt overkill
- Implement Vue Router for multiple pages in the SPA
- Implement modules in the Vuex store to better organise state concerns
- Test coverage 

## Known Issues
There is an issue with the reactivity of the store state and the computed property `isDesktopUser`, meaning that it only works on page refresh. I chose to prioritise testing and a README over looking in to this because the impact to a user is low compared to the impact of poor documentation.