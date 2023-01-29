import React from 'react';
import jsPDF from 'jspdf';

class PDF extends React.Component {
  generatePDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text('Hello world!', 10, 10);

    // Save the PDF
    doc.save('document.pdf');
  };

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>Generate PDF</button>
      </div>
    );
  }
}

export default PDF;

/*
I would like to add functionality to this 

react-to-pdf to convert the data collected from the image upload and the search results into a PDF format.

exif-js to extract the EXIF metadata from the uploaded image and format it in a way that can be easily included 
in the PDF document.

JavaScript to format the search results, including the URLs, and add them to the PDF document.

JavaScript to make the URLs in the PDF document clickable, so that the user can easily access the relevant websites.
*/



