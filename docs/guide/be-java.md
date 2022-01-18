# Java

Sử dụng Code [Code Conventions for the Java Programming Language (Oracle)](https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html)

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

## If-else Statements

- Mệnh đề if đơn lẻ không cần cặp dấu ngoặc nhọn {} cũng được, có thể viết trên cùng 1 dòng.
- Có thể dùng toán tử 3 ngôi trong câu if.

```java
if (x > y ? true : false) statement;
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

- Mapping sử dụng bắt đầu bằng chữ toEntity, toDto.

```java
/**
  * 設計BOM明細Dtoから設計BOM明細エンティティへ変換する。
  *
  * @param engineeringBOMDetailDto 設計BOM明細Dto
  * @return 設計BOM明細エンティティ
  */
EngineeringBOMDetail toEngineeringBOMDetail(EngineeringBOMDetailDto engineeringBOMDetailDto);
```

## Import Rules

- Chỉ import các class cần dùng, không import *

```java
import jp.co.fanatic.service.dto.InquiryContentDto;
import jp.co.fanatic.service.dto.InquiryNoDto;
import jp.co.fanatic.service.dto.InquirySearchConditionDto;
```

```java
import jp.co.fanatic.service.dto.*; // × AVOID!
```

## DB process

- Khi xử lý insert, update, delete DB phải có Rollback (trường hợp phát sinh error).

## Reference

- [Code Conventions for the Java Programming Language (Oracle)](https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html)
