# Comment Conventions

**Chỉ comment khi thực sự cần thiết.**
> “Code never lies, comments sometimes do.”
>
> -- <cite>Benjamin Franklin</cite>

## Aim

- Hiểu duoc commet tot va comment xau
-

## Should be comment

- Business properties in models, domain, dto...
- Cung cấp thông tin "ngay tức thời" mà không phải suy nghĩ.

:::: code-group
::: code-group-item Java

```java
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

## Avoid comment

- Những comment ko cung cấp thông tin cho người đọc có thể hiểu đoạn code tốt hơn.
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

## Marker

VsCode: Using Extension

```json
{
    // ...
    "todohighlight.keywords": [
        {
            "text": "NOTE:",
            "color": "white",
            "backgroundColor": "grey",
            "overviewRulerColor": "grey"
        },
        {
            "text": "BUG:",
            "color": "#ff0000",
            "backgroundColor": "yellow",
            "overviewRulerColor": "grey"
        },
        {
            "text": "XXX:",
            "color": "#ff0000",
            "backgroundColor": "yellow",
            "overviewRulerColor": "grey"
        },
        {
            "text": "HACK:",
            "color": "#000",
            "isWholeLine": false,
        },
    ]
}
```

| Marker |                                                                  Notes                                                                   |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| TODO:  | No problem, but additional code needs to be written, usually when you are skipping something. (Nội dung tôi chưa làm hoặc chưa tìm hiểu) |
| FIXME: | This works, sort of, but it could be done better. (usually code written in a hurry that needs rewriting) Code lởm ở đây                  |
| NOTE:  | Description of how the code works (when it isn't self evident).                                                                          |
| HACK:  | Not very well written or malformed code to circumvent a problem/bug (Solution này chưa phù hợp với problem)                              |
| BUG:   | There is a problem here (Bug)                                                                                                            |
| XXX:   | Warning about possible pitfalls (Cẩn thận không toang!)                                                                                  |
