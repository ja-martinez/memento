function slowPromise() {
  console.log("STARTING SLOW PROMISE...")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow")
      console.log("finished slow promise!")
    }, 2000)
  })
}

function fastPromise() {
  console.log("STARTING FAST PROMISE...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("finished fast promise!")
    })
  })
}

// slowPromise();
// fastPromise();

const main = async () => {
  
}