

export default function CheekyLimeCard({item, quickView, selected, canclick, animate}) {
  return (
    <div className={`w-full max-w-sm mx-auto p-6`}   style={selected ? {backgroundColor: item.bgColor} : {}}>
      <div className={`relative flex justify-center `}>
        <img
          src={item.imgCircle}
          alt="background circle"
          className={`w-72 h-72 object-contain absolute top-[25%] z-0 duration-500 ${selected ? "scale-125" : "scale-0"} 
          ${animate && item.id === 4? " transition-all duration-[6000ms] scale-[1800] opacity-0" : ""}`}
        />

        <img
          src={item.img}
          alt={item.title}
          onClick={(item.id === 4) ? canclick : undefined}
          className={`relative z-10 w-60 duration-500 transform transition-transform ${selected ? "scale-100" : "scale-0 "}`}
        />
      </div>
 
      <div className={`mt-6 duration-500 ${selected ?  "translate-y-0" : "-translate-y-100"}`} style={selected ? {marginTop: ''} : {marginTop: '-300px'}}>
        <h2 className={`text-3xl font-bold ${item.numColor}`}>{item.id}</h2>

        <h3 className="text-xl font-semibold mt-1">{item.title}</h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          {item.desc}
        </p>
        <button
            className="mt-2 px-6 py-2 bg-white rounded-full shadow hover:shadow-lg transition"
            onClick={quickView(item)}
            >
            View
        </button>
      </div>
    </div>
  );
}
