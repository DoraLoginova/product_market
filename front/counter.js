export function submitForm(form, tableBody) {
  form.onsubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch("http://127.0.0.1:8000/api/products/", {
        method: "POST",
        body: new FormData(form),
      })

      let result = await response.json()
      let getResponse = await fetch("http://127.0.0.1:8000/api/products")
      fillTable(tableBody, await getResponse.json())

    } catch (e) {
      alert("Ошибка", e)
    }
  }
}

function fillTable(tableBody, productList) {
  tableBody.innerHTML = ""
  const fragment = new DocumentFragment()
  for(let i = 0; i < productList.length; i ++) {
    const row = document.createElement("tr")
    const item = productList[i]
    const itemKeys = ['name', 'description', 'price']
    for(let j = 0; j < itemKeys.length; j ++) {
      const cell = document.createElement("td")
      cell.textContent = item[itemKeys[j]]
      row.append(cell)
    }
    
    fragment.append(row)
  }
  
  tableBody.append(fragment)
}
