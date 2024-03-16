// Dummy data
const data = [
  { name: "Jatmika", age: 55 },
  { name: "Doel", age: 22 },
  { name: "Ntuy", age: 35 }
];

// Function to display data
const displayData = (dataArray) => {
  const output = document.querySelector("#output tbody");
  output.innerHTML = "";
  dataArray.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
    `;
    output.appendChild(tr);
  });
}

// Function to filter data
const filterData = () => {
  const filterValue = document.getElementById("filter").value.toLowerCase();
  const filteredData = data.filter(item => item.name.toLowerCase().includes(filterValue));
  displayData(filteredData);
}

// Function to sort data ascending
const sortData = () => {
  const sortValue = document.getElementById("dropdown").value;
  if (sortValue === "asc") {
    const sortedData = [...data].sort((a, b) => a.age - b.age);
    displayData(sortedData);
  }
}

// Initial display
displayData(data);
