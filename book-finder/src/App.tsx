// import { Button } from "@/components/ui/button"

import { useState } from "react";

interface DocumentData {
  id: number;
  title: string;
  url: string;
}

// function App() {
  // return (
    // <div className="flex min-h-svh flex-col items-center justify-center">
      {/* <Button>Click me</Button> */}
    {/* </div> */}
  // )
// }

// export default App

export default function PDFViewerApp() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentData | null>(null);

  const documents: DocumentData[] = [
    { id: 1, title: 'Finance Report', url: '/pdfs/report.pdf' },
    { id: 2, title: 'Commercial Proposal', url: '/pdfs/proposal.pdf' },
    { id: 3, title: 'Product Manual', url: '/pdfs/manual.pdf' },
  ];

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-200 p-4 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Documents</h1>
        <ul className="space-y-2">
          {documents.map((doc) => (
            <li
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition ${
                selectedDoc?.id === doc.id ? 'bg-gray-200' : ''
              }`}
            >
              {doc.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-hidden">
        {selectedDoc ? (
          <div className="h-full w-full border border-gray-300 rounded-lg overflow-hidden">
            <iframe
              src={selectedDoc.url}
              className="w-full h-full"
              title={selectedDoc.title}
            ></iframe>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a document to view.
          </div>
        )}
      </div>
    </div>
  );
}
