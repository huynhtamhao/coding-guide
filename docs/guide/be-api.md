# API Conventions

 ![API Design](~@assets/images/api-design.jpg)

## HTTP Method

- Sử dụng 5 HTTP method POST, PUT, GET, DELETE, PATCH (update 1 phần)

## API Naming Conventions

## URI

**Component**

```text
https://fanatic.co.jp/api/v1/customers?fields=firstName,lastName
\_____/\____________/\_______________/\________________________/
   |          |               |                    |
scheme      domain           path                query
```

- Sử dụng danh từ (không sử dùng động từ)
- Sử dụng chữ thường, dấu gạch ngang hyphens `-` và dấu slash `/` (không sử dụng underscores `_` )
- Sử dụng số nhiều của chữ thay cho list
- Không có extension trong chuỗi URI
- Không sử dụng chữ viết tắt
- Không sử dụng tên hàm CRUD trong URI

| Function                             | Http Method | Api                  | Note                                                      |
|:-------------------------------------|:------------|:---------------------|:----------------------------------------------------------|
| Get a product by product id          | GET         | /products/123        |                                                           |
| Register a product by product id     | POST        | /products/123        |                                                           |
| Update a product by product id       | PUT         | /products/123        |                                                           |
| Delete a product by product id       | DELETE      | /products/123        |                                                           |
| Update part of product by product id | PATCH       | /products/123/status |                                                           |
| Get product list                     | GET         | /products?status=    | Sử dụng method GET nếu ít điều kiện (sử dụng query param) |
| Get product list                     | POST        | /products            | Xem xét sử dụng POST nếu nhiều điều kiện                  |

### Query Parameter Names

- Query parameters values MUST be percent-encoded.
- Query parameters MUST start with a letter and SHOULD be either camelCase or snake_case, consistent with the case standard employed for field names.
- Query parameters SHOULD be optional.
- Query parameters SHOULD not contain characters that are not URL safe.

### Json Value

- The data model for the representation MUST conform to the JSON specification.
- The values may themselves be objects, strings, numbers, booleans, or arrays of objects.
- Key names MUST be either `camelCase`.
- Prefix such as `is` or `has` SHOULD NOT be used for keys of type boolean.
- Fields that represent arrays SHOULD be named using plural nouns (e.g. authenticators-contains one or more authenticators, products-contains one or more products).

## References

- [Restful API Naming](https://restfulapi.net/resource-naming/)
- [Google Naming Conventions](https://cloud.google.com/apis/design/naming_convention)
