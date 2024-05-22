import SeeNSayPic from "../../assets/SeeNSay1.jpg";
import SpotifyPic from "../../assets/spotify.svg";
import SimonPic from "../../assets/simon.jpg";
import PortfolioV1Pic from "../../assets/AnimatedZeek.png";

export const projectsData = [
    {
        id: 1,
        title: "See-N-Say",
        alt: "seensay",
        description: "Native mobile Android app made for children to challenge their ability to match animal sounds to the correct animal.",
        image: SeeNSayPic,
        link: {
            github: "https://github.com/zeekcollins/See-N-Say",
            web: "https://github.com/zeekcollins/See-N-Say"
        },
    },
    {
        id: 2,
        title: "Spotify API App",
        alt: "spotify",
        description: "A single-page web app to send HTTP requests to Spotify's Web API and display the top 9 tracks of any artist.",
        image: SpotifyPic,
        link: {
            github: "https://github.com/zeekcollins/SpotifyAPI_app",
            web: "https://zeekcollins.github.io/SpotifyAPI_app"
        },
    },
    {
        id: 3,
        title: "Simon Memory Game",
        alt: "simon",
        description: "An interactive web app for playing the classic game, Simon, in the browser.",
        image: SimonPic,
        link: {
            github: "https://github.com/zeekcollins/SimonGameChallenge",
            web: "https://zeekcollins.github.io/SimonGameChallenge/"
        },
    },
    {
        id: 4,
        title: "My Portfolio Site - v1",
        alt: "portfolio-v1",
        description: "A single-page personal portfolio website I built and hosted with Netlify",
        image: PortfolioV1Pic,
        link: {
            github: "https://github.com/zeekcollins/portfolio-v1",
            web: "https://zeekcollins.com"
        },
    }
]