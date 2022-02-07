# 命名規約

> “There are only two hard things in Computer Science: cache invalidation and naming things.”
>
> “コンピューターサイエンスでで本当に難しいことは2つだけ。キャッシュの無効化とネーミングだ。”
>
> — Phil Karlton

*ここではキャッシュの無効化については記述しない*←書けることがあれば記述してください。

## 目的

変数名、ファンクション名、クラス名は機能や目的を端的に表す*必要がある：
存在の理由、何をしたい、どのように利用される。。。などを伝える
名前に説明が必要な場合、その名前は明確にやりたいことを伝達できていないのである。
( dto, domain, entity...などの業務ロジックの変数を説明する日本語のコメントを除く)

## 命名の共通ルール

- 単語は英単語でなければならない (一部は日本語のローマ字可).
- `data`, `processor`, `table`, `info`, `object`, `a`, `an`, `the`などシステムの予約語・それに類する単語は使用しない
- Ex: `ProductInfo`, `ProductData`.
- 意味があり、読みやすい (`HTML`, `DVD`, `Str` for `String`, `Num` for `Number`, `Prop` for `Property`, or `Val` for Value ...などの一般的な語を除き、基本的に変数名は略語を使わない)
- 一般的な略語に対してキャメルケースのルールを適用する。例: `myHtml` not `myHTML`.

|       命名規約       |                   Java                    |                                               Angular                                               |                                       Database (列追加)                                       |
| -------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Lower Camel Case     | variables / methods                       | variable / parameter / function / method / property / module alias / directive selector / pipe name |                                                                                               |
| Upper Camel Case     | classes / interfaces / annotations / enum | class / interface / type / enum / decorator / type parameters                                       |                                                                                               |
| Screaming Snake Case | constants / enum value                    | global constant values, including enum value                                                        |                                                                                               |
| lower dot case       | package / property files                  | file name                                                                                           |                                                                                               |
| kebab case           |                                           | component selector                                                                                  |                                                                                               |
| Snake Case           |                                           |                                                                                                     | table name / View / Materialized View / Sequence / Index / Procedure & Function / column name |

## 変数

**使い捨ての一時変数以外に、一文字のみからなる変数名は使用しない**

- 一般的な一時変数名は `i`, `j`, `k`, `m`, and `n` for integers; `c`, `d` for characters; `e`, `ex` for Exception;
- 使い捨ての一時変数の値は数行のLOCの範囲内のみに使われることを想定する。

**いくつかの変数名は本質的に意味と型を持っているため、追加説明が不要である。**

- String: `name`, `city` or `customer`..
- Integer: `age` or `year`..
- Floating-Point Numbers: `price`, `height`, or `weight`..

### String (文字列)

`year`などのstringという意味がないvariableの場合は下記の変数名にしてよいです。
`**<someValue>String**` or `<someValue>AsString`. Ex: `yearString`.

Ex:

```java
int year = 2020;
String yearString = "2020";
```

### Number (Integer vs Floating-Point Numbers) (数値)

- 数値という意味がある変数のほかに下記の規則もある。
  - ～数：`numberOf<something>` (Ex: numberOfFailures).
  - 件数：`<something>Count` (Ex: customerCount).
  - 合計：`total<something>` or `sum<something>` (Ex: `totalProduct`).
  - 総額、総計、総量：`<something>Amount` (Ex: moneyAmount).
  - 上記以外の特別な場合もあるかもしれない。
    - ✕：`tooltipShowDelay`
    - 〇：`tooltipShowDelayInMillisecs`（変数名に意味がある）

### Boolean (真偽)

- Boolean 変数は最初に `is`と付ける必要がある。
- 場合によってより良い接頭辞（prefix）がある。例 `has`, `can`, `allows`, `does`, `did`, `will` and `should` prefixes.
  - is + 形容詞：形容詞の状態であるかを尋ねる。ex) isEnabled
  - has + 過去分詞：動詞の状態となったかを尋ねる。ex) hasSent
  - 3単現動詞 + 名詞：動詞の状態に名詞があるかを尋ねる。名詞が明確な場合は、省略できる。ex) hasError
  - 助動詞 + 動詞：可能かどうかや、するべきかどうかを尋ねる。
ex) canRemoveItems
ex) shouldContinue

Example: `isVisible`, `isFinished`, `hasLicense`, `canEvaluate`, `shouldAbort`, `allowsWhitespace`, `didUpdate`, `willUpdate`.

### Arrays, Lists, and Sets (配列)

- 複数形の語で命名する。 Ex: Customers, Suppliers
- 変数名に実行したいことを記述する。例: queueOfTasks, stackOfCards, or orderedSetOfTimestamp

### Map (マップ)

> マップはキーと値が対になったデータ構造です。キーの重複は許可されていません。格納できるデータは参照型のみになります。

- ルール: `keyToValueMap`. Ex: customerToCustomerName

### Enums (列挙型)

- Upper CamelcaseでEnum 名を指定する。
- Enums変数はアンダーバー`_`で区切する大文字の語からなる。

### Constants, Enum value (定数、列挙子)

- アンダーバー`_`で区切する大文字の語からなる。

```java:no-line-numbers
// 注文伝票の商品最大
public static final int MAX_LENGTH_ORDER_QUANTITY = 5;

public static final String PDF_EXTENSION = ".pdf";
```

### Optional (Java)

> Optionalは何かの値を包み込むクラスであり、同時に「値はnullかもしれないよ、気を付けて!」と伝えるためのクラスです。
> Optionalはメソッドの戻り値で使われるのが普通ですが、nullかもしれない値に何か処理をしたい時にも便利に使えます。

- `optional<Something>`. Ex: optionalCustomer, optionalSupplier.
- `possible<Something>` is accepted too. Ex: couldLoggedInUser, maybeSupplier.

## Classes , Interfaces (クラス、インターフェース名)

Class名は名詞であり、1語として続く単語の先頭の文字は大文字である。
Class名はシンプルで、意味を持っている
略語やアクロニム使用しない( URL or HTMLなどアクロニム(頭字語)の方が普及する語を除く).

## Enum (列挙型、列挙子)

- Enum 名: は名詞であり、1語として続く単語の先頭の文字は大文字である。
- Enum 値: アンダーバー`_`で区切する大文字の語からなる。

```java
public enum SystemName {
    USER_MANAGEMENT("UMP", "USER MANAGEMENT SYSTEM", "ユーザー管理システム")
    , MATERIAL_MANAGEMENT("MMSYS", "MATERIAL MANAGEMENT SYSTEM", "材料管理システム")
    , MATER_MANAGEMENT("MTM", "MATERIAL MANAGEMENT SYSTEM", "材料管理システム")
    ;
    // ...
}
```

## Methods - Functions (メソッド、関数)

- 動詞の語から始まる。
- 最初の文字は小文字である。
- a map, a list...などを取得する場合は複数形の語を用いる。
- `and` 又は `or` などの接続詞を使わない(JPA repositoryを除く).

| Function |  Method 名   |        Notes        |
| -------- | -------------- | ------------------- |
| List     | listCustomers  | get customer list   |
| Get      | getCustomer    | get one Customer    |
| Create   | createCustomer | create one customer |
| Save     | saveCustomer   | save one customer   |
| Update   | updateCustomer | update one customer |
| Delete   | deleteCustomer | delete one customer |

## Package (パッケージ)

特定のPackage名の接頭語は小文字のASCII文字で、com, edu, gov, mil, net, orgなどトップレベルのドメイン名、又は ISO Standard 3166, 1981で定義される2文字の国名コードであるべき。
Package名の続く語は機関内の命名規約に従うことによって様々な形がある。その規約はdivision, department, project, machine, or login namesを特定することがある。

## 参考

- [Oracle Naming Conventions](https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html)
- [NUS Computing's Java Coding Standard](https://www.comp.nus.edu.sg/~cs2103/AY1617S1/contents/coding-standards-java.html)
- [Useful Tips for Naming Your Variables](https://betterprogramming.pub/useful-tips-for-naming-your-variables-8139cc8d44b5)
