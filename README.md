
## 📄 README.md

````markdown
# 🚪 @angay/logout-modal

A lightweight **Angular logout confirmation modal** library with a clean UI, animations, and reusable service for easy integration.

---

## 🚀 Installation

```bash
npm install @angay/logout-modal
````

Make sure you are using **Angular v17+** in your project.

---

## 📦 Usage

### 1. Import the component

Since this is a **standalone component**, you can directly import it where needed:

```ts
import { Component } from '@angular/core';
import { LogoutModalComponent } from '@angay/logout-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LogoutModalComponent],
  template: `
    <button (click)="openModal()">Logout</button>
    <angay-logout-modal></angay-logout-modal>
  `
})
export class AppComponent {
  constructor(private logoutModal: LogoutModalService) {}

  openModal() {
    this.logoutModal.open(() => {
      console.log("✅ User confirmed logout");
      // your logout logic here
    });
  }
}
```

---

### 2. Service Methods

* **`open(callback?: () => void)`** → Opens the modal. If a callback is provided, it will be executed on confirm.
* **`close()`** → Closes the modal.
* **`confirm()`** → Executes the callback (if any) and closes the modal.

---

## ⚙️ Customization via Inputs

The modal supports customization through inputs:

```html
<angay-logout-modal
  [heading]="'Logout Now?'"
  [message]="'Do you really want to log out of your account?'"
  [confirmButtonText]="'Yes, Logout'"
  [cancelButtonText]="'Cancel'">
</angay-logout-modal>
```

---

## 🎨 Styling

The modal comes with a default **modern look** (with animations).
You can override the styles in your project using Angular’s global styles.

---

## 🛠️ Supported Angular Versions

* Angular `^17.0.0`

---

## 📜 License

MIT © Angay

---
