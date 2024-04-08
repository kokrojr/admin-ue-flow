//

const table = document.getElementById("user-board-table");
const tbody = table.querySelector("tbody");
const pagination = document.getElementById('pagination');
const pageSize = 10; // Number of items per page
let currentPage = 1;

// Sample data
const userBoardData = [
  { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' },
            { docType: 'Invoice', docId: 'INV-001', preparedBy: 'John Doe', preparedFor: 'Customer A', status: 'Pending', flowStatus: 'Processing', date: '2024-03-01', amount: '$1000.00' },
            { docType: 'Voucher', docId: 'VOU-001', preparedBy: 'Jane Smith', preparedFor: 'Vendor B', status: 'Approved', flowStatus: 'Completed', date: '2024-03-02', amount: '$500.00' }
  // Add more sample data as needed
];

// Function to render table rows for a specific page
function renderTable(page) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = userBoardData.slice(start, end);

  tbody.innerHTML = "";

  paginatedData.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.docType}</td>
        <td>${user.docId}</td>
        <td>${user.preparedBy}</td>
        <td>${user.preparedFor}</td>
        <td class="record-status ${user.status}"><span class="status-format">${user.status}</span></td>
        <td>${user.flowStatus}</td>
        <td>${user.date}</td>
        <td class="align-right">${user.amount}</td>
        <td class="record-action">
          <button class="attachment-button"><i class="bi bi-paperclip icon"></i></button>
          <button class="more-button"><i class="bi bi-three-dots-vertical icon"></i></button>
        
        </td>

    `;
    tbody.appendChild(row);
  });
}

// Function to sort table data
function sortTable(column) {
  userBoardData.sort((a, b) => {
    if (a[column] < b[column]) return -1;
    if (a[column] > b[column]) return 1;
    return 0;
  });
  renderTable();
}

// Add event listeners for sorting
// table.querySelectorAll(".sortable").forEach((header) => {
//   header.addEventListener("click", () => {
//     const column = header.getAttribute("data-sort");
//     sortTable(column);
//   });
// });

// Function to generate pagination buttons
function renderPagination() {
  const pageCount = Math.ceil(userBoardData.length / pageSize);

  pagination.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      renderTable(currentPage);
      highlightCurrentPage();
    });
    pagination.appendChild(button);
  }

  highlightCurrentPage();
}

// Function to highlight the current page button
function highlightCurrentPage() {
  pagination.querySelectorAll("button").forEach((button, index) => {
    if (index + 1 === currentPage) {
      button.style.color = "#0056b3";
    } else {
      button.style.color = "#003566";
    }
  });
}

// Initial table and pagination render
renderTable(currentPage);
renderPagination();

