const openDropdown = document.querySelectorAll(".openCategory");
const categories = document.querySelectorAll(".expenseContainer");

openDropdown.forEach((btn, index), ()=> { //for every button, listening for a click, issue with btn not being defined
    btn.addEventListener("click", ()=>{
        categories.forEach((category, number), ()=> { //will go through categories, if category # = btn #, will make category "active" -> will appear
            if (number === index){
                category.classList.add("active");
            } else {
                category.classList.remove("active"); //else "active" is removed & will disappear
            }
        })
    })
})