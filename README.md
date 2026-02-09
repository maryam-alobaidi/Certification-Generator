# 📜 Certification Generator (Live Preview & Print-Ready)

An interactive web application built with **Vanilla JavaScript** that allows users to generate professional certificates on the fly. It features a real-time live preview, smart data validation, and is fully optimized for high-quality A4 printing.

## ✨ Key Features

* **Live Instant Preview:** Certificate details (Student Name, Course, Date, and Serial) update instantly as the user types.
* **Dynamic Signature Upload:** Supports custom signature images with memory-safe handling using `URL.createObjectURL` and `URL.revokeObjectURL`.
* **Smart Form Validation:** A built-in validation engine monitors all fields and only enables the print button when all requirements are met.
* **Print-Ready CSS:** Custom `@media print` styles ensure only the certificate is printed, perfectly formatted for A4 Landscape.
* **Demo & Reset:** One-click demo button to quickly test the layout and a reset button to clear all inputs.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the input panel and certificate layout.
* **CSS3:** Advanced styling using **Flexbox** and **Grid**, along with print-specific media queries.
* **Vanilla JavaScript:** * Efficient **DOM Manipulation** for real-time updates.
    * **Event Handling** for seamless user interaction.
    * **Blob Memory Management** for image processing.

## 🚀 How to Use

1. **Fill the Fields:** Enter the student, course, and instructor details in the left panel.
2. **Upload Signature:** Choose a PNG/JPG file for the signature; it will appear instantly on the certificate.
3. **Verify:** Check the status line; once all fields are ✅ valid, the print button will be enabled.
4. **Print:** Click **"Print A4 Landscape"** to open the browser's print dialog.

## 📂 Project Structure

* `index.html` - The core structure of the app.
* `style.css` - UI styling and print optimizations.
* `javaScript.js` - Business logic, validation, and image handling.
* `/images` - Assets including logos, seals, and default signatures.

---
Developed with focus on clean logic and user experience during the programming journey with "Abu-Hadhoud".
