export default function PageOne() {
  return (
    <main className="bg-yellow-300 flex h-screen">
      <div className="bg-white flex flex-col space-y-4 justify-center p-16 m-48 rounded-lg shadow-2xl shadow-black ">
        <div className="bg-yellow-300 w-20">
          <p className="text-black font-bold p-3 flex justify-center font-sans">
            Learning
          </p>
        </div>
        <p className="font-sans">Publised 21 Dec 2023</p>

        <h1 className="text-3xl font-bold font-sans">HTML & CSS foundations</h1>
        <p className="text-gray-400 font-sans">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <p className="font-bold font-sans">Greg Hooper</p>
      </div>
    </main>
  );
}
