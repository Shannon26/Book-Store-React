import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SampleBooks from '../SampleBooks.json';

export default function MiddleDividers(props) {
  

  return (
    <div>
      {SampleBooks.items.filter((val) => {
        if (props.searchVal === "") {
          return val
        } else if (val.volumeInfo.title.toLowerCase().includes(props.searchVal.toLowerCase())) {
          return val
        }
      }
      ).map((el) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography key={el.id}>{el.volumeInfo.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography key={el.id}>
                {el.volumeInfo.description ? el.volumeInfo.description : "No Discription Avaliable"}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontSize: 12, mt: 3 }}>Publish On <span sx={{ color: 'text.primary' }} key={el.id}>{el.volumeInfo.publishedDate} </span></Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}
