import SanityClientConstructor from "@sanity/client";
import React, { useEffect } from "react";

const About = () => {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    SanityClientConstructor.fetch(
      `*[_type=="author"]{
        name,
        bio,
        "authorImage":image.asset->url
      }`
    ).then((data) => setAuthor(data[0])).catch(console.error)
  }, []);
  if(!author) return <div>Loading...</div>
  return (
    <main className="relative">
      <img src={} alt="Plumeria Flower" className="absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img>
          <div>
            <h1>
              <div>

              </div>
            </h1>
          </div>
          </img>
        </section>
      </div>
    </main>
  )
};

export default About;
