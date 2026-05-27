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
      title: "Mewgenics",
      developer: "Edmund McMillen & Tyler Glaiel",
      genre: "Roguelite",
      releaseDate: "February 10, 2026",
      reviewId: "6a173c65b39d70db98de6a69" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Death Howl",
      developer: "The Outer Zone",
      genre: "Deck Builder",
      releaseDate: "December 9, 2025",
      reviewId: "697b965a9f0e3f9210e2518d" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Mixtape",
      developer: "Beethoven & Dinosaur",
      genre: "Interactive Music Video",
      releaseDate: "May 7, 2026",
      reviewId: "6a06017e266ab33bd0e81c13" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Pragmata",
      developer: "Capcom",
      genre: "Shooter",
      releaseDate: "April 17, 2026",
      reviewId: "69f21d8ad59224353af34728" // Hardcoded ObjectId for this game's review
    },
    {
      id: 7,
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
              src="data:image/jpeg;base64,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"
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">007 First Light</div>
          </div>
          
          <Link to={latestReview ? `/reviews/${latestReview._id}` : '#'} className="featured-game-card-link">
            <div className="featured-game-card">
              <div className="featured-label">Recently Added:</div>
              <img 
                src={latestReview && latestReview.imageUrls && latestReview.imageUrls.length > 0 
                  ? latestReview.imageUrls[0] 
                  : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXGBgaGBgXFxceIBgdGB0XFxceGBgYHSghHh8lHRYaITEhJSkrLi4uHR8zODMtNygtLisBCgoKDg0OFRAQFysdFR0rLS0tLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tNy0tLS0tLS0tLS0rLS03Ny03LSsrN//AABEIAKoBKQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHCAD/xABKEAACAAQDBQUFBAgFAgMJAAABAgADBBESITEFQVFhcQYTIoGRBzKhscEjQlLRCBRicoKS4fAVFqKy8VPCMzTSJDVUc3SDk6Oz/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAQEBAQADAQEAAAAAAAAAAAARASECMVFBcf/aAAwDAQACEQMRAD8A5yQWtYXz+hjOGxzFjwiz7aoFSddBbGuJhuvcgnz/ADhDXSmDXIIUCwPzvGqyxKPhHT/mJUudPUwLR2Nh1Plu+cMysSrEMuRbmb36eUSYVGRzJ45wXTbNc52t1NvpDClpVUEMuZ42OLkD9IitKbYj2zIANss7jzg2o2eigGXZmXMrl4hvFum6GEpLADSwtl9I1MhSCLWI0O/reIN6XAVBQC3IAW8uMSugIsQCOBEIa3GHLyHwtfMHNX6j6iIZfazCSs2UQwyOEj5Na3qYB4uzZOvdj4/LSJp4FkXcWGXLMgeoEJqftMkw2SVNJ4WQfHEfWC1nzCwLBABmFBJPm1vpE3YuYYTiAVY5AHM8AQRn52hPtbaWMYJfu7z+LkOXOGa1SkENYcQ1tPkRCjaKSbXlzJYYfdxrZuQF8jDNNxBKqMrWsRFl2EmCmVvvTmLE8jew/lC+piolri413Rb9k1AmUch10UBSOGG6H6GGmD9nsBKM1sr3YngBew8gPnDPZUghcbCzvYkcB91fIfEmEmz3DMtOcwXuOai7lT5i3QxaecZafLEdTUKilnYKo1JNoXbe2ytOhIGOYR4UGp5ngPyyjl+09qz6lrzGLcFHujoo+evOKi17U7StPmYKbJRrMI4/hHHrEOzbyXMy7OWyfEbkjW453gXYVGQltCTcn+vSHolqBa1+sOYd0ea1cAcGwN7X5XBy8ojlqWzOQ4bz14dID2VS3u5JKgnAp0GfiP8ANe0NIlVi0fYYjqqpJYu5twG89BAUvbkvergcSB9DEDG0RTBGiVsp9Ji+tj6GMzJktRdnAHNh9IK1EbiNWmIEDk4VNve56XgGq2rIUe+XPBSfnoIAXbEvxY14DEOn1tb0hfS1P2i+Y8tfpBD7UDj/AMC3Ag/SwvAcsqpxjTQg6rfeOUXNTcWrZzWby/v5QfNkF8tF38+kKKCXiZL5i4898WVyBmcgNYupiMJYWGgjUiEs+tmzWPd3CDSxt6n6Qz2djw/aG5vkeXOIrd7AEnIDOFP+Yab/AKo9G/KG9TLDKVOjAg9CLGEP+UZHGZ/Mv/pgKlNYk3JJJ3mNSARxBjZoFEqYX8DAL964vY/s8zw03xtgopZRDk7lLAn1EWGSim11AYW1ORtygnZ+y5Sj3bk6lhcnjmfkBaCl2WCbK+AWJ8WYGgAFyDv4xRmVNv8Ana0SOtx8uo0gGoSZJYCYcrZNclW6aZ8owtYFsSfeF84As1UwNcjIbhpbrG8ycz5WKq2V7Hnv5wHPqg1gM+IuLGGiDCAHe54E28ss4yr5qaWPeTMjcCLW1I4dYS7f2EMBZRMecbWwC4AGpa3L+kWpZ8sZYx5/nA22JzCSzSXAK62sfDvI4EDOFIpOzKyxxAWYixBGov8AK415Q9pnmuMRKou4216X+cQbLkLMRUZb92TmeZJWx+fTnBMyjaY5JYAbt9husIz5a14sy5aggsFN/vE39SfpAFbsyaZjEDEGNwbjThnwhnJp1lHN8rXsRr09IIqTdLquPgIypNTbMRTeay33KpPxIzhps09wG7nxyn96WTodLqdQeR1y4QGlcyGxRRxFiPrDRFUnGN49eB6xbpMTdlJxaoBNgMD2G++Wp6Xyi3bQqxKlvMbRRfrwHmbCKPSzDKqEdQTY3IAJNs1c2H7JJix9sJLTKcImZLrkN4zPpoYtSKyxdyZhN3uGP5DkBkIJkyFJxCX7wzsACepEZpNmTEAurE8fCfKwJMZlzWUkZcxnceRjX5xn+jpaADIWj5xlGKWYZhwqrM3BRf8A4HM2hgNms3vzJaclBcjqRYD1MYbQbM/8GX+6vyz+ME9I1m0JpyiYw6uGZTa1rWJFrnLxX9Y2gFNXs9RdiSzHef70hnsukpkUM5QtvxkZdAcvOJZsgHX1GfwjH6ihXTPzgFu3KikdSqSwznIMgwgHiSLX6ZwBRbCC2mMMRGeHd58TDuVIEtiSCRuIHzEGS1dvdSwGd3uo8srmArW15TTASb+EGyjS/wCcP9mdmKQy1bD3mJR4izedgDlAqqcwws1ySOuY+EJJ/hYiS7m5zCY8upUgHzgItpShKmzJYN1RrAnhqAeY0gdUBu37JB5xpUIQc1IA4j5mC6HZsyfiSXYC1izaC+7LeYimew3wrKJ4D0P9Iabc2nLlSmLHLgPvch1hIJ/2YysbacCNR8ITS5Yn1Sy29xb3HGwufjYdLxvWMQ1O35r5KxlruVMvVtflDrsntqZ3gkzHLq18JY3IIF7XOdjY+do27TULzJQEqVi7vxMVA8KgHIDfxsOHSEvZuWXqpOHc2I9FF/6ecZV0ZxpfjaK3/mA8BD7aU8Kqm9vGvzufhCT/AAmn/wCov8wiik1NWqnD94i68zoBDGjkYcK+p4nefWAv8vPj7x3RjuF2XTTdugwh1Nyum9TiHwz+EdGB86fh8NgCdL6W4/0gmjfx4SNZbAdcj/2mFyVtwWAJGhIRmGXMG2+BHr2ExXDA4bEaZ8suXziCzyQkxTKmAMOB4f0gFtmU6e7LBG7FdiemKCZeGYuNTlrzU7wf7zjeRTnU3JPHcOEZ9Newg2dJ95pdiNy3HraJ1LD3AsscABfzNoK7o8M4L/VVNgqkczqTEqxBSziV8QzGvPmIG2nNkjwumIsNAATaGq0RyF8ybfMn5QJX7OcsQq3IAN9L9OJiKRbNRAHCXw4zYHUCy5QfLT/iBpKYWvuawPUaeunpDEJABVdNjAANiDE1FSBBxbebf3lE4TOJMMFL66QJgIOo0PD++ER7NpHmssiUbWF3fcovmfoBvMSbRmWFhrqYuXZ3ZncSQCPG3ifqd3QDL1O+LGam2Zs2XIXDLHVjmWPFj/YiZZKqtrZAeggjDAdfNsMPHXkIqFjCI2oRO4BV9+Yfu8l4t8B8IdbP2XiAeZocwnL9r8vWMbWPuywAFAxWHw+sSLS+XhVcEtcEvhvbm53nlHwW9gN+QjIEFvLMmU08jxWsgO4sQqk+ZgEu2ZoecQDlKARSOI94+th5RCk8j3tPxfmI1lSvEF4Zk8f+TnBrSxv/AL6CIoiULjLWJMMQyKOYPdXw8GsLdLZ+sENLmj7gP8X9Io+lrmIjn1QlghjZGACk6KdCOQsb+RjSomzUVmCyyQCbYjuF+EJ6/bimWwQMxwjCSp8ROZOmQGX0iDXadQZ0y1yAb+SDLyJMZloFAAFgNAIHpZgZsQIN0U5dTf4mCCGY4V13k6KPqeAiKGnyTMmLKS2Nsyfwjify3xZ6GkWUgloMh8TvJ5wtpKZZRDAZ/eJ1N9bw6AvYjSNRmqZNTOYu9Zj/AO5iPgYQVlFMWYZiZZ3uDYg74tlXQ45k11NjjNj0sDflcGF86W4uGC5ZkaGwz89N0Vlc9nUvdS1S5JAzJ1LasT1MVuikSKabNRBea7nIkAKp8SgMcguY4k+Qi4MIrtfsoTMbqcMw3z1B4Bgd2kItS99KR7zZisbZ20F9FRdTxJ16aRj/ABmT/wDDn+SX+cUn9XsTixYgSCL2sRqLLaMfq6/tfzv+cZrUW3YtIuHvCAS17X3AG2XpDCdSI+TIp8vkRmIF2dOCASzu0P5wc0hiwINhHSuZJU7IMq7yr4dWHDnzHxHONaGhlMCVlpnr4Rrzi0ZAXY2AhPQSCGLAZcOW6M61iEbITUIFP7It8tYmSnINrpfz+kQ1Pa6jWqSiMw96xC5LkGb3VZtxNwPPO0WmRs5fz/IQhSWnpCRe0T/qeUHbf2nT0ckz6iYEQZDeWJ0VVGZORy5E6CA+yPaGn2jKabIxgI2FldQCDqNCRYjnCFYNGdb+IaE/lG8xTYlgFI0sfX/iHD0/DWMLRjU5nj/ekIVRNpUZCMLHPLMa3OevWNaEECzZ8OP9YY9ve09HRKsueXMx/EqS1BIANsRuQANRzz4RD2braeuktNp3xYCA6MLOl9CRwNjYgkZHgbWcSsrK3jOMvLsL8INFGRu8xE8rZTPmNBxNokWkVDRY5qX3uCfLxfS0XsrbKOcy+3uzJM8K05jgaxZEZl4GzDUcwDHSqKbLmok2WwdHAZWGhB0Iiojdcstd0BGhDOASSSc+mpyhhtGrkyVMydNSUg1d2CgcMzvO4Qgke0XY4bCtZLB0uVm2P8RS3neEKtZSE205X2h/dH1h3Q1UqcgmypiTEOjIwYHzGURmlDMWI6dBDTCrZtFc4m0ByHE8+kF7WlBpTKRfEVFuOYP0vB0mRhyGkbGnBIJ3aQhVW/y/hJYqzA/tZr6HP5wVQbNA8Wp3E52HARZAkIu2ldNpaOdU08rvZqAES7Mb3ZVLELmQoJYgbhqNYkWoRtKm7405nyu+VcTS8YxAAYiSN2WfTOA9k7ap61XalmiYqNhYgMLHXRgDY7iMjnwjlW2dr/q6SNrzKbDtGq70BHxCUqoBKaZ3R8V2RgoBa2ZMD9i9p1VTIek2csmknK/fTGUsBNT3My+MjCzDwg2IOmRvYldT23LIlmWNXyPJfvfl5whmU+4Rcp9ISAWzawBPQbhuhTNpM4xuN5qnyKUg418LbiB8xvi17Lk3lqx1YXPX+8o1XZ/iOW+LFsfZJwKN355xrMZ3Sn9XJyAJPAC8ECgnYCqqwNsjll6mLVLpQgsBYf3rAE7ZSkk4jc8c4qKwlKUsrIydQfnGZ1CrixF/mOkW+kpmUEMcQ3X/AKxyXtL7Z5cmc0mkkCaiEgzC+EMRrgAU3HPfwgLxRYhLCtqBYHiBkDbjaMGUBEXYHthK2nJZlGGYhAmSmIOG97ENYXU2OdhoYbVVH+H0gKL2qocJE9dDZX+St9PSEUXjbMoNJmqfwN5EAkfQxzz9ZPP0jG41mrc8waHI8D+cSyphyCMedjkBv1yiaX3ZyUr5ERgkMTLXd7xGijhfieEBNJkl97NzNz6bvSD6h1p5Eye+ktGc/wAIJ+kF7PphYRWPbXtHuNmGWPenussW4D7RvKyW/ijWYm689T6p2mNNLHGzFyw1xE4ifWPUmwqtpkiXPBAWZLSZnp4lDeWseaJOxpjUkysHuJNSUerqzE+VlH8Qjokztdg7Oy5at9q7PTG33VBLN/8ArZV/iEaZVX2kdrGr6okN9hLJWSN1t724sRfphG6Og+wMn9VqbG32q/7YpdL2ZWXsSdXOPtJry1l3+6gmKCRzYg+QHExZfYlPc0tdJkkCd4WQnQFldUP8ywFj7f8AtIShJkSAs2p+9cnDKyyx8W08Pqdx5Zs3aO1q2pSakypmvjWzLjwJmNy2RV4jIaxN2DFD31RN2mSWljGqzCTjbERMxLq73I8N87sTpcWSi9qlRNrJEmlp5aSDMRBLw3ZlLWOmS5Z5DLiYBX7dgf8AEhwMiXbpd/reHX6OqEz6s/d7pARzLG3wDesSfpAbMypakD8ctz18csf74L/RwkeGtcWuTJXpYTT9fhAdLmysJIO75boF7Q4hs+pKZOJE4r1wORHKPaD7TZ42iVpnAk074CAMpxU/aYv2b3UW3Z78uyGqk1Gz2qJecuZTuwzOQKHI56jMHmIDyJHp3sI60uyKYzDhCSO9YncrYpxPkG0jzVsyjM6dLkrrMdEHVyFHzj0F7aakU+yu6lnKY8uSOIUAuR0tLt5wHH+0W2avbFaAiu+JisiSPur00vbNmPrYCxHaT2ZbQopJnzZaNLHvmW4bB+8NbcxcReP0ddmD/wBqqyBfwyVPD78z1+z9I7LUylmI0twGR1KsDvDCxHoYDyf2M7XVGzpwmyWJUkd5KJOGYvAjceDaj1B9Rt2mplo1rnmBKdkVwzcGFwLDMtuwjO8ed9s+yjaUue8uVIM2WGPdzA8uzL90m7DCbag2zvFn9qGyXpNh7PpnN2lzbPbTEyzGsOQuwBgGW2fbyiuVpaUuo+/NfDfoig5eflDbZHtdE7Z9ZVmnwzaUS/sw91fvm7tDisCLNe44DI55UDYXYzZFQkhTtQy6maiEyyqkB2AuuLIXxG2Em8X6t9nVPs/Y+0UV3mtMlY3drDOTeZLCqNAGz3k3gGHs09pI2kHlTEWVUr4gq3wum8rizBB1Ge48bJvaR7XJlHUGlpJctnl2715gYgEjFhVVK6Ai5J4i2V44j2c2zMo6mVVS/elMGt+IaMp5FSR5w49o09Z+0ps6Tmk/upic+8lobdcRIPMGA64KWRtzZkuprV7hlxt3iGwTCSrkY7+A4dDpbXK8E+zXsvR00t59LO/WO8OHvCRkFPugDTPM+UJva4poNkU9FLNgxly2P4hLUs+nFwCesJOzm3DszYCz0znVM+b3YOYFrSyxH7IlepEFdkdoHmgcI8sVW0KmczTnmTXYG7OWY4bnLP7uekda9j3aefULNp5zNMMoKyOxucJOEqx1Nja189eUIVYPaD2m/UKXvEAM2Y2CXfQGxLMRvsN3EiOKvV7Sr2Zr1VQRqEExgv8ACmSjkAI6D7e6ZwlG9vBinA8mIllQeoVvQx0H2W7UpGoKeVTTJeJJa95LBAcPb7QsmubYjitYwR542H2krKKcHlTZiMjeJGLYWtkVmITYjdY6cjHqfspt2XW0sqqQWExcx+Fhk6k8mBHpHJvaN7JqufXTKmkEtpc5gzAsEKMQMd76gm7XGeemVz032f8AZv8Aw+il0rMHcEs7C9izZkLfcMhzteAl7f1pk7Nq5imzCS4UjcWGEEeseRI9Me3OuErZUxb2M6ZLlj17w/CWY8108lnZUQFmYhVA1JJsAOpMUdz/AEedlFKeoq2uO9ZZacxLuWI/ia38JjqVQIH7L7GWjpJNMtvs0AJG9tXbzYkxPUNnEVWe2ctv1d2TgA/7pNjb19CY5tHYqmUHVkOjAqehFj844njblGda8VjnTMZLopNtCBp/FFr2NSAS0HK55k5m8AJJupNmc2OHCjFR52sYaUdSoKIgvewtnkBrfnED6jSOJ/pAbVx1kmmByky8R/fm2Jv/AAKh847XLnhCoI138I8x+0WtM7adY5/6zoOks92vwQRvGddO7EdnlqtgGQLY53ekf/MVyJZPTAvlHItlbKnT6iXRAMHaYVwm/gbITCV3WC5/ux272KzMWzAPwTZi34Xs3/dFsk7Ep0qGqhJQT2FjMtmRz3XPG1zBFU9qlEsnYzSZYskvuFXorKojn/sP2n3W0e7Ok6W62/aW0xfgresdE9tM62y3H4pkofHF/wBscN7LbQ/V6ynnXsEmoT+7cBv9JMBaPapsmVJ2sb3WVP7ua2G1wHYrNI3XxK7ecNqztRs7ZTGXsyQs+cBZqmYSw5hSLX54cI6xb/az2HnVwkzacDvJd1IY2xI1iPEcvCbmx/EfND2e9iYbOrqTpmkgacPtHH/b5wEa9qX21s6tkTZSrPkSxUIZd7MJZ8VlYkg2y1N8UVv2VdrP1BqzMDHTOUvvmygTKH+po7p2Z7HUdCjpTyrd4LO7EszjgScrcgAI8v8AaHZppqqdTm95Ux0z3gEhT5ixgH3ZLsi1ZSbQqBctTy1ZNfE1y79T3aN5kR0H2K9oMezq2hdvFKlzZksEj3HVsYA4K+f/ANyH/sEohL2YZhzM6dMa3EKBLA6XVo5R202VO2PtJ+5JVGDNKO5pcwFWQ8bXKHoDvEUZ9jWzO/2rJva0oPNN/wBkWX/Uyx0P9ISnK0VOd3f/ABwNb6xUf0fFvtN//p5n++VHXPa5sA1mzZqILzJdpqC2ZKXxAcyhYCIKV+jzXL+r1Mm/iSasy3FXXD8DL+MXztz2uTZtN+sMhmFmCIgNrsQzZtY2FlO4x5x7CdqX2dVrUKCyEYZqfjQ2uOoIBHMcLx27a209j7XpRLm1aIoYOt5iSpksgEe7My0Yg5EcNxgKent2m3uaKWRw71vnh+kFdsO1Mra+xp8yXLaXMppkl3QkGwYlLqw1HibcNI5727otnyZqSdnzJk4KD3k12VgzG1lQqqiwA1Gt9cotfsJnSJr1mz5y3FVJyPHBiDAc7TCwP7JgK92an7Jp5cmpqBUT6kMSZClVljC10LMRcgi2QJzvfKOwbV7c09fsSuqJYZMMtpTI9rq0wBUzGRBLix6xXU9gIxZ15w8BT5+ve284U+0/ZNPsmhl7Ppnd2qZneznci5WTkosAABia/wDDrAUnYnZhqqiqqiVczKZpZKD70tg+MjmuEHpeF/ZixrKUHTv5PpjW8dV/RylkmtuCV+w6X+1v8N0a9pvZPPl7RlT6GWrSGmo5XEF7khgzDPVN4w3I0tkL0R/pHbQvOpae+ao8xh++Qq//AM2isduP/dWxsI8Pd1I/ixpi8ybmDPb6T/iuYsO5l4eYuxy/iLDyh8vZWbV9nKZFQ99LLzpa/iDTJpwj95GDDiQsQXHsTsmR/hdOEVWSZJUzFIBDs4+0xA653FjwtugKfXbM2ML4BLaafdlgszW35nJRfjbM2jkvZr2g12z5bU0vAUBNkmoT3ZJ8VrEEZ6g3F/OFYSt2pVZK8+c9hkMlG7Twoo8hAeitp1VDVUImz2ltSTADimHCM8hYmxVwbjLO4jmVb7Kpc5TU7IrUnKrZIWGJWHisJq6HMWDBesY9rewZtFs7ZtNixS5feByNDMIVvrMtyvD39H+UEpZ8y9y87CQNwVVNyP4jABez32kVVPUjZ208Z8Ylh5nvymNgoc/eUm3iNzne5EdyIjzj7c6iVM2lL7ghpgkor4be/jfCDb72Er/pj0LKmHCL62F+u+A45+kfWkCjkA5HvZhHTCi/N4QewjssaisNW6/ZU2a30aafcGn3Rd+RwcYvvtS7L0lfOkCbXyqWeoKhXKHGrG4sjOpvffvi5dndkSaCmSmkiyJqzHNmObMx4k/QDIQDeaYXTjA9btFjkg8zp6awoq580XfvNM8IUAG2ZG8/GJVhhtKrEqU806KpPU7h5mwjj/8AhkyOgVUuZXlfelUym97eKYRwByAG4m/mdJf8u0fP/wDPM/8AXGd61gs7WufCn8xt8ADE6VAe2JCrDRhn8s/K0IMIYWMM5FWoAxGxGVvyhSHNNZrFznbfkBfWOI9ufZtWGunPTSxOlTXaYrB5Yw4yWZWDMLWJIvpa0ddpK67kaC2V9/GDjWWIWxJPDdzMazU3Cz2c9ljQUKyWZWmMzTJmHMXYAWB32VQOt4atOzw67x0iNK/C2Wh1H1ELto1WArNOQxG9s8m/rCpAvbTZQrqObTBgrmzIToGU3F7Z2OYvuvvjkuz/AGSbQeYomCXLllgDM7xWyvmVVbkm2gNvKOvPtWU5AzYnS1wfXKD9jbQDIVDAlGKmx8x8DbyMM0huswAhS+Y+P92jEqaA7DjYj43gDIG+/nuvwiGrnkDGMyufUfeHpn5QVYFcRyP2r+zWoqqn9bo1VzMCiahZVIZRhDgsQCCoAI1uN98ul01UGAINwYMSZBA/ZfY4pKORS3B7qWFJG9tXI6sSYB7d9jZO0qYyWOGYt2kzPwNz4q1rEdDqBDlZkSy3MUcl9jvYKuoa+bNqZapLEppYYOpxlmQgqFN7WUnO2ojsxiDHGMcEcm7f+xwT5jVFC6S2YktJe4Qk6lGAOG/4bW5iOazvZftVWw/qt8yLibJsbcDjj0ptLaIlre+Z90c/6awlG1DlnppCq5JsP2LVc0E1E2XIyyUfaNf9rCQoHRjFv7A+yo0NWlXOqVdpYbAiIRcspS7Engxytrvyz6BT7QDrceY4RidU89dIUNmYnK4HKEe3Oy9JW4RVSVfB7pJYEX1sVINjb4RLJ2uCwUrnoTz6cIi21tb9XwNhDYsQAvbTCQT0+sQH7G2RTUcvuqaUstL3IUanS7E5k5DMxK9YuJUB8RztwAzuesU+Z2kbusIJ7xrl30w33IOQAF/mYipKR5i94zhAxyJuS3M5iFIsO2ZVJUELNlSZxQ5F0VsP7pYH4Q1pEXCDbK2Q3AbsopU2gnAXXDMH7JsfQn5GPtn9pnleBhiUbjky8s/kRCkW6t2JSTmxzaaRMb8TykY+pF4KpaWXKXDLRJa8EVVHoohBI7W0594sh/aUn4reJpnaemAv3l+QVvqICXtZ2dk7Qpmpp2hIKsLXRxfCy36kcwSN8cXqPY9XymYSaunK8e8mox6oqn5mOuUPaVWvjGBb+Ei5HPERp8oFk1wNyNLm3S5tCrFO7FeytKWatRUTBOmIQUVRZFYZhjizYg6ZAR0wVZGv9+kJzWRq1b8dAN/QRKRw7td2Q2i9fOPcTp3ezGZZiqWVlYnDd/dWwsLEi1uEdz2LKmS6aRLntimJKlq2d/EqgHM6m41jUBzmPB53v1Ay+MfTA/4x/J/WFIKmvAfdd42H7i+/zvov1PK3GBJs2aDYsMO9lW5HlDalCKgwtcG5vxvqfp5Q9qF2xPwqqLli1twG7zhTaGG2hjXEMimY58YVfrS84hjCNBSePI5W+ELVqV4iNxtJF4np/WIprLpx9435WtBctgBlCeRtVCPvDyv8onWtUjK/mLfOKgma1zn/AMGFvaatWVTlnuRiUZWuc918tAYMR7wtmus5wbBpcs+EnMF9Cw6DIHmeUAiWsnzFIp5Dqp1diAzDkWsAOkaUFVVUj94ZLYNHAIYFeq3sRqCYtUazHCgsdBnANKDaMuegmSmxKfUHgRuMTLOBNgQSN14p2yNjBGeY117w37sEhVF7gMBqRfpDFqGXuUKdxUWI6EQpDKmqDJmEfcvp+HpyPCLLST1mC6ENxsdOo3RR5M1jcMbsuRPHeD5i0SoSDiUlW4qbH4RplfUETKYoKdo6nJZbK9tWZRYfxC1zEzbUqW96dblLUD4m5+USrF4JhRtHbaLdUIduCnIHm2g6ZnlFTnJj98s37zMfmYPkNJcYJiIh3OqgfzAQpGwbvGLTPE3DcB+zG608sbvUn6mFG0NmmU1jdeDKSAeYMb0k9x4S2Lhjy/1fnE3VzDinnKsxBorEI1uZ8J9cvOLURusLcI5rWbSAxS3lzAdDpccDrFp7N9o0nqqTGCztLHLHwI3XPCGabhlUUHiDy7K44jwsOBH1GYip9rnnlg8yUVloLBlOIZ2uSRoDkMwNIvtsohmAEENYgg3B0I33jTLkrzTYxeJQsFXcqqB6Z/KKz2gp6NEU001mYj3R4xbLNi2a5f8AEWKVMxYG3Min+/WMtJGbCcQ3a8xvjO2dnSpyh3HiGjA2NjuJGsaz/dPPL1ygmvcABPP8oCmbS2YZIxDxpvJ1XrxHMWt8Yj2dQTZ1+5XLQuclHnvPIXi0NTCaRLJOE+9beOHnD6RIVVAUBVUWAGQHQRJVsJKfYDAWaaByRdPNj9BEh2KoyE835hIb98umZhTWEAmwi8Sh5uzWXWaLWzNszww5xrSoE33bed//ABETzVGrAecbSJqtexv0iKKM6MM54DzIHwFzCDaG1GLFUOFRlfefXSFky7ZsSepv84Ui5mnc71+MRy6eYpJAU31FyM+OmsVFHYZqzA8iRDOi2/MQgP4147x+fn6wpDmeJpBHdG5BtZlI+JEJ/wDCH/C/+n84s8qcGUMDkRcHlEf69L/6ifzCLEc4Woc71/lP5xvJZlYMbN+zYAevGAnloBiDYeYNx6aRslQ4XNQObm1/K141WYfptOWdcS8sJ+a3EbHaKbsRPJT9bRUpb1BJtc8/DY9MQEThanivw+giXFmnlTUO4IJwKdQDmeRO4dIaUboEUAqMhlcRS3/Whz6YPqIhSfNLhHdkvvIA9DaxMN6enQ7wuasWZNSWpxAHExGnhFwL787HLhCXu7izMzDgzE/DSGOzJCjC4NmUnFc5WNwemWkSLTy0fWiFKyWTkwPS/wA9I375eIJ4RFU/tFNYVZKMykS0zUkZ3fW2uVtYd9j6aZPBmVUwmTf7NbAd5bexUA4eW/pqC+xu9m2fN5rYnsTZJa2AUcyAFvzi4oAoCgWAFgBuAyFuUWpBVVslSMUqw/Zyt5W0gWXJAyINxqDugiROKG403jjDCbJWaoYa8eHIwCzAN0RzJIOuvGJGyNjuj4G8ARRqHXuJmYPuHeDw/LzEJ66jMtijeR4jiIZKbEHgQfSCtsFJhwkEWAOPcCwBzHDTOAWLRrUSrP7y5Bt44dRutyirV1K0tyjixG8b+BBi6UidzcWLE2xYbHCM8OW/efSB9tUffSiQPGoJA38x5xNxc1N2O7QzZ7GTMUEol8eYLWKrmNCc73HpE/8AmXDPeXNQLLDMocXY3U2uygaG27SKlsSayhZiGzBmIzIuDkQbboItlqSeJzJvmSSd5MKQJtKhQPO7skKGfCAQRh95ba5EEWz0tFhoiqypGeWFR/Mt/pCflBuyl7yn7smzISt+BQ3U+loYppUzLKb+XWBZNQ0y4UXbeToPz6QJLR3fuzk286gLxHXcIfUtMFUKosB/ZJMEQyaZUBZjfezMch9AIVbQ7Tn3ZPiA+8wNj0XU9TaFm2tqGc2FT9kp8I/ER95voIBkyWdgqgljoBEvxcz6LmbaqDmZrDpYD4CH3Zoz6kHvM0B8MwjM8QLa9Yzs/s0qLimATX4H3B5b+p9ItWyyDKTCAMtBuO/LrGsz6m7n4V1HZaU2eJw3HIj0t9YP2fsuVLUAKCd7HMk7zG20toLKU5guR4V38ieAit0tVMl+42uoOYJ6flF5jPdOavs3TTDcy7G9zhJW/G4Bt9YBqtgSQwUy0swNiuIEWtr4uepvGBtyfkAsskkDLFvy4w1wm92Nzx4cgIcOqftPs46XaVeYvDLEPo3l6QheYBkcjwOvpHToHnZG5y52uPPhEi55EOy6BmphLclQSTbfa9wOnKJv8vS+fr/SGFa8wL9moJ8rW4i8LsdV/eD84DntLRWOJrDgOfHrBioBu8/6xkx8sZrTYRm0YEbQVi0YZARYgEcDG0fQAZlmWCVuV/Dw/dv8oY7NpQwE02N/dGoA/OIWMa0E7u5gX7kw/wArcuvzi1mGxlN+L4CNXlNr4SfMH1gump3mthQDL3mOi8Op5Q4k9n5f32dz1KjyC/UmEKQbEfxvcHGcKhSbm2ZOfCLKmzgc3Yk8jYDoN/nE8ihly80RVOlwM/XWJJkywv1+AvFiULPkFeYjfZ06z245EfKCVNx1HzgGikeEMuTqddxPPlFBG11zUKLuxIA4gC5vC+Q5JAtYk2seOkHyg7TcbiwVbAczqYylDebiuMN8Vt9/+c4gDQkkADMmwHOCqqYuIkXIwqNNSBbKDZNIiEuL3N8zuvmbRipwgrMOgNyeRBAPxEWJS5CBkBY/htY36RtPXCVH37Xbz0EE1G1ZYNlIZvgPP6CF5bUk3JzJiKQMRLmTVyCq2LkA4xegN4XzttC/gQsOJNr9MjA/aOaTUzEv4QJeIc7XAPrf0gjZew3mgMTgl7jqW6bgOZ9IkWpKTaiPkRgbXM5HoYMoaoJMxqQytYOAR0DdRe0E0HZ9Jblicf4cQGXG9siYNrtnpMW1gGHusBmDu8uUIUXR28T72YjyTwj5H1hhjV5borC7IRlxII1ipzaGei37zvBmWS1tczhO/wA4s2y62nWUpRrgi+mZO+443ytFxNUJJbFu7CsXGRUA3BHKLl2f2V3S3a2NteQ/CPrBEzadzZEvf+87fnBFOz6uBflDMXdF3gWZIUm9rHkSPkYlLRqqExWSmfSMrEquJTnlqPLeI1lyHbRG8xb4taH4WJIQoDZ+z8HiaxbdbQfmecHNGY1aKjEaOY+ZrRBMm+QgoaomBAWDAIMzfTqOHSF/+PSvwzP5IB2jVd41h7gOQ4n8R+kDRmtZhGYzLEatG6axlWQIxjGm/ln8ojqzp1ENFUAAAADlAAZ/hb0P1j4k71Yfwn6QxEfQClpo0vGJkonCoF2ZlC/vXGGGk5AQbgHLeIW9kGJrJQJvbHa+7wNpBHR9n0glIEGe8n8ROp/vdaJ4zGjaxtlteBa5rS2PI/HKJxrCTbDnvZa3NsWl8t+6GqYUtTisBkAN++Ju9VfDv4DM+ghZRG0oka4Iadn1Hcg2zJNzvPUwwbB2OSq1zvIIA5m8TlFVlA138xxPnBL6GF2zDcsTmbjPygg2fOCC5/55CFsvaGFAGlvkM7WI+cb7V95fL/cIR10wh2sTpx5Q3TMFBAc+MZnTlRS7GyqCSTuA1iKh/wDDHn8zCXtux7hBc2MxQRxGZz45iIpHTXnz7tkZswEjgDoPJBbyi7VVZgYKqiwA32twA8opuwf/ADUn95v9rRZdqe+3QfKNeKeRjUz/ALLGu8C3LFb84XUM5sYW5swbyIF7/TzhjRC8lL/gX5Qq2KbzHvuXLlnDyxMNZc9RZcVyMrwBJlYahpa6TBjXkdG/ONd7efzgyj/8zI/dm/JYy0PmVEunFvec62+p3CNdn10yY2agJ5/O8JGN2a+fva+cWehUCWlvwr8oYJiYmlPcREdIjXURpB14xiiMRvBHzNaIXmmN30iAwGpMJ9u1ekpd+bdOHnDeKtVn7WZ+8YzrWI4+j6PojT//2Q=="} 
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