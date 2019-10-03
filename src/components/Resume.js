import React ,{Component} from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Container,Grid } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import PDF from '../assets/Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

pdfjs.externalLinkTarget = pdfjs.LinkTarget.BLANK;
class Resume extends Component {
  state = {
    file: null,
    numPages: 0,
    pageNumber: 1,
    hidden:false,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;
    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }
    this.setState({
      pageNumber: nextPageNumber
    });


  }
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={{display:'flex', justifyContent:'center', backgroundColor:'#03A9F4',marginTop:'40px'}}>
          <Container>
            <Grid centered columns={3}>
              <Grid.Column textAlign="center" onClick={this.nextPage}>
                <Document
                          style={{boxShadow:' 10px 10px 5px grey'}}
                          file={PDF}
                          onLoadSuccess={this.onDocumentLoadSuccess}
                          scale="2"
                >
                  <Page
                          pageNumber={pageNumber}
                  />
                </Document>

                {!this.state.file ?
                    <div>
                      <p style={{fontFamily:'Segoe UI', color:'white'}}>Page {pageNumber} of {numPages}</p>
                    </div>
                : null}
              </Grid.Column>
            </Grid>
          </Container>


      </div>

    );
  }
}

export default Resume;