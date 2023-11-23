const nosotros = document.querySelector("#nosotros");
const servicios = document.querySelector("#servicios");
const team_designer = document.querySelector("#team_designer");

/*Menu NOSOTROS */
nosotros.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".nosotros");
    sectionS.scrollIntoView({behavior:"smooth"});
})


/*Menu SERVICIOS */
servicios.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".servicios");
    sectionP.scrollIntoView({behavior:"smooth"});
})

/*Menu TEAM DESIGNER */
team_designer.addEventListener("click", (t) => {
    t.preventDefault();

    const sectionT = document.querySelector(".team_designer");
    sectionT.scrollIntoView({behavior:"smooth"});
})