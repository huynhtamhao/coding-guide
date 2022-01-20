# Postgres Style Guide

## Design DB

### Common Naming rules

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

- Required columns(common fields) in table

| 項目名（日本語） | 項目名（日本語）     | データ型 | データ型(postgres) | データ型(java) | 備考             |
| --------    | ------------ | ---- | -------------- | ---------- | -------------- |
| 登録者      | created_user | 文字列  | varchar        | String     | マスタを登録したユーザーID |
| 登録日時    | created_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   |
| 更新者      | updated_user | 文字列  | varchar        | String     | マスタを登録した日付時刻   |
| 更新日時     | updated_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   |

#### Data type from postgres to java

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

#### Column order

- The data fields, which are closely related from a business viewpoint between columns that are arranged in the same table, should be grouped next to each other or in the vicinity.
- The column set as the primary key should be at the beginning of the table.
- Candidate keys and foreign key constraints (FOREIGN KEY) are placed towards the beginning.
- Table common fields (mainly, columns for system control that depend on architecture design, etc.) should be placed at the end of the table, and all columns designed from the business viewpoint should be placed before the table common items.
- For business purposes, key data is placed towards the beginning and non-key data is placed towards the end.
- Columns that are updated less frequently are placed towards the beginning, and columns that are updated frequently are placed towards the end.
- Columns referenced frequently are placed towards the beginning, and columns that are not referenced often are placed towards the end.
- Fixed-length data is placed towards the beginning, and variable-length data is placed towards the end.

### Sequence

- The sequence name is "seq_" + the logical name. (the sequence automatically generated does not need to follow this rule)
- The maximum length is 30 characters

```text
Example: seq_credit_detail_id
```

### View

- The view name is "vw_" + logical name
- The maximum length is 30 characters

```text
Example: vw_monthly_sales_amount
```

### Materialized views

- The materialized views name is "mv_" + logical name
- The maximum length is 30 characters

```text
Example: mv_monthly_sales_amount
```

### Index

- The index name is "ix_" + logical name + key number ("_" + 01 to 99). (The index automatically generated does not need to follow this rule)
- The maximum length is 30 characters

```text
Example: ix_credit_detail_01
```

### Constraints

#### Primary key constraint (PRIMARY KEY)

- Primary key is a column of table which uniquely identifies each tuple (row) in that table.
- Only one primary key is allowed to use in a table
- The primary key does not accept the any duplicate and NULL values
- Primary keys can be used as foreign keys for other tables too.

#### Foreign key constraint (FOREIGN KEY)

- A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables.
- It is a column (or columns) that references a column (most often the primary key) of another table.

#### Unique constraint (UNIQUE KEY)

- Unique key is a constraint that is used to uniquely identify a tuple in a table.
- A table can have more than one unique key
- NULL values are allowed in case of a unique key
- Unique keys can be used as foreign keys for other tables too.
- Choose Unique
  - When columns other than the primary key must be absolutely unique from a system control perspective
  - When a column other than the primary key is used as the parent column (reference source) of the foreign key constraint (FOREIGN KEY)

#### Check constraint

- The CHECK constraint is used to limit the value range that can be placed in a column.

#### NOT NULL constraint (NOT NULL)

- The NOT NULL constraint will not allow a column to contain NULL values.

#### DEFAULT constraint

- A column can be assigned a default value.
- When a new row is created and no values are specified for some of the columns, those columns will be filled with their respective default values.

```sql
Example: 
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
