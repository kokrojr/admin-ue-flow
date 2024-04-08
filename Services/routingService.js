
// Global Variables

// ======================================================================
// ----------------------- ROUTER UTILITY CLASS -------------------------
// ======================================================================

// ---------------------------------------------------------------
// -------------- Requisition-Router Utility Class ---------------
// ---------------------------------------------------------------

class RequsitionRoute {
  constructor() {
    this.routerType = "";
    this.routeID = "";
    this.state = "";
    this.dateCreated = null;
    this.reviewer1 = null;
    this.reviewer2 = null;
    this.approver = null;
    this.disburser = null;
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Method to set the router's name
  setRouterType(prop) {
    this.routerType = prop;
  }

  // Method to set the router's ID
  setRouteID(id) {
    this.routeID = id;
  }

  // Method to set the router's state
  setState(state) {
    this.state = state;
  }

  // Method to set the router's creation date
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set the first reviewer
  setReviewer1(reviewer) {
    this.reviewer1 = reviewer;
  }

  // Method to set the second reviewer
  setReviewer2(reviewer) {
    this.reviewer2 = reviewer;
  }

  // Method to set the approver
  setApprover(approver) {
    this.approver = approver;
  }

  // Method to set the disburser
  setDisburser(disburser) {
    this.disburser = disburser;
  }

  // Method to mark the router as abandoned
  markAsAbandoned() {
    this.abandoned = true;
    this.dateAbandoned = new Date();
  }

  // Method to reset the router's abandonment status
  resetAbandonment() {
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Getter method for router ID
  getRouteID() {
    return this.routeID;
  }

  // Getter method for router state
  getState() {
    return this.state;
  }

  // Getter method for router creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for first reviewer
  getReviewer1() {
    return this.reviewer1;
  }

  // Getter method for second reviewer
  getReviewer2() {
    return this.reviewer2;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for disburser
  getDisburser() {
    return this.disburser;
  }

  // Getter method for abandonment status
  isAbandoned() {
    return this.abandoned;
  }

  // Getter method for abandonment date
  getDateAbandoned() {
    return this.dateAbandoned;
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 1. Method to save route to db
  async saveRouterToDatabase() {
    try {
      // Preloader
      console.log("Creating route in REQ_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set before adding to the database
      if (!this.routeID) {
        this.routeID = requisitionRouterRef.doc().id;
      }

      // Save route to database
      await requisitionRouterRef.doc(this.routeID).set({ ...this });
      console.log("Route created successfully. Route ID: " + this.routeID);
      
    } catch (error) {
      // throw error
      throw error; // Rethrow the error for the caller to handle
    }
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 2. Method to update route to db
  async updateRouterDataInDatabase() {
    try {
      // Preloader
      console.log("Updating route data in REQ_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.routeID) {
        throw new Error("Route ID is not set.");
      }

      // Update router data in the database
      await requisitionRouterRef.doc(this.routeID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.routeID);

    } catch (error) {
      // Error handling
      console.error("Error updating route data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  /** 
   * End Req-Router Class */
}

// ---------------------------------------------------------------
// ---------------- Voucher-Router Utility Class -----------------
// ---------------------------------------------------------------

class VoucherRoute {
  constructor() {
    this.routerType = "";
    this.routeID = "";
    this.state = "";
    this.dateCreated = null;
    this.reviewer = null;
    this.approver = null;
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Method to set the router's name
  setRouterType(prop) {
    this.routerType = prop;
  }

  // Method to set the router's ID
  setRouteID(id) {
    this.routeID = id;
  }

  // Method to set the router's state
  setState(state) {
    this.state = state;
  }

  // Method to set the router's creation date
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set the first reviewer
  setReviewer(reviewer) {
    this.reviewer = reviewer;
  }

  // Method to set the approver
  setApprover(approver) {
    this.approver = approver;
  }

  // Method to mark the router as abandoned
  markAsAbandoned() {
    this.abandoned = true;
    this.dateAbandoned = new Date();
  }

  // Getter method for router ID
  getRouteID() {
    return this.routeID;
  }

  // Getter method for router state
  getState() {
    return this.state;
  }

  // Getter method for router creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for first reviewer
  getReviewer() {
    return this.reviewer;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for abandonment status
  isAbandoned() {
    return this.abandoned;
  }

  // Getter method for abandonment date
  getDateAbandoned() {
    return this.dateAbandoned;
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 1. Method to save route to db
  async saveRouterToDatabase() {
    try {
      // Preloader
      console.log("Creating route in VOC_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set before adding to the database
      if (!this.routeID) {
        this.routeID = voucherRouterRef.doc().id;
      }

      // Save route to database
      await voucherRouterRef.doc(this.routeID).set({ ...this });
      console.log("Route created successfully. Route ID: " + this.routeID);
      
    } catch (error) {
      // throw error
      throw error; // Rethrow the error for the caller to handle
    }
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 2. Method to update route to db
  async updateRouterDataInDatabase() {
    try {
      // Preloader
      console.log("Updating route data in VOC_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.routeID) {
        throw new Error("Route ID is not set.");
      }

      // Update router data in the database
      await voucherRouterRef.doc(this.routeID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.routeID);

    } catch (error) {
      // Error handling
      console.error("Error updating route data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  /** 
   * End Voc-Router Class */
}

// ---------------------------------------------------------------
// -------------- Sales Order-Router Utility Class ---------------
// ---------------------------------------------------------------

class SalesOrderRoute {
  constructor() {
    this.routerType = "";
    this.routeID = "";
    this.state = "";
    this.dateCreated = null;
    this.reviewer = null;
    this.approver = null;
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Method to set the router's name
  setRouterType(prop) {
    this.routerType = prop;
  }

  // Method to set the router's ID
  setRouteID(id) {
    this.routeID = id;
  }

  // Method to set the router's state
  setState(state) {
    this.state = state;
  }

  // Method to set the router's creation date
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set the first reviewer
  setReviewer(reviewer) {
    this.reviewer = reviewer;
  }

  // Method to set the approver
  setApprover(approver) {
    this.approver = approver;
  }

  // Method to mark the router as abandoned
  markAsAbandoned() {
    this.abandoned = true;
    this.dateAbandoned = new Date();
  }

  // Getter method for router ID
  getRouteID() {
    return this.routeID;
  }

  // Getter method for router state
  getState() {
    return this.state;
  }

  // Getter method for router creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for first reviewer
  getReviewer() {
    return this.reviewer;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for abandonment status
  isAbandoned() {
    return this.abandoned;
  }

  // Getter method for abandonment date
  getDateAbandoned() {
    return this.dateAbandoned;
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 1. Method to save route to db
  async saveRouterToDatabase() {
    try {
      // Preloader
      console.log("Creating route in SO_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set before adding to the database
      if (!this.routeID) {
        this.routeID = salesOrderRouterRef.doc().id;
      }

      // Save route to database
      await salesOrderRouterRef.doc(this.routeID).set({ ...this });
      console.log("Route created successfully. Route ID: " + this.routeID);
      
    } catch (error) {
      // throw error
      throw error; // Rethrow the error for the caller to handle
    }
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 2. Method to update route to db
  async updateRouterDataInDatabase() {
    try {
      // Preloader
      console.log("Updating route data in VOC_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.routeID) {
        throw new Error("Route ID is not set.");
      }

      // Update router data in the database
      await salesOrderRouterRef.doc(this.routeID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.routeID);

    } catch (error) {
      // Error handling
      console.error("Error updating route data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  /** 
   * End SO-Router Class */
}

// ---------------------------------------------------------------
// ------------- Purchase Order-Router Utility Class -------------
// ---------------------------------------------------------------

class PurchaseOrderRoute {
  constructor() {
    this.routerType = "";
    this.routeID = "";
    this.state = "";
    this.dateCreated = null;
    this.reviewer = null;
    this.approver = null;
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Method to set the router's name
  setRouterType(prop) {
    this.routerType = prop;
  }

  // Method to set the router's ID
  setRouteID(id) {
    this.routeID = id;
  }

  // Method to set the router's state
  setState(state) {
    this.state = state;
  }

  // Method to set the router's creation date
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set the first reviewer
  setReviewer(reviewer) {
    this.reviewer = reviewer;
  }

  // Method to set the approver
  setApprover(approver) {
    this.approver = approver;
  }

  // Method to mark the router as abandoned
  markAsAbandoned() {
    this.abandoned = true;
    this.dateAbandoned = new Date();
  }

  // Getter method for router ID
  getRouteID() {
    return this.routeID;
  }

  // Getter method for router state
  getState() {
    return this.state;
  }

  // Getter method for router creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for first reviewer
  getReviewer() {
    return this.reviewer;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for abandonment status
  isAbandoned() {
    return this.abandoned;
  }

  // Getter method for abandonment date
  getDateAbandoned() {
    return this.dateAbandoned;
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 1. Method to save route to db
  async saveRouterToDatabase() {
    try {
      // Preloader
      console.log("Creating route in SO_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set before adding to the database
      if (!this.routeID) {
        this.routeID = purchaseOrderRouterRef.doc().id;
      }

      // Save route to database
      await purchaseOrderRouterRef.doc(this.routeID).set({ ...this });
      console.log("Route created successfully. Route ID: " + this.routeID);
      
    } catch (error) {
      // throw error
      throw error; // Rethrow the error for the caller to handle
    }
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 2. Method to update route to db
  async updateRouterDataInDatabase() {
    try {
      // Preloader
      console.log("Updating route data in PO_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.routeID) {
        throw new Error("Route ID is not set.");
      }

      // Update router data in the database
      await purchaseOrderRouterRef.doc(this.routeID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.routeID);

    } catch (error) {
      // Error handling
      console.error("Error updating route data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  /** 
   * End PO-Router Class */
}

// ---------------------------------------------------------------
// ---------------- Invoice-Router Utility Class -----------------
// ---------------------------------------------------------------

class InvoiceRoute {
  constructor() {
    this.routerType = "";
    this.routeID = "";
    this.state = "";
    this.dateCreated = null;
    this.reviewer = null;
    this.approver = null;
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Method to set the router's name
  setRouterType(prop) {
    this.routerType = prop;
  }

  // Method to set the router's ID
  setRouteID(id) {
    this.routeID = id;
  }

  // Method to set the router's state
  setState(state) {
    this.state = state;
  }

  // Method to set the router's creation date
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set the first reviewer
  setReviewer(reviewer) {
    this.reviewer = reviewer;
  }

  // Method to set the approver
  setApprover(approver) {
    this.approver = approver;
  }

  // Method to mark the router as abandoned
  markAsAbandoned() {
    this.abandoned = true;
    this.dateAbandoned = new Date();
  }

  // Getter method for router ID
  getRouteID() {
    return this.routeID;
  }

  // Getter method for router state
  getState() {
    return this.state;
  }

  // Getter method for router creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for first reviewer
  getReviewer() {
    return this.reviewer;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for abandonment status
  isAbandoned() {
    return this.abandoned;
  }

  // Getter method for abandonment date
  getDateAbandoned() {
    return this.dateAbandoned;
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 1. Method to save route to db
  async saveRouterToDatabase() {
    try {
      // Preloader
      console.log("Creating route in SO_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set before adding to the database
      if (!this.routeID) {
        this.routeID = invoiceRouterRef.doc().id;
      }

      // Save route to database
      await invoiceRouterRef.doc(this.routeID).set({ ...this });
      console.log("Route created successfully. Route ID: " + this.routeID);
      
    } catch (error) {
      // throw error
      throw error; // Rethrow the error for the caller to handle
    }
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 2. Method to update route to db
  async updateRouterDataInDatabase() {
    try {
      // Preloader
      console.log("Updating route data in INV_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.routeID) {
        throw new Error("Route ID is not set.");
      }

      // Update router data in the database
      await invoiceRouterRef.doc(this.routeID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.routeID);

    } catch (error) {
      // Error handling
      console.error("Error updating route data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  /** 
   * End INV-Router Class */
}

// ---------------------------------------------------------------
// ---------- LEAVE OF ABSENCE-Router Utility Class --------------
// ---------------------------------------------------------------

class LeaveOfAbsenceRoute {
  constructor() {
    this.routerType = "";
    this.routeID = "";
    this.state = "";
    this.dateCreated = null;
    this.reviewer = null;
    this.approver = null;
    this.abandoned = null;
    this.dateAbandoned = null;
  }

  // Method to set the router's name
  setRouterType(prop) {
    this.routerType = prop;
  }

  // Method to set the router's ID
  setRouteID(id) {
    this.routeID = id;
  }

  // Method to set the router's state
  setState(state) {
    this.state = state;
  }

  // Method to set the router's creation date
  setDateCreated(date) {
    this.dateCreated = date;
  }

  // Method to set the first reviewer
  setReviewer(reviewer) {
    this.reviewer = reviewer;
  }

  // Method to set the approver
  setApprover(approver) {
    this.approver = approver;
  }

  // Method to mark the router as abandoned
  markAsAbandoned() {
    this.abandoned = true;
    this.dateAbandoned = new Date();
  }

  // Getter method for router ID
  getRouteID() {
    return this.routeID;
  }

  // Getter method for router state
  getState() {
    return this.state;
  }

  // Getter method for router creation date
  getDateCreated() {
    return this.dateCreated;
  }

  // Getter method for first reviewer
  getReviewer() {
    return this.reviewer;
  }

  // Getter method for approver
  getApprover() {
    return this.approver;
  }

  // Getter method for abandonment status
  isAbandoned() {
    return this.abandoned;
  }

  // Getter method for abandonment date
  getDateAbandoned() {
    return this.dateAbandoned;
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 1. Method to save route to db
  async saveRouterToDatabase() {
    try {
      // Preloader
      console.log("Creating route in SO_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set before adding to the database
      if (!this.routeID) {
        this.routeID = leaveOfAbsenceRouterRef.doc().id;
      }

      // Save route to database
      await leaveOfAbsenceRouterRef.doc(this.routeID).set({ ...this });
      console.log("Route created successfully. Route ID: " + this.routeID);
      
    } catch (error) {
      // throw error
      throw error; // Rethrow the error for the caller to handle
    }
  }

  // ---------------------------------------------------------
  // -------------- Related Firebase operation ---------------
  // ---------------------------------------------------------

  // 2. Method to update route to db
  async updateRouterDataInDatabase() {
    try {
      // Preloader
      console.log("Updating route data in INV_ROUTER...");

      // Check if user is signed in
      if (!isUserSignedIn) {
        throw new Error("User is not signed in.");
      }

      // Ensure routeID is set
      if (!this.routeID) {
        throw new Error("Route ID is not set.");
      }

      // Update router data in the database
      await leaveOfAbsenceRouterRef.doc(this.routeID).update({ ...this });
      console.log("Route data updated successfully. Route ID: " + this.routeID);

    } catch (error) {
      // Error handling
      console.error("Error updating route data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  /** 
   * End LOA-Router Class */
}

// ==========================================================================
// ----------------------- ROUTER UTILITY FUNCTIONS -------------------------
// ==========================================================================

// -------------------------------------------------------------------
// -------------- Requisition-Router Utility FUNCTIONS ---------------
// -------------------------------------------------------------------

/** 
   * Function to Create Requisition Route */

async function createRequisitionRoute(
  routeType,
  approverObj,
  reviewer1Obj,
  reviewer2Obj,
  disburserObj
) {
  try {
    // Instantiate router object
    const requisitionRouter = new RequsitionRoute();

    // Set default props
    requisitionRouter.setState("NOT_ACTIVE");
    requisitionRouter.setDateCreated(new Date());
    
    // Set routing data
    requisitionRouter.setRouterType(routeType);
    requisitionRouter.setReviewer1(reviewer1Obj);
    requisitionRouter.setReviewer2(reviewer2Obj);
    requisitionRouter.setApprover(approverObj);
    requisitionRouter.setDisburser(disburserObj);
    requisitionRouter.abandoned = false;

    // Save route to database
    await requisitionRouter.saveRouterToDatabase();

  } catch (error) {
    // Handle the error
    console.error("Error creating requisition route:", error);
  }
}

/** 
   * Function to Get Route from REQ_ROUTERS 
  */

async function getRouteFromReqRouter(routeID) {
  // Preloader
  console.log("Fetching route with ID in REQ_ROUTER...");

  try {
    // Reference the document in the req_router collection using the provided routeID
    const docRef = requisitionRouterRef.doc(routeID);

    // Get the document snapshot
    const docSnapshot = await docRef.get();

    // Check if the document exists
    if (docSnapshot.exists) {
      const routeData = docSnapshot.data(); // Extract the data from the document snapshot
      
      // Log or process the retrieved routeData
      console.log("Route data:", routeData);

      // Return the routeData
      return routeData;
    } else {
      // Document does not exist
      console.error("Document with routeID", routeID, "does not exist.");
      return null; // or throw an error
    }
  } catch (error) {
    // Error handling
    console.error("Error getting route data:", error);
    throw error;
  }
}

/** 
   * Function to Get Active Route from REQ_ROUTERS 
 */

async function getActiveReqRouteByType(routerType) {
  try {
    // Query to filter documents by routerType and state
    const querySnapshot = await requisitionRouterRef
      .where("routerType", "==", routerType)
      .where("state", "==", "ACTIVE")
      .limit(1)
      .get();

    // Check if there's at least one document matching the query
    if (querySnapshot.empty) {
      throw new Error(`No active route found for routerType '${routerType}'.`);
    }

    // Get the first document snapshot
    const docSnapshot = querySnapshot.docs[0];
    
    // Get the data from the document
    const routeData = docSnapshot.data();

    // Return the route data
    return routeData;
  } catch (error) {
    // Error handling
    throw error;
  }
}

/** 
   * Function to Get All Routes from REQ_ROUTERS 
  */

async function getAllReqRoutes() {
  // Preloader
  console.log("Fetching all routes from REQ_ROUTER...");

  try {
    // Get all documents from the req_router collection
    const querySnapshot = await requisitionRouterRef.get();

    // Initialize an array to store route data
    const routes = [];

    // Loop through each document snapshot
    querySnapshot.forEach((doc) => {
      // Get the data from the document
      const routeData = doc.data();
      
      // Add the route data to the array
      routes.push(routeData);
    });

    // Log or process the retrieved routes
    console.log("All routes:", routes);

    // Return the array of route data
    return routes;
  } catch (error) {
    // Error handling
    console.error("Error getting routes:", error);
    throw error;
  }
}

/** 
   * Function to Delete Route from REQ_ROUTERS 
  */

async function deleteReqRoute(routeID) {
  // Preloader
  console.log("Deleting route from REQ_ROUTER...");

  try {
    // Reference the document in the req_router collection using the provided routeID
    const docRef = requisitionRouterRef.doc(routeID);

    // Delete the document
    await docRef.delete();

    console.log("Route deleted successfully.");
  } catch (error) {
    // Error handling
    console.error("Error deleting route:", error);
    throw error;
  }
}

/** 
   * Function to Edit Requisition Route 
  */

async function editReqRoute(routeID) {
  // Preloader
  console.log("Req edit-route initiated...");

  try {
    // Fetch route data from the database
    const docSnapshot = await requisitionRouterRef.doc(routeID).get();

    // Check if the document exists
    if (!docSnapshot.exists) {
      throw new Error(`Route with ID '${routeID}' not found.`);
    }

    // Get route data from the document
    const routeData = docSnapshot.data();

    // Create an instance of RequsitionRoute with the fetched data
    const routeInstance = new RequsitionRoute();
    Object.assign(routeInstance, routeData);

    // FIXME: Modify the route data as needed
    routeInstance.setState("ACTIVE");

    // TODO: Add more modifications as needed

    // Save the modified route data back to the database
    await routeInstance.updateRouterDataInDatabase();

    console.log("Route successfully updated.");

  } catch (error) {
    // Handle error
    console.error("Failed to edit route:", error);
  }
}

/** 
   * Function to Get Active Default Requisition Route 
  */

async function getActiveDefaultReqRoute() {
  // Preloader
  console.log("Fetching default route from REQ_ROUTER...");

  try {
    const activeRoute = await getActiveReqRouteByType("DEFAULT");
    console.log(activeRoute);
    // Do further processing with activeRoute if needed
  } catch (error) {
    console.error("Error getting active route:", error);
  }
}

/** 
   * Function to Get Active Petit Cash Requisition Route 
  */

async function getActivePetitCashReqRoute() {
  // Preloader
  console.log("Fetching petit_cash route from REQ_ROUTER...");

  try {
    const activeRoute = await getActiveReqRouteByType("PETIT_CASH");
    console.log(activeRoute);
    // Do further processing with activeRoute if needed
  } catch (error) {
    console.error("Error getting active route:", error);
  }
}

// ---------------------------------------------------------------------
// ----------------- Voucher-Router Utility FUNCTIONS ------------------
// ---------------------------------------------------------------------

/** 
   * Function to Create Voucher Route 
  */

async function createVoucherRoute(
  routeType,
  approverObj,
  reviewer1Obj
) {
  try {
    // Instantiate router object
    const voucherRouter = new VoucherRoute();

    // Set default props
    voucherRouter.setState("NOT_ACTIVE");
    voucherRouter.setDateCreated(new Date());
    
    // Set routing data
    voucherRouter.setRouterType(routeType);
    voucherRouter.setReviewer(reviewer1Obj);
    voucherRouter.setApprover(approverObj);
    voucherRouter.abandoned = false;

    // Save route to database
    await voucherRouter.saveRouterToDatabase();

  } catch (error) {
    // Handle the error
    console.error("Error creating voucher route:", error);
  }
}

/** 
   * Function to Get Route from VOC_ROUTERS
  */

async function getRouteFromVocRouter(routeID) {
  // Preloader
  console.log("Fetching route with ID in VOC_ROUTER...");

  try {
    // Reference the document in the req_router collection using the provided routeID
    const docRef = voucherRouterRef.doc(routeID);

    // Get the document snapshot
    const docSnapshot = await docRef.get();

    // Check if the document exists
    if (docSnapshot.exists) {
      const routeData = docSnapshot.data(); // Extract the data from the document snapshot
      
      // Log or process the retrieved routeData
      console.log("Route data:", routeData);

      // Return the routeData
      return routeData;
    } else {
      // Document does not exist
      console.error("Document with routeID", routeID, "does not exist.");
      return null; // or throw an error
    }
  } catch (error) {
    // Error handling
    console.error("Error getting route data:", error);
    throw error;
  }
}

/** 
   * Function to Get Active Route from VOC_ROUTERS 
 */

async function getActiveVocRouteByType(routerType) {
  try {
    // Query to filter documents by routerType and state
    const querySnapshot = await voucherRouterRef
      .where("routerType", "==", routerType)
      .where("state", "==", "ACTIVE")
      .limit(1)
      .get();

    // Check if there's at least one document matching the query
    if (querySnapshot.empty) {
      throw new Error(`No active route found for routerType '${routerType}'.`);
    }

    // Get the first document snapshot
    const docSnapshot = querySnapshot.docs[0];
    
    // Get the data from the document
    const routeData = docSnapshot.data();

    // Return the route data
    return routeData;
  } catch (error) {
    // Error handling
    throw error;
  }
}

/** 
   * Function to Get All Routes from VOC_ROUTERS 
  */

async function getAllVocRoutes() {
  // Preloader
  console.log("Fetching all routes from VOC_ROUTER...");

  try {
    // Get all documents from the req_router collection
    const querySnapshot = await voucherRouterRef.get();

    // Initialize an array to store route data
    const routes = [];

    // Loop through each document snapshot
    querySnapshot.forEach((doc) => {
      // Get the data from the document
      const routeData = doc.data();
      
      // Add the route data to the array
      routes.push(routeData);
    });

    // Log or process the retrieved routes
    console.log("All routes:", routes);

    // Return the array of route data
    return routes;
  } catch (error) {
    // Error handling
    console.error("Error getting routes:", error);
    throw error;
  }
}

/** 
   * Function to Delete Route from VOC_ROUTERS
  */

async function deleteVocRoute(routeID) {
  // Preloader
  console.log("Deleting route from VOC_ROUTER...");

  try {
    // Reference the document in the req_router collection using the provided routeID
    const docRef = voucherRouterRef.doc(routeID);

    // Delete the document
    await docRef.delete();

    console.log("Route deleted successfully.");
  } catch (error) {
    // Error handling
    console.error("Error deleting route:", error);
    throw error;
  }
}

/** 
   * Function to Edit Voucher Route 
  */

async function editVocRoute(routeID) {
  // Preloader
  console.log("Voc edit-route initiated...");

  try {
    // Fetch route data from the database
    const docSnapshot = await voucherRouterRef.doc(routeID).get();

    // Check if the document exists
    if (!docSnapshot.exists) {
      throw new Error(`Route with ID '${routeID}' not found.`);
    }

    // Get route data from the document
    const routeData = docSnapshot.data();

    // Create an instance of RequsitionRoute with the fetched data
    const routeInstance = new VoucherRoute();
    Object.assign(routeInstance, routeData);

    // FIXME: Modify the route data as needed
    routeInstance.setState("ACTIVE");

    // TODO: Add more modifications as needed

    // Save the modified route data back to the database
    await routeInstance.updateRouterDataInDatabase();

    console.log("Route successfully updated.");

  } catch (error) {
    // Handle error
    console.error("Failed to edit route:", error);
  }
}

/** 
   * Function to Get Active Default Voucher Route
  */

async function getActiveDefaultVocRoute() {
  // Preloader
  console.log("Fetching default route from VOC_ROUTER...");

  try {
    const activeRoute = await getActiveVocRouteByType("DEFAULT");
    console.log(activeRoute);
    // Do further processing with activeRoute if needed
  } catch (error) {
    console.error("Error getting active route:", error);
  }
}

/** 
   * Function to Get Active Petit Cash Voucher Route 
  */

async function getActivePetitCashVocRoute() {
  // Preloader
  console.log("Fetching petit_cash route from VOC_ROUTER...");

  try {
    const activeRoute = await getActiveVocRouteByType("PETIT_CASH");
    console.log(activeRoute);
    // Do further processing with activeRoute if needed
  } catch (error) {
    console.error("Error getting active route:", error);
  }
}

// ===============================================================

// Call
let reviewer1 = {name: "Person 1", id: "11111"};
let reviewer2 = {name: "Person 2", id: "22222"};
let reviewer = {name: "Person 2", id: "22222"};
let approver = {name: "Person 3", id: "33333"};
let disburser = {name: "Person 4", id: "44444"};
let routingType = "DEFAULT";

// let routingType = "PETIT_CASH";


// --------- Requisition Route Testing
// createRequisitionRoute(routingType, reviewer1, reviewer2, approver, disburser);
// getAllReqRoutes();

// --------- Voucher Route Testing
// createVoucherRoute(routingType, reviewer, approver);
// getRouteFromVocRouter('ie0F78G7ike7jhRLcJhk');
// deleteVocRoute('ie0F78G7ike7jhRLcJhk');
// getAllVocRoutes();

// editVocRoute('d3qTUEXUtHAzDM6b2Ygn');
// getActiveDefaultVocRoute();
// getActiveDefaultReqRoute();
// getActivePetitCashVocRoute();