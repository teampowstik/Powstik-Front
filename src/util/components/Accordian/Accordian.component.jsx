import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, Typography, AccordionSummary } from '@mui/material';

const Accordian = ({ Title }) => {
    return (
        <div style={{}}>
            <Accordion style={{ width: "95%", borderBottom: "1.5px solid rgba(139, 195, 74, 0.2)", boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 15,
                            color: "#8BC34B",
                        }}
                    >
                        {Title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Greetings of the day </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default Accordian