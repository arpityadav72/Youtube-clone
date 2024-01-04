//App.jsx


import { Container, Row, Col } from "react-bootstrap"
import Search from "./components/Search"
import MainVideo from "./components/MainVideo"
import { useEffect, useState } from "react"
import youtube from "./api/youtube"
import List from "./components/List"

const App = () => {

  const [search, setSearch] = useState('Toyota Supra')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [list, setList] = useState([])
  const searchHandler = (val) => {
    setSearch(val)
  }

  useEffect(() => {
    async function getdata() {
      const res = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAGvKWBYsYuemsyrPH4lJGQodCNq7gQNPA",
          q: search

        }


      })
      setSelectedVideo(res.data.items[0])
      setList(res.data.items)
    }
    getdata()
  }, [search])
  const onVideoChange = (data) => {
    setSelectedVideo(data)

  }


  return <Container>
    <Row>

      <Search searchHandler={searchHandler} />
    </Row>
    <Row>
      <Col sm="8">
        <MainVideo selectedVideo={selectedVideo} />
      </Col>
      <Col sm="4">
        <List list={list} onVideoChange={onVideoChange} />
      </Col>
    </Row>
  </Container>
}

export default App