const adminLoginBtn = document.querySelector(".admin-login-btn")
const adminUsernameInput = document.querySelector("#username")
const adminPasswordInput = document.querySelector("#password")

const tokenInput = document.querySelector("#token")
tokenInput.value;

let theToken;
adminLoginBtn.addEventListener("click", async function (e) {
    e.preventDefault()
    const username = adminUsernameInput.value.trim()
    const password = adminPasswordInput.value
    const dataIn = {
        username,
        password
    }

    const resp = await fetch("/api/admin/login", {
        body: JSON.stringify(dataIn),
        method: "post",
        headers: {
            'Content-Type': "application/json"
        }
    })
    if (resp.status === 401) {
        console.log("Invalid user name or password")
        return
    }

    const dataOut = await resp.json()
    // console.log(dataOut)
    theToken = dataOut.token
    tokenInput.value = theToken
    console.log(tokenInput)

    document.cookie = `jwt_toten=${theToken}`
    document.querySelector(".admin-dashboard-btn").click()








})