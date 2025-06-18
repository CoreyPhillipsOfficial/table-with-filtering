import { useState } from "react";

// Sample dataset
const initialData = [
  { id: 1, name: "Alice", age: 28, role: "Developer" },
  { id: 2, name: "Bob", age: 35, role: "Designer" },
  { id: 3, name: "Charlie", age: 30, role: "Developer" },
  { id: 4, name: "David", age: 40, role: "Manager" },
  { id: 5, name: "Eve", age: 25, role: "Developer" },
];

function DataTable() {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState(initialData);

  // TODO: Implement filtering logic
  const filteredData = data.filter((person) =>
    person.role.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by role..."
        /* TODO: add filter text state and event listeners */
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Render filtered data here */}
          {filteredData.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Employee Table</h1>
      <DataTable data={initialData} />
    </div>
  )
}


export default App
