// ✅ LEFT SIDE: Form Panel (user inputs) -->

//panel input
const studentInput=document.getElementById("studentName");
const courseInput=document.getElementById("courseName");
const instructorInput=document.getElementById("instructorName");
const signatureFile=document.getElementById("signatureFile");
const issuedDate=document.getElementById("issuedDate");
const serial=document.getElementById("serial");

//button and status line
const btnFillDemo=document.getElementById("btnFillDemo");
const btnReset=document.getElementById("btnReset");
const btnPrint=document.getElementById("btnPrint");
const statusLine=document.getElementById("statusLine");

// ✅ RIGHT SIDE:Prrview Panel (certification output) -->
const validBadge=document.getElementById("validBadge");

//cart
const certIssued=document.getElementById("certIssued");
const certSerial=document.getElementById("certSerial");
const certName=document.getElementById("certName");
const certCourse=document.getElementById("certCourse");
const certSignatureImg=document.getElementById("certSignatureImg");
const certInstructor=document.getElementById("certInstructor");

//Fetch class

const errorList=document.querySelectorAll(".error");

function validate() {

errorList.forEach(e=>e.style.display = 'none');
let isAllValid = true;

if(studentInput.value.length<3){
    errorList[0].style.display='block';
    isAllValid=false;
}

if(courseInput.value.length<5){
    errorList[1].style.display='block';
     isAllValid=false;
}

if(instructorInput.value.length<3){
    errorList[2].style.display='block';
     isAllValid=false;
}

if(signatureFile.files.length===0){
    errorList[3].style.display='block';
     isAllValid=false;
}

if(issuedDate.value===""){
    errorList[4].style.display='block';
     isAllValid=false;
}

if(serial.value.length<5){
    errorList[5].style.display='block';
     isAllValid=false;
}

if( isAllValid){
    statusLine.textContent="✅ All fields are valid. Ready to print.";
    validBadge.className = "small valid-state";
    validBadge.textContent="✅ Ready to print";
    btnPrint.disabled=false;
}else {
        statusLine.textContent = "❌ Please fix the highlighted fields to enable printing.";
        validBadge.textContent="❌ Not ready to print";
        btnPrint.disabled = true; 
    }

}

 validate();

//We out here the logic of JS

function fillFields(field,text){
field.addEventListener('input',(e)=>{
    text.textContent=e.target.value;
    validate();
})
}

fillFields(studentInput,certName);
fillFields(courseInput,certCourse);
fillFields(instructorInput,certInstructor);
fillFields(serial,certSerial);
fillFields(issuedDate,certIssued);

//Load the file of image
let currentSignatureUrl = null;
signatureFile.addEventListener('change',(e)=>{
    if(currentSignatureUrl!==null){
        URL.revokeObjectURL(currentSignatureUrl)
    };

    if(e.target.files[0]){
     const fileImg=URL.createObjectURL(e.target.files[0]);
     currentSignatureUrl=fileImg;
     certSignatureImg.src=currentSignatureUrl;
    }
validate();
})


// Reset button function
btnReset.addEventListener('click',()=>{
    //input field
 studentInput.value="";
 courseInput.value="";
 instructorInput.value="";
 signatureFile.value = "";
 issuedDate.value="";
 serial.value="";

 //cert
 certIssued.textContent="—";
 certSerial.textContent="—";
 certName.textContent="Student name";
 certCourse.textContent="Course Name Goes Here";
 certSignatureImg.src = "images/DefaultSig.png";
 certInstructor.textContent="Dr. Mohammed Abu-Hadhoud";
  validate();
})


// Fill demo button function
btnFillDemo.addEventListener('click',()=>{
    //Fill input field
 studentInput.value="Mohammed Abu-Hadhoud";
 courseInput.value="Goal Setting: Crafting and Achieving Your Objectives.";
 instructorInput.value="Dr.Mohammed Abu-Hadhoud";
 signatureFile.src = "images/DefaultSig.png";
 const dateTody=new Date();
 issuedDate.value=dateTody.toISOString().split('T')[0];
 serial.value="MD-2026-000123";

 certIssued.textContent=issuedDate.value;
 certSerial.textContent=serial.value;
 certName.textContent=studentInput.value;
 certCourse.textContent= courseInput.value;
 certSignatureImg.src = "images/Sig1.png";
 certInstructor.textContent=instructorInput.value;

 validate();
})


//Print the certfiction

btnPrint.addEventListener('click',()=>{
    window.print();
})


