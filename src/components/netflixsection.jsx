import FAQ from "./Faq";
import Email from "./email";
const NetflixSection = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* More reasons to join */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">More reasons to join</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Enjoy on your TV',
              text: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
              icon: 'https://img.icons8.com/ios-filled/50/monitor.png',
            },
            {
              title: 'Download your shows to watch offline',
              text: 'Save your favourites easily and always have something to watch.',
              icon: 'https://img.icons8.com/ios-filled/50/download--v1.png',
            },
            {
              title: 'Watch everywhere',
              text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
              icon: 'https://img.icons8.com/ios-filled/50/binoculars.png',
            },
            {
              title: 'Create profiles for kids',
              text: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
              icon: 'https://img.icons8.com/ios-filled/50/happy.png',
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-900 to-indigo-800 p-6 rounded-2xl text-white flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.text}</p>
              </div>
              <img src={card.icon} alt={`${card.title} Icon`} className="w-10 h-10 mt-4" />
            </div>
          ))}
        </div>
      </section>
     <FAQ/>
     <Email/>
      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6">
            Questions? Call <a href="tel:000-800-919-1743" className="underline">000-800-919-1743</a>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            {[
              'FAQ', 'Investor Relations', 'Privacy', 'Speed Test',
              'Help Centre', 'Jobs', 'Cookie Preferences', 'Legal Notices',
              'Account', 'Ways to Watch', 'Corporate Information', 'Only on Netflix',
              'Media Centre', 'Terms of Use', 'Contact Us'
            ].map((link, i) => (
              <a href="#" key={i} className="hover:underline">{link}</a>
            ))}
          </div>
          <div className="mb-4">
            <select className="bg-transparent border border-gray-500 rounded px-2 py-1 text-white">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <p className="text-sm">Netflix India</p>
        </div>
      </footer>
    </div>
  );
};

export default NetflixSection;
