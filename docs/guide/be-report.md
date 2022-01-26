# Report

Use Jaspersoft(TIBCO Jaspersoft® Studio 6.18.1) to create report

## Layout design

<img src="@assets/images/report/report_jaspersoft.png"/>

- Outline: outline the structure of the report
- Palette: list of design type
- Composite Elements: list of Composite Element pre-designed
- Tab Design: layout of report
- Tab Source: source of report
- Tab Preview: layout report when executed
- Structure report
  - Title: display in the first report and only display on the first page
  - Page Header: display at Page Header of every page
  - Column Header: display first of every page (the first page displayed after the title)
  - Detail: displayed through the pages
  - Column Footer: display end of every page
  - Page Footer: display at Page Footer of every page
  - Last Page Footer: display at Page Footer of last page
  - Summary: display at end report

## Some type design

### Label

Use <img src="@assets/images/report/report_static_text.png"/> when fixed data

### Text Field

Use <img src="@assets/images/report/report_text_field.png"/> when change data

- Data is a parameter
  - Expression: $P{ + param name + }

- Data is a field
  - Expression: $F{ + field name + }

- Data is a variable
  - Expression: $V{ + variable name + }

### Table

#### Create table

- Palette - Click <img src="@assets/images/report/report_table.png"/> - Choose position in report
- You can create new dataset or using an existing dataset for table. If you don't have an existing dataset, that option **Create a Table using an existing dataset** is disabled
<img src="@assets/images/report/report_table_0.png"/>
- Create a table from a new dataset
  - Input dataset name and click **Next**
  <img src="@assets/images/report/report_table_1.png"/>
  - You will use data param, so select **Create an empty dataset** and click **Next**
  <img src="@assets/images/report/report_table_2.png"/>
  - Click **Next**
  <img src="@assets/images/report/report_table_3.png"/>
  - Click **Next**
  <img src="@assets/images/report/report_table_4.png"/>
  - Choose style table
  - Choose display header/footer
    - Table Header: display at first table
    - Column Header: display at header table
    - Group Header: display group of header
    - Group Footer: display group of footer
    - Column Footer: display at footer table
    - Table Footer: display at end of last table
  - Click **Finish**
  <img src="@assets/images/report/report_table_5.png"/>
  - The table appears in your report, in the spot where you dragged the element.
  <img src="@assets/images/report/report_table_6.png"/>
- Create a table using an existing dataset:
  - Select **Create a Table using an existing dataset**
  - Select a dataset from the drop-down and click **Next**
  <img src="@assets/images/report/report_table_7.png"/>
  - Click **Next**
  <img src="@assets/images/report/report_table_3.png"/>
  - Click **Next**
  <img src="@assets/images/report/report_table_4.png"/>
  - Choose style table
  - Choose display header/footer
    - Table Header: display at first table
    - Column Header: display at header table
    - Group Header: display group of header
    - Group Footer: display group of footer
    - Column Footer: display at footer table
    - Table Footer: display at end of last table
  - Click **Finish**
  <img src="@assets/images/report/report_table_5.png"/>
  - The table appears in your report, in the spot where you dragged the element.
  <img src="@assets/images/report/report_table_6.png"/>

#### Group Columns

- Choose column you want group on **Outline**  - Right click - Choose **Group Columns**  
<img src="@assets/images/report/report_table_group_column_0.png"/>

<img src="@assets/images/report/report_table_group_column_1.png"/>

- Example:

<img src="@assets/images/report/report_table_group_column_2.png"/>  

#### Change size column

##### Change handle

- If the table column layout is **Vertical Layout**, you will not be able to resize the field width in the table because this container layout centers the cell elements horizontally.  
<img src="@assets/images/report/report_table_column_0.png"/>  
<img src="@assets/images/report/report_table_column_1.png"/>
- Changing table column layout to **Free Layout** to enable field adjustment capability
<img src="@assets/images/report/report_table_column_2.png"/>
- Change size column
<img src="@assets/images/report/report_table_column_5.png"/>

##### Stretch to Table

- Choose column you want stretch on **Outline**  - Right click - Choose **Stretch to Table**  
<img src="@assets/images/report/report_table_column_3.png"/>  
<img src="@assets/images/report/report_table_column_4.png"/>

### Barcode

- Palette - Click <img src="@assets/images/report/report_barcode.png"/> - Choose position in report
<img src="@assets/images/report/report_barcode_create_0.png"/>
- Choose the type of Barbecue types and click **Finish**
- Input data of Barcode at **Code Expression** of tab **Barcode**

## Parameter

- Outline - Right click **Parameters** - Choose **Create Parameter**
<img src="@assets/images/report/report_parameter_create_0.png"/>
<img src="@assets/images/report/report_parameter_create_1.png"/>
- Change information of parameter at properties

## Field

- Outline - Right click **Fields** - choose **Create Field**  
<img src="@assets/images/report/report_field_create_0.png"/>  
<img src="@assets/images/report/report_field_create_1.png"/>
- Change information of field at properties

## Dataset

- Create data to set in the report
- Alway use to table, list
- Step create to Dataset:
  - Outline - Right click main report - Choose **Create Dataset**  
  <img src="@assets/images/report/report_dataset_0.png"/>
  - You will use data param, so select **Create an empty dataset**
  - Input dataset name and click **Finish**
  <img src="@assets/images/report/report_dataset_1.png"/>
  <img src="@assets/images/report/report_dataset_2.png"/>

- Create data for dataset
  - Create handle
    - Add fields in dataset  
    <img src="@assets/images/report/report_dataset_3.png"/>
    - Add Parameter (name of dataset), type is **List**
    <img src="@assets/images/report/report_dataset_4.png"/>
    <img src="@assets/images/report/report_dataset_5.png"/>

  - Import file jar
    - **Project Explorer** - Right click project - Choose **Properties**
    <img src="@assets/images/report/report_field_jar_0.png"/>
    - **Java Build Path** - **Classpath** - Click **Add External JARs**
    <img src="@assets/images/report/report_field_jar_1.png"/>
    - Choose file jar you want import - Click **Open**
    <img src="@assets/images/report/report_field_jar_2.png"/>
    - Click **Apply and close**
    <img src="@assets/images/report/report_field_jar_3.png"/>
    - Imported the jar file into the project  
    <img src="@assets/images/report/report_field_jar_4.png"/>
    - Add data into field
    - **Outline** - Right click dataset - Choose **Dataset and query**
    <img src="@assets/images/report/report_field_jar_5.png"/>
    - **Java Bean** - Choose file you want open
    <img src="@assets/images/report/report_field_jar_6.png"/>
    - Search file name and choose file in suggestion list - Click **Open**
    <img src="@assets/images/report/report_field_jar_7.png"/>
    - Choose field you want add - Click **Add selected field(s)** - Click **OK**
    <img src="@assets/images/report/report_field_jar_8.png"/>
    - Added fields in dataset  
    <img src="@assets/images/report/report_field_jar_9.png"/>

## Compile report

- Click **Compile report**  
<img src="@assets/images/report/report_compile_0.png"/>
- File *.jasper* is generated  
<img src="@assets/images/report/report_compile_1.png"/>

## Run file report
