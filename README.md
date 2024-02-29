# Lazy Image Loader Custom Element

This project defines a custom HTML element, `<lazy-img>`, designed for lazy-loading images with progress updates. It is an innovative solution for improving web performance by loading images as needed rather than all at once during the initial page load.

## Features

- **Lazy-Loading:** Images are loaded only when the `<lazy-img>` element is inserted into the DOM, reducing initial page load time.
- **Progress Updates:** Displays loading progress in real-time, enhancing user experience during slow network conditions.
- **Error Handling:** Provides error feedback directly within the element and attempts to reload the image after a brief, randomized delay.

## How It Works

The `LazyImg` class extends `HTMLElement` and implements the following key functionalities:

1. **Image Source Attribute (`src`):** The `src` attribute specifies the URL of the image to be lazy-loaded.
2. **Connected Callback:** Triggered when the element is inserted into the DOM, initiating the image loading process.
3. **Progress Calculation:** As the image loads, progress is calculated and displayed within the element.
4. **Error Handling:** Errors during the loading process are displayed, and the element will retry loading the image after a randomized delay.

## Usage

To use the `<lazy-img>` element in your HTML, simply include it as you would any custom element:

```html
<lazy-img src="path/to/your/image.jpg"></lazy-img>
```
Ensure the JavaScript defining LazyImg is executed before using the element in your HTML.

Installation
Include the JavaScript code for the LazyImg class in your project. You can do this by adding the script directly in your HTML or by importing it into your JavaScript bundle.

Contributing
Contributions are welcome! If you'd like to improve the lazy image loader, please feel free to fork the repository, make your changes, and submit a pull request.

License
This project is open source and available under the MIT License.

Example
Here's a simple example of how to include and use the <lazy-img> element in an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lazy Image Loader Example</title>
</head>
<body>
    <lazy-img src="path/to/your/image.jpg"></lazy-img>

    <script src="path/to/lazy-img.js"></script>
</body>
</html>

```

Remember to adjust the src attribute to the path of your image and the <script> source to the location of your LazyImg class definition.

