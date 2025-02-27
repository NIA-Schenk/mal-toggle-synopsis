function toggleSynopsis() {
  const synopsis = document.querySelector('p[itemprop="description"]');
  const button = document.getElementById("toggleSynopsisButton");

  if (synopsis) {
    if (!synopsis.classList.contains("display-synopsis")) {
      synopsis.classList.add("display-synopsis");
      if (button) {
        button.innerText = "Hide Synopsis";
      }
    } else {
      synopsis.classList.remove("display-synopsis");
      if (button) {
        button.innerText = "Show Synopsis";
      }
    }
  }
}

function addToggleButton() {
  const header = document.querySelector('.floatRightHeader');

  if (header && !document.getElementById("toggleSynopsisButton")) {
    // Create the button element
    const toggleButton = document.createElement("a");
    toggleButton.innerText = "Show Synopsis"; // Initial text when hidden
    toggleButton.href = "#";
    toggleButton.style.fontWeight = "normal";
    toggleButton.id = "toggleSynopsisButton";

    // Attach click event to toggle synopsis
    toggleButton.addEventListener("click", (event) => {
      event.preventDefault();
      toggleSynopsis();
    });

    // Insert button into the header
    header.appendChild(document.createTextNode(" | "));
    header.appendChild(toggleButton);
  }
}

function injectCSS() {
  const style = document.createElement("style");
  style.textContent = `
    p[itemprop="description"] {
      display: none; /* Hide by default */
    }
    .hidden-synopsis {
      display: none !important; /* Ensures it remains hidden when toggled */
    }
    .display-synopsis {
      display: block !important; /* Ensures it remains visible when toggled */
    }
  `;
  if (document.head) {
    document.head.appendChild(style);
  } else {
    document.documentElement.appendChild(style);
  }
}

injectCSS();

// Run the function to add the button when the page loads
window.onload = addToggleButton;
