import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import printJS from "print-js";

import './PdfReader.css';

import {URL_PDF_FILE} from "../../constants/UrlPdfFile";

const PdfReader = ({openPdfDocument}) => {
	const [totalPdfPages, setTotalPdfPages] = useState(null);

	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

	const showAllPages = () => {
		const resultArrAllPages = [];

		for (let i = 1; i <= totalPdfPages; i++) {
			resultArrAllPages.push(<Page key={`page_${i}`} pageNumber={i} />);
		}

		return resultArrAllPages;
	}

	return (
		<>
			<div className="modal__bg">
				<div className="modal__document">
					<div className="modal__buttons">
						<button className="modal__button-print" onClick={() => printJS(URL_PDF_FILE)}>Print this document</button>
						<button className="modal__button-close" onClick={openPdfDocument}>Close</button>
					</div>
					<Document file={URL_PDF_FILE} onLoadSuccess={({numPages}) => setTotalPdfPages(numPages)}>
						{
							showAllPages()
						}
					</Document>
				</div>
			</div>
		</>
	);
};

export default PdfReader;
