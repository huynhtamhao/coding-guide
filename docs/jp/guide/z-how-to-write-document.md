# How to write Document

## Markdown File Naming

- 各文字の区切りはハイフンとなる。

| ファイル名の頭文字                                 | 例                            |
|:-----------------------------------------------------------|:-----------------------------------|
| 共通規則： **'c'** で始まる。   | **c**-method-naming-conventions.md |
| データベース規則： **'db'** で始まる。| **db**-postgresql.md               |
| バックエンド規則： **'be'** で始まる。 | **be**-java.md                     |
| フロントエンド規則： **'fe'** で始まる。| **fe**-angular.md                  |
| それ以外の規則： **'z'** で始まる。     | **z**-how-to-write-document.md     |

<!-- ## Template

markdownファイル作成後、下記のコードをコピーしてmarkdownファイルに付ける。

```md:no-line-numbers
---
title: Java
---

# {{ $frontmatter.title }}
``` -->

## sidebarに項目を追加する方

Access directory `$PROJECT/docs/.vuepress/configs`

Open file sidebar-en.ts and sidebar-jp.ts.

```js:no-line-numbers
{
  text: 'Database',
  collapsible: false,
  sidebarDepth: 3,
  children: [
    'db-postgresql',
    'new-file1',
  ],
},
```

**Result:**

<img src="~@assets/images/how-to-write-document-1.png" alt="drawing" />

If you want add new Menu:

```js:no-line-numbers
{
  text: 'New Menu',
  collapsible: false,
  sidebarDepth: 3,
  children: [
    'new-file2',
  ],
},
```

**Result:**

<img src="~@assets/images/how-to-write-document-2.png" alt="drawing" />

## Markdown

[Reference Basic Syntax](https://www.markdownguide.org/basic-syntax/)

### Badge <Badge text="badge" />

#### Props

- type
  - Type: `'tip' | 'warning' | 'danger'`
  - Default: `'tip'`
- text
  - Type: `string`
  - Default: `''`
- vertical
  - Type: `'top' | 'middle' | 'bottom' | undefined`
  - Default: `undefined`

#### Example

**Input**

```md:no-line-numbers
- VuePress Badge output with **top** position - <Badge type="tip" text="v2" vertical="top" />
- VuePress Badge output with **middle** position - <Badge type="warning" text="v2" vertical="middle" />
- VuePress Badge output with **bottom** position - <Badge type="danger" text="v2" vertical="bottom" />
```

**Output**

- VuePress Badge output with **top** position - <Badge type="tip" text="v2" vertical="top" />
- VuePress Badge output with **middle** position - <Badge type="warning" text="v2" vertical="middle" />
- VuePress Badge output with **bottom** position - <Badge type="danger" text="v2" vertical="bottom" />

### Code Group

#### Markdown Style

**Input**

````md:no-line-numbers
:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::
````

**Output**

:::: code-group
::: code-group-item FOO

```js
const foo = 'foo'
```

:::
::: code-group-item BAR

```js
const bar = 'bar'
```

:::
::::

#### HTML Style

**Input**

````md:no-line-numbers
<CodeGroup>
  <CodeGroupItem title="FOO" active>
```js
  const foo = 'foo'
```
  </CodeGroupItem>

  <CodeGroupItem title="BAR">
```js
  const bar = 'bar'
```
  </CodeGroupItem>
</CodeGroup>
````

**Output**

<CodeGroup>
  <CodeGroupItem title="FOO" active>

```js:no-line-numbers
  const foo = 'foo'
```

  </CodeGroupItem>

  <CodeGroupItem title="BAR">

```js:no-line-numbers
  const bar = 'bar'
```

  </CodeGroupItem>
</CodeGroup>

### Custom Containers

#### Usage

```md:no-line-numbers
::: <type> [title]
[content]
:::
```

`type` は必須で, `title` と `content` は任意である。

サポートされる `type` :

- `tip`
- `warning`
- `danger`
- `details`

#### Example 1 (default title)

**Input**

```md:no-line-numbers
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::
```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::

#### Example 2 (custom title)

**Input**

````md:no-line-numbers
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::
````

**Output**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VuePress!')
```

:::
