// Code Handles Employee Request for Items
// Accend Engineering & Technology

// Subsystems Interlaced
// -- Employee_Model
// -- User_Model
// -- Router
// -- Notification_Model
// -- ReminderModel


// Global variables 
let request = null;


// ----------------------------------------------
// ------------- Requisition Class --------------
// ----------------------------------------------

class Requisition {
  constructor() {
    // Meta when document is created
    this.docType = "";
    this.docID = "";
    this.docState = "";
    this.docStatus = "";
    this.is1stReviewed = null;
    this.is2ndReviewed = null;
    this.isApproved = null;
    this.isArchived = null;
    // PDF Meta
    this.hasPDF = null;
    this.urlPDF = "";
    // Dates
    this.dateCreated = null;
    this.dateSubmitted = null;
    this.date1stReviewed = null;
    this.date2ndReviewed = null;
    this.dateApproved = null;
    this.dateArchived = null;
    this.datePDFGenerated = null;
    // Requisition data
    this.referenceNumber = "";
    this.department = null;
    this.requestType = "";
    this.purposeOfRequest = "";
    // 
    this.itemList = [];
    this.grandTotal = 0;
    this.recdSupplier = null;
    this.projectCode = null;
    // 
    this.accountToCharge = null; // Account object
    this.attachments = []; // Arrary of objects
    this.relatedVoucherID = "";
    // People objects
    this.creator = null;
    this.requestor = null;
    this.firstReviewer = null;
    this.secondReviewer = null;
    this.approver = null;
    this.disburser = null;
    // Routing and flow
    this.flow = null;
    this.lastUpdated = null;
  }

  // Method to set document type
  setDocType(value) {
    this.docType = value;
  }

  // Method to set document id
  setDocID(value) {
    this.docID = value;
  }

  // Method to set document state
  setDocState(state) {
    this.docState = state;
  }

  // Method to set document status
  setDocStatus(status) {
    this.docStatus = status;
  }

  // Method to mark 1st review
  markAsFirstReviewed() {
    this.is1stReviewed = true;
    this.date1stReviewed = new Date();
  }

  // Method to mark 2nd review
  markAsSecondReviewed() {
    this.is2ndReviewed = true;
    this.date2ndReviewed = new Date();
  }

  // Method to mark as approved
  markAsApproved() {
    this.isApproved = true;
    this.dateApproved = new Date();
  }

  // Method to mark pdf ready
  markAsPDFReady() {
    this.hasPDF = true;
    this.datePDFGenerated = new Date();
  }

  // Method to set pdf url
  setPDFUrl(url) {
    this.urlPDF = url;
  }

  // Method to set date created
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set date submitted
  setDateSubmitted(date) {
    this.dateSubmitted = date;
  }

  // Method to mark as archived
  markAsArchived() {
    this.isArchived = true;
    this.dateArchived = new Date();
  }

  // Method to set requisition number
  setReqNumber(req_number) {
    this.referenceNumber = req_number;
  }

  // Method to set requesting department
  setRequestingDepartment(dept_name, dept_id){
    this.department = {
      name: dept_name,
      id: dept_id
    };
  }

  // Method to set request type
  setRequestType(value) {
    this.requestType = value;
  }

  // Method to set purpose of request
  setPurposeOfRequest(text) {
    this.purposeOfRequest = text;
  }

  // Method to set reccommended supplier
  setReccommendedSupplier(supplier) {
    this.recdSupplier = supplier;
  }

  // Method to set reccommended supplier
  set(supplier) {
    this.recdSupplier = supplier;
  }

  // Method to set account to charge
  setAccountToCharge(acc_name, acc_id) {
    this.accountToCharge = {
      name: acc_name,
      id: acc_id
    };
  }

  // Method to set related voucher
  setRelatedVoucherID(id) {
    this.relatedVoucherID = id;
  }

  // Method to set creator
  setCreator(creator_name, creator_id) {
    this.creator = {
      name: creator_name,
      id: creator_id
    };
  }

  // Method to set requestor
  setRequestor(requestor_name, requestor_id) {
    this.requestor = {
      name: requestor_name,
      id: requestor_id
    };
  }

  // Method to set first reviewer
  setFirstReviewer(reviewer_name, reviewer_id) {
    this.firstReviewer = {
      name: reviewer_name,
      id: reviewer_id
    };
  }

  // Method to set second reviewer
  setSecondReviewer(reviewer_name, reviewer_id) {
    this.secondReviewer = {
      name: reviewer_name,
      id: reviewer_id
    };
  }

  // Method to set approver reviewer
  setApprover(approver_name, approver_id) {
    this.approver = {
      name: approver_name,
      id: approver_id
    };
  }

  // Method to set disburser reviewer
  setDisburser(disburser_name, disburser_id) {
    this.disburser = {
      name: disburser_name,
      id: disburser_id
    };
  }

  // Method to set flow
  setFlow(flow_code, flow_status) {
    this.flow = {
      code: flow_code,
      status: flow_status
    };
  }

  // Method to set date last updated
  setDateLastUpdated(date) {
    this.lastUpdated = date;
  }

  // Getter method for doctype
  getDocType() {
    return this.docType;
  }

  // Getter method for doc ID
  getDocID() {
    return this.docID;
  }

  // Getter method for doc state
  getDocState() {
    return this.docState;
  }

  // Getter method for doc status
  getDocStatus() {
    return this.docStatus;
  }

  // Getter method for 1st review status
  is1stReviewed() {
    return this.is1stReviewed;
  }

  // Getter method for 2nd review status
  is2ndReviewed() {
    return this.is2ndReviewed;
  }

  // Getter method for approve status
  isApproved() {
    return this.isApproved;
  }

  // Getter method for archive status
  isArchived() {
    return this.isArchived;
  }

  // Getter method for pdf status
  hasPDF() {
    return this.hasPDF;
  }

  // Getter method for pdf url
  getPDFUrl() {
    return this.urlPDF;
  }

  // Getter method for creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for submission date
  getDateSubmitted() {
    return this.dateSubmitted;
  }

  // Getter method for 1st review date
  getDate1stReviewed() {
    return this.date1stReviewed;
  }

  // Getter method for 2nd review date
  getDate2ndReviewed() {
    return this.date2ndReviewed;
  }

  // Getter method for approve date
  getDateApproved() {
    return this.dateApproved;
  }

  // Getter method for archive date
  getDateArchived() {
    return this.dateArchived;
  }

  // Getter method for pdf generated date
  getDatePDFGenerated() {
    return this.datePDFGenerated;
  }

  // Getter method for requisition number
  getreferenceNumber() {
    return this.referenceNumber;
  }

  // Getter method for department details
  getRequestingDepartment() {
    return this.department;
  }

  // Method to set request type
  getRequestType() {
    return this.requestType;
  }

  // Getter method for purpose of request
  getPurposeOfRequest() {
    return this.purposeOfRequest;
  }

  // Getter method for item list
  getItemList() {
    return this.itemList;
  }

  // Getter method for grand total
  getGrandTotal() {
    return this.grandTotal;
  }

  // Getter method for account to charge
  getAccountToCharge() {
    return this.accountToCharge;
  }

  // Getter method for attachements
  getAttachments() {
    return this.attachments;
  }

  // Getter method for attachements
  getAttachments() {
    return this.attachments;
  }
  
  // Getter method for related voucher
  getRelatedVoucherID() {
    return this.relatedVoucherID;
  }

  // Getter method for creator
  getCreator() {
    return this.creator;
  }
  
  // Getter method for requestor
  getRequestor() {
    return this.requestor;
  }

  // Getter method for 1st reviewer
  get1stReviewer() {
    return this.firstReviewer;
  }

  // Getter method for 2nd reviewer
  get2ndReviewer() {
    return this.secondReviewer;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for disburser
  getDisburser() {
    return this.disburser;
  }

  // Getter method for flow details
  getFlowDetails() {
    return this.flow;
  }

  // Getter method for last updated date
  getDateLastUpdated() {
    return this.lastUpdated;
  }

  // ----------------------------------------------
  // ------ Method to add item to requistion ------
  // ----------------------------------------------

  addItem(itemObj) {
    this.itemList.push(itemObj); // Add item to itemList
    this.calculateGrandTotal();
  }

  // ---------------------------------------------------
  // ------ Method to remove item from requistion ------
  // ---------------------------------------------------

  removeItem(itemIndex) {
    // validate index
    if (itemIndex >= 0 && itemIndex < this.itemList.length) {
      this.itemList.splice(itemIndex, 1); // Remove item from itemList
      this.calculateGrandTotal();
      console.log("Item successfully removed");
    } else {
      console.log("Action failed: Invalid index");
    }
  }

  // ---------------------------------------------------
  // --------- Method to calculate grand total ---------
  // ---------------------------------------------------

  calculateGrandTotal() {
    let grandTotal = 0;
    for (const item of this.itemList) {
      grandTotal += item.totalCost || 0; // Add total cost of each item
    }
    this.grandTotal = grandTotal; // Update grand total
  }

  // ---------------------------------------------------------------
  // -------------- Method to Save Requisition to db ---------------
  // ---------------------------------------------------------------

  async saveRequisitionToDatabase() {
    try {
      // Preloader
      console.log("Saving requisition in REQ...");
      
      // Authenticate user
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }
      
      // Check, requestion has items
      if (this.itemList.length === 0) {
        throw new Error("Requisition has no item. Action cannot be completed.");
      }
      
      // Check, docID and set before adding to the database
      if (!this.docID) {
        this.docID = requisitionRef.doc().id;
      }

      // Save requisition to database
      await requisitionRef.doc(this.docID).set({ ...this });
      console.log("Requisition created successfully. Ref. #: " + this.referenceNumber);
      console.log("Requisition Doc ID: " + this.docID);

      // TODO: Initiate flow
      
    } catch (error) {
      // Handle error
      throw error; // Rethrow error for caller to handle
    }
  }

  // -----------------------------------------------------------------
  // -------------- Method to update requisition in db ---------------
  // -----------------------------------------------------------------

  async updateRequisitionDataInDatabase() {
    try {
      // Preloader
      console.log("Updating requisition data in REQ...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.docID) {
        throw new Error("Doc ID is not set.");
      }

      // Update router data in the database
      await requisitionRef.doc(this.docID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.docID);

      // TODO: Update flow
    } catch (error) {
      // Handle error
      console.error("Error updating route data:", error);
      throw error;
    }
  }

  /** 
   * End REQ Class */
}

// --------------------------------------------------------------------------
// ----------------- Function to Generate Sequence number -------------------
// --------------------------------------------------------------------------

async function generateRequisitionreferenceNumber() {
  try {
    // Preloader
    console.log("Generating REQ sequence number...");
    // Get the current value of the counter
    const doc = await counterRef.get(); 
    let currentValue = doc.data().value || 0;
    // Increment and update counter
    await counterRef.update({ value: currentValue + 1 });
    // Return the updated value
    return currentValue + 1;
  } catch(error) {
    // Handle error
    throw error;
  }
  /** End */
}

// ----------------------------------------------------------------------
// --------------------- Function to Create Request ---------------------
// ----------------------------------------------------------------------

function createRequest() {
  // Preloader
  console.log("Creating request...");

  // Instantiate requisition object
  request = new Requisition();

  // Set default props
  request.setDocType("Requisition");
  request.setDocState("NOT_ACTIVE");
  request.setDocStatus("DRAFT");
  request.setDateCreated(new Date());

  // Set creator
  request.setCreator(currentUser, currentUserID);

  console.log(request);

  /** End */
}

// -----------------------------------------------------------------------
// -------------- Function to Create Item in Requisition -----------------
// -----------------------------------------------------------------------

function createItemInRequest(item_name, item_description, quantity, unitPrice, currency) {
  // Preloader
  console.log("Creating item in request...");

  // Create Item Object
  let newItem = {
    itemName: item_name,
    itemDescription: item_description,
    quantity: quantity,
    unitPrice: unitPrice,
    currency: currency,
    totalCost: quantity * unitPrice
  };

  // Add item to list
  request.addItem(newItem);

  /** End */
}

// ----------------------------------------------------------------------
// --------------------- Function to Delete Request ---------------------
// ----------------------------------------------------------------------

function deleteRequest() {
  // Preloader
  console.log("Deleting request...");
  request = null;
  console.log('Request: ', request);
  /** End */
}

// --------------------------------------------------------------------------
// --------------------- Function to Submit Requisition ---------------------
// --------------------------------------------------------------------------

async function submitRequest() {
  try {
    // Preloader
    console.log("Submitting request...");
    // 

    // Set submission props
    request.setDocState("ACTIVE");
    request.setDocStatus("Submitted");
    request.setDateSubmitted(new Date());

    // Set reqNumber is set before adding to the database
    let referenceNumber = null;
    referenceNumber = await generateRequisitionreferenceNumber();
    // 

    if (referenceNumber) {
      const paddedValue = referenceNumber.toString().padStart(3, "0"); // Pad the counter
      request.setReqNumber("REQ-" + paddedValue); // Set doc reference number
      await request.saveRequisitionToDatabase(); // Save Requisition to db
    } else {
      throw new Error("Errow submitting request. REF # could not be set.");
    }
  } catch (error) {
    throw error; // Handle error
  }
  /** End */
}

// -----------------------------------------------------------------------------
// --------------------- Function to Save Request as draft ---------------------
// -----------------------------------------------------------------------------

function saveRequestAsDraft() {
  try {
    // Check if request is not empty
    if (request) {
      // Preloader
      console.log("Saving request as draft...");
      request.saveRequisitionToDatabase();
      // 
    } else {
      throw new Error("Empty requisition. Action denied.");
    }
  } catch(error) {
    // Handle error
    throw error; // Rethrow the error
  }
  /** End */
}

// -------------------------------------------------------------------------------
// --------------- Function to get requisition by reference number ---------------
// -------------------------------------------------------------------------------

async function getRequisitionByRefNumber(referenceNumber) {
  // Preloader
  console.log("Fetching requisition by refNum from db...");

  try {
    // Run Query by reference number
    const querySnapshot = await requisitionRef
      .where("referenceNumber", "==", referenceNumber)
      .get();

    // Check, at least one document match query
    if (querySnapshot.empty) {
      throw new Error(`No document found for reqNumber: '${referenceNumber}'.`);
    }

    // Get the first document snapshot
    const docSnapshot = querySnapshot.docs[0];
    
    // Get the data from the document
    const requisitionData = docSnapshot.data();

    console.log("Requisitiion data: ", requisitionData);

    // Return the route data
    return requisitionData;
  } catch (error) {
    // Error handling
    throw error;
  }
}

// ------------------------------------------------------------------------------
// ----------------- Function to get requisition by document ID -----------------
// ------------------------------------------------------------------------------

async function getRequisitionByDocID(docID) {
  // Preloader
  console.log("Fetching requisition by ID from db...");

  try {
    // Run Query by document number
    const querySnapshot = await requisitionRef
      .where("docID", "==", docID)
      .get();

    // Check, at least one document match query
    if (querySnapshot.empty) {
      throw new Error(`No document found with docID: '${docID}'.`);
    }

    // Get the first document snapshot
    const docSnapshot = querySnapshot.docs[0];
    
    // Get the data from the document
    const requisitionData = docSnapshot.data();

    console.log("Requisitiion data: ", requisitionData);

    // Return the route data
    return requisitionData;
  } catch (error) {
    // Error handling
    throw error;
  }
}

// LKAocsmMY9hylcuvrybK

// -------------------------------------------------------------------------------
// -------------------- Function to get requisition by Status --------------------
// -------------------------------------------------------------------------------

async function getRequisitionByDocStatus(docStatus) {
  try {
    // Query to filter documents by routerType and state
    const querySnapshot = await requisitionRef
      .where("docStatus", "==", docStatus)
      .get();

    // Check if there's at least one document matching the query
    if (querySnapshot.empty) {
      throw new Error(`No active route found for routerType '${docStatus}'.`);
    }

    // Get the first document snapshot
    const docSnapshot = querySnapshot.docs;
    
    // Get the data from the document
    const requisitionData = docSnapshot.data();

    // Return the route data
    return requisitionData;
  } catch (error) {
    // Error handling
    throw error;
  }
}

/** 
   * Function to get requisition by id
  */

/** 
   * Function to get all requisition
  */

// -------------------------------------------------------------------
// --------------- Requisition DOC-ACTIONS FUNCTIONS -----------------
// -------------------------------------------------------------------





/** 
   * Function to Accept & Forward Requisition (Reviewer) */

/** 
   * Function to Reject Requisition */

/** 
   * Function to Add Comment to Requisition */




// ==================================================================

// Test

// let requisition = new Requisition();
// requisition.dateCreated = new Date().toISOString();

// requisition.addItem("Dell laptop", "Laptop computer", 1, 500, "USD");
// requisition.addItem("Skate board", "For the team", 4, 200, "USD");
// requisition.addItem("Meter", "Smart meter", 1, 150, "USD");


// =======================================================================

// createRequest();
// createItemInRequest("Dell laptop", "Laptop computer", 1, 500, "USD");
// createItemInRequest("Skate board", "For the team", 4, 200, "USD");

// deleteRequest();
// console.log(request);

// getRequisitionByDocID("7kukKdvlJ95EMkwGeW2v");
// getRequisitionByRefNumber("REQ-006");


// console.log("1. Saving Draft");
// saveRequestAsDraft();

// console.log("2. Submitting Request");
// submitRequest();


// =======================================================================


// console.log(requisition.itemList);
// console.log(requisition.grandTotal);

// requisition.removeItem(0);
// console.log(requisition.grandTotal);
// console.log(requisition.grandTotal);

// requisition.saveRequisitionToDatabase();


// Get Data from Request Form

// Render Request Previewer

// ==================================

// POST request

// Review Request

// Approve Request

// Reject Request

// Archive Request

// File Request & Generate PDF

// ==================================

// Manage Request
// -- Document Tracking (Backend)
// -- Document Logging