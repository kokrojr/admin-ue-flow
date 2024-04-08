// ======================================================================
// -------------------- CONNECT TO FIRESOTRE ----------------------------
// ======================================================================

// Initialize Cloud Firestore
const db = firebase.firestore();

// Reference Requisition Database
const requisitionRef = db.collection("requisitions");

// Reference Routing Table
// const routersRef = db.collection("routers");

// Reference Routing Table
const voucherRouterRef = db.collection("voc_router");
const requisitionRouterRef = db.collection("req_router");
const invoiceRouterRef = db.collection("inv_router");
const salesOrderRouterRef = db.collection("so_router");
const purchaseOrderRouterRef = db.collection("po_router");
const leaveOfAbsenceRouterRef = db.collection("loa_router");

// Reference counters
const counterRef = db.collection('counters').doc('requisitionCounter');

// console.log(counterRef);



