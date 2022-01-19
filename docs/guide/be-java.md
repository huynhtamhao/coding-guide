# Java

## Code style

- Sử dụng google style
- Intellij: <a href="~@assets/styleguides/intellij-java-fanatic-style.xml" download>Fanatic IntelliJ Style Guide</a> based on [intellij-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)
- Eclipse: <a href="~@assets/styleguides/eclipse-java-fanatic-style.xml" download>Fanatic Eclipse Style Guide</a> based on [eclipse-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/eclipse-java-google-style.xml)

## Comments

- Tất cả các class phải có comment nội dung, param, kết quả trả về.

```java
/**
  * 不具合品情報を取得する
  * 
  * @param defectiveProductNo 不具合品番号
  * @return 不具合品情報
  */
public DefectiveProductInfoDto getDefectiveProductInfo(String defectiveProductNo) {
    return defectiveProductInfoRepository.getByDefectiveProductNo(defectiveProductNo);
}
```

## Naming Conventions

- Tên biến phải dịch từ tiếng Nhật của item ra tiếng Anh.
- Đặt tên theo quy tắc “lạc đà” (Camel Case), chữ đầu viết thường.

```java
/** 不具合品番号 */
private String defectiveProductNo;

/** 仕入先名 */
private String supplierName;

/** ステータス */
private String status;
```

- Không đặt tên viết tắt khó hiểu, trừ các từ viết tắt phổ biến.

```java
private boolean isFirstName; // 〇
private boolean isFN; // ✕

private String stringHTML; // 〇
```

- Đặt tên view object (object có nhiều table join với nhau) với hậu tố là VO.

```java
public class ProductionDetailVO {

}
```

```java
public class ProductionAndDetailDto {  // ✕ avoid using AND

}
```

- Class đặt tên có hậu tố Utils (XUtils) là class tiện ích, trong đó các phương thức và định nghĩa đều là static, bao gồm các chức năng nhỏ sử dụng lặp lại ở bất cứ đâu, có thể dùng ở project khác.

```java
public class XUtils
{
    // static functions
    public static String meowPrepend(String text)
    {
        return "Meow meow " + text + "!";
    }
    
    public static String woofPrepend(String text)
    {
        return "Woof woof " + text + "!";
    }
}
```

- Class đặt tên có hậu tố Helper (XHelper) cũng là class tiện ích, dùng để hỗ trợ, cung cấp một số chức năng. Class có thể khởi tạo, có thể có các phương thức mở rộng, không nhất thiết phải có phương thức static. Hoặc có thể chỉ thực hiện một số các chức năng business (chỉ dùng được ở project hiện tại).

```java
public class TextHelper
{
    String text;

    public String meowPrepend()
    {
        return "Meow meow " + text + "!";
    }

    public String woofPrepend()
    {
        return "Woof woof " + text + "!";
    }
}
```

```java
public class Helper {
{
    public static final Helper INSTANCE = new Helper();

    private Helper() {
    }
}
```

- Class đặt tên có hậu tố Validator (XValidator) là class chứa các chức năng xác thực.

## Entity, Dto

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

## Statements

- Sử dụng java.time (>= jdk8), không sử dụng Calendar.
- Có thể sử dụng toán tử 3 ngôi.

```java
return x > y ? true : false;
```

## If-else Statements

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

## Mapping Rules

- Mapping sử dụng bắt đầu bằng chữ to... (toEntity, toListEntity, toDto, toListDto).

```java
/**
  * 設計BOM明細Dtoから設計BOM明細エンティティへ変換する。
  *
  * @param engineeringBOMDetailDto 設計BOM明細Dto
  * @return 設計BOM明細エンティティ
  */
EngineeringBOMDetail toEntity(EngineeringBOMDetailDto engineeringBOMDetailDto);

/**
  * 設計BOM明細エンティティから設計BOM明細Dtoへ変換する。
  *
  * @param engineeringBOMDetail 設計BOM明細エンティティ
  * @return 設計BOM明細Dto
  */
EngineeringBOMDetailDto toDto(EngineeringBOMDetail engineeringBOMDetail);

/**
  * 製造明細Dtoから設計BOM明細Dtoへ変換する。
  *
  * @param productionDetailDto 製造明細Dto
  * @return 設計BOM明細Dto
  */
EngineeringBOMDetailDto toDto(ProductionDetailDto productionDetailDto);
```

## Import Rules

- Chỉ import các class cần dùng, không import *

```java
import jp.co.fanatic.service.dto.InquiryContentDto;
import jp.co.fanatic.service.dto.InquiryNoDto;
import jp.co.fanatic.service.dto.InquirySearchConditionDto;
```

```java
import jp.co.fanatic.service.dto.*; // ✕ AVOID!
```

## DB process

- rollback DB trường hợp phát sinh error (custom common).

## Reference

- [Code Conventions for the Java Programming Language (Oracle)](https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html)
- [Helper class (Wikipedia)](https://en.wikipedia.org/wiki/Helper_class)
