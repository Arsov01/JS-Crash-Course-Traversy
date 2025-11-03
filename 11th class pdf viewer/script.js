const url = "../docs/pdf.pdf";

let pdfDoc = null;
let pageNum = 1;
let pageIsRendering = false;
let pageNumIsPending = null;

const scale = 1.5;
const canvas = document.querySelector("#pdf-render");
const ctx = canvas.getContext("2d");

// Set PDF.js worker path (IMPORTANT)
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

// render the page

const renderPage = (num) => {
  pageIsRendering = true;

  pdfDoc.getPage(num).then((page) => {
    // set the scale of the page
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };

    page.render(renderContext).promise.then(() => {
      pageIsRendering = false;
      document.querySelector("#page-num").textContent = num;
      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });
  });
};

// check for pages rendering
const queueRenderPage = (num) => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// show prev page

const showPrevPage = () => {
  if (pageNum <= 1) return;
  pageNum--;
  queueRenderPage(pageNum); // Fixed: was using undefined 'page'
};

// Sh
// Show next page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) return; // Fixed: incorrect arrow function
  pageNum++;
  queueRenderPage(pageNum); // Fixed: was using undefined 'page'
};

// Load the document
pdfjsLib
  .getDocument(url)
  .promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;

    // Update page count
    document.querySelector("#page-count").textContent = pdfDoc.numPages;
    document.querySelector("#page-num").textContent = pageNum;

    // Initial render
    renderPage(pageNum);
  })
  .catch((err) => {
    console.error("Error loading PDF:", err);
    document.querySelector("#pdf-render").innerHTML = `
    <div class="error">Failed to load PDF: ${err.message}</div>
  `;
  });

// button events
document.querySelector("#prev-page").addEventListener("click", showPrevPage);
document.querySelector("#next-page").addEventListener("click", showNextPage);
