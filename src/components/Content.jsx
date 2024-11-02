function Content({ data }) {
  if (!data) return;
  const { location, timelines } = data;
  console.log(location);

  const temperature = timelines.daily[0].values.temperatureAvg;
  const humidity = timelines.daily[0].values.humidityAvg;
  const wind = timelines.daily[0].values.windSpeedAvg;
  const rain = timelines.daily[0].values.rainAccumulationAvg;

  return (
    <>
      <div className="mt-6">
        <h1 className=" text-pink-400 font-bold text-2xl">{location.name}</h1>
        <h2 className="text-pink-400 font-bold py-4 text-2xl">
          Temperature : {temperature} c{" "}
        </h2>
        <h2 className="text-pink-400 font-bold py-4 text-2xl">
          Humidity : {humidity}
        </h2>
        <h2 className="text-pink-400 font-bold py-4 text-2xl">
          Wind : {wind} km/hr
        </h2>
        <h2 className="text-pink-400 font-bold py-4 text-2xl">
          Rain Accumulation : {rain} mm
        </h2>
      </div>
      <div>
        <h1 className="font-bold text-white text-2xl mt-10">
          school Leave Possibility : {rain > 5 ? "YES" : "No"}
        </h1>
      </div>
    </>
  );
}

export default Content;
