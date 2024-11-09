'use client';
import Card from "../Props/Card";

const MyWork = () => {

    return (
        <>
            <div className="flex items-center justify-center border-t-2 border-black w-[95vw] relative translate-x-[5vw] pb-8 overflow-hidden"></div>
            <div className="flex justify-center ">            
                <h1 className="text-5xl text-black relative pb-8 text-center">All Projects</h1> 
            </div>

            {/* Project Cards to display different projects */}
            <div className="flex items-center justify-center pb-16">
                <div className="grid grid-cols-3 gap-4">
                    <Card title = "Varta" imageURL="/Varta.png" description = "A document upload and chatbot system designed to streamline communication" Link="https://github.com/Jangidyogesh12/Varta"/>
                    <Card title = "Snake.AI" imageURL="/Snake.AI.png" description = "Designed and implemented a snake game using AI reinforcement learning techniques" Link="https://github.com/Jangidyogesh12/Snake.AI"/>
                    <Card title = "FlickPilot" imageURL="/FlickPilot.png" description = "FlickPilot is a personal movie rocommender. It recommends you movies according to your interest" Link="https://github.com/Jangidyogesh12/FlickPilot"/>
                    <Card title = "Audio Classifier" imageURL="/AudioClassifier.png" description = "Utilized fundamental audio signal processing techniques and libraries (Librosa, PyTorch) to classify audio data" Link="https://github.com/Jangidyogesh12/Audio_classifier-dog_cat-"/>
                    <Card title = "Under Water Vehicle" imageURL="/UAV.webp" description = "Implementation of wireless control system utilizing ESP32 microcontroller to decode SBUS signals for precise thruster control" Link="https://github.com/Jangidyogesh12/Under-Water-Vehicle"/>
                </div>
            </div>
            
        </>
    );
}

export default MyWork;
