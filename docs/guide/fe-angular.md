# Angular

## Style Guide

[Reference](https://angular.io/guide/styleguide)

### Single responsibility

- **Consider** limiting files to 400 lines of code
- **Consider** limiting to no more than 75 lines

1. Prefix custom component: User `karios` prefix stand for custom component, directive, pipe of Karios project.
1. Folders-by-feature structure: Do create folders named for the feature area they represent.
1. Use scss in project.
1. Do not add filtering and sorting logic to pipes.

1. File structure conventions

    The guideline uses the shortcut hero.component.ts|html|css|spec to represent those various files.
    Using this shortcut makes this guide’s file structures easier to read and more terse.

7. Single responsibility

    A class should have one and only one reason to change meaning that a class should have only one job.
    Do define one thing such as a service or component per file
    One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.
    Limiting files to 400 Lines of code.
    Define small functions and Limiting to no more than 75 lines.
    The small functions are easy to reuse, read and maintain.

3. Naming

    Naming conventions are hugely important to maintainability and readability.
3.1 General Naming Guidelines
Use consistent names for all symbols.
Do follow a pattern that describes the symbol’s feature then its type. The recommended pattern is feature.type.ts.
3.2 Separate filenames with dots and dashes
Do use conventional type names including .service, .component, .pipe, .module, and .directive. Invent additional type names if you must but take care not to create too many.
3.3 Symbols and file names
Do use upper camel case for class names.
Do match the name of the symbol to the name of the file.
Do give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.
3.4 Service names
Do use consistent names for all services named after their feature.
Do suffix a service class name with Service. For example, something that gets data or heroes should be called a DataService or a HeroService.
3.5 Bootstrapping
Do put bootstrapping and platform logic for the app in a file named main.ts.
Do include error handling in the bootstrapping logic.
3.6 Component selectors
Do use dashed-case or kebab-case for naming the element selectors of components.
3.7 Component custom prefix
Do use a hyphenated, lowercase element selector value; for example, admin-users.
Do use a prefix that identifies the feature area or the app itself.
3.8 Directive selectors
Do Use lower camel case for naming the selectors of directives.
The Angular HTML parser is case sensitive and recognizes lower camel case.
3.9 Directive custom prefix
Do use a custom prefix for the selector of directives (e.g, the prefix toh from Tour of Heroes).
3.10 Pipe names
Do use consistent names for all pipes, named after their feature.
3.11 Unit test file names
Do name test specification files the same as the component they test.
Do name test specification files with a suffix of .spec.
3.12 End-to-End (E2E) test file names
Do name end-to-end test specification files after the feature they test with a suffix of .e2e-spec.
3.13 Angular NgModule names
Do append the symbol name with the suffix Module.
Do give the filename the .module.ts extension.
Do name the module after the feature and folder it resides in.
Do suffix a RoutingModule class name with RoutingModule.
Do end the filename of a RoutingModule with -routing.module.ts.

4. Coding conventions

    4.1 Classes
Do use upper camel case, also known as PascalCase, when naming classes.
4.2 Constants
Do declare variables with const if their values should not change during the application lifetime.
Lower camel case variable names (heroRoutes) are easier to read and understand than the traditional UPPER_SNAKE_CASE names (HERO_ROUTES).
4.3 Interfaces
Do name an interface using upper camel case.
Consider naming an interface without an I prefix.
Consider using a class instead of an interface for services and declarables (components, directives, and pipes).
Consider using an interface for data models.
Interfaces are completely removed during compilation and so they will not add any unnecessary bloat to our final js code
4.4 Properties and methods
Do use lower camel case to name properties and methods.
Avoid prefixing private properties and methods with an underscore.
4.5 Import line spacing
Consider leaving one empty line between third-party imports and application imports.
Consider listing import lines alphabetized by the module.

5. Application structure and NgModules

    All of the app’s code goes in a folder named src. All feature areas are in their own folder, with their own NgModule.
5.1 LIFT
Do structure the app such that you can Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY.
5.2 Locate
Do make locating code intuitive, simple and fast.
5.3 Identify
Do name the file such that you instantly know what it contains and represents.
It may be advantageous to deviate from the one-thing-per-file rule when you have a set of small, closely-related features that are better discovered and understood in a single file than as multiple files. Be wary of this loophole.
5.4 Flat
Do keep a flat folder structure as long as possible.
Consider creating sub-folders when a folder reaches seven or more files.
On the other hand, psychologists believe that humans start to struggle when the number of adjacent interesting things exceeds nine. So when a folder has ten or more files, it may be time to create subfolders
5.5 T-DRY (Try to be DRY)
Do be DRY (Don’t Repeat Yourself).
Make sure you do not have the same code copied into the different places in the codebase extract the repeating code and use it in place of the repeated code.
5.6 Overall structural guidelines

    ```text
    |-- app
        |-- modules
          |-- home
              |-- [+] components
              |-- [+] pages
              |-- home-routing.module.ts
              |-- home.module.ts
        |-- core
          |-- [+] authentication
          |-- [+] footer
          |-- [+] guards
          |-- [+] http
          |-- [+] interceptors
          |-- [+] mocks
          |-- [+] services
          |-- [+] header
          |-- core.module.ts
          |-- ensureModuleLoadedOnceGuard.ts
          |-- logger.service.ts
        |
        |-- shared
              |-- [+] components
              |-- [+] directives
              |-- [+] pipes
              |-- [+] models
        |
        |-- [+] configs
    |-- assets
        |-- scss
              |-- [+] partials
              |-- _base.scss
              |-- styles.scss
    ```

    5.7 Folders-by-feature structure
Do create folders named for the feature area they represent.
A developer can locate the code and identify what each file represents at a glance. The structure is as flat as it can be and there are no repetitive or redundant names.
5.8 App root module
Do create an NgModule in the app’s root folder, for example, in /src/app.
Makes it easier to locate and identify the root module.
5.9 Feature modules
Do create an NgModule for all distinct features in an application;
A feature module can easily be routed to both eagerly and lazily.
A feature module can easily be isolated for testing.
5.10 Shared feature module
Create a feature module named SharedModule in a shared folder.
Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.
Not providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module.
SharedModule will contain components, directives, and pipes that may need features from another common module; for example, ngFor in CommonModule.
5.11 Lazy Loaded folders
A distinct application feature or workflow may be lazy loaded or loaded on demand rather than when the application starts.
A typical lazy loaded folder contains a routing component, its child components, and their related assets and modules.
5.12 Never directly import lazy loaded folders
Avoid allowing modules in sibling and parent folders to directly import a module in a lazy loaded feature.

6. Components

    6.1 Components as elements
Giving components an element selector, as opposed to attribute or class selectors.
It is easier to recognize that a symbol is a component by looking at the template’s HTML.
6.2 Extract templates and styles to their own files
Extract templates and styles into a separate file, when more than 3 lines.
Name the template file [component-name].component.html, where [component-name] is the component name.
In most editors, syntax hints and code snippets aren’t available when developing inline templates and styles
6.3 Decorate input and output properties
Use the @Input() and @Output() class decorators instead of the inputs and outputs properties of the@Directive and @Component metadata:
6.4 Avoid aliasing inputs and outputs
Avoid input and output aliases except when it serves an important purpose.
Two names for the same property (one private, one public) is inherently confusing.
6.5 Member sequence
Place properties up top followed by methods
Place private members after public members, alphabetized.
Placing members in a consistent sequence makes it easy to read and helps instantly identify which members of the component serve which purpose.
6.6 Delegate complex component logic to services
limit logic in a component to only that required for the view. All other logic should be delegated to services.
Move reusable logic to services and keep components simple and focused on their intended purpose.
Keeps the component slim, trim, and focused.
6.7 Don’t prefix output properties
Name events without the prefix on
Name event handler methods with the prefix on followed by the event name.
6.8 Put presentation logic in the component class
Put presentation logic in the component class, and not in the template.
Logic will be contained in one place (the component class) instead of being spread in two places.

7. Directives

    7.1 Use directives to enhance an element
Use attribute directives when you have presentation logic without a template.
An element may have more than one attribute directive applied.
7.2 HostListener/HostBinding decorators versus host metadata
Consider preferring the @HostListener and @HostBinding to the host property of the @Directive and @Component decorators.
The property associated with @HostBinding or the method associated with @HostListener can be modified only in a single place—in the directive's class. If you use the host metadata property, you must modify both the property/method declaration in the directive's class and the metadata in the decorator associated with the directive.
Compare with the less preferred host metadata alternative.
The host metadata is only one term to remember and doesn't require extra ES imports.

8. Services

    8.1 Services are singletons
Do use services as singletons within the same injector. Use them for sharing data and functionality.
Services are ideal for sharing methods across a feature area or an app.
Services are ideal for sharing stateful in-memory data.
8.2 Single responsibility
Create services with a single responsibility that is encapsulated by its context.
Create a new service once the service begins to exceed that singular purpose.
When a service has multiple responsibilities, it becomes difficult to test.
When a service has multiple responsibilities, every component or service that injects it now carries the weight of them all.
8.3 Providing a service
Provide a service with the app root injector in the @Injectable decorator of the service.
When you provide the service to a root injector, that instance of the service is shared and available in every class that needs the service. This is ideal when a service is sharing methods or state.
When you register a service in the @Injectable decorator of the service, optimization tools such as those used by the Angular CLI's production builds can perform tree shaking and remove services that aren't used by your app.
8.4 Use the @Injectable() class decorator
Use the @Injectable() class decorator instead of the @Inject parameter decorator when using types as tokens for the dependencies of a service.

9. Data Services

    9.1 Talk to the server through a service
Make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.

10. Lifecycle hooks

    Use Lifecycle hooks to tap into important events exposed by Angular.
10.1 Implement lifecycle hook interfaces
Implement the lifecycle hook interfaces.
Lifecycle interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.

11. Other

    11.1 trackBy
When using ngFor to loop over an array in templates, use it with a trackByfunction which will return an unique identifier for each item.
When an array changes, Angular re-renders the whole DOM tree. But if you use trackBy, Angular will know which element has changed and will only make DOM changes for that particular element.
11.2 Clean up subscriptions
When subscribing to observables, always make sure you unsubscribe from them appropriately by using operators like take, takeUntil, etc.
11.3 Avoid having subscriptions inside subscriptions
If you can do them all in parallel use forkJoin or If each depends on the result of the previous use flatMap and so on. There are many different operators to compose observables.
11.4 Avoid any; type everything;
Always declare variables or constants with a type other than any.
11.5 Avoid logic in templates
If you have any sort of logic in your templates, even if it is a simple && clause, it is good to extract it out into its component.
Having logic in the template means that it is not possible to unit test it and therefore it is more prone to bugs when changing template code.
11.6 Remove unused code
It is extremely valuable to know if a piece of code is being used or not. If you let unused code stay, then in the future, it can be hard or almost impossible to be certain if it’s actually used or not. Therefore, you should make it a high priority to remove unused code.
11.7 Avoid code comments
Although there are cases for comments, you should really try to avoid them. You don’t want your comments to compensate for your failure to express the message in your code. Comments should be updated as code is updated, but a better use of time would be to write code that explains itself. Inaccurate comments are worse than no comments at all, as stated by anonymous:
Code never lies, comments do.
11.8 Clean up imports with path aliases
We can clean up these imports considerably by using aliases to reference our files, which looks something like this:
import 'reusableComponent' from '@app/shared/components/reusable.component.ts';
To be able to do this, we need to add a baseUrl and the desired paths inside our tsconfig.json file:

    ```json
    {
    "compilerOptions": {
        ...
        "baseUrl": "src",
        "paths": {
        "@app:": ["@app/*"]
        }
    }
    }
    ```

12. Appendix

    Useful tools and tips for Angular.
12.1 Codelyzer
Use codelyzer to follow this guide.
Consider adjusting the rules in codelyzer to suit your needs
12.2 Use TSLint
This is a static code analysis tool we use in software development for checking if TypeScript code complies with the coding rules
12.3 Prettier with TSLint
You can combine TSLint with Prettier. Prettier is an amazing tool that enforces a consistent style by parsing your code and re-printing it, with its own rules in place. Having Prettier setup with TSLint gives you a strong foundation for your applications, as you no longer need to maintain your code-style manually. Prettier takes care of code formatting and TSLint handles the rest.
12.4 Lint with Husky
Even with these rules in place, it can be hard to maintain them. You can easily forget to run these commands before pushing your code to production, which leads to a broken result. One way to work around this problem is by using husky. Husky allows us to run custom scripts before the staged files are committed — keeping our production code clean and organized.
12.5 Angular Language Service
Angular Language Service — This extension provides a rich editing experience for Angular templates, both inline and external templates.
12.6 JSON to TS
JSON to TS isn’t Angular specific and works whenever you’re working with TypeScript. Json2ts comes handy when you have to create a TypeScript interface from a JSON object.
12.7 angular2-switcher
angular2-switcher Easily navigate to typescript(.ts)|template(.html)|style(.scss/.sass/.less/.css) in angular projects.
12.8 Auto Import
Auto Import Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX
12.9 Path Intellisense
Path Intellisense is Visual Studio Code plugin that autocompletes filenames
12.10 SimonTest
SimonTest — Analyzes your Angular code and generates unit tests for you (can overwrite spec files generated automatically with Angular CLI).
Note: This is a paid extension. It comes with a 30 day trial. A license can be acquired at the product page: https://gumroad.com/l/SimonTest
12.11 Auto Close Tag
Auto Close Tag Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text.
Credits:
https://angular.io/guide/styleguide
https://medium.freecodecamp.org/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f
https://itnext.io/clean-code-checklist-in-angular-%EF%B8%8F-10d4db877f74
Raja Rama Mohan Thavalam
Sr Full Stack Web Developer Based In India

Follow

RAJA RAMA MOHAN THAVALAM FOLLOWS
Durga Vundavalli
Durga Vundavalli
See all (6)

47


