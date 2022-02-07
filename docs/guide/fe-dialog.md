# MatDialog in Angular

## Introduction

<img src="~@assets/images/dialog/dialog-elements.jpg"><img/>

- The MatDialog service can be used to open modal dialogs with Material Design styling and animations.

- A dialog is opened by calling the open method with a component to be loaded and an optional config object. The open method will return an instance of ``MatDialogRef``:

```ts
let dialogRef = dialog.open(UserProfileComponent, {
  height: '400px',
  width: '600px',
});
```

## Install Angular Material

- Use the Angular CLI's installation schematic to set up your Angular Material project by running the following command.

``ng add @angular/material``

## Dialog content

- Several directives are available to make it easier to structure your dialog content:

| Name                     | Description                                                          |
|:-------------------------|:---------------------------------------------------------------------|
| ``mat-dialog-title``     | [Attr] Dialog title, applied to a heading element (e.g., ``<h1>, <h2>``)|
| ``<mat-dialog-content>`` | Primary scrollable content of the dialog. |
| ``<mat-dialog-actions>`` | Container for action buttons at the bottom of the dialog. Button alignment can be controlled via the align attribute which can be set to end and center. |
| ``mat-dialog-close``     | [Attr] Added to a ``<button>``, makes the button close the dialog with an optional result from the bound value. |

- For example:

```html
<h2 mat-dialog-title>Delete all elements?</h2>
<mat-dialog-content>This will delete all elements that are currently on this page and cannot be undone.</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>Cancel</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-button [mat-dialog-close]="true">Delete</button>
</mat-dialog-actions>
```

- Once a dialog opens, the dialog will automatically focus the first tabbable element. You can control which elements are tab stops with the tabindex attribute

```html
<button mat-button tabindex="-1">Not Tabbable</button>
```

## Specifying global configuration defaults

- Default dialog options can be specified by providing an instance of MatDialogConfig for MAT_DIALOG_DEFAULT_OPTIONS in your application's root module.

```ts
@NgModule({
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
```

## Add Component Dialog

:::: code-group
::: code-group-item confirm-dialog.component.ts

```ts
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }
}
```

:::
::: code-group-item confirm-dialog.module.ts

```ts
@NgModule({
  declarations: [
    ConfirmDialogComponent,
  ],
  imports: [
    MatDialogModule,
    CommonModule,
  ],
  exports: [
    ConfirmDialogComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class ComponentDialogModule { }
```

:::
::: code-group-item app.module.ts

```ts
@NgModule({
  imports: [
    // .....
    ComponentDialogModule
  ],
  exports: [
    ComponentDialogModule,
  ]
})
```

:::
::::

## Sharing data with the Dialog component

- If you want to share data with your dialog, you can use the data option to pass information to the dialog component.

```ts
let dialogRef = dialog.open(YourDialog, {
  data: { name: 'austin' },
});
```

- To access the data in your dialog component, you have to use the MAT_DIALOG_DATA injection token:

```ts
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'your-dialog',
  template: 'passed in {{ data.name }}',
})
export class YourDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
}
```

## MatDialogRef

- The MatDialogRef provides a handle on the opened dialog. It can be used to close the dialog and to receive notifications when the dialog has been closed. Any notification Observables will complete when the dialog closes.

```ts
dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`); // Pizza!
});

dialogRef.close('Pizza!');
```

- Components created via MatDialog can inject MatDialogRef and use it to close the dialog in which they are contained. When closing, an optional result value can be provided. This result value is forwarded as the result of the afterClosed Observable.

```ts
@Component({/* ... */})
export class YourDialog {
  constructor(public dialogRef: MatDialogRef<YourDialog>) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
```

## Use Common Dialog

<img src="~@assets/images/dialog/common-dialog.jpg"><img/>

### Model

```ts
export class DialogData {
  title: string | undefined;
  messageCode: string | undefined;
  messageContent: string | undefined;
  messageType: string | undefined;
  buttonActions = {
    leftButton: '',
    rightButton: 'OK'
  };
}
```

| Name                           | Description                                      |
|:-------------------------------|:-------------------------------------------------|
| title: ``string``              | Dialog title. |
| messageCode: ``string``        | Message code error. Example: ``0x800A138F``. when setting ``messageCode``, will get message from system. |
| messageContent: ``string``     | When not setting ``messageCode``, will display message from ``messageContent``. |
| messageType: ``string``        | Show icon message content. |
| leftButton: ``string``         | Name of left button. If not setting, it won't show. |
| rightButton: ``string``        | Name of right button. If not setting, it won't show. |

### Open Dialog

- Use DialogUtilsService.

```ts
constructor(
  private dialogUtils: DialogUtilsService,
) { }
```

- Open default dialog

```ts
const dialogRef = this.dialogUtils.openDialogConfirmDelete();
```

| Name                           | Description                                      |
|:-------------------------------|:-------------------------------------------------|
| openDialogSuccessRegistry()    | Registry success. |
| openDialogSuccessUpdate()      | Update Success.   |
| openDialogErrorRegistry()      | Registry error.   |
| openDialogErrorUpdate()        | Update error.     |
| openDialogConfirmDelete()      | Confirm delete.   |

- Open dialog setting data.

```ts
// ...setting dialogData
const dialogData = new DialogData();
dialogData.title = '登録';
dialogData.messageCode = '登録が完了しました。';

// open dialog
const dialogRef = this.dialogUtils.openDialog(dialogData);
dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  if (confirmed) {
    // action after closed dialog
  }
});
```

- Change position dialog.

```ts
// { top, right, bottom, left } (px or %)
this.dialogUtils.changePosition({ top: '10%', left: '30%' });
```

- Custom dialog.

```ts
// MatDialogConfig
this.dialogUtils.newDialogConfig();
this.dialogUtils.dialogConfig.width = '350px';
this.dialogUtils.dialogConfig.minWidth = '250px';
this.dialogUtils.dialogConfig.maxWidth = '350px';
this.dialogUtils.dialogConfig.panelClass = ['mat-elevation-z8', 'mat-dialog-custom'];
this.dialogUtils.dialogConfig.data = dialogData;
// open dialog
const dialogRef = this.dialogUtils.openDialogCustom();
```

### MatDialogConfig

| Name                           | Description                                      |
|:-------------------------------|:-------------------------------------------------|
| id: ``string``                 | ID for the dialog. If omitted, a unique one will be generated. |
| role: ``DialogRole``           | The ARIA role of the dialog element. |
| width: ``string``              | Width of the dialog.                             |
| height: ``string``             | Height of the dialog.                            |
| maxHeight: ``number \| string``| Max-height of the dialog. If a number is provided, assumes pixel units. |
| minHeight: ``number \| string``| Min-height of the dialog. If a number is provided, assumes pixel units. |
| maxWidth: ``number \| string`` | Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. |
| minWidth: ``number \| string`` | Min-width of the dialog. If a number is provided, assumes pixel units. |
| panelClass: ``string \| string[]`` | Custom class for the overlay pane. |
| hasBackdrop: ``boolean``       | Whether the dialog has a backdrop. |
| backdropClass: ``string \| string[]`` | Custom class for the backdrop. |
| disableClose: ``boolean``      | Whether the user can use escape or clicking on the backdrop to close the modal. |
| position: ``DialogPosition``   | Position overrides. |
| data: ``Data \| null``         | Data being injected into the child component. |
| direction: ``Direction``       | Layout direction for the dialog's content. |
| ariaDescribedBy: ``string \| null`` | ID of the element that describes the dialog. |
| ariaLabelledBy: ``string \| null`` | ID of the element that labels the dialog. |
| ariaLabel: ``string \| null``  | Aria label to assign to the dialog element. |
| autoFocus: ``boolean``         | Whether the dialog should focus the first focusable element on open. |
| restoreFocus: ``boolean``      | Whether the dialog should restore focus to the previously-focused element, after it's closed. |
| scrollStrategy: ``ScrollStrategy`` | Scroll strategy to be used for the dialog. |
| viewContainerRef: ``ViewContainerRef`` | Where the attached component should live in Angular's logical component tree. This affects what is available for injection and the change detection order for the component instantiated inside of the dialog. This does not affect where the dialog content will be rendered. |
| closeOnNavigation: ``boolean`` | Whether the dialog should close when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the `HashLocationStrategy`). |
| componentFactoryResolver: ``ComponentFactoryResolver`` | Whether the dialog should focus the first focusable element on open. |

- Customize which element receives focus with the ``autoFocus`` property of MatDialogConfig, which supports the following values.

| Value                 | Description                                      |
|:----------------------|:-------------------------------------------------|
| ``first-tabbable``    | Focus the first tabbable element. This is the default setting. |
| ``first-header``      | Focus the first header element (role="heading", h1 through h6) |
| ``dialog``            | Focus the root role="dialog" element. |
| Any CSS selector      | Focus the first element matching the given selector. |

- Valid ARIA roles for a dialog element.

```ts
export declare type DialogRole = 'dialog' | 'alertdialog';
```

- Possible overrides for a dialog's position.

```ts
export interface DialogPosition {
    /** Override for the dialog's top position. */
    top?: string;
    /** Override for the dialog's bottom position. */
    bottom?: string;
    /** Override for the dialog's left position. */
    left?: string;
    /** Override for the dialog's right position. */
    right?: string;
}
```

## Reference

- [MatDialog](https://material.angular.io/components/dialog/overview)
