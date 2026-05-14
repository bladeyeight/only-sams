import React, { useState, useEffect } from 'react';
import './style/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { apiGet } from '../utils/api';

interface Review {
  _id: string;
  title: string;
  type: string;
  rating?: number;
  content: string;
  platforms?: string[];
  genre?: string;
  releaseDate?: Date;
  imageUrls?: string[];
  createdAt: string;
  updatedAt: string;
}

const Home: React.FC = () => {
  const [latestReview, setLatestReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchLatestReview = async () => {
      try {
        const data = await apiGet<Review>('reviews/latest');
        setLatestReview(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching latest review:', err);
        setError('Failed to fetch latest review');
        setLoading(false);
      }
    };
    
    fetchLatestReview();
  }, []);
  const topGames2026 = [
    {
      id: 1,
      title: "Resident Evil Requiem",
      developer: "Capcom",
      genre: "Survival Horror",
      releaseDate: "February 27, 2026",
      reviewId: "69a84cf3d1f40d3955fa06e5" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Cairn",
      developer: "The Game Bakers",
      genre: "Climbing",
      releaseDate: "January 29, 2026",
      reviewId: "698b8845bf488a3c753905d5" // Hardcoded ObjectId for this game's review
    },
    {
      id: 3,
      title: "Death Howl",
      developer: "The Outer Zone",
      genre: "Deck Builder",
      releaseDate: "December 9, 2025",
      reviewId: "697b965a9f0e3f9210e2518d" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Mixtape",
      developer: "Beethoven & Dinosaur",
      genre: "Interactive Music Video",
      releaseDate: "May 7, 2026",
      reviewId: "6a06017e266ab33bd0e81c13" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Pragmata",
      developer: "Capcom",
      genre: "Shooter",
      releaseDate: "April 17, 2026",
      reviewId: "69f21d8ad59224353af34728" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Mio: Memories in Orbit",
      developer: "Focus Entertainment",
      genre: "Metroidvania",
      releaseDate: "January 20, 2026",
      reviewId: "69811718fb9df5b7c1fc534e" // Hardcoded ObjectId for this game's review
    }
  ];

  const topGames2025 = [
        {
      id: 1,
      title: "Hades II",
      developer: "SuperGiant Games",
      genre: "Roguelite",
      releaseDate: "September 25, 2025",
      reviewId: "695c327374f0fe96f499c394" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Hollow Knight: Silksong",
      developer: "Team Cherry",
      genre: "Metroidvania",
      releaseDate: "September 4, 2025",
      reviewId: "68dc3dda64e92e2b26d5c6c6" // Hardcoded ObjectId for this game's review
    },
        {
      id: 3,
      title: "The Alters",
      developer: "11 Bit Studios",
      genre: "Base Building",
      releaseDate: "June 13, 2025",
      reviewId: "685d5574699ec890abe5cbea" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Blue Prince",
      developer: "Dogubomb",
      genre: "Puzzle",
      releaseDate: "April 10, 2025",
      reviewId: "68b7403c50fb3bcd5796ec85" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Atomfall",
      developer: "Rebellion Developments",
      genre: "Survival Horror",
      releaseDate: "March 27, 2025",
      reviewId: "6807ae9fb72d175f0c4a6165" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Blade Chimera",
      developer: "Team Ladybug",
      genre: "Metroidvania",
      releaseDate: "January 16, 2025",
      reviewId: "68220b014505828405783563" // Hardcoded ObjectId for this game's review
    },
    {
      id: 7,
      title: "Elden Ring: Nightreign",
      developer: "From Software",
      genre: "Soulslike",
      releaseDate: "May 30, 2025",
      reviewId: "688bb5c268f649b375208fd7" // Hardcoded ObjectId for this game's review
    },
    {
      id: 8,
      title: "Skin Deep",
      developer: "Blendo Studios",
      genre: "Immersive Sim",
      releaseDate: "April 30, 2025",
      reviewId: "6866c8a7041c5bcf54e19267" // Hardcoded ObjectId for this game's review
    },
    {
      id: 9,
      title: "Donkey Kong Bananza",
      developer: "Nintendo",
      genre: "Platformer",
      releaseDate: "July 17, 2025",
      reviewId: "68b8581055e04f87bc85f0a2" // Hardcoded ObjectId for this game's review
    },
    {
      id: 10,
      title: "Citizen Sleeper 2: Starward Vector",
      developer: "Jump Over The Age",
      genre: "Graphic Novel",
      releaseDate: "January 31, 2025",
      reviewId: "68221a6199f049d81edc570c" // Hardcoded ObjectId for this game's review
    }
  ];


  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1>Welcome to Only-Sams</h1>
          <p>Your source for honest game reviews and gaming content</p>
        </div>
        
        <div className="featured-games-container">
          <div className="featured-game-card">
            <div className="featured-label">Currently Playing:</div>
            <img 
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXGBgaGBgXFxceIBgdGB0XFxceGBgYHSghHh8lHRYaITEhJSkrLi4uHR8zODMtNygtLisBCgoKDg0OFRAQFysdFR0rLS0tLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tNy0tLS0tLS0tLS0rLS03Ny03LSsrN//AABEIAKoBKQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHCAD/xABKEAACAAQDBQUFBAgFAgMJAAABAgADBBESITEFQVFhcQYTIoGRBzKhscEjQlLRCBRicoKS4fAVFqKy8VPCMzTSJDVUc3SDk6Oz/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAQEBAQADAQEAAAAAAAAAAAARASECMVFBcf/aAAwDAQACEQMRAD8A5yQWtYXz+hjOGxzFjwiz7aoFSddBbGuJhuvcgnz/ADhDXSmDXIIUCwPzvGqyxKPhHT/mJUudPUwLR2Nh1Plu+cMysSrEMuRbmb36eUSYVGRzJ45wXTbNc52t1NvpDClpVUEMuZ42OLkD9IitKbYj2zIANss7jzg2o2eigGXZmXMrl4hvFum6GEpLADSwtl9I1MhSCLWI0O/reIN6XAVBQC3IAW8uMSugIsQCOBEIa3GHLyHwtfMHNX6j6iIZfazCSs2UQwyOEj5Na3qYB4uzZOvdj4/LSJp4FkXcWGXLMgeoEJqftMkw2SVNJ4WQfHEfWC1nzCwLBABmFBJPm1vpE3YuYYTiAVY5AHM8AQRn52hPtbaWMYJfu7z+LkOXOGa1SkENYcQ1tPkRCjaKSbXlzJYYfdxrZuQF8jDNNxBKqMrWsRFl2EmCmVvvTmLE8jew/lC+piolri413Rb9k1AmUch10UBSOGG6H6GGmD9nsBKM1sr3YngBew8gPnDPZUghcbCzvYkcB91fIfEmEmz3DMtOcwXuOai7lT5i3QxaecZafLEdTUKilnYKo1JNoXbe2ytOhIGOYR4UGp5ngPyyjl+09qz6lrzGLcFHujoo+evOKi17U7StPmYKbJRrMI4/hHHrEOzbyXMy7OWyfEbkjW453gXYVGQltCTcn+vSHolqBa1+sOYd0ea1cAcGwN7X5XBy8ojlqWzOQ4bz14dID2VS3u5JKgnAp0GfiP8ANe0NIlVi0fYYjqqpJYu5twG89BAUvbkvergcSB9DEDG0RTBGiVsp9Ji+tj6GMzJktRdnAHNh9IK1EbiNWmIEDk4VNve56XgGq2rIUe+XPBSfnoIAXbEvxY14DEOn1tb0hfS1P2i+Y8tfpBD7UDj/AMC3Ag/SwvAcsqpxjTQg6rfeOUXNTcWrZzWby/v5QfNkF8tF38+kKKCXiZL5i4898WVyBmcgNYupiMJYWGgjUiEs+tmzWPd3CDSxt6n6Qz2djw/aG5vkeXOIrd7AEnIDOFP+Yab/AKo9G/KG9TLDKVOjAg9CLGEP+UZHGZ/Mv/pgKlNYk3JJJ3mNSARxBjZoFEqYX8DAL964vY/s8zw03xtgopZRDk7lLAn1EWGSim11AYW1ORtygnZ+y5Sj3bk6lhcnjmfkBaCl2WCbK+AWJ8WYGgAFyDv4xRmVNv8Ana0SOtx8uo0gGoSZJYCYcrZNclW6aZ8owtYFsSfeF84As1UwNcjIbhpbrG8ycz5WKq2V7Hnv5wHPqg1gM+IuLGGiDCAHe54E28ss4yr5qaWPeTMjcCLW1I4dYS7f2EMBZRMecbWwC4AGpa3L+kWpZ8sZYx5/nA22JzCSzSXAK62sfDvI4EDOFIpOzKyxxAWYixBGov8AK415Q9pnmuMRKou4216X+cQbLkLMRUZb92TmeZJWx+fTnBMyjaY5JYAbt9husIz5a14sy5aggsFN/vE39SfpAFbsyaZjEDEGNwbjThnwhnJp1lHN8rXsRr09IIqTdLquPgIypNTbMRTeay33KpPxIzhps09wG7nxyn96WTodLqdQeR1y4QGlcyGxRRxFiPrDRFUnGN49eB6xbpMTdlJxaoBNgMD2G++Wp6Xyi3bQqxKlvMbRRfrwHmbCKPSzDKqEdQTY3IAJNs1c2H7JJix9sJLTKcImZLrkN4zPpoYtSKyxdyZhN3uGP5DkBkIJkyFJxCX7wzsACepEZpNmTEAurE8fCfKwJMZlzWUkZcxnceRjX5xn+jpaADIWj5xlGKWYZhwqrM3BRf8A4HM2hgNms3vzJaclBcjqRYD1MYbQbM/8GX+6vyz+ME9I1m0JpyiYw6uGZTa1rWJFrnLxX9Y2gFNXs9RdiSzHef70hnsukpkUM5QtvxkZdAcvOJZsgHX1GfwjH6ihXTPzgFu3KikdSqSwznIMgwgHiSLX6ZwBRbCC2mMMRGeHd58TDuVIEtiSCRuIHzEGS1dvdSwGd3uo8srmArW15TTASb+EGyjS/wCcP9mdmKQy1bD3mJR4izedgDlAqqcwws1ySOuY+EJJ/hYiS7m5zCY8upUgHzgItpShKmzJYN1RrAnhqAeY0gdUBu37JB5xpUIQc1IA4j5mC6HZsyfiSXYC1izaC+7LeYimew3wrKJ4D0P9Iabc2nLlSmLHLgPvch1hIJ/2YysbacCNR8ITS5Yn1Sy29xb3HGwufjYdLxvWMQ1O35r5KxlruVMvVtflDrsntqZ3gkzHLq18JY3IIF7XOdjY+do27TULzJQEqVi7vxMVA8KgHIDfxsOHSEvZuWXqpOHc2I9FF/6ecZV0ZxpfjaK3/mA8BD7aU8Kqm9vGvzufhCT/AAmn/wCov8wiik1NWqnD94i68zoBDGjkYcK+p4nefWAv8vPj7x3RjuF2XTTdugwh1Nyum9TiHwz+EdGB86fh8NgCdL6W4/0gmjfx4SNZbAdcj/2mFyVtwWAJGhIRmGXMG2+BHr2ExXDA4bEaZ8suXziCzyQkxTKmAMOB4f0gFtmU6e7LBG7FdiemKCZeGYuNTlrzU7wf7zjeRTnU3JPHcOEZ9Newg2dJ95pdiNy3HraJ1LD3AsscABfzNoK7o8M4L/VVNgqkczqTEqxBSziV8QzGvPmIG2nNkjwumIsNAATaGq0RyF8ybfMn5QJX7OcsQq3IAN9L9OJiKRbNRAHCXw4zYHUCy5QfLT/iBpKYWvuawPUaeunpDEJABVdNjAANiDE1FSBBxbebf3lE4TOJMMFL66QJgIOo0PD++ER7NpHmssiUbWF3fcovmfoBvMSbRmWFhrqYuXZ3ZncSQCPG3ifqd3QDL1O+LGam2Zs2XIXDLHVjmWPFj/YiZZKqtrZAeggjDAdfNsMPHXkIqFjCI2oRO4BV9+Yfu8l4t8B8IdbP2XiAeZocwnL9r8vWMbWPuywAFAxWHw+sSLS+XhVcEtcEvhvbm53nlHwW9gN+QjIEFvLMmU08jxWsgO4sQqk+ZgEu2ZoecQDlKARSOI94+th5RCk8j3tPxfmI1lSvEF4Zk8f+TnBrSxv/AL6CIoiULjLWJMMQyKOYPdXw8GsLdLZ+sENLmj7gP8X9Io+lrmIjn1QlghjZGACk6KdCOQsb+RjSomzUVmCyyQCbYjuF+EJ6/bimWwQMxwjCSp8ROZOmQGX0iDXadQZ0y1yAb+SDLyJMZloFAAFgNAIHpZgZsQIN0U5dTf4mCCGY4V13k6KPqeAiKGnyTMmLKS2Nsyfwjify3xZ6GkWUgloMh8TvJ5wtpKZZRDAZ/eJ1N9bw6AvYjSNRmqZNTOYu9Zj/AO5iPgYQVlFMWYZiZZ3uDYg74tlXQ45k11NjjNj0sDflcGF86W4uGC5ZkaGwz89N0Vlc9nUvdS1S5JAzJ1LasT1MVuikSKabNRBea7nIkAKp8SgMcguY4k+Qi4MIrtfsoTMbqcMw3z1B4Bgd2kItS99KR7zZisbZ20F9FRdTxJ16aRj/ABmT/wDDn+SX+cUn9XsTixYgSCL2sRqLLaMfq6/tfzv+cZrUW3YtIuHvCAS17X3AG2XpDCdSI+TIp8vkRmIF2dOCASzu0P5wc0hiwINhHSuZJU7IMq7yr4dWHDnzHxHONaGhlMCVlpnr4Rrzi0ZAXY2AhPQSCGLAZcOW6M61iEbITUIFP7It8tYmSnINrpfz+kQ1Pa6jWqSiMw96xC5LkGb3VZtxNwPPO0WmRs5fz/IQhSWnpCRe0T/qeUHbf2nT0ckz6iYEQZDeWJ0VVGZORy5E6CA+yPaGn2jKabIxgI2FldQCDqNCRYjnCFYNGdb+IaE/lG8xTYlgFI0sfX/iHD0/DWMLRjU5nj/ekIVRNpUZCMLHPLMa3OevWNaEECzZ8OP9YY9ve09HRKsueXMx/EqS1BIANsRuQANRzz4RD2braeuktNp3xYCA6MLOl9CRwNjYgkZHgbWcSsrK3jOMvLsL8INFGRu8xE8rZTPmNBxNokWkVDRY5qX3uCfLxfS0XsrbKOcy+3uzJM8K05jgaxZEZl4GzDUcwDHSqKbLmok2WwdHAZWGhB0Iiojdcstd0BGhDOASSSc+mpyhhtGrkyVMydNSUg1d2CgcMzvO4Qgke0XY4bCtZLB0uVm2P8RS3neEKtZSE205X2h/dH1h3Q1UqcgmypiTEOjIwYHzGURmlDMWI6dBDTCrZtFc4m0ByHE8+kF7WlBpTKRfEVFuOYP0vB0mRhyGkbGnBIJ3aQhVW/y/hJYqzA/tZr6HP5wVQbNA8Wp3E52HARZAkIu2ldNpaOdU08rvZqAES7Mb3ZVLELmQoJYgbhqNYkWoRtKm7405nyu+VcTS8YxAAYiSN2WfTOA9k7ap61XalmiYqNhYgMLHXRgDY7iMjnwjlW2dr/q6SNrzKbDtGq70BHxCUqoBKaZ3R8V2RgoBa2ZMD9i9p1VTIek2csmknK/fTGUsBNT3My+MjCzDwg2IOmRvYldT23LIlmWNXyPJfvfl5whmU+4Rcp9ISAWzawBPQbhuhTNpM4xuN5qnyKUg418LbiB8xvi17Lk3lqx1YXPX+8o1XZ/iOW+LFsfZJwKN355xrMZ3Sn9XJyAJPAC8ECgnYCqqwNsjll6mLVLpQgsBYf3rAE7ZSkk4jc8c4qKwlKUsrIydQfnGZ1CrixF/mOkW+kpmUEMcQ3X/AKxyXtL7Z5cmc0mkkCaiEgzC+EMRrgAU3HPfwgLxRYhLCtqBYHiBkDbjaMGUBEXYHthK2nJZlGGYhAmSmIOG97ENYXU2OdhoYbVVH+H0gKL2qocJE9dDZX+St9PSEUXjbMoNJmqfwN5EAkfQxzz9ZPP0jG41mrc8waHI8D+cSyphyCMedjkBv1yiaX3ZyUr5ERgkMTLXd7xGijhfieEBNJkl97NzNz6bvSD6h1p5Eye+ktGc/wAIJ+kF7PphYRWPbXtHuNmGWPenussW4D7RvKyW/ijWYm689T6p2mNNLHGzFyw1xE4ifWPUmwqtpkiXPBAWZLSZnp4lDeWseaJOxpjUkysHuJNSUerqzE+VlH8Qjokztdg7Oy5at9q7PTG33VBLN/8ArZV/iEaZVX2kdrGr6okN9hLJWSN1t724sRfphG6Og+wMn9VqbG32q/7YpdL2ZWXsSdXOPtJry1l3+6gmKCRzYg+QHExZfYlPc0tdJkkCd4WQnQFldUP8ywFj7f8AtIShJkSAs2p+9cnDKyyx8W08Pqdx5Zs3aO1q2pSakypmvjWzLjwJmNy2RV4jIaxN2DFD31RN2mSWljGqzCTjbERMxLq73I8N87sTpcWSi9qlRNrJEmlp5aSDMRBLw3ZlLWOmS5Z5DLiYBX7dgf8AEhwMiXbpd/reHX6OqEz6s/d7pARzLG3wDesSfpAbMypakD8ctz18csf74L/RwkeGtcWuTJXpYTT9fhAdLmysJIO75boF7Q4hs+pKZOJE4r1wORHKPaD7TZ42iVpnAk074CAMpxU/aYv2b3UW3Z78uyGqk1Gz2qJecuZTuwzOQKHI56jMHmIDyJHp3sI60uyKYzDhCSO9YncrYpxPkG0jzVsyjM6dLkrrMdEHVyFHzj0F7aakU+yu6lnKY8uSOIUAuR0tLt5wHH+0W2avbFaAiu+JisiSPur00vbNmPrYCxHaT2ZbQopJnzZaNLHvmW4bB+8NbcxcReP0ddmD/wBqqyBfwyVPD78z1+z9I7LUylmI0twGR1KsDvDCxHoYDyf2M7XVGzpwmyWJUkd5KJOGYvAjceDaj1B9Rt2mplo1rnmBKdkVwzcGFwLDMtuwjO8ed9s+yjaUue8uVIM2WGPdzA8uzL90m7DCbag2zvFn9qGyXpNh7PpnN2lzbPbTEyzGsOQuwBgGW2fbyiuVpaUuo+/NfDfoig5eflDbZHtdE7Z9ZVmnwzaUS/sw91fvm7tDisCLNe44DI55UDYXYzZFQkhTtQy6maiEyyqkB2AuuLIXxG2Em8X6t9nVPs/Y+0UV3mtMlY3drDOTeZLCqNAGz3k3gGHs09pI2kHlTEWVUr4gq3wum8rizBB1Ge48bJvaR7XJlHUGlpJctnl2715gYgEjFhVVK6Ai5J4i2V44j2c2zMo6mVVS/elMGt+IaMp5FSR5w49o09Z+0ps6Tmk/upic+8lobdcRIPMGA64KWRtzZkuprV7hlxt3iGwTCSrkY7+A4dDpbXK8E+zXsvR00t59LO/WO8OHvCRkFPugDTPM+UJva4poNkU9FLNgxly2P4hLUs+nFwCesJOzm3DszYCz0znVM+b3YOYFrSyxH7IlepEFdkdoHmgcI8sVW0KmczTnmTXYG7OWY4bnLP7uekda9j3aefULNp5zNMMoKyOxucJOEqx1Nja189eUIVYPaD2m/UKXvEAM2Y2CXfQGxLMRvsN3EiOKvV7Sr2Zr1VQRqEExgv8ACmSjkAI6D7e6ZwlG9vBinA8mIllQeoVvQx0H2W7UpGoKeVTTJeJJa95LBAcPb7QsmubYjitYwR542H2krKKcHlTZiMjeJGLYWtkVmITYjdY6cjHqfspt2XW0sqqQWExcx+Fhk6k8mBHpHJvaN7JqufXTKmkEtpc5gzAsEKMQMd76gm7XGeemVz032f8AZv8Aw+il0rMHcEs7C9izZkLfcMhzteAl7f1pk7Nq5imzCS4UjcWGEEeseRI9Me3OuErZUxb2M6ZLlj17w/CWY8108lnZUQFmYhVA1JJsAOpMUdz/AEedlFKeoq2uO9ZZacxLuWI/ia38JjqVQIH7L7GWjpJNMtvs0AJG9tXbzYkxPUNnEVWe2ctv1d2TgA/7pNjb19CY5tHYqmUHVkOjAqehFj844njblGda8VjnTMZLopNtCBp/FFr2NSAS0HK55k5m8AJJupNmc2OHCjFR52sYaUdSoKIgvewtnkBrfnED6jSOJ/pAbVx1kmmByky8R/fm2Jv/AAKh847XLnhCoI138I8x+0WtM7adY5/6zoOks92vwQRvGddO7EdnlqtgGQLY53ekf/MVyJZPTAvlHItlbKnT6iXRAMHaYVwm/gbITCV3WC5/ux272KzMWzAPwTZi34Xs3/dFsk7Ep0qGqhJQT2FjMtmRz3XPG1zBFU9qlEsnYzSZYskvuFXorKojn/sP2n3W0e7Ok6W62/aW0xfgresdE9tM62y3H4pkofHF/wBscN7LbQ/V6ynnXsEmoT+7cBv9JMBaPapsmVJ2sb3WVP7ua2G1wHYrNI3XxK7ecNqztRs7ZTGXsyQs+cBZqmYSw5hSLX54cI6xb/az2HnVwkzacDvJd1IY2xI1iPEcvCbmx/EfND2e9iYbOrqTpmkgacPtHH/b5wEa9qX21s6tkTZSrPkSxUIZd7MJZ8VlYkg2y1N8UVv2VdrP1BqzMDHTOUvvmygTKH+po7p2Z7HUdCjpTyrd4LO7EszjgScrcgAI8v8AaHZppqqdTm95Ux0z3gEhT5ixgH3ZLsi1ZSbQqBctTy1ZNfE1y79T3aN5kR0H2K9oMezq2hdvFKlzZksEj3HVsYA4K+f/ANyH/sEohL2YZhzM6dMa3EKBLA6XVo5R202VO2PtJ+5JVGDNKO5pcwFWQ8bXKHoDvEUZ9jWzO/2rJva0oPNN/wBkWX/Uyx0P9ISnK0VOd3f/ABwNb6xUf0fFvtN//p5n++VHXPa5sA1mzZqILzJdpqC2ZKXxAcyhYCIKV+jzXL+r1Mm/iSasy3FXXD8DL+MXztz2uTZtN+sMhmFmCIgNrsQzZtY2FlO4x5x7CdqX2dVrUKCyEYZqfjQ2uOoIBHMcLx27a209j7XpRLm1aIoYOt5iSpksgEe7My0Yg5EcNxgKent2m3uaKWRw71vnh+kFdsO1Mra+xp8yXLaXMppkl3QkGwYlLqw1HibcNI5727otnyZqSdnzJk4KD3k12VgzG1lQqqiwA1Gt9cotfsJnSJr1mz5y3FVJyPHBiDAc7TCwP7JgK92an7Jp5cmpqBUT6kMSZClVljC10LMRcgi2QJzvfKOwbV7c09fsSuqJYZMMtpTI9rq0wBUzGRBLix6xXU9gIxZ15w8BT5+ve284U+0/ZNPsmhl7Ppnd2qZneznci5WTkosAABia/wDDrAUnYnZhqqiqqiVczKZpZKD70tg+MjmuEHpeF/ZixrKUHTv5PpjW8dV/RylkmtuCV+w6X+1v8N0a9pvZPPl7RlT6GWrSGmo5XEF7khgzDPVN4w3I0tkL0R/pHbQvOpae+ao8xh++Qq//AM2isduP/dWxsI8Pd1I/ixpi8ybmDPb6T/iuYsO5l4eYuxy/iLDyh8vZWbV9nKZFQ99LLzpa/iDTJpwj95GDDiQsQXHsTsmR/hdOEVWSZJUzFIBDs4+0xA653FjwtugKfXbM2ML4BLaafdlgszW35nJRfjbM2jkvZr2g12z5bU0vAUBNkmoT3ZJ8VrEEZ6g3F/OFYSt2pVZK8+c9hkMlG7Twoo8hAeitp1VDVUImz2ltSTADimHCM8hYmxVwbjLO4jmVb7Kpc5TU7IrUnKrZIWGJWHisJq6HMWDBesY9rewZtFs7ZtNixS5feByNDMIVvrMtyvD39H+UEpZ8y9y87CQNwVVNyP4jABez32kVVPUjZ208Z8Ylh5nvymNgoc/eUm3iNzne5EdyIjzj7c6iVM2lL7ghpgkor4be/jfCDb72Er/pj0LKmHCL62F+u+A45+kfWkCjkA5HvZhHTCi/N4QewjssaisNW6/ZU2a30aafcGn3Rd+RwcYvvtS7L0lfOkCbXyqWeoKhXKHGrG4sjOpvffvi5dndkSaCmSmkiyJqzHNmObMx4k/QDIQDeaYXTjA9btFjkg8zp6awoq580XfvNM8IUAG2ZG8/GJVhhtKrEqU806KpPU7h5mwjj/8AhkyOgVUuZXlfelUym97eKYRwByAG4m/mdJf8u0fP/wDPM/8AXGd61gs7WufCn8xt8ADE6VAe2JCrDRhn8s/K0IMIYWMM5FWoAxGxGVvyhSHNNZrFznbfkBfWOI9ufZtWGunPTSxOlTXaYrB5Yw4yWZWDMLWJIvpa0ddpK67kaC2V9/GDjWWIWxJPDdzMazU3Cz2c9ljQUKyWZWmMzTJmHMXYAWB32VQOt4atOzw67x0iNK/C2Wh1H1ELto1WArNOQxG9s8m/rCpAvbTZQrqObTBgrmzIToGU3F7Z2OYvuvvjkuz/AGSbQeYomCXLllgDM7xWyvmVVbkm2gNvKOvPtWU5AzYnS1wfXKD9jbQDIVDAlGKmx8x8DbyMM0huswAhS+Y+P92jEqaA7DjYj43gDIG+/nuvwiGrnkDGMyufUfeHpn5QVYFcRyP2r+zWoqqn9bo1VzMCiahZVIZRhDgsQCCoAI1uN98ul01UGAINwYMSZBA/ZfY4pKORS3B7qWFJG9tXI6sSYB7d9jZO0qYyWOGYt2kzPwNz4q1rEdDqBDlZkSy3MUcl9jvYKuoa+bNqZapLEppYYOpxlmQgqFN7WUnO2ojsxiDHGMcEcm7f+xwT5jVFC6S2YktJe4Qk6lGAOG/4bW5iOazvZftVWw/qt8yLibJsbcDjj0ptLaIlre+Z90c/6awlG1DlnppCq5JsP2LVc0E1E2XIyyUfaNf9rCQoHRjFv7A+yo0NWlXOqVdpYbAiIRcspS7Engxytrvyz6BT7QDrceY4RidU89dIUNmYnK4HKEe3Oy9JW4RVSVfB7pJYEX1sVINjb4RLJ2uCwUrnoTz6cIi21tb9XwNhDYsQAvbTCQT0+sQH7G2RTUcvuqaUstL3IUanS7E5k5DMxK9YuJUB8RztwAzuesU+Z2kbusIJ7xrl30w33IOQAF/mYipKR5i94zhAxyJuS3M5iFIsO2ZVJUELNlSZxQ5F0VsP7pYH4Q1pEXCDbK2Q3AbsopU2gnAXXDMH7JsfQn5GPtn9pnleBhiUbjky8s/kRCkW6t2JSTmxzaaRMb8TykY+pF4KpaWXKXDLRJa8EVVHoohBI7W0594sh/aUn4reJpnaemAv3l+QVvqICXtZ2dk7Qpmpp2hIKsLXRxfCy36kcwSN8cXqPY9XymYSaunK8e8mox6oqn5mOuUPaVWvjGBb+Ei5HPERp8oFk1wNyNLm3S5tCrFO7FeytKWatRUTBOmIQUVRZFYZhjizYg6ZAR0wVZGv9+kJzWRq1b8dAN/QRKRw7td2Q2i9fOPcTp3ezGZZiqWVlYnDd/dWwsLEi1uEdz2LKmS6aRLntimJKlq2d/EqgHM6m41jUBzmPB53v1Ay+MfTA/4x/J/WFIKmvAfdd42H7i+/zvov1PK3GBJs2aDYsMO9lW5HlDalCKgwtcG5vxvqfp5Q9qF2xPwqqLli1twG7zhTaGG2hjXEMimY58YVfrS84hjCNBSePI5W+ELVqV4iNxtJF4np/WIprLpx9435WtBctgBlCeRtVCPvDyv8onWtUjK/mLfOKgma1zn/AMGFvaatWVTlnuRiUZWuc918tAYMR7wtmus5wbBpcs+EnMF9Cw6DIHmeUAiWsnzFIp5Dqp1diAzDkWsAOkaUFVVUj94ZLYNHAIYFeq3sRqCYtUazHCgsdBnANKDaMuegmSmxKfUHgRuMTLOBNgQSN14p2yNjBGeY117w37sEhVF7gMBqRfpDFqGXuUKdxUWI6EQpDKmqDJmEfcvp+HpyPCLLST1mC6ENxsdOo3RR5M1jcMbsuRPHeD5i0SoSDiUlW4qbH4RplfUETKYoKdo6nJZbK9tWZRYfxC1zEzbUqW96dblLUD4m5+USrF4JhRtHbaLdUIduCnIHm2g6ZnlFTnJj98s37zMfmYPkNJcYJiIh3OqgfzAQpGwbvGLTPE3DcB+zG608sbvUn6mFG0NmmU1jdeDKSAeYMb0k9x4S2Lhjy/1fnE3VzDinnKsxBorEI1uZ8J9cvOLURusLcI5rWbSAxS3lzAdDpccDrFp7N9o0nqqTGCztLHLHwI3XPCGabhlUUHiDy7K44jwsOBH1GYip9rnnlg8yUVloLBlOIZ2uSRoDkMwNIvtsohmAEENYgg3B0I33jTLkrzTYxeJQsFXcqqB6Z/KKz2gp6NEU001mYj3R4xbLNi2a5f8AEWKVMxYG3Min+/WMtJGbCcQ3a8xvjO2dnSpyh3HiGjA2NjuJGsaz/dPPL1ygmvcABPP8oCmbS2YZIxDxpvJ1XrxHMWt8Yj2dQTZ1+5XLQuclHnvPIXi0NTCaRLJOE+9beOHnD6RIVVAUBVUWAGQHQRJVsJKfYDAWaaByRdPNj9BEh2KoyE835hIb98umZhTWEAmwi8Sh5uzWXWaLWzNszww5xrSoE33bed//ABETzVGrAecbSJqtexv0iKKM6MM54DzIHwFzCDaG1GLFUOFRlfefXSFky7ZsSepv84Ui5mnc71+MRy6eYpJAU31FyM+OmsVFHYZqzA8iRDOi2/MQgP4147x+fn6wpDmeJpBHdG5BtZlI+JEJ/wDCH/C/+n84s8qcGUMDkRcHlEf69L/6ifzCLEc4Woc71/lP5xvJZlYMbN+zYAevGAnloBiDYeYNx6aRslQ4XNQObm1/K141WYfptOWdcS8sJ+a3EbHaKbsRPJT9bRUpb1BJtc8/DY9MQEThanivw+giXFmnlTUO4IJwKdQDmeRO4dIaUboEUAqMhlcRS3/Whz6YPqIhSfNLhHdkvvIA9DaxMN6enQ7wuasWZNSWpxAHExGnhFwL787HLhCXu7izMzDgzE/DSGOzJCjC4NmUnFc5WNwemWkSLTy0fWiFKyWTkwPS/wA9I375eIJ4RFU/tFNYVZKMykS0zUkZ3fW2uVtYd9j6aZPBmVUwmTf7NbAd5bexUA4eW/pqC+xu9m2fN5rYnsTZJa2AUcyAFvzi4oAoCgWAFgBuAyFuUWpBVVslSMUqw/Zyt5W0gWXJAyINxqDugiROKG403jjDCbJWaoYa8eHIwCzAN0RzJIOuvGJGyNjuj4G8ARRqHXuJmYPuHeDw/LzEJ66jMtijeR4jiIZKbEHgQfSCtsFJhwkEWAOPcCwBzHDTOAWLRrUSrP7y5Bt44dRutyirV1K0tyjixG8b+BBi6UidzcWLE2xYbHCM8OW/efSB9tUffSiQPGoJA38x5xNxc1N2O7QzZ7GTMUEol8eYLWKrmNCc73HpE/8AmXDPeXNQLLDMocXY3U2uygaG27SKlsSayhZiGzBmIzIuDkQbboItlqSeJzJvmSSd5MKQJtKhQPO7skKGfCAQRh95ba5EEWz0tFhoiqypGeWFR/Mt/pCflBuyl7yn7smzISt+BQ3U+loYppUzLKb+XWBZNQ0y4UXbeToPz6QJLR3fuzk286gLxHXcIfUtMFUKosB/ZJMEQyaZUBZjfezMch9AIVbQ7Tn3ZPiA+8wNj0XU9TaFm2tqGc2FT9kp8I/ER95voIBkyWdgqgljoBEvxcz6LmbaqDmZrDpYD4CH3Zoz6kHvM0B8MwjM8QLa9Yzs/s0qLimATX4H3B5b+p9ItWyyDKTCAMtBuO/LrGsz6m7n4V1HZaU2eJw3HIj0t9YP2fsuVLUAKCd7HMk7zG20toLKU5guR4V38ieAit0tVMl+42uoOYJ6flF5jPdOavs3TTDcy7G9zhJW/G4Bt9YBqtgSQwUy0swNiuIEWtr4uepvGBtyfkAsskkDLFvy4w1wm92Nzx4cgIcOqftPs46XaVeYvDLEPo3l6QheYBkcjwOvpHToHnZG5y52uPPhEi55EOy6BmphLclQSTbfa9wOnKJv8vS+fr/SGFa8wL9moJ8rW4i8LsdV/eD84DntLRWOJrDgOfHrBioBu8/6xkx8sZrTYRm0YEbQVi0YZARYgEcDG0fQAZlmWCVuV/Dw/dv8oY7NpQwE02N/dGoA/OIWMa0E7u5gX7kw/wArcuvzi1mGxlN+L4CNXlNr4SfMH1gump3mthQDL3mOi8Op5Q4k9n5f32dz1KjyC/UmEKQbEfxvcHGcKhSbm2ZOfCLKmzgc3Yk8jYDoN/nE8ihly80RVOlwM/XWJJkywv1+AvFiULPkFeYjfZ06z245EfKCVNx1HzgGikeEMuTqddxPPlFBG11zUKLuxIA4gC5vC+Q5JAtYk2seOkHyg7TcbiwVbAczqYylDebiuMN8Vt9/+c4gDQkkADMmwHOCqqYuIkXIwqNNSBbKDZNIiEuL3N8zuvmbRipwgrMOgNyeRBAPxEWJS5CBkBY/htY36RtPXCVH37Xbz0EE1G1ZYNlIZvgPP6CF5bUk3JzJiKQMRLmTVyCq2LkA4xegN4XzttC/gQsOJNr9MjA/aOaTUzEv4QJeIc7XAPrf0gjZew3mgMTgl7jqW6bgOZ9IkWpKTaiPkRgbXM5HoYMoaoJMxqQytYOAR0DdRe0E0HZ9Jblicf4cQGXG9siYNrtnpMW1gGHusBmDu8uUIUXR28T72YjyTwj5H1hhjV5borC7IRlxII1ipzaGei37zvBmWS1tczhO/wA4s2y62nWUpRrgi+mZO+443ytFxNUJJbFu7CsXGRUA3BHKLl2f2V3S3a2NteQ/CPrBEzadzZEvf+87fnBFOz6uBflDMXdF3gWZIUm9rHkSPkYlLRqqExWSmfSMrEquJTnlqPLeI1lyHbRG8xb4taH4WJIQoDZ+z8HiaxbdbQfmecHNGY1aKjEaOY+ZrRBMm+QgoaomBAWDAIMzfTqOHSF/+PSvwzP5IB2jVd41h7gOQ4n8R+kDRmtZhGYzLEatG6axlWQIxjGm/ln8ojqzp1ENFUAAAADlAAZ/hb0P1j4k71Yfwn6QxEfQClpo0vGJkonCoF2ZlC/vXGGGk5AQbgHLeIW9kGJrJQJvbHa+7wNpBHR9n0glIEGe8n8ROp/vdaJ4zGjaxtlteBa5rS2PI/HKJxrCTbDnvZa3NsWl8t+6GqYUtTisBkAN++Ju9VfDv4DM+ghZRG0oka4Iadn1Hcg2zJNzvPUwwbB2OSq1zvIIA5m8TlFVlA138xxPnBL6GF2zDcsTmbjPygg2fOCC5/55CFsvaGFAGlvkM7WI+cb7V95fL/cIR10wh2sTpx5Q3TMFBAc+MZnTlRS7GyqCSTuA1iKh/wDDHn8zCXtux7hBc2MxQRxGZz45iIpHTXnz7tkZswEjgDoPJBbyi7VVZgYKqiwA32twA8opuwf/ADUn95v9rRZdqe+3QfKNeKeRjUz/ALLGu8C3LFb84XUM5sYW5swbyIF7/TzhjRC8lL/gX5Qq2KbzHvuXLlnDyxMNZc9RZcVyMrwBJlYahpa6TBjXkdG/ONd7efzgyj/8zI/dm/JYy0PmVEunFvec62+p3CNdn10yY2agJ5/O8JGN2a+fva+cWehUCWlvwr8oYJiYmlPcREdIjXURpB14xiiMRvBHzNaIXmmN30iAwGpMJ9u1ekpd+bdOHnDeKtVn7WZ+8YzrWI4+j6PojT//2Q=="
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">Mewgenics</div>
          </div>
          
          <Link to={latestReview ? `/reviews/${latestReview._id}` : '#'} className="featured-game-card-link">
            <div className="featured-game-card">
              <div className="featured-label">Recently Added:</div>
              <img 
                src={latestReview && latestReview.imageUrls && latestReview.imageUrls.length > 0 
                  ? latestReview.imageUrls[0] 
                  : "data:image/jpeg;base64,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"} 
                alt={latestReview ? latestReview.title : "Recently Added Game"} 
                className="featured-image" 
              />
              <div className="featured-title">{latestReview ? latestReview.title : "Loading..."}</div>
            </div>
          </Link>
        </div>
        
        <div className="top-games-section">
          <h2>My Top 10 Games of 2026</h2>
          <div className="games-list">
            {topGames2026.map(game => (
              <Link to={`/reviews/${game.reviewId}`} key={game.id} className="game-card-link">
                <div className="game-card">
                  <div className="game-rank">{game.id}</div>
                  <div className="game-info">
                    <h3>{game.title}</h3>
                    <p className="game-developer">Developer: {game.developer}</p>
                    <p className="game-genre">Genre: {game.genre}</p>
                    <p className="game-release">Release: {game.releaseDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="top-games-section">
          <h2>My Top 10 Games of 2025</h2>
          <div className="games-list">
            {topGames2025.map(game => (
              <Link to={`/reviews/${game.reviewId}`} key={game.id} className="game-card-link">
                <div className="game-card">
                  <div className="game-rank">{game.id}</div>
                  <div className="game-info">
                    <h3>{game.title}</h3>
                    <p className="game-developer">Developer: {game.developer}</p>
                    <p className="game-genre">Genre: {game.genre}</p>
                    <p className="game-release">Release: {game.releaseDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Home;