import { Header } from "../../components";
import season_banner from "../../assets/store/season-banner.png"
import StoreSection from "./StoreSection/StoreSection";

import './Store.css'

import offers1 from '../../assets/store/offers1.png'
import offers2 from '../../assets/store/offers2.png'
import offers3 from '../../assets/store/offers3.png'

import genres1 from '../../assets/store/genres1.png'
import genres2 from '../../assets/store/genres2.png'
import genres3 from '../../assets/store/genres3.png'
import genres4 from '../../assets/store/genres4.png'
import genres5 from '../../assets/store/genres5.png'

import free1 from '../../assets/store/free1.png'
import free2 from '../../assets/store/free2.png'
import free3 from '../../assets/store/free3.png'

import new1 from '../../assets/store/new1.png'
import new2 from '../../assets/store/new2.png'
import new3 from '../../assets/store/new3.png'

import recent1 from '../../assets/store/recent1.png'
import recent2 from '../../assets/store/recent2.png'
import recent3 from '../../assets/store/recent3.png'
import recent4 from '../../assets/store/recent4.png'

import top1 from '../../assets/store/top1.png'
import top2 from '../../assets/store/top2.png'
import top3 from '../../assets/store/top3.png'
import top4 from '../../assets/store/top4.png'
import top5 from '../../assets/store/top5.png'
import top6 from '../../assets/store/top6.png'

import cheap1 from '../../assets/store/cheap1.png'
import cheap2 from '../../assets/store/cheap2.png'
import cheap3 from '../../assets/store/cheap3.png'

import stream1 from '../../assets/store/stream1.png'
import stream2 from '../../assets/store/stream2.png'
import stream3 from '../../assets/store/stream3.png'

import banner1 from '../../assets/store/banner1.png'
import banner2 from '../../assets/store/banner2.png'
import banner3 from '../../assets/store/banner3.png'
import banner4 from '../../assets/store/banner4.png'
import banner5 from '../../assets/store/banner5.png'


const Store = () => {
    return (
        <>            
            <Header />
            <img src={season_banner} alt="banner" className="season-banner" />
            <main>
                <StoreSection 
                    title="Featured" 
                    per_page={1} 
                    objects={[
                        {
                            image: banner1, 
                            title: "Elden Ring",
                            price: "$59.99",
                            banner: {
                                description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
                                images: [banner2, banner3, banner4, banner5],
                                tags: ["Souls-like", "RPG", "Dark Fantasy", "Open-world"]
                            }
                        }
                    ]}
                    />
                <StoreSection 
                    title="Special Offers" 
                    per_page={3} 
                    objects={[
                        {
                            image: offers1, 
                            title: "The Last of Us: Part 1",
                            price: "$59.99",
                            sale: {
                                date: "Until Nov 2",
                                value: "-20%",
                                price: "$47.99"
                            }
                        },
                        {
                            image: offers2, 
                            title: "Iratus: Lord of the Dead",
                            price: "$29.99",
                            sale: {
                                date: "Until Nov 6",
                                value: "-87%",
                                price: "$3.89"
                            }
                        },
                        {
                            image: offers3, 
                            title: "Beyond: Two Souls",
                            price: "$19.99",
                            sale: {
                                date: "Only Today!",
                                value: "-60%",
                                price: "$7.99"
                            }
                        }
                    ]}
                    />
                <StoreSection 
                    title="Browse Steam" 
                    per_page={5} 
                    objects={[
                        {
                            image: genres1, 
                            title: "Action"
                        },
                        {
                            image: genres2, 
                            title: "RPG"
                        },
                        {
                            image: genres3, 
                            title: "Free-to-Play"
                        },
                        {
                            image: genres4, 
                            title: "Anime"
                        },
                        {
                            image: genres5, 
                            title: "Co-Op"
                        }
                    ]}
                    />
                <StoreSection 
                    title="Free-to-Play Games"
                        per_page={3}
                        objects={[
                            {
                                image: free1, 
                                title: "Destiny 2",
                                price: "Free"
                            },
                            {
                                image: free2, 
                                title: "Halo Infinite",
                                price: "Free"
                            },
                            {
                                image: free3, 
                                title: "Team Fortress 2",
                                price: "Free"
                            }
                    ]}
                    />
                <StoreSection 
                    title="Recently Updated"
                    per_page={4}
                    objects={[
                        {
                            image: recent1, 
                            title: "Cyberpunk 2077",
                            recent: {
                                status: "In Wishlist",
                                description: "The free Update 2.0 brings brand new ways to play Cyberpunk 2077..."
                            }
                        },
                        {
                            image: recent2, 
                            title: "Starfield",
                            recent: {
                                status: "In Wishlist",
                                description: "A new update has been released for Starfield on all platforms..."
                            }
                        },
                        {
                            image: recent3, 
                            title: "The Elder Scrolls® Online",
                            recent: {
                                status: "In Library",
                                description: "Conquer Tamriel’s Fears and Earn Special Rewards during the Witches Festival Event..."
                            }
                        },
                        {
                            image: recent4, 
                            title: "New World",
                            recent: {
                                status: "In Library",
                                description: "Nightveil Hallow returns as Baalphazu, Marquis of Terror rises once again on October 18..."
                            }
                        }
                    ]}
                    />
                <StoreSection 
                    title="New & Trending"
                    per_page={3}
                    objects={[
                        {
                            image: new1, 
                            title: "Cities Skylines II",
                            price: "$49.99"
                        },
                        {
                            image: new2, 
                            title: "Wildmender",
                            price: "$24.99"
                        },
                        {
                            image: new3, 
                            title: "The Bloodline",
                            price: "$19.99"
                        }
                    ]}
                    />                
                <StoreSection 
                    title="Top Sellers"
                    per_page={6}
                    objects={[
                        {
                            image: top1, 
                            title: "Baldur’s Gate",
                            price: "$59.99"
                        },
                        {
                            image: top2, 
                            title: "Rust",
                            price: "$39.99"
                        },
                        {
                            image: top3, 
                            title: "Call of Duty®",
                            price: "$69.99"
                        },
                        {
                            image: top4, 
                            title: "Fallout 76",
                            price: "$69.99",
                            sale: {
                                date: "",
                                value: "-80%",
                                price: "$7.99"
                            }
                        },
                        {
                            image: top5, 
                            title: "Metal Gear & Metal Gear 2: Solid Snake",
                            price: "$19.99"
                        },
                        {
                            image: top6, 
                            title: "Red Dead Redemption 2",
                            price: "$69.99",
                            sale: {
                                date: "",
                                value: "-60%",
                                price: "$23.99"
                            }
                        }
                    ]}
                    />
                <StoreSection 
                    title="Under $5" 
                    per_page={3} 
                    objects={[
                        {
                            image: cheap1, 
                            title: "American Truck Simulator",
                            price: "$19.99",
                            sale: {
                                date: "Until Oct 31",
                                value: "-75%",
                                price: "$4.99"
                            }
                        },
                        {
                            image: cheap2, 
                            title: "Batman™: Arkham Knight",
                            price: "$19.99",
                            sale: {
                                date: "Until Oct 31",
                                value: "-80%",
                                price: "$3.99"
                            }
                        },
                        {
                            image: cheap3, 
                            title: "Mortal Kombat 11",
                            price: "$49.99",
                            sale: {
                                date: "Until Oct 31",
                                value: "-90%",
                                price: "$4.99"
                            }
                        }
                    ]}
                    />
                <StoreSection 
                    title="Games Streaming Now" 
                    per_page={3} 
                    objects={[
                        {
                            image: stream1, 
                            title: "Cities Skylines II",
                            viewers: "20K"
                        },
                        {
                            image: stream2, 
                            title: "Warhammer: Vermintide II",
                            viewers: "20K"
                        },
                        {
                            image: stream3, 
                            title: "Euro Truck Simulator 2",
                            viewers: "20K"
                        }
                    ]}
                    />
            </main>
        </>
    );
}

export default Store