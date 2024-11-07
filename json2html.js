
export default function json2html(data) {
  // Start table HTML with a data-user attribute
  let html = '<table data-user="abhiabllp@gmail.com">';
  
  // Create table header
  html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
  // Start table body
  html += '<tbody>';
  
  // Loop through the array of objects and add rows to the table
  data.forEach(item => {
    html += '<tr>';
    html += `<td>${item.Name}</td>`;
    html += `<td>${item.Age}</td>`;
    
    // Check if Gender exists, otherwise leave blank
    html += `<td>${item.Gender ? item.Gender : ''}</td>`;
    html += '</tr>';
  });
  
  // Close the table body and the table
  html += '</tbody></table>';
  
  return html;
}
