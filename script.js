// const form = document.getElementById("Attendance-form");
// const resultdiv = document.getElementById("result");

// form.addEventListener("submit",function (event) {
//     event.preventDefault();
//    let totalclasses = number(document.getElementById("totalclasses").value);
//    let attendedclasses = number(document.getElementById("Attendanceclasses").value);

// if(attendedclasses > totalclasses){
//     resultdiv.innerHTML = '<div class="alter alter-danger">attended classes se jafa nahi ho sakti </div>';
//    }

//    let percentage =(attendedclasses / totalclasses) * 100;

//    let status;
//    let statusclass;

//    if(percentage >= 75){
//     status = "eligible for examination";
//     statusclass = "alert-success"
//    }
//    else{
//     status = "not eligible for examination";
//     statusclass = "alert-danger"
//    }
//    resultdiv.innerHTML = `
//    <div class="alert alert-info">
//    Attendance percentage: ${percentage.toFixed(2)}%
//    </div>
//    <div class="alert ${statusclass}">
//    status : ${status}
//    </div>
//    `;
// });

 /* HTML ke elements  (IDs bilkul HTML jaisi) */
const form = document.getElementById("Attendance-form");
const resultDiv = document.getElementById("result");

 /* Form submit hone par ye chalega */
form.addEventListener("submit", function (event) {

  // Step 3: Page refresh roko
  event.preventDefault();

 /* Input values lo */
  let totalClasses = Number(document.getElementById("totalclasses").value);
  let attendedClasses = Number(document.getElementById("Attendance-classes").value);

  /* Galat input check karo */
  if (attendedClasses > totalClasses) {
    resultDiv.innerHTML = '<div class="alert alert-danger">Attended classes total se zyada nahi ho sakti.</div>';
    return;
  }

   /* Percentage nikalo */
  let percentage = (attendedClasses / totalClasses) * 100;

   /* Eligible hai ya nahi */ 
  let status;
  let statusClass;

  if (percentage >= 75) {
    status = "Eligible for Examination";
    statusClass = "alert-success";
  } else {
    status = "Not Eligible for Examination";
    statusClass = "alert-danger";
  }

   /* Result dikhao */
  resultDiv.innerHTML = `
    <div class="alert alert-info">
      Attendance Percentage: ${percentage.toFixed(2)}%
    </div>
    <div class="alert ${statusClass}">
      Status: ${status}
    </div>
  `;
});