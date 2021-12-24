import React, { useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

function MyApp() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
}

function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
}

const Acomplishments = () => (
  
  <Section id="about">
    <SectionDivider />
    <br />
    <SectionTitle>Resume</SectionTitle>

    <div>

    <object width="100%" height="400" data="./ResumeChris.pdf" type="application/pdf">   </object>


    </div>

  </Section>
);

export default Acomplishments;
