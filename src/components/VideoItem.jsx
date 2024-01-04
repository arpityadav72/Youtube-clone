
import { Col, Container, Row, Image } from "react-bootstrap"

const VideoItem = ({ item, onVideoChange }) => {
    console.log(item, onVideoChange)
    return <Container className="mb-3" onClick={() => onVideoChange(item)}>
        <Row>
            <Col sm="7">
                <Image src={item.snippet.thumbnails.high.url} rounded width={200} />
            </Col>
            <Col sm="5">
                <h5>{item.snippet.channelTitle}</h5>
            </Col>
        </Row>
    </Container>

}
export default VideoItem