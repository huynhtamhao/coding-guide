# Report

Use Jaspersoft to create report

## Layout design

<img src="@assets/images/report_jaspersoft.png"/>

- Outline: Liệt kê các thuôc tính đã sử dụng trong report
- Palette: liệt kê type design report
- Composite Elements: liệt kê Composite Element được thiết kế sẵn
- Tab Design: layout report thiết kế
- Tab Source: source của report
- Tab Preview: layout report khi được thực thi
- Cấu trúc report
  - Title: nội dung hiển thị đầu tiên trong report và chỉ hiển thị ở page đầu tiên
  - Page Header: nội dung hiển thị ở header page ở tất cả các page
  - Column Header: nội dung hiển thị đầu tiên ở mỗi page (page đầu tiên hiển thị sau title)
  - Detail: nội dung hiển thị dần qua các page
  - Column Footer: nội dung hiển thị cuối cùng ở mỗi page
  - Page Footer: nội dung chỉ hiển thị ở Footer page ở tất cả các page
  - Last Page Footer: nội dung chỉ hiển thị ở Footer của page cuối cùng
  - Summary: nội dung hiển thị cuối cùng trong report

## Some type design report

### Label

Use <img src="@assets/images/report_static_text.png"/> when fixed data

### Text Field

Use <img src="@assets/images/report_text_field.png"/> when change data

- Data is a parameter
  - Expression: $P{ + param name + }

- Data is a field
  - Expression: $F{ + field name + }

- Data is a variable
  - Expression: $V{ + variable name + }

### Table

#### Create table

- Palette - Click <img src="@assets/images/report_table.png"/> - Choose position in report
- You can create new dataset or using an existing dataset for table. If you don't have an existing dataset, that option **Create a Table using an existing dataset** is disabled
<img src="@assets/images/report_table_0.png"/>
- Create a table from a new dataset
  - Input dataset name and click **Next**
  <img src="@assets/images/report_table_1.png"/>
  - You will use data param, so select **Create an empty dataset** and click **Next**
  <img src="@assets/images/report_table_2.png"/>
  - Click **Next**
  <img src="@assets/images/report_table_3.png"/>
  - Click **Next**
  <img src="@assets/images/report_table_4.png"/>
  - Choose style table
  - Choose display header/footer
    - Table Header: display at first table
    - Column Header: display at header table
    - Group Header: display group of header
    - Group Footer: display group of footer
    - Column Footer: display at footer table
    - Table Footer: display at end of last table
  - Click **Finish**
  <img src="@assets/images/report_table_5.png"/>
  - The table appears in your report, in the spot where you dragged the element.
  <img src="@assets/images/report_table_6.png"/>
- Create a table using an existing dataset:
  - Select **Create a Table using an existing dataset**
  - Select a dataset from the drop-down and click **Next**
  <img src="@assets/images/report_table_7.png"/>
  - Click **Next**
  <img src="@assets/images/report_table_3.png"/>
  - Click **Next**
  <img src="@assets/images/report_table_4.png"/>
  - Choose style table
  - Choose display header/footer
    - Table Header: display at first table
    - Column Header: display at header table
    - Group Header: display group of header
    - Group Footer: display group of footer
    - Column Footer: display at footer table
    - Table Footer: display at end of last table
  - Click **Finish**
  <img src="@assets/images/report_table_5.png"/>
  - The table appears in your report, in the spot where you dragged the element.
  <img src="@assets/images/report_table_6.png"/>

#### Group Columns

- Choose column you want group on **Outline**  - Right click - Choose **Group Columns**  
<img src="@assets/images/report_table_group_column_0.png"/>

<img src="@assets/images/report_table_group_column_1.png"/>

- Example:

<img src="@assets/images/report_table_group_column_2.png"/>  

#### Change size column

##### Change handle

- If the table column layout is **Vertical Layout**, you will not be able to resize the field width in the table because this container layout centers the cell elements horizontally.  
<img src="@assets/images/report_table_column_0.png"/>  
<img src="@assets/images/report_table_column_1.png"/>
- Changing table column layout to **Free Layout** to enable field adjustment capability
<img src="@assets/images/report_table_column_2.png"/>
- Change size column
<img src="@assets/images/report_table_column_5.png"/>

##### Stretch to Table

- Choose column you want stretch on **Outline**  - Right click - Choose **Stretch to Table**  
<img src="@assets/images/report_table_column_3.png"/>  
<img src="@assets/images/report_table_column_4.png"/>

### Barcode

- Palette - Click <img src="@assets/images/report_barcode.png"/> - Choose position in report
<img src="@assets/images/report_barcode_create_0.png"/>
- Choose the type of Barbecue types and click **Finish**

## Parameter

- Outline - Right click **Parameters** - Choose **Create Parameter**
<img src="@assets/images/report_parameter_create_0.png"/>
<img src="@assets/images/report_parameter_create_1.png"/>
- Change information of parameter at properties

## Field

- Outline - Right click **Fields** - choose **Create Field**  
<img src="@assets/images/report_field_create_0.png"/>  
<img src="@assets/images/report_field_create_1.png"/>
- Change information of field at properties

## Dataset

- Tạo data để setting vào report
- Thường được sử dụng cho table, list
- Các bước tạo Dataset:
  - Click chuột phải vào report main ở Outline  
  <img src="@assets/images/report_dataset_0.png"/>
  - Hiển thị thông tin
  <img src="@assets/images/report_dataset_1.png"/>
