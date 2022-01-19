# API Conventions

 ![API Design](~@assets/images/api-design.jpg)

## HTTP Method

- Sử dụng 5 HTTP method POST, PUT, GET, DELETE, PATCH (update 1 phần)

## API Naming Conventions

1. Sử dụng danh từ (không sử dùng động từ)
2. Sử dụng chữ thường, dấu gạch ngang hyphens và dấu slash (không sử dụng underscores \_ )
3. Sử dụng số nhiều của chữ thay cho list
4. Không có extension trong chuỗi URI
5. Không sử dụng chữ viết tắt
6. Không có dấu slash ở cuối cùng
7. Không sử dụng CRUD trong URI

| Function                             | Http Method | Api                  | Note                                                      |
|:-------------------------------------|:------------|:---------------------|:----------------------------------------------------------|
| Get a product by product id          | GET         | /products/123        |                                                           |
| Register a product by product id     | POST        | /products/123        |                                                           |
| Update a product by product id       | PUT         | /products/123        |                                                           |
| Delete a product by product id       | DELETE      | /products/123        |                                                           |
| Update part of product by product id | PATCH       | /products/123/status |                                                           |
| Get product list                     | GET         | /products?status=    | Sử dụng method GET nếu ít điều kiện (sử dụng query param) |
| Get product list                     | POST        | /products            | Xem xét sử dụng POST nếu nhiều điều kiện                  |

## Query Parameter Names

1. Literals/expressions in query strings SHOULD be separated using underscore ( _ ).
2. Query parameters values MUST be percent-encoded. Consider that AWS requires query parameter names to conform to the regex ^[a-zA-Z0-9._$-]+$
3. Query parameters MUST start with a letter and SHOULD be either camelCase or snake_case, consistent with the case standard employed for field names.
4. Query parameters SHOULD be optional.
5. Query parameters SHOULD not contain characters that are not URL safe.

## Field Names

The data model for the representation MUST conform to the JSON specification.
The values may themselves be objects, strings, numbers, booleans, or arrays of objects.
Key names MUST be either camelCase or snake_case, however case MUST be used consistently.
foo
barBaz OR bar_baz
Prefix such as is or has SHOULD NOT be used for keys of type boolean.
Fields that represent arrays SHOULD be named using plural nouns (e.g. authenticators-contains one or more authenticators, products-contains one or more products).

## Example with Java
