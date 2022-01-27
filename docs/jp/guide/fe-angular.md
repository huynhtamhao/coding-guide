# Angular

## General

1. **Consider** limiting files to 400 lines of code
1. **Consider** limiting to no more than 75 lines
1. Prefix custom component: Use `karios` prefix stand for custom component, directive of Karios project.
1. Folders-by-feature structure: Do create folders named for the feature area they represent.
1. Use scss in project.
1. Do not add filtering and sorting logic to pipes.
1. Thực hiện tách html code vs css ra file riêng nếu quá dài (không thể để trong file *.ts)
1. Sử dụng annotation `@Input`, `@Output` thay vì khai báo properties `inputs` và `outputs` trong `@Component`, `@Directive` metadata.
(Xem xet cho `@Input` và `@Output` trên cùng 1 dòng code. Ex: ```js @Output() heroChange = new EventEmitter<any>();```
Ngoài ra cũng tránh alias nếu nó không có gì đặc biệt.).
1. Logic nên được coding trong file service, presentation logic thì vẫn để trong component.
1. Nên sử dụng config file để  xây dựng môi trường vì nó thuận tiện nhất. [Using config with multiple environment](https://mokkapps.de/blog/how-to-build-an-angular-app-once-and-deploy-it-to-multiple-environments/)
1. Thứ tự đặt source code trong 1 file
    - Properties nằm trên function.
    - public trước, private sau.
    - Nên xếp theo bảng chữ cái.

## Naming Conventions

Recommended pattern is **`feature.type.ts`**.

- Trong đó type names including .service, .component, .pipe, .module, and .directive.
Có thể tạo thêm tên mới nhưng đừng nên quá nhiều.
- Tên Module nên ở số nhiều. Ex: supplier => suppliers
- Tên class nên trùng với file name và có suffix là Component, Directive, Module, Pipe, or Service
(Tuy nhiên một số service có thể  có kết thúc bằng `-er` như là Logger).

|      Type       |       Class Name       |      Name       |           File Name           |
| :-------------- | :--------------------- | :-------------- | :---------------------------- |
| Component       | KariosProductComponent | karios-product  | `karios-product.component.ts` |
| Directive       | HighlightDirective     | kariosHighlight | `highlight.directive.ts`      |
| Module          | AppModule              |                 | `app.module.ts`               |
| SuppliersModule | SuppliersRoutingModule |                 | `suppliers-routing.module.ts` |
| Pipe            | InitCapsPipe           | initCaps        | `init-caps.pipe.ts`           |
| Service         | UserProfileService     |                 | `user-profile.service.ts`     |
| Service         | Logger                 |                 | `logger.service.ts`           |

- Không đặt tên cho `event` có prefix là `on<EventName>` mà hãy đặt tên cho `event handler` với prefix là `on<EventName>`.

*Don't*

:::: code-group
::: code-group-item app/heroes/hero.component.ts

```js
@Component({
  selector: 'toh-hero',
  template: `...`
})
export class HeroComponent {
  @Output() onSavedTheDay = new EventEmitter<boolean>();
}
```

:::
::: code-group-item app/app.component.html

```html
<toh-hero (onSavedTheDay)="onSavedTheDay($event)"></toh-hero>
```

:::
::::

*Do*

:::: code-group
::: code-group-item app/heroes/hero.component.ts

```js
export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}
```

:::
::: code-group-item app/app.component.html

```html
<toh-hero (savedTheDay)="onSavedTheDay($event)"></toh-hero>
```

:::
::::

## Application Structure

```text
|-- app
    |-- customer                                    // Feature module
        |-- [+] components
        |-- [+] pages
        |-- customer-routing.module.ts
        |-- customer.module.ts
    |-- core                                        // Core Module
        |-- [+] constants                           // Nơi chứa constants và enum của project
        |-- [+] guards                              // security
        |-- [+] interceptors
        |-- models
            |-- core.interfaces.ts                  // model sử dụng cho core module
        |-- services
            |-- auth.service.ts
            |-- config.service.ts
            |-- error.service.ts
            |-- logger.service.ts
            |-- sidebar.service.ts
        |-- [+] transloco
        |-- core.module.ts
        |-- ensureModuleLoadedOnceGuard.ts
    |-- layout                                       // Layout Module: chứa common layout của project
        |-- [+] authentication
        |-- [+] dashboard
        |-- [+] footer
        |-- [+] header
        |-- [+] main-layout
        |-- [+] sidebar
        |-- layout.module.ts
    |-- shared                                       // Shared Module
        |-- [+] components
        |-- [+] directives
        |-- [+] errors
        |-- [+] pipes
        |-- [+] models
        |-- material.module.ts
        |-- shared.module.ts
    |-- app-routing.module.ts
    |-- app.module.ts
|-- assets
    |-- [+] configs
    |-- [+] fonts
    |-- [+] i18n                                     // Đa ngôn ngữ
    |-- [+] images
    |-- [+] js
    |-- scss
        |-- [+] partials
        |-- _base.scss
        |-- styles.scss
|-- [+] environments
```

- Đặt tất cả mã của ứng dụng vào một thư mục có tên src.
- Tạo thư mục theo nghiệp vụ (One module per feature / view (Lazy Load)). Ex: customer.
- App root module: `app.module.ts`.
- Never directly import lazy loaded folders
- `material.module.ts`: add các module của material để sử dụng tai các module khác tránh khai báo lại.

## RxJS

### Sử dụng RxJs với angular http client

- map => map data
- mergeMap/flatMap => sử dụng khi get data từ API A sau đó làm param cho API B
- switchMap => sử  dụng khi muốn lấy kq cuối cùng.
- forkJoin => sử dụng khi muốn trả két quả đồng thời.

<!-- TODO: Tìm hiểu trong lúc coding -->
<!-- ## Sharing Data between Angular Components - Four Methods

### Parent to child component

- Using `@Input`

### Child to parent component

- Using `@Output` and `EventEmitter`
- Using `@ViewChild` with AfterViewInit

### Sharing data between sibling components

### Sharing data between not related components

- Service
- RxJS BehaviorSubject

## Quản lý state -->

## Angular Tips & Tricks

### 1. Import library in module

- Tránh khai báo thư viện component mà đã tồn tại tại file routing
- Khai báo static array component tại file routing module và import vào filde module để giảm import component.

```js
// Tại file routing.module.ts
import { SalaryComponent } from './salary/salary.component';
import { SalaryPasswordDialogComponent } from './salary/salary-password-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: 'salary', pathMatch: 'full' },
  { path: 'salary', component: SalaryComponent },
];
// ....
export class UserRoutingModule {
  static components = [
    SalaryComponent,
    SalaryPasswordDialogComponent,
  ]
}

// Tại file module.ts
@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [
    UserRoutingModule.components,
  ],
  // ...
})
export class UserModule { }
```

### 2. Sử dụng interface cho model thay cho class

- Chỉ sử dụng Class khi ta có logic nghiệp vụ thực sự cần được implement để thực thi. Ngược lại, nếu chỉ dùng nó để tạo 1 ràng buộc kiểu cho params hay variable, ta nên dùng Interface
- Nguyên nhân là do complier biên dịch từ code typescript sang javascript.

Trường hợp sử dụng class:

```js
class Response {
    status: number;            // 200, 401, 404 ...
    message: string;
}

fetch('https://my-api.com').then((response: Response) => {
    if (response.status == 200) {
        console.log(response.message);
    }
});
```

Sau khi biên dịch

```js
var Response = (function() {
    function Response() {
    }
    return Response;
})();

fetch('https://my-api.com').then(function (response) {
    if (response.status == 200) {
        console.log(response.message);
    }
});
```

Trường hợp thay bằng interface

```js
interface Response {
    status: number;            // 200, 401, 404 ...
    message: string;
}

fetch('https://my-api.com').then((response: Response) => {
    if (response.status == 200) {
        console.log(response.message);
    }
});
```

Sau khi biên dịch

```js
fetch('https://my-api.com').then(function (response) {
    if (response.status == 200) {
        console.log(response.message);
    }
});
```

### 3. Parameter property

Thay vì viết code như bên dưới (cách thường thấy)

```js
class Human {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

Typescript cho phép viết tắt như sau

```js
class Human {
    constructor(public name: string) {
        this.name = name;
    }
}
```

## Child form group

Add control từ component con cho component cha

**Child Component**

```js
@Component({
  selector: 'app-listening-test-answer',
  template: `
    // ...
    <div fxLayout="column" [fxFlex]="customFxFlex[2]" fxLayoutAlign="start center">
      <mat-form-field appearance="outline" style="margin-bottom: -1.25em; width: 100%;">
        <input [formControlName]="controlName" maxlength="25" matInput>
      </mat-form-field>
    </div>
  `
})
export class ListeningTestAnswerComponent implements OnInit {
  // ...
  @Input() controlName: string;
  constructor() { }
  ngOnInit(): void {
    this.parentForm.addControl(this.controlName, new FormControl({value: '', disabled: this.isDisabled}));
  }
}
```

**Parent Component**

```html
<form [formGroup]="formGroup">
  <app-listening-test-answer title="問１" [parentForm]="formGroup" controlName="answer1"></app-listening-test-answer>
  <app-listening-test-answer title="問２" [parentForm]="formGroup" controlName="answer2"></app-listening-test-answer>
  <app-listening-test-answer title="問３" [parentForm]="formGroup" controlName="answer3"></app-listening-test-answer>
  <app-listening-test-answer title="問４" [parentForm]="formGroup" controlName="answer4"></app-listening-test-answer>
  <app-listening-test-answer title="問５" [parentForm]="formGroup" controlName="answer5"></app-listening-test-answer>
</form>
```

<!-- TODO: Tìm hiểu thêm add form group con cho form group cha

- Add form group từ component con cho component cha -->

## Reference

[Reference](https://angular.io/guide/styleguide)
[Typescript Class Interface](https://viblo.asia/p/typescript-class-interface-chung-khac-gi-voi-class-interface-trong-c-java-YWOZryzrKQ0)
