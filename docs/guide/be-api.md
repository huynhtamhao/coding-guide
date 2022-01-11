# API Conventions

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

## Example with Java
