export function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-2xl text-center">Single View Page</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Card Title</h2>
          <p className="text-gray-600 mb-4">
            This is a detailed description of the card content. It provides an
            in-depth overview of what the card is about, including all relevant
            information that the user might find useful.
          </p>
          <p className="text-gray-600 mb-4">
            Additional information can be provided here to elaborate on the
            content or offer insights related to the card.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Action Button
            </a>
            <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
              Back
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Index;
