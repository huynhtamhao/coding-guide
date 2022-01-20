# Naming Conventions

> “There are only two hard things in Computer Science: cache invalidation and naming things.”
>
> — Phil Karlton

- It should be English. (Some words be translated from Japanese).
- Uses CamelCase for writing names of methods, variables, classes.
- Tránh chứa một số chữ gây nhiễu như data, processor, table, information...
- Không đặt tên viết tắt khó hiểu, trừ các từ viết tắt phổ biến.
(Đối với các từ viết tắt cũng phải theo rule camel case. Ex: `myHtml` chứ ko phải `myHTML`)

## Variable

**Some values are intrinsically themselves, so don't have to add anything to the variable name.**

- String: `name`, `city` or `customer`..
- Integer: `age` or `year`..
- Floating-Point Numbers: `price`, `height`, or `weight`..

### String

Trường hợp là number thì use a variable name like `<someValue>String` or `<someValue>AsString`.

Ex: `yearAsString`.

### Integer

- Rule:
  - `numberOf<something>`
  - `<something>Count`
  - `total<something>`

Ex: `numberOfFailures`, `failureCount`or `tooltipShowDelayInMillisecs`.

### Floating-Point Numbers

- Like

### Boolean

- Boolean variables should be prefixed with `is`.
- There are a few alternatives to the is prefix that fits better in some situations. These are `has`, `can` `allows`, `does`, `did`, `will` and `should` prefixes.

Example: `isVisible`, `isFinished`, `hasLicense`, `canEvaluate`, `shouldAbort`, `allowsWhitespace`, `didUpdate`, `willUpdate`.

### Arrays, Lists, and Sets

aaa

### Map

## Enum


- Tên biến phải viết hoa toàn bộ và được ngăn cách bằng dấu gạch dưới

```java:no-line-numbers
JAPAN("JPY") // 日本

MY_VARIABLE_CODE("MY_VARIABLE_VALUE") // 変更
```

## Constants

## Method - Function

- Phải viết thường chữ cái đầu tiên
- Sử dụng động từ ở chữ đầu tiên
- Lấy danh sách list thì Danh từ phải nằm ở số nhiều
- Tránh sử dụng các từ liên kết như `and` hoặc `or` (trừ JPA repository).

| Function | Method Name    | Notes                  |
| -------- | -------------- | ---------------------- |
| List     | listCustomers  | Lấy danh sách customer |
| Get      | getCustomer    | Lấy 1 customer         |
| Create   | createCustomer | Tạo 1 customer         |
| Save     | saveCustomer   | save 1 customer        |
| Update   | updateCustomer | Update 1 customer      |
| Delete   | deleteCustomer | Delete 1 customer      |

## Preference

- [NUS Computing's Java Coding Standard](https://www.comp.nus.edu.sg/~cs2103/AY1617S1/contents/coding-standards-java.html)
- [Useful Tips for Naming Your Variables](https://betterprogramming.pub/useful-tips-for-naming-your-variables-8139cc8d44b5)
