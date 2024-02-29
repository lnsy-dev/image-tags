// Define a custom HTML element that lazy-loads images.
class LazyImg extends HTMLElement {
  // This lifecycle hook runs when the element is inserted into the DOM.
  connectedCallback() {
    // Get the 'src' attribute from the element.
    this.src = this.getAttribute('src');
    // If 'src' is not provided, display an error message inside the element.
    if (this.src === null) {
      this.innerHTML = `<error>SRC required</error>`;
      return;
    }
    // Start loading the image.
    this.loadImage();
    // Set the CSS object-fit property to fill to ensure the image covers the element area.
    this.style.objectFit = 'fill';
  }

  // Updates the element's innerHTML to display the current loading progress.
  updateProgress(progress) {
    this.innerHTML = `<status>${progress.toFixed(2)}%</status>`;
  }

  // Asynchronously loads the image from the 'src' URL.
  async loadImage() {
    try {
      // Use the Fetch API to get the image data.
      const response = await fetch(this.src);
      // If the fetch request fails (response.ok is false), throw an error.
      if (!response.ok) {
        throw new Error('Failed to load image');
      }

      // Try to retrieve the total size of the image for progress calculation.
      const totalSize = response.headers.get('content-length');
      if (!totalSize) {
        throw new Error('Unable to determine image size');
      }

      // Read the image data in chunks.
      const reader = response.body.getReader();
      let loadedSize = 0; // Tracks the amount of data loaded.
      const chunks = []; // Stores the chunks of data.
      while (true) {
        const { done, value } = await reader.read();
        // If reading is complete, exit the loop.
        if (done) break;
        // Add the chunk to the array and update the loaded size.
        chunks.push(value);
        loadedSize += value.length;
        // Calculate and update the loading progress.
        const progress = (loadedSize / totalSize) * 100;
        this.updateProgress(progress);
      }

      // Once all chunks are loaded, create a Blob and use it to display the image.
      const blob = new Blob(chunks);
      const dataUrl = URL.createObjectURL(blob);
      const img = document.createElement('img');
      img.setAttribute('src', dataUrl);
      this.innerHTML = ''; // Clear any previous content or progress indication.
      this.appendChild(img); // Add the image to the element.
      img.style.display = 'block'; // Ensure the image is displayed.

    } catch (error) {
      // If an error occurs, display it and retry loading after a random delay.
      this.innerHTML = `<error>${error.message}</error>`;
      setTimeout(() => {
        this.loadImage();
      }, 5000 * Math.random());
    }
  }

  // Defines which attributes changes should be observed (none in this case).
  static get observedAttributes() {
    return [];
  }

  // Handles attribute changes. Currently, it does nothing.
  attributeChangedCallback(name, old_value, new_value) {
    switch (name) {
      // No attributes to observe, so no action is taken.
      default:
    }
  }
}

// Register the custom element with the browser.
customElements.define('lazy-img', LazyImg);
