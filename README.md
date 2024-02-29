# LazyImg Custom HTML Element

## Overview

The `LazyImg` custom HTML element is designed to provide a lazy-loading image functionality within web applications. It enhances performance by loading images asynchronously and updating their load progress in real-time. This element is especially useful for improving the user experience in image-heavy web applications, reducing initial load times, and conserving bandwidth by loading images only as needed.

## Features

- **Asynchronous Image Loading**: Loads images in the background without blocking the main thread, improving page responsiveness.
- **Progress Tracking**: Displays the loading progress of each image, offering visual feedback to the user.
- **Automatic Retry on Failure**: Attempts to reload the image upon a loading error, with a randomized retry delay.
- **Custom Error Handling**: Displays a custom error message if an image fails to load or if the image URL is not provided.

## How to Use

### Installation

To use the `LazyImg` element, include the class definition script in your HTML document or web component module:

```html
<script src="path/to/LazyImg.js"></script>
```

### Usage

After including the script, you can use the `LazyImg` element anywhere in your HTML documents or dynamic JavaScript code. Here's a simple example:

```html
<lazy-img src="path/to/your/image.jpg"></lazy-img>
```

#### Attributes

- `src`: Specifies the URL of the image to load lazily. This attribute is required for the `LazyImg` element to function properly.

### Styling

The `LazyImg` element can be styled using CSS like any standard HTML element. For example:

```css
lazy-img {
  width: 100%;
  height: auto;
  display: block;
}
```

**Note:** The image loaded by `LazyImg` will inherit the dimensions of the `lazy-img` element, so it's recommended to set appropriate width and height either directly on the `lazy-img` element or through CSS.

### Error Handling

If an image fails to load or if the `src` attribute is missing, `LazyImg` will display an error message within the element. You can style these error messages using CSS:

```css
lazy-img error {
  color: red;
  font-weight: bold;
}
```

### JavaScript Interaction

Although `LazyImg` does not expose public methods for interaction, you can manipulate it through standard DOM methods and properties, such as setting attributes:

```javascript
document.querySelector('lazy-img').setAttribute('src', 'new/path/to/image.jpg');
```

## Browser Compatibility

`LazyImg` uses modern web technologies such as custom elements and the Fetch API. Ensure your target browsers support these features, or include appropriate polyfills for broader compatibility.

## Conclusion

The `LazyImg` custom HTML element offers an efficient, easy-to-use solution for lazy-loading images with progress tracking and error handling. Its integration into your web projects can significantly improve page load times and user experience, especially in content-rich applications.
