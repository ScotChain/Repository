document.addEventListener("DOMContentLoaded", function() {
  const documentList = document.getElementById("documentList");

  // Simulated list of documents (replace with your actual data)
  const documents = [
    { name: "Document 1", url: "documents/document1.pdf" },
    { name: "Document 2", url: "documents/document2.pdf" },
    { name: "Document 3", url: "documents/document3.pdf" },
  ];

  // Function to dynamically populate the document list
  function populateDocumentList() {
    documents.forEach(function(document) {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = document.name;
      link.href = document.url;
      listItem.appendChild(link);
      documentList.appendChild(listItem);
    });
  }

  // Call the function to populate the document list
  populateDocumentList();
});
