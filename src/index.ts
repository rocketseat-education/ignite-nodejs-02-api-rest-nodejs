interface User {
  birthYear: number
}

function calculateAgeOfUser(user: User) {
  return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser({
  birthYear: 1994
})
