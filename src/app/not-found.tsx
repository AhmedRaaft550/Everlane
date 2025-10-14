const NotFound = () => {
  return (
    <section className="relative w-full h-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        src="/videos/notFound.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-contain brightness-50"
      ></video>
    </section>
  );
};

export default NotFound;
