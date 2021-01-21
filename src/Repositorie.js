import { Badge, Button, Card, Collapse } from 'react-bootstrap'
import React, { useState } from 'react'

import ReactMarkdown from 'react-markdown'

export default function Repositorie({repositorie}) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="mb-4">
        <Card.Body>
            <div className="d-flex justify-content-between">
                <div> 
                    <Card.Title>
                    {repositorie.name} - <span className="text-muted font-weight-light">{repositorie.name}</span>
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                        {new Date(repositorie.owner).toLocaleDateString()}
                    </Card.Subtitle>
                    <Badge variant="secondary" className="mr-2">
                        {repositorie.type}
                    </Badge>
                    <Badge variant="secondary">
                        {repositorie.type}
                    </Badge>
                    <div style={{ wordBreak: 'break-all'}}>
                        <ReactMarkdown source={repositorie.description}/>  
                    </div>
                </div>
                <img className="d-none d-md-block" height="50" alt={repositorie.avatar_url} src={repositorie.avatar_url}></img>
            </div>

            <Card.Text>
                <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">
                    {open ?  'Hide Repo Details' : 'View Repo Details'}
                    
                </Button>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={repositorie.description}/>
                    </div>
                </Collapse>
            </Card.Text>
        </Card.Body>
        
    </Card>
    )
}
