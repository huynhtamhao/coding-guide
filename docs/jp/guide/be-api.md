# API 規約

 ![API Design](~@assets/images/api-design.jpg)

## HTTP Method

- HTTPメソッドはPOST、PUT、GET、DELETE、PATCHを５つ使用する。（一部更新）

## API 命名規約

## URI

**Component**

```text
https://fanatic.co.jp/api/v1/customers?fields=firstName,lastName
\_____/\____________/\_______________/\________________________/
   |          |               |                    |
scheme      domain           path                query
```

- 名詞を使用する。（動詞を使用しない）
- 小文字、ハイフン（-）、スラッシュ（/）を使用する。（アンダースコア（_）を使用しない。)
- リストの代わりに複数文字を使用する。
- URIに拡張を使用しない。
- 略称を使用しない。
- URIにCRUD関数名を使用しない。

| Function                             | Http Method | Api                  | Note                                                      |
|:-------------------------------------|:------------|:---------------------|:----------------------------------------------------------|
| Get a product by product id          | GET         | /products/123        |                                                           |
| Register a product by product id     | POST        | /products/123        |                                                           |
| Update a product by product id       | PUT         | /products/123        |                                                           |
| Delete a product by product id       | DELETE      | /products/123        |                                                           |
| Update part of product by product id | PATCH       | /products/123/status |                                                           |
| Get product list                     | GET         | /products?status=    | 条件が少ない場合にGETメソッドを使用する。（クエリパラメータを使用する。) |
| Get product list                     | POST        | /products            | 条件が多い場合にPOST使用を考慮する。                  |

### Query パラメータ名

- Query パラメータ値はパーセントエンコーディングされる必要がある。
- Query パラメータ文字で始まる必要がある。キャメルケース又はスネークケースであり、field名の規約と同じように従うべき。
- Query パラメータは任意であるべき。
- Query パラメータはURLセーフでない文字を含まないべき

### Json Value

- 表現のデータモデルはJSON仕様に従う必要がある。
- その値の自体は objects, strings, numbers, booleans, or arrays of objectsが可能
- キー名はキャメルケースである必要がある。
- `is` or `has` 等の接頭語はboolean型のキーに使わないべき。
- arraysを表現するフィールドは複数形の名詞と命名すべき (e.g. authenticators- １つ又は複数の authenticatorsを含む, products-1つ又は複数の製品を含む).

## 参考

- [Restful API Naming](https://restfulapi.net/resource-naming/)
- [Google Naming Conventions](https://cloud.google.com/apis/design/naming_convention)
