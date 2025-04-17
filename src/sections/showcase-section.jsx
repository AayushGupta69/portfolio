import { useRef } from "react";

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const realScoutRef = useRef(null);
  const liveDocsRef = useRef(null);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={realScoutRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="RealScout App Interface" />
            </div>
            <div className="text-content">
              <h2>
                A FullStack Real Estate application featuring Google
                authentication, dynamic property listings, and user profiles for
                a seamless and scalable experience.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, Appwrite, & TailwindCSS
                for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={liveDocsRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="LiveDocs - A Realtime Collaborative Text Editor"
                />
              </div>
              <h2>LiveDocs - A Realtime Collaborative Text Editor</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
