const container = document.querySelector(".container")
const btn = document.getElementById("spin")
const dataItems = document.querySelectorAll(".container div")

const dataAngles = {
  "1": 0,
  "15": 60,
  "5": 120,
  "10": 180,
  "3": 240,
  "20": 300,
  "1%": 360
}




const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"


function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function generateCoupon() {
    let coupon = ""

    for (let i = coupon.length; i < 10; i++) {
        const x = generateX()
        coupon += x
    }

    return coupon
}

function generateX() {
    const xs = []

    xs.push(getUppercase())
    xs.push(getNumber())

    if (xs.length === 0) return ""

    return xs[Math.floor(Math.random() * xs.length)]
}

function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}



let isSpinning = false

btn.addEventListener("click", Spin)

function Spin(event) {
  btn.style.cursor = "not-allowed"
  event.preventDefault()
  event.stopPropagation()
  if (!isSpinning) {
    isSpinning = true

    const randomAngle = (Math.ceil(Math.random() * 10000))
    container.style.transition = "transform 3s cubic-bezier(0.25, 1, 0.5, 1)"
    container.style.transform = `rotate(${randomAngle}deg)`

    setTimeout(() => {
      const currentTransform = getComputedStyle(container).transform
      container.style.transition = "none"

      container.style.transform = "rotate(0)"
      const matrix = new WebKitCSSMatrix(currentTransform)
      let currentAngle = (Math.atan2(matrix.m12, matrix.m11) * (180 / Math.PI) + 360) % 360

      container.style.transition = "transform 3s cubic-bezier(0.25, 1, 0.5, 1)"

      let closestData = null
      let minDifference = Infinity

      for (const data in dataAngles) {
        const difference = Math.abs(currentAngle - dataAngles[data])
        if (difference < minDifference) {
          minDifference = difference
          closestData = data
          if (closestData == "1%") {
            closestData = "1"
          }
        }
      }
      coupon = generateCoupon()

      fetch("/spin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          coupon: coupon,
          percentage: closestData
        })
      }).then(res => {
        return res.json()
      })


      container.style.transition = "none"
      container.style.transform = "rotate(0)"
      isSpinning = false
      alert(`Gratulálok! Nyertél egy ${closestData}%-os kedvezményt! Kuponkódod: ${coupon}`)
      closePopup()
    }, 3000)
  }
  btn.removeEventListener("click", Spin)
}