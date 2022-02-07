# コメント規約

**必要に応じてコメントする。**
> “Code never lies, comments sometimes do.”
>
> -- <cite>Benjamin Franklin</cite>

## コードの説明は不要

- すでにコードで表現されている場合にはコメントする必要がない。

```java
i = i + 1; // index plus 1
String firstName; // Declare first name variable
```

- 明確にコードできる場合にはコメントする必要がない。

```java
int d; // elapsed time in days

/** Get customer name */
private String getName() {
    //...
}
```

should be:

```java
int elapsedTimeInDays;

private String getCustomerName() {
    //...
}
```

- コードを理解できる情報が不足しているコメント
  - Constructor
  - その意味を示す機能名

```java
public DefectiveProductDto getDefectiveProduct(String defectiveProductNo) {
    return defectiveProductRepository.getByDefectiveProductNo(defectiveProductNo);
}
```

- 明確にコメントが書けない場合は、コードに問題あるかもしれない
- 誤認識を避けるようにソースコードを明確にするコメント

## コメントが必要

### コメントが必要

- models, domain, dto...での業務プロパティー
- regex `"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"`などの（解読しないで）"即時"情報を提供する。

```java
// Minimum eight characters, at least one letter and one number
private static final String PASSWORD_REGEX = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

// Get string after first space
str.substr(str.indexOf(' ') + 1);

/** 仕入先コード */
private int supplierCode;
```

### 参照情報

- ソースコードのコピー元への連携や参考資料を提供する。

```java
/** Converts a Drawable to Bitmap. via https://stackoverflow.com/a/46018816/2219998. */

// Many thanks to Chris Veness at http://www.movable-type.co.uk/scripts/latlong.html for a great reference and examples.

// http://tools.ietf.org/html/rfc4180 suggests that CSV lines should be terminated by CRLF, hence the \r\n.
```

### source codeのコメントアウト

- 理由があるときにその理由を説明する

```java
// NOTE：Issue PCS-123ではこの機能を展開するかどうか検討しています。
// public exportProductionsReport() {
//    // code here
// }
```

### マーカー Marker

- 未完成の実装をマークするためにコメントを加える (TODO, FIXME ...).

| Marker |                                                            Notes                                                            |
| :----- | :-------------------------------------------------------------------------------------------------------------------------- |
| TODO:  | 未着手または未調査の内容：問題はありませんが、通常は何かをスキップするときに追加のコードを書く必要があります。No problem, but additional code needs to be written, usually when you are skipping something.     |
| FIXME: | 下手なコードがある：これは一応機能しますが、もっとうまくできるはずです。(通常は急いで書いたコードで、書き直しが必要) This works, sort of, but it could be done better. (usually code written in a hurry that needs rewriting)  |
| NOTE:  | コードがどのように動作するかの説明（自明でない場合）。Description of how the code works (when it isn't self evident).                                                             |
| HACK:  | 不適切なコード：問題/バグを回避するための、あまりよく書かれていない、または不正なコード。Not very well written or malformed code to circumvent a problem/bug .|
| BUG:   | バグ：ここに問題があります。There is a problem here (Bug)                                                                                               |
| XXX:   | 要注意!：落とし穴の可能性についての警告。Warning about possible pitfalls                                                                                   |

```java
   public  updateInventoryMovingAverage() {
      // TODO：#1234 在庫管理法（移動平均法）の仕様確定後実装
   }
```

## 参考

[Reference](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/)
