# SQL Style Guide (Postgresql)

## Naming conventions

### General

- Ensure the name is unique and does not exist as a reserved keyword.
- Keep the length to a maximum of 30 bytes—in practice this is 30 characters unless you are using a multi-byte character set.
- Names must begin with a letter and may not end with an underscore.
- Only use letters, numbers and underscores in names.
- Avoid the use of multiple consecutive underscores—these can be hard to read.
- Use underscores where you would naturally include a space in the name (first name becomes first_name).
- Avoid abbreviations and if you have to use them make sure they are commonly understood.
- Available characters are alphanumeric characters and underscore.
- Use only lowercase letters and not uppercase letters.

```text
Number: 1234567890
Alphabetic characters: abcdefghijklmnopqrstuvwxyz
Symbols: _
```

- Connect the words with underscores
- The maximum length is 63 bytes
- If the length of the name exceeds the defined maximum length, all words included in the name are replaced with abbreviations registered in the word dictionary.
- Use registered words defined in the word dictionary(to use a word that does not exist in the word dictionary, follow the registration procedure specified in this PJ.)
- Prefix + logical name

|                    | Prefix | The maximum length | Example                 |
|--------------------|--------|--------------------|-------------------------|
| Table              |        | 65                 |                         |
| Column             |        | 65                 |                         |
| Sequence           | seq_   | 30                 | seq_credit_detail_id    |
| View               | vw_    | 30                 | vw_monthly_sales_amount |
| Materialized views | mv_    | 30                 | mv_monthly_sales_amount |
| Index              | ix_    | 30                 | ix_credit_detail_01     |

**Notice:**

- Sequence (the sequence automatically generated does not need to follow this rule).

## Query

- Luôn sử dụng chữ hoa cho các từ khóa như SELECT, WHERE.
- Sử dụng hợp lý khoảng trắng và thụt lề để làm cho mã dễ đọc hơn.
- Cố gắng sử dụng SQL chuẩn vì mục đích di động.
- Thụt lề trong một truy vấn (ví dụ: cột, JOIN mệnh đề, nhiều dòng GROUP BY, v.v.) nên được thụt lề 2 khoảng trắng
- Trong một WITH, toàn bộ câu lệnh SQL phải được thụt lề 4 khoảng trắng.

```sql

```

## Data type from postgres to java

| postgres             | java                           |
| --------             | ----                           |
| bigserial(8 bytes)   | Long                           |
| numeric              | BigDecimal/int                 |
| integer(4 bytes)     | integer                        |
| decimal              | decimal                        |
| long                 | long                           |
| float                | float                          |
| char(2000 bytes)     | String                         |
| varchar2(4000 bytes) | String                         |
| text                 | String                         |
| bytea                | byte[]                         |
| timestamp            | Instant/LocalDate/LocalDateTime|
| date                 | LocalDate                      |
| boolean              | boolean                        |

## Column order

- The data fields, which are closely related from a business viewpoint between columns that are arranged in the same table, should be grouped next to each other or in the vicinity.
- The column set as the primary key should be at the beginning of the table.
- Candidate keys and foreign key constraints (FOREIGN KEY) are placed towards the beginning.
- Table common fields (mainly, columns for system control that depend on architecture design, etc.) should be placed at the end of the table, and all columns designed from the business viewpoint should be placed before the table common items.
- For business purposes, key data is placed towards the beginning and non-key data is placed towards the end.
- Columns that are updated less frequently are placed towards the beginning, and columns that are updated frequently are placed towards the end.
- Columns referenced frequently are placed towards the beginning, and columns that are not referenced often are placed towards the end.
- Fixed-length data is placed towards the beginning, and variable-length data is placed towards the end.

## Constraints

### Primary key constraint (PRIMARY KEY)

- Primary key is a column of table which uniquely identifies each tuple (row) in that table.
- Only one primary key is allowed to use in a table
- The primary key does not accept the any duplicate and NULL values
- Primary keys can be used as foreign keys for other tables too.

### Foreign key constraint (FOREIGN KEY)

- A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables.
- It is a column (or columns) that references a column (most often the primary key) of another table.

### Unique constraint (UNIQUE KEY)

- Unique key is a constraint that is used to uniquely identify a tuple in a table.
- A table can have more than one unique key
- NULL values are allowed in case of a unique key
- Unique keys can be used as foreign keys for other tables too.
- Choose Unique
  - When columns other than the primary key must be absolutely unique from a system control perspective
  - When a column other than the primary key is used as the parent column (reference source) of the foreign key constraint (FOREIGN KEY)

### Check constraint

- The CHECK constraint is used to limit the value range that can be placed in a column.

### NOT NULL constraint (NOT NULL)

- The NOT NULL constraint will not allow a column to contain NULL values.

### DEFAULT constraint

- A column can be assigned a default value.

- When a new row is created and no values are specified for some of the columns, those columns will be filled with their respective default values.

Example:

```sql
CREATE TABLE persons (
  id serial,
  last_name varchar(255) ,
  first_name varchar(255) ,
  age int,
  class_id varchar(10),
  created_user varchar NOT NULL,
  created_date timestamp NOT NULL,
  updated_user varchar NOT NULL,
  updated_date timestamp NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT chk_Person CHECK (age>=18),
  CONSTRAINT fk_class FOREIGN KEY (class_id)
  REFERENCES class(class_id)
);

CREATE TABLE class (
    class_id varchar(10) ,
    class_name varchar(255) ,
    active boolean DEFAULT true,
    created_user varchar,
    created_user varchar NOT NULL,
    created_date timestamp NOT NULL,
    updated_user varchar NOT NULL,
    updated_date timestamp NOT NULL,
    PRIMARY KEY (class_id),
);
```

## Design DB

### Table

- Must have table name by Japanese
- Must have column name by Japanese
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
- Required columns(common fields) in table

<!-- | 項目名（日本語） | 項目名（日本語）              | データ型 | データ型(postgres) | データ型 (java) | 備考                 |
| ------------- | --------------------- | ---- | -------------- | ----------- | ------------------ |
| 保管場所種別   | storage_location_type | 文字列  | varchar(2)     | String      | 1:保管場所、2:伝票、3:勘定科目 |
| 有効開始日    | effective_start_date  | 日付   | date           | LocalDate   | マスタが有効になる日付        | -->

<!-- | 項目名（日本語） | 項目名（日本語）     | データ型 | データ型(postgres) | データ型(java) | 備考             |
| --------    | ------------ | ---- | -------------- | ---------- | -------------- |
| 登録者      | created_user | 文字列  | varchar        | String     | マスタを登録したユーザーID |
| 登録日時    | created_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   |
| 更新者      | updated_user | 文字列  | varchar        | String     | マスタを登録した日付時刻   |
| 更新日時     | updated_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   | -->

## SQL Optimization

**Các nguyên nhân gây chậm truy vấn SQL**

- Không/thiếu sử dụng các lợi ích của Indexes.
- Trả về các dữ liệu không cần thiết.
- Locks or deadlocks bị cấm.
- Các câu truy vấn được viết nghèo nàn.
- Không/thiếu tận dụng được I/O striping.
- Thiếu bộ nhớ.

### Index

- Index đối với column thường xuyên query, mà ít có thay đổi.
- Chẳng hạn như column `name` của các table bên dưới
  - Customer
  - Supplier

### Chỉ select những field cần thiết

- Sử dụng select * sẽ khiến SQL quét toàn bộ table,trả về dữ liệu trùng lặp tiêu tốn I/O.

```sql
SELECT * FROM table_1 LEFTJOIN table_2 WHERE table_1.id = table_2.gid;
-- =>
SELECT table_1.id,table_2.username,table_2.lucky FROM table_1 LEFTJOIN table_2 WHERE table_1.id = table_2.gid;
```

### Operator

- toán tử phủ định : Index không thể thực hiện với toán tử phủ định
do đó các toán tử phía dưới sẽ làm chậm câu lệnh hãy hạn chế sử dụng.
`IS NULL`, `!=`, `!>`, `!<`, `NOT`, `NOT EXISTS`, `NOT IN`, `NOT LIKE`

- toán tử so sánh 2 lần

```sql
SELECT userid, username FROM user WHERE user_amount <=3000
-- =>
SELECT userid, username FROM user WHERE user_amount < 3001
```

- Sử dụng like ko hợp lý (nhất là like ở đầu %data)

### Hạn chế sử dụng function lên column

hạn chế sử dụng function lên column

### Sử dụng SQL Procedure

Đối với các thao tác được thực hiện 1 cách thường xuyên và có xử lý phức tạp ta sử dụng SQL procedure(SP) với nhiều lợi ích như dưới đây.

- Giảm lượng dữ liệu truyền đến Server SP được lưu sẵn ở phía server do đó không cần phải gửi cả câu lệnh SQL dài tới server mà chỉ cần gửi tham số.
- SP được biên dịch ngay ở lần đầu chạy, những lần sau chạy SP sẽ sử dụng lại file đã biên dịch trước đó nên tốc độ sẽ nhanh hơn.
- Mặt khác khi sử dụng SP trong source có thể dùng vòng for để gọi nhiều câu lệnh SQL gửi lên server điều này giúp tái sử dụng source.
