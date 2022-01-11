# How to write Document

## Markdown File Naming

- Sử dụng hyphen giữa các chữ

| Ký tự bắt đầu của tên file                                 | Example                            |
|:-----------------------------------------------------------|:-----------------------------------|
| Đối với các quy tắc common thì bắt đầu bằng chữ **'c'**    | **c**-method-naming-conventions.md |
| Đối với các quy tắc database thì bắt đầu bằng chữ **'db'** | **db**-postgresql.md               |
| Đối với các quy tắc backend thì bắt đầu bằng chữ **'be'**  | **be**-java.md                     |
| Đối với các quy tắc frontend thì bắt đầu bằng chữ **'fe'** | **fe**-angular.md                  |
| Đối với các quy tắc khác thì bắt đầu bằng chữ **'z'**      | **z**-how-to-write-document.md     |

<!-- ## Template

Sau khi tạo file markdown thì copy đoạn code bên dưới lên đầu markdown file.

```md:no-line-numbers
---
title: Java
---

# {{ $frontmatter.title }}
``` -->

## Hướng dẫn thêm item vào sidebar

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

```md
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

````md
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

````md
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

### Custom Containers

#### Usage

```md:no-line-numbers
::: <type> [title]
[content]
:::
```

The `type` is required, and the `title` and `content` are optional.

Supported `type` :

- `tip`
- `warning`
- `danger`
- `details`

#### Example 1 (default title)

**Input**

```md
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

````md
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
