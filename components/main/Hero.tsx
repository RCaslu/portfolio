import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return ( 
        <div className="relative flex flex-col h-full w-full">
            <video
            autoPlay
            muted
            loop //COLOCAR -140px NO TOP PARA AJUSTAR O VÍDEO
            className="rotate-180 absolute top-[-350px] md:top-[-340px] left-0 z-[1] w-full h-full object-cover" 
            >
                <source src="./blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
     );
}
 
export default Hero;