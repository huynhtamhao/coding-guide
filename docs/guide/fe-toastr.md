# Toastr for Angular

## Introduction

- Tag notifications in Angular.

- Latest version available for each version of Angular

| ngx-toastr                 | Angular           |
|:---------------------------|:------------------|
| 13.2.1                     | 10.x 11.x         |
| current (14.2.1)           | >= 12.x           |

## Installation

- Install using npm.

``npm install ngx-toastr``

- @angular/animations package is a required dependency for the default toast.

``npm install @angular/animations``

## Use

- Copy toast css to your project.

[CSS](https://github.com/scttcper/ngx-toastr/blob/HEAD/src/lib/toastr.css)

- If you are using sass you can import the css.

```scss
// regular style toast
@import '~ngx-toastr/toastr';

// bootstrap style toast
// or import a bootstrap 4 alert styled design (SASS ONLY)
// should be after your bootstrap imports, it uses bs4 variables, mixins, functions
@import '~ngx-toastr/toastr-bs4-alert';

// if you'd like to use it without importing all of bootstrap it requires
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~ngx-toastr/toastr-bs4-alert';
```

- If you are using angular-cli you can add it to your angular.json.

```json
"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css" // try adding '../' if you're using angular cli before 6
]
```

- Add ToastrModule to app NgModule, make sure you have BrowserAnimationsModule as well

```ts
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

- Use

```ts
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class YourComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
```

## ToastConfig

```ts
// success, error, info, warning take (message, title, ToastConfig) pass an options object to replace any default option.
this.toastrService.error('everything is broken', 'Major Error', {
  timeOut: 3000,
});
```

| Name                   | Description                                  |
|:-----------------------|:---------------------------------------------|
| Toast Type             | ``Success \| Info \| Warning \| Error``      |
| title                  | Message on toast                             |
| message                | Title on toast                               |
| ToastConfig            | Option config                                |

## Options Config

<img src="~@assets/images/toastr/toastr-app-demo.jpg"><img />

### Toast Position

| Option                 | Default               | Description                                  |
|:-----------------------|:----------------------|:---------------------------------------------|
| positionClass          | ``'toast-top-right'`` | Class on toast container bar                 |

- Top Right
- Bottom Right
- Bottom Left
- Top Left
- Top Full Width
- Bottom Full Width
- Top Center
- Bottom Center

### Inline Position

- Put toasts in your own container
Put toasts in a specific div inside your application. This should probably be somewhere that doesn't get deleted.
Add ToastContainerModule to the ngModule where you need the directive available.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- Add a div with toastContainer directive on it.

```ts
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `
    <h1><a (click)="onClick()">Click</a></h1>
    <div toastContainer></div>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
  onClick() {
    this.toastrService.success('in div');
  }
}
```

### Individual options

| Option                 | Default               | Description                                  |
|:-----------------------|:----------------------|:---------------------------------------------|
| tapToDismiss           | ``true``              | Close on click                               |
| closeButton            | ``false``             | Show close button                            |
| timeOut                | ``5000``              | Time to live in milliseconds                 |
| extendedTimeOut        | ``1000``              | Time to close after a user hovers over toast |
| disableTimeOut         | ``false``             | Disable both timeOut and extendedTimeOut when set to true. Allows specifying which timeOut to disable, either: timeOut or extendedTimeOut            |
| easing                 | ``'ease-in'``         | Toast component easing                       |
| easeTime               | ``300``               | Time spent easing                            |
| enableHtml             | ``false``             | Allow html in message                        |
| progressBar            | ``false``             | Show progress bar                            |
| progressAnimation      | ``'decreasing'``      | Changes the animation of the progress bar. ``'decreasing' \| 'increasing'`` |
| toastClass             | ``'ngx-toastr'``      | Class on toast                               |
| messageClass           | ``'toast-message'``   | Class inside toast on message bar            |

### Global options

- All individual options can be overridden in the global options to affect all toasts. In addition, global options include the following options:

| Option                 | Default               | Description                                  |
|:-----------------------|:----------------------|:---------------------------------------------|
| maxOpened              | ``0``                 | Max toasts opened. Toasts will be queued. 0 is unlimited |
| autoDismiss            | ``false``             | Dismiss current toast when max is reached    |
| iconClasses            | ``{error: 'toast-error', info: 'toast-info', success: 'toast-success', warning: 'toast-warning'}`` | Classes used on toastr service methods                            |
| newestOnTop            | ``true``              | New toast placement                          |
| preventDuplicates      | ``false``             | Block duplicate messages                     |
| countDuplicates        | ``false``             | Displays a duplicates counter (preventDuplicates must be true). Toast must have a duplicate message |
| resetTimeoutOnDuplicate| ``false``             | Reset toast timeout on duplicate (preventDuplicates must be true) |
| includeTitleDuplicates | ``false``             | Include the title of a toast when checking for duplicates (by default only message is compared) |

#### Setting Global Options

- Pass values to ToastrModule.forRoot()

```ts
// root app NgModule
imports: [
  ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),
],
```

## Functions

- Clear: Remove all or a single toast by optional id.

```ts
toastrService.clear(toastId?: number);
```

- Remove: Remove and destroy a single toast by id.

```ts
toastrService.remove(toastId: number);
```

## Using A Custom Toast

```ts
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      toastComponent: YourToastComponent, // added custom toast!
    }),
  ],
  entryComponents: [YourToastComponent], // add!
  bootstrap: [App],
  declarations: [App, YourToastComponent], // add!
})
class AppModule {}
```

- Create your toast component extending Toast see the demo's pink toast for an example
[https://github.com/scttcper/ngx-toastr/blob/master/src/app/pink.toast.ts](https://github.com/scttcper/ngx-toastr/blob/master/src/app/pink.toast.ts)

## Reference

- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
