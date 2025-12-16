
const CheckTime = (req, res, next) => {
  const now = new Date()
  const day = now.getDay() 
  const hour = now.getHours() 

  const isWeekday = day >= 1 && day <= 5
  const inWorkingHours = hour >= 9 && hour < 17

  if (!isWeekday || !inWorkingHours) {
    return res.status(403).send("Site disponible du lundi au vendredi, de 9h à 17h.")
  }

  next()
}

export default CheckTime
