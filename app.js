
//grabbing career information and adding to dropdown
async function getCareers() {
    const url = "https://eecu-data-server.vercel.app/data";
    try {
        const response = await fetch(url);
        const jobs = await response.json();
        createOptions(jobs);
        console.log("initiated");
        return jobs;
    }
    catch (error) {
        console.error("Error fetching careers data:", error);
        return [];
    }

}

//creates options for dropdowns & adds Event Listers (needs to be fixed)
function createOptions(careers) {
    const dropdown = document.getElementById("careerSelect")
    careers.forEach((career, index) => {
        const options = document.createElement("option");
        options.innerHTML = `${career.Occupation}: ${career.Salary}`; //alter to fit $X,XXX,XXX format
        options.setAttribute("id", `${index}`);
        options.addEventListener("click", () => {
            careerTitle.innerHTML = `Future Career: ${career.Occupation}`;
            console.log(`Selected Career: ${career.Occupation}, Salary: ${career.Salary}`);
        });
        dropdown.appendChild(options);
        console.log("creating");
    });
}

getCareers(); //initating dropdown creation