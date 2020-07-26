(function () {
    const addVotesHandler = document.querySelector(".fa-plus")
    const subVotesHandler = document.querySelector(".fa-minus")

    const addModal = document.querySelector(".add-modal")
    // console.log(addVotesHandler)
    addVotesHandler.addEventListener("click", function () {
        addModal.classList.remove("hide")

    })

    const subModal = document.querySelector(".sub-modal")
    // console.log(addVotesHandler)
    subVotesHandler.addEventListener("click", function () {
        subModal.classList.remove("hide")

    })
})()