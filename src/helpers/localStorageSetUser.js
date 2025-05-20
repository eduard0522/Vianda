
const setLocalStorage = (data) => {
  if(!data) {
    return false
  }
    localStorage.setItem('user', JSON.stringify({
          user: {
            name : data.name || "user",
            phone : data.phone || "no phone",
            email : data.email || "noemail@mail.com",
            address :data.address || "",
            id : data.id || ""
          }
        }))
      localStorage.setItem("token",data.token)
    return true
}

export {
  setLocalStorage
}