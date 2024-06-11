function switchcategory(value){
    let category = document.querySelectorAll(".category");
    let grids = document.querySelectorAll(".grid, .grid-child");

    category.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    grids.forEach((grid) => {
        if (value === 'Adult' && grid.classList.contains('grid')) {
            grid.style.display = 'flex';
        } else if (value === 'Child' && grid.classList.contains('grid-child')) {
            grid.style.display = 'flex';
        } else {
            grid.style.display = 'none';
        }
    });
}


window.onload = () => switchcategory('Adult');
