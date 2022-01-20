# SQL Optimization

**Các nguyên nhân gây chậm truy vấn SQL**

- Không/thiếu sử dụng các lợi ích của Indexes.
- Trả về các dữ liệu không cần thiết.
- Locks or deadlocks bị cấm.
- Các câu truy vấn được viết nghèo nàn.
- Không/thiếu tận dụng được I/O striping.
- Thiếu bộ nhớ.

## Index

- Index đối với column thường xuyên query, mà ít có thay đổi.
- Chẳng hạn như column `name` của các table bên dưới
  - Customer
  - Supplier

## Chỉ select những field cần thiết

- Sử dụng select * sẽ khiến SQL quét toàn bộ table,trả về dữ liệu trùng lặp tiêu tốn I/O.

```sql
SELECT * FROM table_1 LEFTJOIN table_2 WHERE table_1.id = table_2.gid;
-- =>
SELECT table_1.id,table_2.username,table_2.lucky FROM table_1 LEFTJOIN table_2 WHERE table_1.id = table_2.gid;
```

## Operator

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

## Hạn chế sử dụng function lên column

hạn chế sử dụng function lên column

## Sử dụng SQL Procedure

Đối với các thao tác được thực hiện 1 cách thường xuyên và có xử lý phức tạp ta sử dụng SQL procedure(SP) với nhiều lợi ích như dưới đây.

- Giảm lượng dữ liệu truyền đến Server SP được lưu sẵn ở phía server do đó không cần phải gửi cả câu lệnh SQL dài tới server mà chỉ cần gửi tham số.
- SP được biên dịch ngay ở lần đầu chạy, những lần sau chạy SP sẽ sử dụng lại file đã biên dịch trước đó nên tốc độ sẽ nhanh hơn.
- Mặt khác khi sử dụng SP trong source có thể dùng vòng for để gọi nhiều câu lệnh SQL gửi lên server điều này giúp tái sử dụng source.
