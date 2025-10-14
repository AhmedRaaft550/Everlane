const BannerVideo = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    >
      <source src="/videos/image.webm" type="video/webm" />
      <source src="/videos/image.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BannerVideo;
