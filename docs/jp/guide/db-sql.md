# SQLスタイルガイド (Postgresql)

## 命名規約

### 一般

- ユニークで、予約語と異なる名前を選定する。
- 長さを最大30バイトとする—実際的に30文字（マルチバイト文字でない限り）
- 名前は文字で始まる。アンダースコアで終わらないこと。
- 文字、数字、アンダースコアのみからなる。
- 単語をアンダースコアで連結する (アンダースコアは通常スペースの代わりに使う(first name → first_name).
) 連続的に複数のアンダースコアの利用を避けたい—読みにくからである。
- 一般的に分かる言葉以外に略語は避けたい。
- 利用可能文字はalphanumeric 文字とアンダースコア。
- 小文字のみを利用する。
- 接続詞(Prefix) + 論理名。
- 最大の長さは30文字。
- index名は``"ix_" + logical name + `_` + key number`` (key number: 01 ～ 99)
- Procedures & Function: 名前は動詞を含めること。
- 自動生成の index と sequenceはこのルールを適用すべきでない

```テキスト
数字: 1234567890
文字: abcdefghijklmnopqrstuvwxyz
記号: _
```

|         Type         | Prefix |               Example                |
| :------------------- | :----- | :----------------------------------- |
| Table                |        |                                      |
| Column               |        |                                      |
| View                 | vw_    | vw_monthly_sales_amount              |
| Materialized View    | mv_    | mv_monthly_sales_amount              |
| Sequence             | seq_   | seq_credit_detail_id                 |
| Index                | idx_   | ix_credit_detail_01                  |
| Procedure & Function |        | get_user_info, calculate_total_class |

## Query

- SELECT、WHEREなどのキーワードは常に大文字を使用している。
- コードが分かりやすいために適用なスペース、字下げを使用する。
列、結合（JOIN）、GROUP BYなどのクエリには２スペース分の字下げを設定したほうがいいです。
WITHのSQLにはすべて4スペース分の字下げを設定する必要がある。
- なるべく標準SQLを使用する。（今後DBへの変換は比較的容易に行なえるため）

**例**

```sql:
WITH my_data AS (
    SELECT *
    FROM prod.my_data
    WHERE filter = 'my_filter'
)

SELECT
  column_name1,
  column_name2,
  column_name3
FROM table_1
JOIN table_2
  ON table_1.id = table_2.id
WHERE clouds = true
  AND gem = true
GROUP BY 1,2,3
HAVING column_name1 > 0
  AND column_name2 > 0
```

## postgres から javaへのデータ型

|       postgres       |              java               |
| -------------------- | ------------------------------- |
| bigserial(8 bytes)   | Long                            |
| numeric              | BigDecimal/int                  |
| integer(4 bytes)     | integer                         |
| decimal              | decimal                         |
| long                 | long                            |
| float                | float                           |
| char(2000 bytes)     | String                          |
| varchar2(4000 bytes) | String                          |
| text                 | String                          |
| bytea                | byte[]                          |
| timestamp            | Instant/LocalDate/LocalDateTime |
| date                 | LocalDate                       |
| boolean              | boolean                         |

## 列の順序

- 同じテーブルに配置されたビジネスの観点から密接に関連しているデータフィールドは、隣り合って、または近くにグループ化すべきである。
- 主キーとして設定された列は、テーブルの先頭に配置する。
- 候補キーと外部キー制約（FOREIGN KEY）は最初に配置される。
- テーブル共通フィールド（主に、アーキテクチャ設計に依存するシステム制御用の列など）をテーブルの最後に配置し、ビジネスの観点から設計されたすべての列をテーブル共通項目の前に配置する。
- ビジネス上の目的で、キーデータは最初に配置され、非キーデータは最後に配置される。
- 更新頻度の低い列は最初に配置され、更新頻度の高い列は最後に配置される。
- 頻繁に参照される列は最初に配置され、頻繁に参照されない列は最後に配置される。
- 固定長データは最初に配置され、可変長データは最後に配置される。

## 制約

### 主キー制約 (PRIMARY KEY)

- 主キーは、そのテーブル内の各タプル（行）を一意に識別するテーブルの列である。
- テーブルで使用できる主キーは1つだけである。
- 主キーは重複する値とNULL値は不可である。
- 主キーは、他のテーブルの外部キーとしても使用できる。

### 外部キー制約 (FOREIGN KEY)

-外部キーは、リレーショナルデータベーステーブルの列または列のグループであり、2つのテーブルのデータ間をリンクさせる。
-別のテーブルの列（ほとんどの場合、主キー）を参照する1つまたは複数の列です。

### ユニーク制約 (UNIQUE KEY)

- 一意キー（ユニークキー）は、テーブル内のタプルを一意に識別するために使用される制約である。
- テーブルには複数の一意キーを含めることができる。
- 一意キーの場合はNULL値を使用できる
- 一意キーは、他のテーブルの外部キーとしても使用できる。
- ユニークの選択
  - 主キー以外の列がシステム制御の観点から完全に一意である必要がある場合
  - 主キー以外の列が外部キー制約（FOREIGN KEY）の親列（参照ソース）として使用されている場合

### Check 制約

- CHECK制約は、列に配置できる値の範囲を制限するために使用される。

### NOT NULL 制約 (NOT NULL)

- NOT NULL制約は、列にNULL値を含めることは不可である。

### DEFAULT 制約

- 列にデフォルト値を割り当てることができる。
- 新しい行が作成され、一部の列に値が指定されていない場合、それらの列にはそれぞれのデフォルト値が入力される。

例:

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

<!-- TODO: この部分はDB設計に使用するため、日本側担当となる。 -->
<!-- ## Design DB

### テーブル

- 日本語のテーブル名が必要である。
- 日本語の列名が必要である。
- テーブルの意味についてコメントできる

```text
例:
テーブル名: storage_location_class_master
日本語名: 保管場所区分マスタ
説明: 保管場所区分の定義。区分名と保管場所の種別を管理する。
```

### 列 (table field)

- 日本語の列名が必要である。
- 列の意味、列の値の意味についてコメントできる。
- テーブルの必須列（共通フィールド）

| 項目名（日本語） | 項目名（日本語）              | データ型 | データ型(postgres) | データ型 (java) | 備考                 |
| ------------- | --------------------- | ---- | -------------- | ----------- | ------------------ |
| 保管場所種別   | storage_location_type | 文字列  | varchar(2)     | String      | 1:保管場所、2:伝票、3:勘定科目 |
| 有効開始日    | effective_start_date  | 日付   | date           | LocalDate   | マスタが有効になる日付        | -->

<!-- | 項目名（日本語） | 項目名（日本語）     | データ型 | データ型(postgres) | データ型(java) | 備考             |
| --------    | ------------ | ---- | -------------- | ---------- | -------------- |
| 登録者      | created_user | 文字列  | varchar        | String     | マスタを登録したユーザーID |
| 登録日時    | created_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   |
| 更新者      | updated_user | 文字列  | varchar        | String     | マスタを登録した日付時刻   |
| 更新日時     | updated_date | 日付時刻 | timestamp      | Instant    | マスタを登録した日付時刻   | -->

## SQL 最適化

**どうしてSQL問い合わせが遅いか、その原因は以下となる。**

- Indexesのメリットを適用しない。
- 不要なデータを返却する。
- Locks・Deadlocksは禁止される。
- クエリは簡単に書かれる。
- I/O stripingを適用しない。
- メモリ不足

### Index

- クエリを常に実行されるがあまり変更しないカラムに使用するIndex
- 例：下記のテーブルの`name`というカラム
  - Customer
  - Supplier

### 必要なフィールドのみセレクトする。

- select *を使用すれば、SQLでテーブルを全て処理し重複データが返却される。（I/Oがかかる）

```sql
SELECT * FROM table_1 LEFTJOIN table_2 WHERE table_1.id = table_2.gid;
-- =>
SELECT table_1.id,table_2.username,table_2.lucky FROM table_1 LEFTJOIN table_2 WHERE table_1.id = table_2.gid;
```

### Operator

- 否定演算子：Indexは否定演算子を使用しないため、
次の演算子を使用するとクエリが遅くなるので、十分に注意してください。
`IS NULL`, `!=`, `!>`, `!<`, `NOT`, `NOT EXISTS`, `NOT IN`, `NOT LIKE`
- ２回比較演算子

```sql
SELECT user_id, user_name FROM user WHERE user_amount < 3001
```

Instead:

```sql
SELECT user_id, user_name FROM user WHERE user_amount <= 3000
```

- 不当なlikeを使用する。（特に%dataのlike)

### なるべくカラムでのファンクション使用を制限する。

なるべくカラムでのファンクション使用を制限する。

### SQLプロシージャを使用する。

常に実行される複雑な処理の操作については下記のメリットがあるので、SQLプロシージャ(SP)を使用したほうがいいです。

- SPサーバに渡されるデータ量が減少されるので、サーバに長いSQLを送信しなくてよいです。（パラメータを送信するだけOKです。）
- SPが初回で翻訳される。２回目以降に実行されるSPは前回翻訳されたファイルを流用するので、速度がより速くなる。
- ソースコードでSPを使用する時、for句を使用して複数のSQLを呼び出す。そうするとソースコードが流用される。
