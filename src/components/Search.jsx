
import { InputGroup,Form,Container,Button } from "react-bootstrap"
import youtube from "../api/youtube"
import { useState } from "react"

const Search = ({searchHandler}) =>{
    const [search,setSearch] = useState('')

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        searchHandler(search)
    }



return   <Container>
 <Form onSubmit={onSubmitHandler}>
<InputGroup className="mb-3">
<Form.Control
  placeholder="Search..."
  value={search}
  onChange={e => setSearch(e.target.value)}
/>
<Button variant="primary" type="submit">Search</Button>
</InputGroup>
</Form>
</Container>
}

export default Search