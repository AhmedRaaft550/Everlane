import NewArrivalCards from "./NewArrivalCards";

const NewArrival = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl opacity-60 underline font-mono  font-bold text-amber-900 mb-8 text-center">
          New Arrivals
        </h2>
        <NewArrivalCards />
      </div>
    </section>
  );
};

export default NewArrival;
