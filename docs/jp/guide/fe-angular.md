# Angular

## 一般

1. **検討** ファイルを400LOCに制限する。
1. **検討** 75行を超えないように制限する。
1. カスタム コンポーネントの接頭辞: カスタム コンポーネントに `kairos`という接頭辞を使う。
1. Folders-by-feature 構成: 実現したい機能を表すフォルダ名を作成する。
1. プロジェクトに scssを利用する。
1. パイプにfiltering と sorting ロジックを追加しない。
1. htmlコードとcssが長い（*.tsファイルに管理できない）場合は別のファイルに分離して管理する。
1. `@Component`、 `@Directive` metadataにproperties `inputs` と `outputs`を宣言しないでannotation `@Input`, `@Output` を使用する。
(`@Input`と`@Output`を同じ行に配置するようにする。例） ```js @Output() heroChange = new EventEmitter<any>();```
何か意図がなければalias使用を避けたほうがいいです。
1. Logicはサービスファイルでコーディングしてよいです。presentation logicはcomponentにそのまま入れる。
1. configファイルを使用して環境を設定して良いです。[Using config with multiple environment](https://mokkapps.de/blog/how-to-build-an-angular-app-once-and-deploy-it-to-multiple-environments/)
1. ファイル内のソースコード配置順は次の通りです。
    - Propertiesはファンクションの上に配置する。
    - publicは前、privateは後ろにある。
    - アルファベット通りに配置する。

## 命名規約

推薦するパターンは **`feature.type.ts`**.

- その中、type names including .service, .component, .pipe, .module, and .directive.
名称は新規作成可能ですが、複数作成しないでください。
- モジュール名は複数形にしたほうがいいです。Ex: supplier => suppliers
- クラス名はファイル名と同一で、そのsuffixはComponent, Directive, Module, Pipe, or Serviceにしてよいです。
(但し、Loggerなどの `-er`で終わるサービスもある。)

|      Type       |       Class Name       |      Name       |           File Name           |
| :-------------- | :--------------------- | :-------------- | :---------------------------- |
| Component       | KariosProductComponent | karios-product  | `karios-product.component.ts` |
| Directive       | HighlightDirective     | kariosHighlight | `highlight.directive.ts`      |
| Module          | AppModule              |                 | `app.module.ts`               |
| SuppliersModule | SuppliersRoutingModule |                 | `suppliers-routing.module.ts` |
| Pipe            | InitCapsPipe           | initCaps        | `init-caps.pipe.ts`           |
| Service         | UserProfileService     |                 | `user-profile.service.ts`     |
| Service         | Logger                 |                 | `logger.service.ts`           |

- prefixが`on<EventName>`の`event`はネーミングしないが、prefixが`on<EventName>`の`event handler`はネーミングする。

*しないこと*

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

*すべきこと*

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
        |-- [+] constants                           // プロジェクトのconstants、enumが入る場所
        |-- [+] guards                              // security
        |-- [+] interceptors
        |-- models
            |-- core.interfaces.ts                  // core moduleに使用されるモデル
        |-- services
            |-- auth.service.ts
            |-- config.service.ts
            |-- error.service.ts
            |-- logger.service.ts
            |-- sidebar.service.ts
        |-- [+] transloco
        |-- core.module.ts
        |-- ensureModuleLoadedOnceGuard.ts
    |-- layout                                       // Layout Module：プロジェクトの共通レイアウトが入る。
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
    |-- [+] i18n                                     // 多言語
    |-- [+] images
    |-- [+] js
    |-- scss
        |-- [+] partials
        |-- _base.scss
        |-- styles.scss
|-- [+] environments
```

- アプリのコードはsrcというフォルダ内に全て配置する。
- 業務通りにフォルダを作成する。(One module per feature / view (Lazy Load)). Ex: customer.
- App root module: `app.module.ts`.
- lazy loadedフォルダ―はインポートしないこと
- `material.module.ts`: 材料のモデルを追加して別のモデルに使用する。（再宣言を避けるため）

## RxJS

### angular http clientのRxJsを使用

- map => map data
- mergeMap/flatMap => API Aからデータを取得してAPI Bのパラメータにする場合に使用する。
- switchMap => 最終の結果を取得したい場合に使用する。
- forkJoin => 同時結果を返したい場合に使用する。

<!-- TODO: コーディングの中に理解する。 -->
<!-- ## Angular Components間のデータ共有 -4つのメソッド

### Parent to child component

- Using `@Input`

### Child to parent component

- Using `@Output` and `EventEmitter`
- Using `@ViewChild` with AfterViewInit

### sibling components間のデータ共有

### 関係のないcomponents間のデータ共有

- Service
- RxJS BehaviorSubject

## state管理 -->

## Angular Tips & Tricks

### 1. モジュールにライブラリをインポートする

- routingファイルにすでに存在しているcomponentライブラリを宣言することを避ける。
- routing moduleファイルでstatic array componentを宣言し、moduleファイルにインポートしてcomponentインポートを減らす。

```js
// routing.module.tsファイルで
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

// module.tsファイルで
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

### 2. classの代わりにmodelにインタフェースを使用する。

- 業務ロジックを実装して実行する必要がある場合のみClassを使用する。variable又はパラメータを渡すように連携を作成するために使用する場合はInterfaceを使用する。
- 原因としてcomplierでtypescriptコードからjavascriptに翻訳するため。

classを使用する場合

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

翻訳後

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

interfaceを使用する場合

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

翻訳後

```js
fetch('https://my-api.com').then(function (response) {
    if (response.status == 200) {
        console.log(response.message);
    }
});
```

### 3. Parameter プロパティ

通常通りに下記のコードを書く代わりに

```js
class Human {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

Typescriptで下記のように簡単に書くことができる。

```js
class Human {
    constructor(public name: string) {
        this.name = name;
    }
}
```

## Child form group

子componentから親componentにコントロールを追加する。

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

<!-- TODO: 子form groupから親form groupに追加することについて理解する。

- 子componentから親componentにform groupを追加する。 -->

## 参考

[Reference](https://angular.io/guide/styleguide)
[Typescript Class Interface](https://viblo.asia/p/typescript-class-interface-chung-khac-gi-voi-class-interface-trong-c-java-YWOZryzrKQ0)
