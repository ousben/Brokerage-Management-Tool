function toggleClass(id) {
    let elements = document.querySelectorAll(".element-added");
    for(let i = 0; i < elements.length; i++) {
        if(elements[i] === document.getElementById(id)) {
            elements[i].classList.toggle("hidden");
        } else {
            elements[i].classList.add("hidden");
        }
    }
}

function frontOffice() {
    toggleClass("frontOfficeContent");
}

function gmoBrokerage() {
    toggleClass("gmoBrokerageContent");
}

function gmoBrokerageFees() {
    toggleClass("gmoBrokerageFeesContent");
}

function gmoChief() {
    toggleClass("gmoChiefContent");
}

function riskManagement() {
    toggleClass("riskManagementContent");
}

function legalDepartment() {
    toggleClass("legalDepartmentContent");
}

function compliance() {
    toggleClass("complianceContent");
}

function psc() {
    toggleClass("pscContent");
}


document.getElementById("frontOfficeToggle").addEventListener("click", frontOffice);
document.getElementById("gmoBrokerageToggle").addEventListener("click", gmoBrokerage);
document.getElementById("gmoBrokerageFeesToggle").addEventListener("click", gmoBrokerageFees);
document.getElementById("gmoChiefToggle").addEventListener("click", gmoChief);
document.getElementById("riskManagementToggle").addEventListener("click", riskManagement);
document.getElementById("legalDepartmentToggle").addEventListener("click", legalDepartment);
document.getElementById("complianceToggle").addEventListener("click", compliance);
document.getElementById("pscToggle").addEventListener("click", psc);

for(let i = 0; i < document.querySelectorAll(".element-added").length; i++) {
    document.querySelectorAll(".element-added")[i].classList.add("hidden");
}