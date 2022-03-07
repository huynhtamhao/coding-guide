# Java

## Code style

- google styleを利用する
- Intellij: <a href="~@assets/styleguides/intellij-java-fanatic-style.xml" download>Fanatic IntelliJ Style Guide</a> based on [intellij-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)
- Eclipse: <a href="~@assets/styleguides/eclipse-java-fanatic-style.xml" download>Fanatic Eclipse Style Guide</a> based on [eclipse-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/eclipse-java-google-style.xml)

### Import Rules

- 必要なClassのみをインポートする。 import *はしないこと。

:::: code-group
::: code-group-item CODE

```java
import jp.co.fanatic.service.dto.InquiryContentDto;
import jp.co.fanatic.service.dto.InquiryNoDto;
import jp.co.fanatic.service.dto.InquirySearchConditionDto;
```

:::
::: code-group-item AVOID

```java
import jp.co.fanatic.service.dto.*; // ✕ AVOID!
```

:::
::::

## Mapping Rules

- マッピングのために [MapStruct](https://mapstruct.org/documentation/dev/reference/html/) を利用する。
- ファイル名の最後に **Mapper**を付けるべき。例： `ProductMapper.java`.
- 利用するMapping Method 名は `to`から始まる:
  - toEntity
  - toDto
  - toListEntity
  - toListDto
  - 上記の４パターン以外は要相談.vi
- コメントについて
  - methodにコメントは不要.
  - Class comment: `「日本語名」マッパー`

```java
/**
 * 商品マッパー
 */
 @Mapper()
public interface ProductMapper {

    Product toEntity(ProductDto productDto);

    ProductDto toDto(Product product);

    List<Product> toListEntity(List<ProductDto> productsDto);

    List<ProductDto> toListDto(List<Product> products);
}
```

- 他のオブジェクトからマッピング (source to target)する場合はmapper methodはtarget fileで配置する。

```java
@Mapper()
public interface ProductMapper {
    // ...
    ProductDto toDto(SupplierProductDto supplierProductDto);
}
```

- 特別のケースで、mapper ファイルを別途に作成が可能である。

```java
@Mapper()
public interface CustomerProductMapper {

  CustomerProductDto toDto(Customer customer, Product product);
}
```

## Coding Best Practice

### Entity, Dto

- DTO作成時に使うAnnotation

```java
@Data
public class ItemDto {

}
```

- Entity作成時に使うAnnotation

```java
@Entity
@Table(name = "GENERAL_TEST_RESULT")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder(toBuilder = true)
public class ProductBasicMaster extends CommonEntity {

}
```

### DateTime

- java.time (>= jdk8)を使う, Calendarは使わない

### Statements

- 三項演算子が使える。

```java
return x > y ? true : false;
```

### If-else 文

- 単一のif文ならカッコ　{} を記述しなくて良い。1行ですべて記述して良い。

```java
if (condition) statement;
```

- if 文を空にして else文を実行するはNG

```java
if (condition) {
    // no statements;
} else {
    statements;
}
```

- if-else条件が多いときは switch caseの利用を勧める。

### Boolean vs boolean

`Boolean` はnull値が可能が、 `boolean`はnull値が不可

```java
Boolean a;
boolean b;

if (a1) => OK

// Boolean variables are explicitly compared to true in order to avoid an ugly null check
if (b == true) // => OK
if (b != null && b) // NG
```

### Var

- Java 10 では `var` タグを使って変数宣言ができる。
- 変数を初期化するときにのみに使うべき

```java
var customer = new Customer(); // OK

var ratio = foo.calculateRatio(); // DO NOT
int ratio = foo.calculateRatio(); // SHOULD
```

## Utility classes

### Interface instead

- Java 8 は通常"utility class"の代わる"utility interface"をサポートできる (private constructorを除去する目的)：

:::: code-group
::: code-group-item Interface

```java
public interface Math {
    public static double sin(double a) { /**/}
}
```

:::
::: code-group-item Utility classes

```java
public final class Math {

    private Math() {}

    public static double sin(double a) { /**/}
}
```

:::
::::

### Utility

- 末尾: Utils, Validator, Formatter, Creator, Sender, Generator, Helper ...
- 複数個所で利用したい共通のコードの固まりがあった場合、utils classが作れる。
- utility classesにコメント追加すべき
- Utils classの利点:
  - Utils class はソースコードの流用で便利である。
- Utils classの欠点:
  - きちんと考慮しないと、原則を破る可能性がある。
  - Static methodはより長い期間にメモリに存在する。
- **数多くの箇所に再利用するコードのみにUtility classesを使う**
- **Utilsの作成だけより、適切な末尾を作成した方が良い**
EmailUtils作成の代わりに、子機能に分けて EmailValidator, EmailFormatter, EmailCreator, EmailSender...などのファイルを作成する。

### 作成方法

- `Utils`末尾でClassを作成する
- Classのconstructor をprivateにする。
- methods/functionsをstaticで公開する。

```java
/**
 * Class process file
 */
public class ExcelFileUtils {

    private ExcelFileUtils () { }

    /**
     * 公開する
     * @param path
     * @return
     */
    public static File openFile(String path){
        // ...
    }
    public static File readFile(String path){
        // ...
    }
}
```

## Enum

### Conventions

- Value プロパティーは privateであるべき、public methodで情報送受信する。

```java:no-line-numbers
private final String value;
public String getValue() {
    return this.value;
}
```

- valueでenum を返すためのfind ファンクションが必要：

```java:no-line-numbers
public static CURRENCY_CD find(String val) {
    return Arrays.stream(CURRENCY_CD.values())
        .filter(e -> e.getValue().equals(val)).findFirst()
        .orElseThrow(() -> new IllegalStateException(String.format("Unsupported type %s.", val)));
}
```

- 特別な場合は、コードを先に配置すべき

```java:no-line-numbers
WH1300_SHIPPING_WAITING_WAREHOUSE("WH1300") // 出荷待倉庫
WS9001_SUPPLIER_RETURN_WAITING("WS9001") // 仕入先保管 返送待ち
WS9002_SUPPLIER_WITHOUT_RETURN("WS9002") // 仕入先保管 返却予定なし
```

### Avoid

- 意味のない enum が避けたい

```java:no-line-numbers
public enum INVENTORY_STATUS {

    INVENTORY_STATUS_1("1")   // ×
    , INVENTORY_STATUS_2("2") // △
    // ....
}
```

### Example

- １つのプロパティーがある場合：

```java
public enum CURRENCY_CD {
    JAPAN("JPY")     // 日本
    , USA("USD")     // アメリカ
    , VIETNAM("VND") // ベトナム
    ;

    private final String value;

    CURRENCY_CD(String value) {
        this.value = value;
    }

    public String getValue() {
        return this.value;
    }

    public static CURRENCY_CD find(String val) {
        return Arrays.stream(CURRENCY_CD.values())
            .filter(e -> e.getValue().equals(val)).findFirst()
            .orElseThrow(() -> new IllegalStateException(String.format("Unsupported type %s.", val)));
    }
}
```

- プロパティーが複数ある場合：

```java
public enum WAREHOUSE {

    WH11_LOCAL_STORAGE("11", "社内保管場所")
    , WH12_SUPPLIER_STORAGE("12", "仕入先保管場所")
    ;
    private final String value;
    private final String label;

    STORAGE_LOCATION_CLASS(String value, String label) {
        this.value = value;
        this.label = label;
    }

    public String getValue() {
        return this.value;
    }

    public String getLabel() {
        return this.label;
    }
}
```

## 参考

- [Code Conventions for the Java Programming Language (Oracle)](https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html)
- [Helper class (Wikipedia)](https://en.wikipedia.org/wiki/Helper_class)

<!-- ## Utils

- Utils (XUtils)末尾のクラス名はユーティリティのクラスである。
- staticで宣言する
- 任意の場所（他のプロジェクトも可能）に再利用することが多い小さい機能が備わる。

```java
public class XUtils
{
    private XUtils() {}

    // static functions
    public static String meowPrepend(String text) {
        return "Meow meow " + text + "!";
    }

    public static String woofPrepend(String text) {
        return "Woof woof " + text + "!";
    }
}
```

## Helper

- Helper (XHelper) 末尾のクラスもユーティリティのクラスである。
- サポートやいくつの機能を提供する。
- Classはmethod を生成できる。extend methodが可能ですが、Static methodを持つとは限らない。　
- 又は、業務機能のいくつを実装するのみに使う (現行プロジェクトで使うだけ)。

```java
public class TextHelper {
    String text;

    public String meowPrepend() {
        return "Meow meow " + text + "!";
    }

    public String woofPrepend() {
        return "Woof woof " + text + "!";
    }
}
```

```java
public class Helper {
    public static final Helper INSTANCE = new Helper();
    private Helper() {

    }
}
```

- Validator (XValidator)末尾のクラス名は認証機能を実装するクラスである -->
