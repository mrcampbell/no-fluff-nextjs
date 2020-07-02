  
import { useRouter } from 'next/router'

const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Pokemon: {id}</h1>
    </>
  )
}

export default Pokemon