import userEvent from '@testing-library/user-event'
import {useState} from 'react'

import {Modal,Form , Button} from 'react-bootstrap'

function Add({Movies, setMovies}) {
    // const AddMovie =() => [...movies,('title','posterURL' , 'rating','description')]

    // const addmovies=()=> setMovies([...Movies, {} ]) 
    const [ Title ,setTitle ]=useState('')
    const [ PosterURL , setPosterUrl]=useState('') 
    const [ Description , setDescription] =useState ('')
    const [ Rating , setRating] =useState (0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AddMovie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail"> 
    <Form.Label>Title</Form.Label>
    <Form.Control type="Title" placeholder="Enter Title"
    onChange ={(el) => setTitle(el.target.value) }
    />

<Form.Label>Description</Form.Label>
    <Form.Control type="Description" placeholder="Enter Description "
    onChange ={(el) => setDescription(el.target.value) } />
    
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="PosterURL" placeholder="Enter PosterURL "
    onChange ={(el) => setPosterUrl(el.target.value) } />

    <Form.Label>Rating</Form.Label>
    <Form.Control type="" placeholder="Enter Rating "
    onChange ={(el) => setRating(el.target.value) } /> 
    
    </Form.Group>
    
</Form>
         
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Add 
