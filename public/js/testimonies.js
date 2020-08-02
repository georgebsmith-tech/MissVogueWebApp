const testimonies = document.querySelectorAll(".a-testimony")
const theTestimony = document.querySelector(".the-testimonies")
// console.log(testimonies)
console.log(theTestimony)
let count = 1
setInterval(() => {
    theTestimony.style.transition = "1s"
    theTestimony.style.transform = `translateX(-${100 * count}vw)`
    count++
    if (count > testimonies.length) {
        theTestimony.style.transition = "0s"
        count = 1
        theTestimony.style.transform = `translateX(${0}vw)`
    }

}, 8000)


