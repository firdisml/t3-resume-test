import React,{useState} from "react";
import PDFFile from "../../../../components/PDFFile";
import { PDFDownloadLink, PDFViewer, Document, Page } from '@react-pdf/renderer';

function Viewer(props) {



  return (
    <div>
    <PDFDownloadLink document={<PDFFile/>} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>

    <PDFViewer
        showToolbar={false}
        className="h-screen w-full"
      >
        <PDFFile experiences={props.experiences}/>
      </PDFViewer>
  </div>
  )
}

export default Viewer;
