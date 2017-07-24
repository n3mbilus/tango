var Company = (function () {
    function Company(companyName) {
        this.name = companyName;
    }
    Company.prototype.getCompanyName = function () {
        return this.name;
    };
    return Company;
}());
var company = new Company('ABC');
function showCompanyName() {
    var outputElement = document.getElementById('messages');
    outputElement.innerText = company.getCompanyName();
}
document.getElementById('actionButton').addEventListener('click', showCompanyName);
//# sourceMappingURL=base.js.map