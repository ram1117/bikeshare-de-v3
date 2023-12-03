const refineBikeData = (data: any) => {
  const newList: any = []
  const newCapitals: any = []

  data.networks.forEach((network: any) => {
    if (network.location.country === "DE") {
      newList.push({
        city: network.location.city,
        href: network.href,
        name: network.name,
        latitude: network.location.latitude,
        longitude: network.location.longitude,
        id: network.id,
      })
      const { city } = network.location
      const firstLetter = city.charAt(0)
      if (newCapitals.indexOf(firstLetter) === -1) {
        newCapitals.push(firstLetter)
      }
    }
  })
  return {
    cities: [...newList],
    cityCapitals: [...newCapitals],
  }
}

export default refineBikeData
