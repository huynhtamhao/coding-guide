# Java

```java
/** 不具合品番号 */
private String defectiveProductNo;

/** 仕入先名 */
private String supplierName;

/** ステータス */
private String status;

private boolean isFirstName; // 〇
private boolean isFN; // ✕

private String myHtml; // 〇
private String myHTML; // ✕
```

- Đặt tên view object (object có nhiều table join với nhau) với hậu tố là VO.

```java
public class ProductionDetailVO {

}
```

## Mapping Rules

- Sử dụng [MapStruct](https://mapstruct.org/documentation/dev/reference/html/) để mapping.
- Tên file phải có hậu tố là **Mapper**. Ví dụ `ProductMapper.java`.
- Mapping Method sử dụng bắt đầu bằng chữ `to`:
  - toEntity
  - toDto
  - toListEntity
  - toListDto
  - Ngoài 4 trường hợp trên sẽ thảo luận khi làm dự án.
- Về comment
  - Không cần comment cho method.
  - Class comment: `「Tên tiếng Nhật」マッパー`

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

- Trường hợp mapping từ object khác (source to target) thì mapper method được đặt tại target file.

```java
@Mapper()
public interface ProductMapper {
    // ...
    ProductDto toDto(SupplierProductDto supplierProductDto);
}
```

- Trường hợp đặc biệt có thể tạo file mapper riêng.

```java
@Mapper()
public interface CustomerProductMapper {

  CustomerProductDto toDto(Customer customer, Product product);
}
```

## Code style

- Sử dụng google style
- Intellij: <a href="~@assets/styleguides/intellij-java-fanatic-style.xml" download>Fanatic IntelliJ Style Guide</a> based on [intellij-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)
- Eclipse: <a href="~@assets/styleguides/eclipse-java-fanatic-style.xml" download>Fanatic Eclipse Style Guide</a> based on [eclipse-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/eclipse-java-google-style.xml)

### Import Rules

- Chỉ import các class cần dùng, không import *

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

### Entity, Dto

- Annotation dùng khi tạo DTO.

```java
@Data
public class ItemDto {

}
```

- Annotation dùng khi tạo Entity

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

- Sử dụng java.time (>= jdk8), không sử dụng Calendar.

### Statements

- Có thể sử dụng toán tử 3 ngôi.

```java
return x > y ? true : false;
```

### If-else Statements

- Mệnh đề if đơn lẻ không cần cặp dấu ngoặc nhọn {} cũng được, có thể viết trên cùng 1 dòng.

```java
if (condition) statement;
```

- Không viết trống câu if để thực thi else.

```java
if (condition) {
    // no statements;
} else {
    statements;
}
```

- Trường hợp nhiều if-else thì nên dùng switch case.

### Boolean vs boolean

Boolean allow null value but boolean not

```java
Boolean a;
boolean b;

if (a1) => OK

// Boolean variables are explicitly compared to true in order to avoid an ugly null check
if (b == true) // => OK
if (b != null && b) // NG
```

## Utils

- Class đặt tên có hậu tố Utils (XUtils) là class tiện ích.
- Phương thức và định nghĩa đều là static.
- Bao gồm các chức năng nhỏ sử dụng lặp lại ở bất cứ đâu, có thể dùng ở project khác.

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

- Class đặt tên có hậu tố Helper (XHelper) cũng là class tiện ích
- Dùng để hỗ trợ, cung cấp một số chức năng.
- Class có thể khởi tạo, có thể có các phương thức mở rộng, không nhất thiết phải có phương thức static.
- Hoặc có thể chỉ thực hiện một số các chức năng business (chỉ dùng được ở project hiện tại).

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

- Class đặt tên có hậu tố Validator (XValidator) là class chứa các chức năng xác thực.

## DB process

- rollback DB trường hợp phát sinh error (custom common).

## Optimistic vs pessimistic locking

## Enum

### Conventions

- Value Property phải là private, truy xuất thông tin bằng public method

```java:no-line-numbers
private final String value;
public String getValue() {
    return this.value;
}
```

- Phải có hàm find để trả về enum cần tìm bằng value

```java:no-line-numbers
public static CURRENCY_CD find(String val) {
    return Arrays.stream(CURRENCY_CD.values())
        .filter(e -> e.getValue().equals(val)).findFirst()
        .orElseThrow(() -> new IllegalStateException(String.format("Unsupported type %s.", val)));
}
```

- Một số trường hợp đặc biệt thì nên để code đằng trước

```java:no-line-numbers
WH1300_SHIPPING_WAITING_WAREHOUSE("WH1300") // 出荷待倉庫
WS9001_SUPPLIER_RETURN_WAITING("WS9001") // 仕入先保管 返送待ち
WS9002_SUPPLIER_WITHOUT_RETURN("WS9002") // 仕入先保管 返却予定なし
```

### Avoid

- Tránh các enum không có nghĩa

```java:no-line-numbers
public enum INVENTORY_STATUS {

    INVENTORY_STATUS_1("1")   // ×
    , INVENTORY_STATUS_2("2") // △
    // ....
}
```

### Example

- Trường hợp có 1 property.

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

- Trường hợp có nhiều properties

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

### Best Practices

## Reference

- [Code Conventions for the Java Programming Language (Oracle)](https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html)
- [Helper class (Wikipedia)](https://en.wikipedia.org/wiki/Helper_class)
