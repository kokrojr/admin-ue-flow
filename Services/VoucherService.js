





// Global variables 
let request = null;

// ----------------------------------------------
// --------------- Vooucher Class ---------------
// ----------------------------------------------

class Voucher {
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

}