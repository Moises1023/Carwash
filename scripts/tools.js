function addServices(){
    document
    .getElementById("addService")
    .addEventListener("submit", function (event) {
        event.preventDefault()
        const serviceName = document.getElementById("serviceName").value
        const servicePrice = document.getElementById("servicePrice").value

        const service = {
            serviceName: serviceName,
            servicePrice: servicePrice
        }

        saveInLocalStorage(service);
        document.getElementById("addService").reset()
    });
}

function saveInLocalStorage(service){
    localStorage.setItem("service",JSON.stringify(service))

    setTimeout(() => {
        loadInformationFromLS()
    }, 1000);
}

function loadInformationFromLS(){
    const data = JSON.parse(localStorage.getItem("service"))
    console.log("Data", data);
}

document.addEventListener("DOMContentLoaded", addServices);