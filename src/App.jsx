import face from "./assets/images/avatar-jessica.jpeg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      <div className="container bg-gray-800 h-auto w-11/12 sm:w-72 mx-auto my-auto rounded-xl items-center ">
        <div className="pt-7 pb-5">
          <img
            src={face}
            alt="jessica.jpeg"
            className="mx-auto h-16 w-auto rounded-full"
          />
        </div>
        <div className=" text-center">
          <p className="text-white-100 font-inter font-semibold">
            Arun Jayaraman
          </p>
          <p className="font-inter text-Green-200 font-semibold text-sm pt-1 pb-4">
            Coimbatore,India
          </p>
          <p className="font-inter text-white-100 text-xs">
            "Front-end developer and avid reader."
          </p>
        </div>
        <div className="pb-2 flex mt-5 m-5 flex-col gap-3 justify-center">
          <button
            className="bg-gray-700 p-2 font-inter font-semibold text-sm text-white-100 rounded-md hover:bg-Green-200 hover:text-black hover:cursor-pointer"
            type="button"
          >
            GitHub
          </button>
          <button
            className="bg-gray-700 p-2 font-inter font-semibold text-sm text-white-100 rounded-md  hover:bg-Green-200 hover:text-black hover:cursor-pointer"
            type="button"
          >
            Frontend Mentor
          </button>
          <button
            className="bg-gray-700 p-2 font-inter font-semibold text-sm text-white-100 rounded-md  hover:bg-Green-200 hover:text-black hover:cursor-pointer"
            type="button"
          >
            LinkedIn
          </button>
          <button
            className="bg-gray-700 p-2 font-inter font-semibold text-sm text-white-100 rounded-md  hover:bg-Green-200 hover:text-black hover:cursor-pointer "
            type="button"
          >
            Twitter
          </button>
          <button
            className="bg-gray-700 p-2 font-inter font-semibold text-sm text-white-100 rounded-md  hover:bg-Green-200 hover:text-black hover:cursor-pointer"
            type="button"
          >
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
