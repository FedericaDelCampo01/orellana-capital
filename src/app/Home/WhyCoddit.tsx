import OptimizedImage from './OptimizedImage'
import whyCoddit from '../../../public/images/whyCoddit.png'
import whyCodditMobile from '../../../public/images/whyCoddit-mobile.png'
const reasons = [
  {
    title: "Partner Focus",
    description: "We offer personalised services tailored to your specific needs in order to achieve impactful results."
  },
  {
    title: "Radical Transparency",
    description: "We guarantee full transparency of our processes and results, so you can always see the impact of our work."
  },
  {
    title: "Experience and Expertise",
    description: "With over 10 years of industry experience, we are experts in the field and will drive your project to success."
  }
]

const WhyCoddit = () => {
  return (
    <section id='why-coddit' className="bg-dark-blue font-sans overflow-hidden w-full px-4 py-12 md:pb-20">
      <div className="container mx-auto md:max-w-5xl bg-white/[.14] rounded-xl md:rounded-3xl">
        <div className="flex md:flex-row flex-col w-full gap-12 p-6 md:p-12 mb-[-80px] md:mb-[-100px]">
          <div className="w-full md:w-1/4">
            <h1 className="text-white text-2xl font-medium mb-4">Why Coddit</h1>
            <p className="text-white text-base font-light mb-0 md:mb-8"> More than just a software studio, we are your partner in building a sustainable future. Here’s why our partners choose us:</p>
          </div>
          <div className="w-full md:w-3/4 flex md:flex-row flex-col gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-4 pb-6 md:px-6 text-left">
                <h3 className="text-lg font-medium text-dark-blue mb-4">{reason.title}</h3>
                <p className="text-dark-blue text-sm font-light">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block w-full relative">
          <OptimizedImage
            src={whyCoddit.src}
            alt="WhyCoddit"
            width={1155}
            height={320}
          />
        </div>
        <div className="md:hidden block w-full relative">
          <OptimizedImage
            src={whyCodditMobile.src}
            alt="WhyCoddit"
            width={1155}
            height={320}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyCoddit;