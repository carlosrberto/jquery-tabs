# jQuery tabs

Simple jQuery plugin for create tabs navigation

## How to use

### Markup

```html
<div class="tabs">
    <ul class="tabs-nav">
        <li>tab 1</li>
        <li>tab 2</li>
    </ul>
    <ul class="tabs-panels">
        <li>tab 1 content</li>
        <li>tab 2 content</li>
    </ul>
</div>
```

### JavaScript

```javascript
$('.tabs').tabs();
```

Default options.

```javascript
$('.fadeslide').fadeslide({
    navEl: '.tabs-nav',
    panelEl: '.tabs-panels',
    index: 0
});
```
