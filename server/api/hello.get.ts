export default defineEventHandler(async (event) => {
  const { name } = getQuery(event)
  return {
    data: `Hello ${name}`
  }
})
