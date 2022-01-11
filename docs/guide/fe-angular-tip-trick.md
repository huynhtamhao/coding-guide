# Angular Tips & Tricks

## 1. Import library in module

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

# 2. Sử dụng interface cho model thay cho class

- Chỉ sử dụng Class khi ta có logic nghiệp vụ thực sự cần được implement để thực thi. Ngược lại, nếu chỉ dùng nó để tạo 1 ràng buộc kiểu cho params hay variable, ta nên dùng Interface
- Nguyên nhân là do complier biên dịch từ code typescript sang javascript.

Trường hợp sử dụng class:

```js
class Resposne {
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
interface Resposne {
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

## 3. Parameter property

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

## 4. Sử dụng Config File (json file)

Nên sử dụng config file để  xây dựng môi trường vì nó thuận tiện nhất.

[Using config with multiple environment](https://mokkapps.de/blog/how-to-build-an-angular-app-once-and-deploy-it-to-multiple-environments/)

## 5. Child form group

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

**Parrent Component**

```html
<form [formGroup]="formGroup">
  <app-listening-test-answer title="問１" [parentForm]="formGroup" controlName="answer1"></app-listening-test-answer>
  <app-listening-test-answer title="問２" [parentForm]="formGroup" controlName="answer2"></app-listening-test-answer>
  <app-listening-test-answer title="問３" [parentForm]="formGroup" controlName="answer3"></app-listening-test-answer>
  <app-listening-test-answer title="問４" [parentForm]="formGroup" controlName="answer4"></app-listening-test-answer>
  <app-listening-test-answer title="問５" [parentForm]="formGroup" controlName="answer5"></app-listening-test-answer>
</form>
```

TODO: Tìm hiểu thêm add form group con cho form group cha

- Add form group từ component con cho component cha

## 6. Next

## 7. Next

## Reference

[Typescript Class Interface](https://viblo.asia/p/typescript-class-interface-chung-khac-gi-voi-class-interface-trong-c-java-YWOZryzrKQ0)