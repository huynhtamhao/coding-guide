# Postgres Style Guide

## Naming rules in design DB

### Common rules

- Available characters are alphanumeric characters and underscore.
- Use only lowercase letters and not uppercase letters.

```text
Number: 1234567890
Alphabetic characters: abcdefghijklmnopqrstuvwxyz
Symbols: _
```

- Connect the words with underscores
- The maximum length of the name is 63 bytes
- If the length of the name exceeds the defined maximum length, all words included in the physical name are replaced with abbreviations registered in the word dictionary.
- Use registered words defined in the word dictionary
- If the length of the name exceeds the defined maximum length, all words included in the name are replaced with abbreviations registered in the word dictionary.

### Table

- Must have table name by JapaneseMust have column name by Japanese
- Can comment on the meaning of the table

```text
Example:
table name: storage_location_class_master
Japanese name: 保管場所区分マスタ
Description: 保管場所区分の定義。区分名と保管場所の種別を管理する。
```

### Column (table field)

- Must have column name by Japanese
- Can comment on the meaning of the column, the meaning of the value in column

| 項目名（日本語） | 項目名（日本語）              | データ型 | データ型(postgres) | データ型 (java) | 備考                 |
| ------------- | --------------------- | ---- | -------------- | ----------- | ------------------ |
| 保管場所種別   | storage_location_type | 文字列  | varchar(2)     | String      | 1:保管場所、2:伝票、3:勘定科目 |
| 有効開始日    | effective_start_date  | 日付   | date           | LocalDate   | マスタが有効になる日付        |

- Các column bắt buộc phải có trong mỗi table

| 項目名（日本語） | 項目名（日本語）     | データ型 | データ型(postgres) | データ型(java) | 備考             |
| -------- | ------------ | ---- | -------------- | ---------- | -------------- |
| 登録者      | created_user | 文字列  | varchar        | String     | マスタを登録したユーザーID |
| 登録日時     | created_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   |
| 更新者      | updated_user | 文字列  | varchar        | String     | マスタを登録した日付時刻   |
| 更新日時     | updated_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   |

- Chuyển đổi kiểu dữ liệu từ postgres -> java

| postgres | java |
| -------- | ---- |
|          |      |

   bdsg

### Sequence

- Must have column name by Japanese

```text
Example:
```
