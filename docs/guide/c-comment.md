# Comment Conventions

**Chỉ comment khi thực sự cần thiết.**
> “Code never lies, comments sometimes do.”
>
> -- <cite>Benjamin Franklin</cite>

- Comments should dispel confusion, not cause it.
- Explain unidiomatic code in comments.
- Provide links to the original source of copied code.
- Include links to external references where they will be most helpful.

## Avoid comment

- Comments should not duplicate the code.

```java
i = i + 1; // index plus 1
```

- Good comments do not excuse unclear code.
- If can’t write a clear comment, there may be a problem with the code.

```java

```

- Những comment ko cung cấp thông tin cho người đọc có thể hiểu đoạn code tốt hơn
  - Constructor
  - Tên function đã thể hiện ý nghĩa chức năng

:::: code-group
::: code-group-item Java

```java
public DefectiveProductDto getDefectiveProduct(String defectiveProductNo) {
    return defectiveProductRepository.getByDefectiveProductNo(defectiveProductNo);
}
```

:::
::: code-group-item JavaScript

```js
// code demo
```

:::
::::

## Should be comment

- Business properties in models, domain, dto...
- Cung cấp thông tin "ngay tức thời" mà không phải suy nghĩ chẳng hạn như các regex `"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"`.

:::: code-group
::: code-group-item Java

```java
// Minimum eight characters, at least one letter and one number
private static final String PASSWORD_REGEX = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

// Get string after first space
str.substr(str.indexOf(' ') + 1);

/** 仕入先コード */
private int supplierCode;
```

:::
::: code-group-item JavaScript

```js
// code demo
```

:::
::::

## Consider

## Comment out source code

- For a reason and have to comment that reason

```java
// NOTE: Theo issue PCS-123, sẽ xem xét có triển khai chức năng này hay không.
// public exportProductionsReport() {
//    // code here
// }
```

## Marker

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
