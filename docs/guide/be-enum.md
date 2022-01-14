# Enum

## Conventions

- Tên biến phải viết hoa toàn bộ và được ngăn cách bằng dấu gạch dưới

```java:no-line-numbers
JAPAN("JPY") // 日本
MY_VARIABLE_CODE("MY_VARIABLE_VALUE") // 変更
```

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

- Một số trường hợp đặc biệt thì nên có code đằng trước

```java:no-line-numbers
WH1300_SHIPPING_WAITING_WAREHOUSE("WH1300") // 出荷待倉庫
WS9001_SUPPLIER_RETURN_WAITING("WS9001") // 仕入先保管 返送待ち
WS9002_SUPPLIER_WITHOUT_RETURN("WS9002") // 仕入先保管 返却予定なし
```

## Avoid

- Tránh các enum không có nghĩa

```java:no-line-numbers
public enum INVENTORY_STATUS {

    INVENTORY_STATUS_1("1")   // ×
    , INVENTORY_STATUS_2("2") // △
    // ....
}
```

```java:no-line-numbers

```

## Example

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

## Best Practices
