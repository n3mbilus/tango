class Company {
    name: string;
    constructor(companyName: string) {
        this.name = companyName;
    }
    getCompanyName() {
        return this.name;
    }
}

let company = new Company('ABC');

function showCompanyName() {
    var outputElement = document.getElementById('messages');
    outputElement.innerText = company.getCompanyName();
}
document.getElementById('actionButton').addEventListener('click', showCompanyName);
