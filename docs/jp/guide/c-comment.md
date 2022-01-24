# Comment Conventions

**Chỉ comment khi thực sự cần thiết.**
> “Code never lies, comments sometimes do.”
>
> -- <cite>Benjamin Franklin</cite>

## Avoid comment

- Không nên comment những gì mà code đã thể hiện

```java
i = i + 1; // index plus 1
String firstName; // Declare first nam variable
```

- Không nên có comment nếu có thể code được rõ ràng.

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

- Những comment ko cung cấp thông tin cho người đọc có thể hiểu đoạn code tốt hơn
  - Constructor
  - Tên function đã thể hiện ý nghĩa chức năng

```java
public DefectiveProductDto getDefectiveProduct(String defectiveProductNo) {
    return defectiveProductRepository.getByDefectiveProductNo(defectiveProductNo);
}
```

- If can’t write a clear comment, there may be a problem with the code.
- Nhận xét phải làm rõ ràng source code chứ không phải gây thêm nhầm lẫn

## Should be comment

### Should be comment

- Business properties in models, domain, dto...
- Cung cấp thông tin "ngay tức thời" mà không phải suy nghĩ chẳng hạn như các regex `"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"`.

```java
// Minimum eight characters, at least one letter and one number
private static final String PASSWORD_REGEX = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

// Get string after first space
str.substr(str.indexOf(' ') + 1);

/** 仕入先コード */
private int supplierCode;
```

### Consider

- Cung cấp liên kết đến nguồn gốc của source code được sao chép hoặc là tài liệu tham khảo.

```java
/** Converts a Drawable to Bitmap. via https://stackoverflow.com/a/46018816/2219998. */

// Many thanks to Chris Veness at http://www.movable-type.co.uk/scripts/latlong.html for a great reference and examples.

// http://tools.ietf.org/html/rfc4180 suggests that CSV lines should be terminated by CRLF, hence the \r\n.
```

### Comment out source code

- For a reason and have to comment that reason

```java
// NOTE: Theo issue PCS-123, sẽ xem xét có triển khai chức năng này hay không.
// public exportProductionsReport() {
//    // code here
// }
```

### Marker

- Use comments to mark incomplete implementations (TODO, FIXME ...).

| Marker |                                                                  Notes                                                                   |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| TODO:  | No problem, but additional code needs to be written, usually when you are skipping something. (Nội dung tôi chưa làm hoặc chưa tìm hiểu) |
| FIXME: | This works, sort of, but it could be done better. (usually code written in a hurry that needs rewriting) Code lởm ở đây                  |
| NOTE:  | Description of how the code works (when it isn't self evident).                                                                          |
| HACK:  | Not very well written or malformed code to circumvent a problem/bug (Solution này chưa phù hợp với problem)                              |
| BUG:   | There is a problem here (Bug)                                                                                                            |
| XXX:   | Warning about possible pitfalls (Cẩn thận không toang!)                                                                                  |

## Reference

[Reference](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/)
