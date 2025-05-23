const attributesPart = document.querySelector(".attributes-part");
const tagContainer = document.querySelector(".tag-container");
const clearFilter = document.querySelector(".clear-filter");

// Toggle dropdown collapse
attributesPart.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (button) {
    const attributesBox = button.closest(".attributes");
    if (attributesBox) {
      attributesBox.classList.toggle("collapsed");
    }
  }
});

// Add tag for clicking options like in Category (attribute 1)
document.querySelectorAll("#attribute-first .options-parent").forEach((optionsParent) => {
  optionsParent.addEventListener("click", (e) => {
    const option = e.target.closest(".options");
    if (option) {
      addTag(option.textContent.trim());
    }
  });
});

// For all other attributes except #4 (Price range),
// listen for checkbox changes to add/remove tags
document.querySelectorAll(".attributes").forEach((attr) => {
  const attrId = attr.id;
  if (attrId !== "1" && attrId !== "4") {
    const checkboxes = attr.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          addTag(checkbox.value);
        } else {
          removeTag(checkbox.value);
        }
      });
    });
  }
});

// Create and append a tag box
function addTag(text) {
  // Check if tag already exists - avoid duplicates
  if ([...tagContainer.children].some(tag => tag.textContent.trim() === text)) return;

  const tagBox = document.createElement("div");
  tagBox.classList.add("tag-box");
  tagBox.innerHTML = `<p>${text}</p><i class="ri-close-line"></i>`;
  tagContainer.appendChild(tagBox);

  // Remove tag on close icon click
  const closeIcon = tagBox.querySelector("i");
  closeIcon.addEventListener("click", () => {
    tagBox.remove();
    // If tag corresponds to a checkbox, uncheck it
    uncheckCheckbox(text);
  });
}

// Remove a tag by its text content
function removeTag(text) {
  const tags = tagContainer.querySelectorAll(".tag-box");
  tags.forEach(tag => {
    if (tag.textContent.trim() === text) {
      tag.remove();
    }
  });
  // Also uncheck checkbox if any
  uncheckCheckbox(text);
}

// Uncheck the checkbox for the given tag text value
function uncheckCheckbox(text) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allCheckboxes.forEach((checkbox) => {
    if (checkbox.value === text) {
      checkbox.checked = false;
    }
  });
}

// Clear all tags and uncheck all checkboxes on clear filter
clearFilter.addEventListener("click", () => {
  tagContainer.innerHTML = "";
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
});
