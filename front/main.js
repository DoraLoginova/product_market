import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { submitForm } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Product Market</h1>
  <form id="productForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="description">Description:</label>
    <textarea id="description" name="description" required></textarea>

    <label for="price">Price:</label>
    <input type="number" id="price" name="price" step="0.01" required>

    <button type="submit">Submit</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody id="productTable"></tbody>
  </table>
  </div>
`

submitForm(document.querySelector('#productForm'), document.querySelector('#productTable'))
