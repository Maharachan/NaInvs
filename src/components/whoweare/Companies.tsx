

const Companies = () => {
  const companies = [
    { name: 'OAOA', logo: '/assets/logos/oaoa.svg' },
    { name: 'VIRTU', logo: '/assets/logos/virtu.svg' },
    { name: 'Dash Beyond', logo: '/assets/logos/dash-beyond.svg' },
    { name: 'TANDM', logo: '/assets/logos/tandm.svg' },
    { name: 'DGIFUND', logo: '/assets/logos/dgifund.svg' },
    { name: 'imPowered', logo: '/assets/logos/impowered.svg' },
    { name: 'Scirque', logo: '/assets/logos/scirque.svg' },
    { name: 'ParkPoolr', logo: '/assets/logos/parkpoolr.svg' },
    { name: 'TRADECRAFT', logo: '/assets/logos/tradecraft.svg' },
    { name: 'IGEN', logo: '/assets/logos/igen.svg' },
    { name: 'TARGET', logo: '/assets/logos/target.svg' },
    { name: 'WEIHAI', logo: '/assets/logos/weihai.svg' },
    { name: 'Greenlane', logo: '/assets/logos/greenlane.svg' },
    { name: 'Cloudcover', logo: '/assets/logos/cloudcover.svg' },
    { name: 'GameStop', logo: '/assets/logos/gamestop.svg' },
    { name: 'ALCHEMY 365', logo: '/assets/logos/alchemy365.svg' },
    { name: 'DCR SYSTEMS', logo: '/assets/logos/dcr-systems.svg' },
    { name: 'CARADAS', logo: '/assets/logos/caradas.svg' },
    { name: 'Cascaid Health', logo: '/assets/logos/cascaid-health.svg' },
    { name: 'Imprint Engine', logo: '/assets/logos/imprint-engine.svg' },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-white ">
      <h2 className="text-4xl font-bold text-center text-navy-900 mb-16">
        20+ Collaborations
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {companies.map((company) => (
          <div 
            key={company.name}
            className="flex items-center justify-center p-4"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;