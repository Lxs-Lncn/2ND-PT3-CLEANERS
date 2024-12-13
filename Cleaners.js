const students = [
    {name: "Jayriel Ramos", age: 18, lrn: "107985120120", address: "Medicion 2-A", birthday: "11-27-2005"},
    { name: "Alexis Lancian", age: 25, lrn: "301196130433", address: "Medicion 2-B", birthday: "05-14-1999"},
    { name: "Amalia Morales", age: 17, lrn: "104653130027", address: "Poblacion 1-A", birthday: "01-05-2007"},
    { name: "Edmon Cruz", age: 19, lrn: "10098264827", address: "Toclong 1-C", birthday: "07-19-2004"},
    { name: "Earl Thomas", age: 17, lrn: "10082649204", address: "Bacoor Cavite", birthday: "04-09-2007"},
    { name: "Kurt Cativo", age: 18, lrn: "107973110079", address: "Poblacion 4-C", birthday: "07-16-2006"},
    { name: "Reiley Sanares", age: 18, lrn: "107970130151", address: "Imus Cavite", birthday: "09-27-2006"},
    { name: "Arhjay Valencia", age: 18, lrn: "100836391742", address: "Medicion 2-B", birthday: "09-26-2006"},
    { name: "Jalal Mama", age: 20, lrn: "107873110345", address: "Imus Cavite", birthday: "12-1-2004"}
  ];
  
  function createTable(students) {
    let tableHTML = `<table>
                      <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>LRN</th>
                          <th>Address</th>
                          <th>Birthday</th>
                      </tr>`;
  
    students.forEach(student => {
      tableHTML += `<tr>
                      <td>${student.name}</td>
                      <td>${student.age}</td>
                      <td>${student.lrn}</td>
                      <td>${student.address}</td>
                      <td>${student.birthday}</td>
                    </tr>`;
    });
  
    tableHTML += `</table>`;
    return tableHTML;
  }
  
  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = createTable(students);
  