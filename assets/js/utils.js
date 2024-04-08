// === Helper Function ===

/**
 * Alert Helper Function
 */


function ValidateEmail(email) {
  /**
   * Email Validation Helper Function
   * Returns Boolean given an email string
   */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regular expression
  return emailRegex.test(email);
}

// =================== LOAD CREATE MENU ===================

// Get menu entities
// 
const createBtn = document.getElementById('create-button-header');
const pageModalCreate = document.getElementById('page-modal-wrapper-create-menu');
console.log(pageModalCreate);
const page = document.querySelector('.page');

createBtn.addEventListener('click', function() {
  page.classList.add('no-scroll');   // Disable scroll 
  loadCreateMenu();   // Load Menu
  // console.log('hiii');
});

  /**
   * Helper function to load menu from header
   */

function loadCreateMenu() {
  console.log('hiii');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        pageModalCreate.classList.remove('hide-menu'); // Show modal
        pageModalCreate.innerHTML = xhr.responseText; // Insert the menu content
      } else {
        console.error('Error loading create menu: ' + xhr.status); // Catch error
      }
    }
  };
  xhr.open('GET', '/components/create-menu.html', true);
  xhr.send();

  // Hide Menu
  pageModalCreate.addEventListener('click', function() {
    pageModalCreate.classList.add('hide-menu');
    page.classList.remove('no-scroll');
  });
  
}

// =================== LOAD INPUT FORMS ===================

const pageInputFormModal = document.getElementById('page-modal-wrapper-input-form');

/**
 * Helper function to load requisition input form
*/

function openRequisitionModal() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        pageInputFormModal.classList.remove('hide-modal'); // Show modal
        pageInputFormModal.innerHTML = xhr.responseText; // Insert the form content

        // ---------------------------------------------------
        // ------------ Create Requisition Object ------------
        // ---------------------------------------------------

        createRequest(); // Instantiate Request
        
        // Access elements of the loaded form
        var form = document.querySelector('.requisition-form');

        // Declare Inputs
        var inputFirstName = form.querySelector('#fname');
        var inputLastName = form.querySelector('#lname');
        var inputDepartment = form.querySelector('#department');
        var inputPurposeOfRequest = form.querySelector('#purposeOfRequest');
        var inputItemName = form.querySelector('#itemName');
        var inputItemDescription = form.querySelector('#itemDescription');
        var inputQuantity = form.querySelector('#quantity');
        var inputUnitPrice = form.querySelector('#price');
        
        // Declare Btns
        var btnSaveRequestAsDraft = form.querySelector('#req-save-as-draft-btn');
        var btnSubmitRequisition = form.querySelector('#req-submit-btn');
        var btnAddItemToList = form.querySelector('#add-item-btn');
        // Access other form elements as needed...

        // ---------------------------------------------------
        // ------------ Save Requisition As Draft ------------
        // ---------------------------------------------------

        // Save Requisition As Draft
        saveAsDraftBtn.addEventListener('click', function() {
          // Get Requisition Details
          // Post to db
          console.log('Saving requisition...');
        });

        // ---------------------------------------------------
        // --------------- Submit Requisition ----------------
        // ---------------------------------------------------

        // Submit Requisition
        submitRequisitionBtn.addEventListener('click', function() {
          // Get Requisition Details
          // Post to db
          console.log('Submitting requisition...');
        });

      } else {
        console.error('Error loading requisition modal: ' + xhr.status); // Catch error
      }
    }
  };
  xhr.open('GET', '/components/requisition-form.html', true);
  xhr.send();

  // Set no scroll on page
  page.classList.add('no-scroll');
}


function closeRequisitionModal() {
  // Hide Modal
  deleteRequest();
  pageInputFormModal.classList.add("hide-modal");
  page.classList.remove("no-scroll");
}

/**
 * Helper function to load voucher input form
*/

function openVoucherModal() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        pageInputFormModal.classList.remove('hide-modal'); // Show modal
        pageInputFormModal.innerHTML = xhr.responseText; // Insert the form content

        // ---------------------------------------------------
        // -------------- Create Voucher Object --------------
        // ---------------------------------------------------

        // createRequest(); // Instantiate Request
        
        // Access elements of the loaded form
        var form = document.querySelector('.requisition-form');

        // Declare Inputs
        var inputFirstName = form.querySelector('#fname');
        var inputLastName = form.querySelector('#lname');
        var inputDepartment = form.querySelector('#department');
        var inputPurposeOfRequest = form.querySelector('#purposeOfRequest');
        var inputItemName = form.querySelector('#itemName');
        var inputItemDescription = form.querySelector('#itemDescription');
        var inputQuantity = form.querySelector('#quantity');
        var inputUnitPrice = form.querySelector('#price');
        
        // Declare Btns
        var btnSaveRequestAsDraft = form.querySelector('#req-save-as-draft-btn');
        var btnSubmitRequisition = form.querySelector('#req-submit-btn');
        var btnAddItemToList = form.querySelector('#add-item-btn');
        // Access other form elements as needed...

        // ---------------------------------------------------
        // ------------ Save Requisition As Draft ------------
        // ---------------------------------------------------

        // Save Requisition As Draft
        btnSaveRequestAsDraft.addEventListener('click', function() {
          // Get Requisition Details
          // Post to db
          console.log('Saving requisition...');
        });

        // ---------------------------------------------------
        // --------------- Submit Requisition ----------------
        // ---------------------------------------------------

        // Submit Requisition
        btnSubmitRequisition.addEventListener('click', function() {
          // Get Requisition Details
          // Post to db
          console.log('Submitting requisition...');
        });

      } else {
        console.error('Error loading requisition modal: ' + xhr.status); // Catch error
      }
    }
  };
  xhr.open('GET', '/components/voucher-form.html', true);
  xhr.send();

  // Set no scroll on page
  page.classList.add('no-scroll');
}

function closePaymentVoucherModal() {
  // Hide Modal
  // deleteRequest();
  pageInputFormModal.classList.add("hide-modal");
  page.classList.remove("no-scroll");
}

/**
 * Helper function to load sales order input form
*/

function openSalesOrderModal() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        pageInputFormModal.classList.remove('hide-modal'); // Show modal
        pageInputFormModal.innerHTML = xhr.responseText; // Insert the form content

        // ---------------------------------------------------
        // -------------- Create Voucher Object --------------
        // ---------------------------------------------------

        // createRequest(); // Instantiate Request
        
        // Access elements of the loaded form
        var form = document.querySelector('.requisition-form');

        // Declare Inputs
        var inputFirstName = form.querySelector('#fname');
        var inputLastName = form.querySelector('#lname');
        var inputDepartment = form.querySelector('#department');
        var inputPurposeOfRequest = form.querySelector('#purposeOfRequest');
        var inputItemName = form.querySelector('#itemName');
        var inputItemDescription = form.querySelector('#itemDescription');
        var inputQuantity = form.querySelector('#quantity');
        var inputUnitPrice = form.querySelector('#price');
        
        // Declare Btns
        var btnSaveRequestAsDraft = form.querySelector('#req-save-as-draft-btn');
        var btnSubmitRequisition = form.querySelector('#req-submit-btn');
        var btnAddItemToList = form.querySelector('#add-item-btn');
        // Access other form elements as needed...

        // ---------------------------------------------------
        // ------------ Save Requisition As Draft ------------
        // ---------------------------------------------------

        // Save Requisition As Draft
        btnSaveRequestAsDraft.addEventListener('click', function() {
          // Get Requisition Details
          // Post to db
          console.log('Saving requisition...');
        });

        // ---------------------------------------------------
        // --------------- Submit Requisition ----------------
        // ---------------------------------------------------

        // Submit Requisition
        btnSubmitRequisition.addEventListener('click', function() {
          // Get Requisition Details
          // Post to db
          console.log('Submitting requisition...');
        });

      } else {
        console.error('Error loading requisition modal: ' + xhr.status); // Catch error
      }
    }
  };
  xhr.open('GET', '/components/sales-order-form.html', true);
  xhr.send();

  // Set no scroll on page
  page.classList.add('no-scroll');
}

function closeSalesOrderModal() {
  // Hide Modal
  // deleteRequest();
  pageInputFormModal.classList.add("hide-modal");
  page.classList.remove("no-scroll");
}




