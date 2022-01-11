# Frontend Styles (CSS)

## SCSS

Hiện tại project Fenix mặc dù có implement scss nhưng đang sử dụng như css bình thường

```scss
.mat-row.hovered {
  outline: none;
  background: #eee;
}
.mat-row.highlighted {
  outline: none;
  background: lightblue;
}
```

Cách viết đúng của SCSS

```scss
@mixin background($background: #eee) {
  background: $background;
  outline: none;
}

.mat-row {
  &.hovered {
    @include background;
  }
  &.highlighted {
    @include background($background: lightblue)
  }
}
```

## Using BEM & SCSS

### Demo

**HTML**

```html
<div class="card">
  <span class="card__img"></span>
  <div class="card__content">
    <ul class="card__list">
      <li class="card__item card__item--active">Adobe XD</li>
      <li class="card__item">Figma</li>
      <li class="card__item">Sketch</li>
    </ul>
    <p class="card__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero atque iste nobis quidem dolore error animi voluptas quia corrupti consectetur.</p>
    <a class="card__link" href="#">Visit the link</a>
  </div>
</div>
```

**SCSS**

```css
.card {
    padding: 0 5em;
    width: 300px;

    &__img {
      display: block;
      height: 300px;
      width: 100%;
      background: #2ae897;
    }

    &__content {
        padding: 1.5em;
        background: white;
    }

    &__list {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    &__item {
        padding: .3em .5em;
        margin-right: .5em;
        background: rgb(230, 230, 230);
        border-radius: .3em;
        font-size: .85em;

        &--active {
            background: #3b3030;
            color: #FFFFFF;
            font-weight: bold;
        }
    }

    &__link {
        background: #2ae897;
        color: #3b3030;
        text-decoration: none;
        padding: .5em 1em;
        border-radius: .5em;
        display: inline-block;
        margin-top: .5em;
        font-weight: bold;
        right: 0;

        &:hover {
            background: #575757;
            color: white;
        }
    }
}
```

## Reference

- [SASS](https://sass-lang.com/documentation)
- [BEM](http://getbem.com/naming/)
- [Using BEM with SCSS](https://dev.to/alexbeje/bem-block-element-modifier-3fgn)
