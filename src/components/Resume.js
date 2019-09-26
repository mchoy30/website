import React ,{Component} from 'react';
import { Container,Grid } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import PDF from '../assets/Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
      <div style={{backgroundColor:'#808080'}}>
          <Container>
            <Grid centered columns={5}>
              <Grid.Column textAlign="center" onClick={this.nextPage}>
                <Document
                          style={{boxShadow:' 10px 10px 5px grey'}}
                          file={PDF}
                          onLoadSuccess={this.onDocumentLoadSuccess}
                          noData={<h4>Please select a file</h4>}
                          scale="2">
                  <Page pageNumber={pageNumber}
                        height={2000} />
                </Document>

                {this.state.file ? <p>Page {pageNumber} of {numPages}</p> : null}
              </Grid.Column>
            </Grid>
          </Container>

          <div className={hidden}></div>
      </div>

    );
  }
}

export default Resume;