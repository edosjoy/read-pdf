import {useState} from "react";

import Button from "../../components/Button/Button";
import PdfReader from "../../components/PdfReader/PdfReader";

function App() {
  const [showPdfDocument, setShowPdfDocument] = useState(false);

  const openPdfDocument = () => {
    setShowPdfDocument(!showPdfDocument);
  }

  return (
    <>
      <Button openPdfDocument={openPdfDocument} />
      {showPdfDocument && <PdfReader openPdfDocument={openPdfDocument} />}
    </>
  );
}

export default App;
