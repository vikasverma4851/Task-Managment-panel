import { Children, lazy } from "react";
// import TruckManagement from "../component/TruckMangement/TruckManagement";

// Import components using lazy loading
const Overview = lazy(() => import("../component/OverView/OverView"));
const Report = lazy(() => import("../component/Report/Report"));
const UserOverview = lazy(() =>
  import("../component/UserOverview/UserOverview")
);
const TruckManagement = lazy(() =>
  import("../component/TruckMangement/TruckManagement")
);
// const PaymentManagement = lazy(() =>
//   import("../component/PaymentManagement/PaymentManagement")
// );
const UserCreation = lazy(() =>
  import("../component/UserCreation/UserCreation")
);
const EmployeeManagement = lazy(() =>
  import("../component/EmployeeManagement/EmployeeManagement")
);
const BidSubmission = lazy(() =>
  import("../component/BidSubmission/BidSubmission")
);
const BidReview = lazy(() => import("../component/BidReview/BidReview"));
const ShippmentTracking = lazy(() =>
  import("../component/ShippmentTracking/ShippmentTracking")
);
const CustomerFeedback = lazy(() =>
  import("../component/CustomerFeedback/CustomerFeedback")
);
const Branch = lazy(() => import("../component/Branch/Branch"));
const Setting = lazy(() => import("../component/Setting/Setting"));
const CreateQuery = lazy(() => import("../component/CreateQuery/CreateQuery"));
const LoadReceipt = lazy(() => import("../component/LoadReceipt/LoadReceipt"));
const ProofOfDelivey = lazy(() => import("../component/ProofOfDelivery/ProofOfDelivery"));
const PaymentList = lazy(() => import("../component/PaymentManagement/PaymentList"));
const AdvancePayment = lazy(() => import("../component/PaymentManagement/AdvancePayment"));
const BalancePayment = lazy(() => import("../component/PaymentManagement/BalancePayment"));
const Master = lazy(() => import("../component/Master/Master"));






const Userdata = JSON.parse(sessionStorage.getItem("userData"));

// console.log('3456789', Userdata);

const { overView, reports, userOverView, paymentManagement, userCreation, branchCreation, employeeManagement, createQuery, bidSubmission, shipmentTracking, customerFeedback, role } = Userdata;

// console.log('gyagshgshgsd', overView);



let AdminService;
if (role === "superAdmin") {
  AdminService = true;
} else {
  AdminService = false;
}
// Define routes
const routes = [
  {
    path: "/overview", // the url
    component: Overview, // view rendered
    navbarText: "Dashboard Overview",
    service: overView,
  },
  {
    path: "/reports", // the url
    component: Report, // view rendered
    // component: UploadeFile, // view rendered
    navbarText: "Reports",
    service: reports,
  },
  {
    path: "/user-overview", // the url
    component: UserOverview, // view rendered
    navbarText: "User Overview",
    service: userOverView,
  },
  // {
  //   path: "/payment-management", // the url
  //   component: PaymentManagement, // view rendered
  //   navbarText: "Payment Management",
  //   service: paymentManagement,
  // },
  {
    path: "/advance-payment", // the url
    component: AdvancePayment, // view rendered
    navbarText: "AdvancePayment",
    service: true,
  },
  {
    path: "/balance-payment", // the url
    component: BalancePayment, // view rendered
    navbarText: "BalancePayment",
    service: true,
  },
  {
    path: "/payment-list", // the url
    component: PaymentList, // view rendered
    navbarText: "PaymentList",
    service: true,
  },
  // {
  //   path: "/payment-list", // main URL
  //   component: PaymentList, // main component to render
  //   navbarText: "Payment List",
  //   service: true,
  //   children: [
  //     {
  //       path: "/payment-list/detail", // subpath under "/payment-list"
  //       component: PaymentList, // view rendered for this nested route
  //     }
  //   ]
  // },
  {
    path: "/user-creation", // the url
    component: UserCreation, // view rendered
    navbarText: "User Creation",
    service: userCreation,
  },
  {
    path: "/branch-creation", // the url
    component: Branch, // view rendered
    navbarText: "Branch",
    service: branchCreation,
  },
  {
    path: "/l-r", // the url
    component: LoadReceipt, // view rendered
    navbarText: "Load Receipt",
    service: true,
  },
  {
    path: "/p-o-d", // the url
    component: ProofOfDelivey, // view rendered
    navbarText: "Proof OF Delivery",
    service: true,
  },
  {
    path: "/employee-management", // the url
    component: EmployeeManagement, // view rendered
    navbarText: "Employee Management",
    service: employeeManagement,
  },
  {
    path: "/create-query", // the url
    component: CreateQuery, // view rendered
    navbarText: "Create Query",
    service: true,
  },
  {
    path: "/bid-submission", // the url
    component: BidSubmission, // view rendered
    navbarText: "Bid Submission",
    service: bidSubmission,
  },
  {
    path: "/master", // the url
    component: Master, // view rendered
    navbarText: "master",
    service: true,
  },
  {
    path: "/bid-review", // the url
    component: BidReview, // view rendered
    navbarText: "Bid Review",
    service: bidSubmission,
  },
  {
    path: "/shipment-tracking", // the url
    component: ShippmentTracking, // view rendered
    navbarText: "Shipment Tracking",
    service: shipmentTracking,
  },
  {
    path: "/customer-feedback", // the url
    component: CustomerFeedback, // view rendered
    navbarText: "Customer Feedback",
    service: customerFeedback,
  },
  {
    path: "/setting", // the url
    component: Setting, // view rendered
    navbarText: "setting",
    service: true,
  },
  {
    path: "/truck-management", // the url
    component: TruckManagement, // view rendered
    navbarText: "truck-management",
    service: true,
  },
].filter((route) => route?.service === true);

export default routes;
