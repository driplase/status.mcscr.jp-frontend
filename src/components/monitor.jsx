export default function Monitor({ name, data }) {
  return (
    <>
      <div className="hidden select-none pointer-events-none bg-red-500 bg-gray-500 bg-green-500">pre-renders</div>
      <div className="grid">
        <div className="text-lg mb-1 font-medium">
          {name}
          {typeof data?.uptimePercentage === "number" && (
            <>
              <span className="font-normal select-none"> | </span>
              <span className="text-blue-400">
                {data.uptimePercentage.toFixed(3)}%
              </span>
            </>
          )}
        </div>
        <div className="w-full h-9 flex flex-row">
          { data?.data?.map((info, idx) =>
            <div key={idx} className={`flex-auto rounded-full h-full mx-[.225%] bg-${
              info.offlineSeconds < 0 ? "gray-500"
                : info.offlineSeconds > 60 ? "red-500"
                : "green-500"
            }`}></div>
          ) }
        </div>
      </div>
    </>
  )
}