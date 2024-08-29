function Loading() {
  return (
    <div className="bg-[#161616] w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-20 h-20 mb-4">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="text-white">Loading...</div>
      </div>
    </div>
  );
}

export default Loading;
