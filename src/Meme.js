import { useEffect, useState } from 'react';

export default function MemeTextInput(){

    const [meme, setMeme] = useState({

            topText: "One does not simply",
            bottomText: "code without a single bug",
            image: "http://i.imgflip.com/1bij.jpg"

        })
    
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function newRandImage(){

        let randomnumber = Math.floor(Math.random() * (allMemes.length - 0 + 1)) + 0;
        let imageData = allMemes[randomnumber].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                image: imageData
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return(
        <div className="flex justify-center mt-9 w-screen">
                <div className="grid grid-cols-1 w-11/12 lg:w-6/12 gap-4">
                        <div className='form'>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder={meme.topText} name="topText" onChange={handleChange} className="border-2 rounded-lg pl-2.5 py-2.5 text-xs md:text-xl"/>
                                <input type="text" placeholder={meme.bottomText} name="bottomText" onChange={handleChange} className="border-2 rounded-lg pl-2.5 py-2.5 text-xs md:text-xl" />
                            </div>
                        </div>
                    <button onClick={newRandImage} className="bg-gradient-to-r from-[#711F8D] to-[#A818DA] mt-4 text-white font-karla font-bold text-base md:text-xl rounded-md py-2.5 px-2.5">Get a new meme image  🖼</button>
                    <div className="flex flex-col items-center relative">
                        <img src={meme.image} alt="Meme" className="w-fit" />
                        <div className="absolute left-0 right-0 text-center mt-4">
                            <h2 className="text-white text-3xl md:text-4xl font-alfa font-outline-2">{meme.topText}</h2>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
                            <h2 className="text-white text-3xl md:text-4xl font-alfa font-outline-2">{meme.bottomText}</h2>
                        </div>
                    </div>
                </div>
        </div>
    );
}