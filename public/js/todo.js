// put js for todo app here
const toggleTab = (event) => {
    //for tabs
    const tabs = event.currentTarget.parentNode.children
    for (let x of tabs)
        x.classList.remove("selected")
    event.currentTarget.classList.add("selected")

    //forcontent
    const contentToShow = event.currentTarget.id
    const tabContents = document.querySelector(".tabs-content").children;
    for (let x of tabContents)
        x.classList.remove("active")
    document.querySelector("."+contentToShow).classList.add("active")
}