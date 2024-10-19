const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    videoUrl: "https://www.youtube.com/embed/zyWTQqscbqA?si=tWATOJDDcors3Wn4",
    description: "John's testimonial description goes here.",
  },
  {
    id: 2,
    name: "Jane Smith",
    videoUrl: "https://www.youtube.com/embed/zyWTQqscbqA?si=tWATOJDDcors3Wn4",
    description: "Jane's testimonial description goes here.",
  },
  // Add more testimonials as needed
];

export default function Gallery() {
  
 
  return (
    <>
      <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8">Student Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative pb-9/16">
                 <iframe width="560" height="315" src={testimonial.videoUrl}
                  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowfullscreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}
