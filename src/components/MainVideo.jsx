import { Container,Row } from "react-bootstrap"

const MainVideo = ({selectedVideo}) =>{
    const videoSrc = "https://www.youtube.com/embed/"+selectedVideo?.id.videoId
return selectedVideo === null ? <h1>Loading...</h1>:<Container>
    <Row >
    <iframe 
    height={300}
    width={750}
src={videoSrc}>
</iframe>
    <h3>{selectedVideo.snippet.channelTitle}</h3>
    <h4>{selectedVideo.snippet.description}</h4>
    </Row>

</Container>
}

export default MainVideo