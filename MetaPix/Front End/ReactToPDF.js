import React, { useRef } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const ReactToPDF = ({ data }) => {
  const pdfRef = useRef(null);

  const generatePDF = () => {
    pdfRef.current.save();
  };

  return (
    <div>
      <Document ref={pdfRef}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{data}</Text>
          </View>
        </Page>
      </Document>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default ReactToPDF;
/*
Add logic to gather and format the data that you want to include in the PDF. 
This may involve modifying the component's state to store the results of the image search and EXIF data, 
as well as creating functions that format this data into a suitable format for the PDF. 
Make changes to the component's render function to display this data in the PDF in a way that meets your requirements. 
Add additional styling or layout options to the PDF, which will involve modifying the component's stylesheet and HTML 
structure.
*/