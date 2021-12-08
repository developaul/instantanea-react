
export const numberWithCommas = (number: number): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


export const fileToURL = (file: File): Promise<string | ArrayBuffer | null> => {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    try {
      reader.onloadend = () => resolve(reader.result)

      if (file)
        reader.readAsDataURL(file)

      console.log('Sin archivo')
    } catch (error) {
      reject(error)
    }
  })
}