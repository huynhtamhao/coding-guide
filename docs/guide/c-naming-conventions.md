# Naming Conventions

> “There are only two hard things in Computer Science: cache invalidation and naming things.”
>
> — Phil Karlton

## Aim

The name of a variable, function, or class, should answer all the big questions.
It should tell you why it exists, what it does, and how it is used.
If a name requires a comment, then the name does not reveal its intent.
(Except Japanese comment for variable belongs to business logic such as dto, domain, entity...)

## Some common rules for naming

- It should be English. (Some words be translated from Japanese).
- Avoid noise words such as `data`, `processor`, `table`, `info`, `object`, `a`, `an`, `the`.
Ex: `ProductInfo`, `ProductData`.
- Meaning and pronounceable. (Don't use abbreviations for variable names, except some common words like `HTML`, `DVD`...)
For common abbreviations, the camelcase rule should be followed. Ex: `myHtml` not `myHTML`.

## Variable

**One-character variable names should be avoided except for temporary "throwaway" variables.**

- Common names for temporary variables are `i`, `j`, `k`, `m`, and `n` for integers; `c`, `d`for characters; `e`, `ex` for Exception;
- Should be able to assume that its value is not used outside a few lines of code

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

### Boolean

- Boolean variables should be prefixed with `is`.
- There are a few alternatives to the is prefix that fits better in some situations. These are `has`, `can` `allows`, `does`, `did`, `will` and `should` prefixes.

Example: `isVisible`, `isFinished`, `hasLicense`, `canEvaluate`, `shouldAbort`, `allowsWhitespace`, `didUpdate`, `willUpdate`.

### Arrays, Lists, and Sets

- Naming with plural word.

### Map

### Enums

- Enum name with Upper Camelcase
- Enum's variables should be all uppercase with words separated by underscores `_`.

### Constants

- Should be all uppercase with words separated by underscores `_`.

```java:no-line-numbers
// 注文伝票の商品最大
public static final int MAX_LENGTH_ORDER_QUANTITY = 5;

public static final String PDF_EXTENSION = ".pdf";

public enum SYSTEM_NAME {
    USER_MANAGEMENT("UMP", "USER MANAGEMENT SYSTEM", "ユーザー管理システム")
    , MATERIAL_MANAGEMENT("MMSYS", "MATERIAL MANAGEMENT SYSTEM", "材料管理システム")
    , MATER_MANAGEMENT("MTM", "MATERIAL MANAGEMENT SYSTEM", "材料管理システム")
    ;
    // ...
}
```

## Classes & Interfaces

Class names should be nouns, in mixed case with the first letter of each internal word capitalized.
Try to keep your class names simple and descriptive.
Use whole words-avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the long form, such as URL or HTML).

## Methods - Functions

- Should be verbs in the first word.
- Should be lowercase in the first letter.
- Plural form if getting a map, a list...
- Don't use some linking words like `and` hoặc `or` except in the JPA repository.

| Function | Method Name    | Notes                  |
| -------- | -------------- | ---------------------- |
| List     | listCustomers  | Lấy danh sách customer |
| Get      | getCustomer    | Lấy 1 customer         |
| Create   | createCustomer | Tạo 1 customer         |
| Save     | saveCustomer   | save 1 customer        |
| Update   | updateCustomer | Update 1 customer      |
| Delete   | deleteCustomer | Delete 1 customer      |

## Package

The prefix of a unique package name is always written in all-lowercase ASCII letters and should be one of the top-level domain names, currently com, edu, gov, mil, net, org, or one of the English two-letter codes identifying countries as specified in ISO Standard 3166, 1981.
Subsequent components of the package name vary according to an organization's own internal naming conventions. Such conventions might specify that certain directory name components be division, department, project, machine, or login names.

## Preference

- [NUS Computing's Java Coding Standard](https://www.comp.nus.edu.sg/~cs2103/AY1617S1/contents/coding-standards-java.html)
- [Useful Tips for Naming Your Variables](https://betterprogramming.pub/useful-tips-for-naming-your-variables-8139cc8d44b5)
