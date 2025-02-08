import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center w-screen h-screen">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-extrabold text-[#212121]  mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-xl font-semibold text-[#212121] mt-2">
          The page you&apos;re looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
