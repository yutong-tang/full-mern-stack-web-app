import { useState, useEffect } from "react"
import axios from "axios"

const AboutUs = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5002"}/about-us`)
      .then((res) => setData(res.data))
      .catch(() => setError("Could not load About Us content."))
  }, [])

  if (error) return <p>{error}</p>
  if (!data) return <p>Loading...</p>

  return (
    <>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt="Me" style={{ maxWidth: 300 }} />
      {data.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  )
}

export default AboutUs