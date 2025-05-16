import React, { useState, useEffect } from 'react';
import './style/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { apiGet } from '../utils/api';

interface Review {
  _id: string;
  title: string;
  rating: number;
  content: string;
  platforms: string[];
  genre: string;
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
  const topGames2025 = [
    {
      id: 1,
      title: "Atomfall",
      developer: "Rebellion Developments",
      releaseDate: "March 27, 2025",
      reviewId: "6807ae9fb72d175f0c4a6165" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Blade Chimera",
      developer: "Team Ladybug",
      releaseDate: "January 16, 2025",
      reviewId: "68220b014505828405783563" // Hardcoded ObjectId for this game's review
    },
    {
      id: 3,
      title: "The Elder Scrolls IV: Oblivion Remastered",
      developer: "Bethesda Game Studios, Virtuos",
      releaseDate: "April 22, 2025",
      reviewId: "68261b092a8a2f45ca20dd46" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "South of Midnight",
      developer: "Compulsion Games",
      releaseDate: "April 8, 2025",
      reviewId: "681b7b2c73093a8e85a73af9" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Avowed",
      developer: "Obsidian Entertainment",
      releaseDate: "February 13, 2025",
      reviewId: "68220faaefc19dc5eb8f8d37" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Citizen Sleeper 2: Starward Vector",
      developer: "Jump Over The Age",
      releaseDate: "January 31, 2025",
      reviewId: "68221a6199f049d81edc570c" // Hardcoded ObjectId for this game's review
    },
        {
      id: 7,
      title: "Cabernet",
      developer: "Party for Introverts",
      releaseDate: "February 20, 2025",
      reviewId: "682780d479d1cd238f60cd7a" // Hardcoded ObjectId for this game's review
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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXGB4YGBcYGBggHRUYFxofGBcdGBcYHSggGB0lHRUXITEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy8lICUtLS0tLS0tLS0tLS0tLS0tLzUtLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJkBSQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABMEAACAQIEAwUEBwMJBgQHAAABAhEAAwQSITEFQVEGEyJhcTKBkaEUI0JSsdHwwdLhBzM0Q1NicoKSFSRzorLxVGSz4hZEY4OElKP/xAAZAQACAwEAAAAAAAAAAAAAAAABAgADBAX/xAAsEQACAgICAQIFBAIDAAAAAAAAAQIRAyESMUEEURMiYXHwMoGRscHRBRQj/9oADAMBAAIRAxEAPwD48lwGR5/EVy60ChAOYr0zS0NZK3chiavF0GPn+yhiK8fKpQLDBNQvGB76oW4eR91cuXJ3oUGwtFmvFKpw1/LoRI/CjKDGWyivBKuCaxVww+sTQsPFsBK1INFEtbAMGqL6Qd5o2Cmi+3fgbwfOa5f0lZHx/Cqrd1pidK5cOg99Cg26KctccVYtcjWmsWiorU7YqTCpWrRImpYaKiKku9SK12KjYTzjUUVdSUBGwP50MvtUcnskTrSsZIAiuRVsVwrRsSiquipEVyKlko8a8tSC1ZatE7TtPoBufTzqWRI7boi0s0RhsATyNMFwPQfrpVUpJF0YNi9bVMEw8qN9vw0q9sCypnInWcvQEgfKdafHAABV6D49fxqjJko6PpcDbd+xlhgzXkswfKtOOGEmAKqv8NOn6mq/impemozuOw8eL7Lb+R60ue1Gla7FcMOTUGDz/XnSc4WPDcBA5HpPMHmKshMzeq9PT5IS5KstWZMVfesFWKsIIMH9dPOi8HayqW58qt5GBoCv2grD4EelFd0AhaN+dUYobn0rwu+GKD2LRzA2Mxkj0FMvof8AdHxNU8IXqeX7aZd4v3vnSuQyR8+ZNKjV8TUctbLMdFRNczVPLXqlgIzXDR3DeHvfbJaClomGZV05xmImj07NXT/WYTr/AEqx+/UsNCMGiMPdggHb8Jp2vZK6f6zCD/8ALw/79cHY3EkwrYZ2OgVcVhyWJ2AGfUnpU0w00AnqK4LsUw4LwTE3TctraINnS4bhW2trWALjXCApkGAdTR9zsdiPvYX/APaw/wC/S0NZn3adagV1FaR+x+IAnNhjHIYrDk+4Z9aBxnAcRbe2rWmZrv8ANZIcXZ5IyEhiNiJ051AihhpUGNaS52KxYMMcOpGhDYrDgjqCM+h8qrvdkcSo1OHOseHE4cx6w+gqAEIqK07xfZfE27b3Mtt0QS5tXbdzIp0lhbYkDTflRV3sNjE0f6OjaEq2KsAiRIkF5GhFQlmair1NE8S4Xcw1zJeChiocZWVwytsVZCQQYPwphiOyuJRsr9yrcwcRZEHo3j0OuxoMIkuLXrNMsbwS9btG63dFAYlbttvF0AVjJ8qX2agSOTU/EVO0/KiLSa097ODCozPiSu4AVreeRrJEmJ8o6UrkMot9Gdw9pnOVFLsfsqCx+Ak08w3YnGv7VruR968co+AlvlWztdv8JaUphrJA3iO7U+q2QpPvNKsV/KFf1FhFtAn7CKvqZJzT79aqeV9JM1w9LFq5TS/df4ss4R/J/aBzYi/7EMx7l2thSNmzAa7EGQNdqqTguF78vfW29h2K2jaZLa2wwyKzIkyc5BJLGANARsk4j2ixV0km68t7RLGG9VGh95oHD4q4pLsWd1INss3hX70rMHeKVOb2xpYsC+VSt+/j8/Y+pHgXBwmUNaGQL3h5u+jMPrATlOVNBE68qZWMZgkEYGzacAZcyi2LSTurNBZ9WJMcyBpNfOrXaa4RfGbS6czTrmJQJBmdsoq7B8SLYEWlykE5SuuZc0lidOevxpXna7RYv+PT/TJP7MN4y7375Fm0t0gyWt2sg21khmzRA1+dK8RjThz9fZdeuoiNY3jyFNuzGP7q20swAOrl2kDcoF5jYwOXKNaedpC+LFu/cWLd0N3SMElJUSWPIsVDeKYzVE0+zFznDcT5xxbtPbu2HtorKzOADO9sa6xsSQNKDw/FMQX7zP8AYC/5V5TyPOR1rbt2QtYjv/5sd2oObMvhmYCsNOR0J5eYrA3cE9pzZfUgSI2YHUEdff0q6KjVJC/9icnbY8wHaq4zWrbkW7cQxXc9JZjAn5Vs8ruQFI8tpPpO9YEm3bQOGysu0GSGHTXflWh4F2lW7lS6XNwnRvDGvoFygaedZsuPzFHT9L6nxKWxvjb7L4GUSPXQ+YpFi7hI1CnXSOX41qMZeYqUMac4k+4j9a0pxOHS4vNXEAGZVvWRKn4j0qmEkXZZzqmZe+uZxrOgB936j3VfetaUWMPlaCI09ecfr0q2xgGf2R8xpBjU8tT860Wc1oUHCFjovwqP0SK0NzCZCFuBlTeQB4upE+1zowXcKVypZYxuSTm+IEfAVOYUkZTD2jpR3cDqvxFMF4fJ8AbJruOR6/Ggsi/fT5UrlYYwMIrivL/GhpqxHJ3OldCjnWWMedcjp61wiuIDyqEJKxBldCNQRoQRsQeordcew6Li7uVQJykwOttZ26kyfWsJcbTWt32huFsRd/y6/wD21oWBl+D4A75W+j3iDqDkua89DlhhzEUxxHDAim222zK4YGI1Gu8dKwnbC8fpLRoDbtaT/wDQSvpWNvQ1wj2hyI/uiNZgfCpsjQwxNi3cW33gzgODBLak4HDCTvJAY6nXU0KOzdtnhLDNE+yCQuYGIMHTeJ/ZRL4gqqkDTOsnTw/7lhNYkE+gNZLt3iS+DJkf0lNhE/VXINTySjdHgimybV6zlVo3WNjJgnyjlVXBuGJYtXLSAqpu3D0jNg7sx0MRrWW/k3vZcE5/8w23/Ct1q8O6uhYmYuOdC24wl3eCJqeSUEdneEWbaBUtyeURr6RvA/Cim4YFkmxC8zkMCCTJJ5amkJdu7uZSNbV7/wBG55V8z7DeDG22YgAW72s7H6PcA384oEUT6lb4eBiUuhSCouAMJghrbKYjkdBzG3SkfG+F27t7MVGYrakzv9QnKen66vuHYqXAOujQB/w3J1922+tKrqW+8c5dWt2S5EySLFuNTpt0ijegCxeELdbAsTKYe6yXDqR3KA4tZPSFurWeyG+Hv3BD3HZ21GhclveNSBWku8QZLN+2gkX0yNEeCG1Mf4Gcf5hSUgBcoGkdP1PKpZBX2stBLyIp8IsWCqzoueyjNA5SxLeppODBp72pWb1vn/u2H/8AQSlAta7UGy6K0EYXXU+6p39oHvP5Vy0unnVyWhHi3qpstS0D4ewf1+vKireGPOrMANY8udN1w/SklLZYoCtMOB61HuuunrTK4MsltANyeXvrLcUxmdiJJWdOh9xqRTkCWhhi7yIujKT0B/KaK7IXFa7cDsFlMxk6eA5judYk1l+9jTar8Bw9sRfS0hEsdW5KPtMfQAmnniTg02PiyvHNThtpjy/da9D3Pq7M+FOZ5yfgTHpuTNfU+znEsI9gYbGEAIo1bUJlBIYzIAETPmPfkuI8EXD4dQbwjKbdtMv220Z5B3IVvQSKVcAvJiECW7gt310UnY6+BtOWXwMI5L5VklPXJdL+jfHHjmuD7f13a/Psant32mwuEs3MJgxNxzF1xEA6SNIBJUmCNN6+d4/H576XHUyltVC6lmc7DlJ8VR4rh8twvdZXiRCggcxp8ByrRfye37am7ibi5risFB3yhxOn3donoI2JrZyXHkciWNqdMqXsxxJx3gwnh+yHKKVWeSEgg+utLme5h3DBO6dNg4meR2MR5jXzr663H8TfsEpltW9tAJHkSdZgwdBFfOOOcOuuB4zccHQZdzznWANSZ3pXJS0SE+Lsf8I40mLt8luD2l6eh5ivX7W45/rpWS7J48WsQy3GFoEQ4fQSNtxAP7DW/tItwSCCPvLBkeVYcsOEvodeGRZcfK9ldrhIuIVIGYAeMONzy238vOib4TD21CANcPPkNIOUaATG8cjTXAlRbyoNpAny8/fWX4pcObXUifCNh5k7nahbejH2wfGcQdiO8OYTtp8tNK9jeF2HMpeB6DSR1kcz8KEt2TcaPeT+vWnOGw4AyhRHxJjqaa6Hjj5bQlvYf7IZmGognTfXwjTzqH0NulaBsMqDQamhs3lS8/Y0xcYqj40a8a8TXJrsnALFarKpU1YTApWQ6+x9K2XFm+tunmYn/QKxkaH0rWcUkXH9fd7IpWHwJe1BzXydB4Le3laQfsrb8Sv+Nz1j3eEfqax/G7D3sSUtrmZltgKo5i0vw8ztvWn4iQXYrqJ3mdAI3+1qN6jfQa7GzYksuViBFxY31H0TDhpjyUevlSHtSw+iZVII+kKTuYPdXN5232OtM70N4lYj6waDbTC4ffnE8vWlXaTCs2FZEEm3dFxlXcJlcMwG5UM2u8ZpMCli7oaSph3YN8uEOsRiGO247pPh61rsJdDW3j77ifL6JdiNNf10rDdiQGwhWJ+vYkabd0nI0/tWCLTZGIGdydT/AOFu6STpvvptTN0xUrDDdhY1/m7p1I/snHWsF2Ruf75b39i8NNzOHuCtPaWS0yT3d3cn+xcjQ+6sr2WtMLvekeBEcM3IG5ae2g82LMNBrzoJhS0bYWgSoUssyJBg+yYgydTrqB19wuLulSxMN9Xb9oRP1NuAQNNqr4OF762TObxbnX2G36mqeIYgZmWTrbtT5/UW42qN6Fos46mW9dQGADKgfdYZl59D+opRxK21sqoJ1tq7eWeTHwj4097Qt31+2QCGbLZM/eUKQdOq3R/pNJOMYtXvBgRDWlKiI8OZsv8AyhffNQjiLeOOTdSZ0s2QNCNBZTruPMaVVaE70Zxhpu29NO4sj/8AmBVSjUADakkXQYRYsAj+FW3MJtJjyrtgjrRTaxzqplqkU2sJJ6AfP1pzbAUa0FaxNpBNy4qxvr08hqTSbj3bFSvd4VYUghndRmPLw6wBHUUqjKbpId5IxWxNxrizXbra+EGFAJgAc/M+dAkaTv8Ar5UOtWB628UtIyKV9nmmtd/J3AN9hHeQoXbYkk+gJCj3isgxpx2SvlLrkHa2THXKyn86qzq8bX52aPSv/wBo/v8A0zdcYxVvKlu+Hylgyvq2UrIOggkEXHmNdQRJEVhsVhjYuC5h76MV2KFs0DmVZRpsDW1sYm3jFKjcjW00SrdUOzeXMVn8b2ZuIQ6Q41iGOhGh1OhPkDVGKofKyTyykZviGMa6xdlAJOsTqdz6b7edbzgHCLtvB6A6uLjCBqxX2c32oAB/zGsJimgsOYPXYjT4g19NPbLCHCWLbTCKgWyqyZSJLkbEEMBqPfNW5L4JRQIVOTlN/cGPETaQ5nRF+0Aol3iAcw1mBEeQrt+4G0hssa5SQfcRqD7+dI3bv7jC0CIJOaYCqPvMw1M7kAATvT3h7WO6NpVv4gwSWTvI1JJghlXZvsmNBvAquMfLKpQqTRkeP2g03srgLCnbkd215DTTnpOlfT+H4BFtWxajIRyO4098ydvKKw3BeF28TiFtI5FtDmZXTxeEhoBMgy0zJOlfSb14Q2XTKNAOZPp6VV6mfUTV6WLSYHjLpWUXYfr3Ut+jyvp660zNhp8Skc56z5868bY2rPdGlQ9hfwy33bkmCCIj1p8uDEaCocN4cCQx2HLzrQWsMNtaWVyehZSUDPX8DKzQn0GtRewnhMUN9C8qVpokcqZ+ZDXVrteArvHHLLS71w6160DyNRBoBLZ8MeVabieJDXbhAIzax5EDl/CstmOtafiGUXXy7ZtJ0O3MQKWQyGKYoXAQqhAygXI9q5lULDNyXQeEadZq61aLeBFLMZgDp66QPM0Bw3CM6l2YW7S+1dfb0RdM7eQ6cqH4tx8BGs4cZLR9o/buxzdum/hGg86qa3SLU9WzQXOIWM3ci8FchWDHW0t0WktsrNGaCLS+MAgGdCKX4osH527qmQQdfJkYaEb6jSsS14k6U+4Tx2F7rEL3lsbCYa2eRtty81Oh2puFIHNN2aTAcRVUjulR8+d2UwtwwACq/Ybw6gaE6iNgxwnES9q42pGZyZJ3GGufnNJmsIqd6b6tZ5Oo8bHmmQ+y8bzoOtLbvaG7KiyBbtoSQgAM5gVYuSJckGNeukUlNjaXY9HEV0cgsMrSAdSGUroTt7X40rz5gM0KqE93bWcqT0G5Y6STqflUbLi9PckWmjW0W8Jnc2yfScp2jTpUbnFBYBWyQ9znd0IT/h+f94+6ikR9Bz4gYdlu3yVuEfV2FHiGYRmuz7IAY+H2iRyojGgtN23DWnVUD9MqKkON0Y5dj151inckyxJJMknmT1o7hPFblhpQ6HRlOquOhU7ijKL7Fi49GnuY3I+JDnxW7Vu+nmzWRZ+H1iH3CkV5B9Qf/L2/kW/hQ/GscL103AMgKKmXoEAEenhHwq3FN4cPH9gnxzPR8EfZLih8aaad1bA8x3Y1/hXluiNP+1d4qZ7sx/VJ118I1oRTQ7Qegy7xBLaSdW5DTX+FZ+5j7rT42g8p0ijPoTXHJbwqNJ6jypqnBbRGgMxvJ/7UeUYgpsyjSTrqa8y044rwjuoIMqduoI60qKGrFJPaEcaIBq8FmrEt9ak0UbIoOtlRorhq3AxuW1nIJYxoFOhnrodqqw+Ha44VVZiT7Kgkn0Ardv2IxHdFmyWbKTo9zV555JkEwdaSc0lRdhxuT5X119xT2pwK2Lk2SWt6R5jKCDB99LEx113PdZmLgKLagkmIjwAHURpRePxLXQLSjMzZQgG7GYWB1Oat/wBkuAPh7ataxqBlecSmHVHeNYtm4AzFpmRoAJ05miL4xXLvovz405/I9dv6GP7K9iLuNuZO+S28nOvd3mZDOouZUyWz5MwPlWxT+Tuxhxca7dXDXkB7onEo/eGD/OWu58KkR4QSdYrRcY7RLJtYW4qodWI8Du59oEOAdxGmp/FXbjKRGg3PSfTQSTRlka7MkpJfpEfEOC3HAZ8Vh2OcMUFnEIjaATASc3uprb4mbV22ioLlrZVtEB1LQIyu3jEyeR1571Xj7yWkmSRyAE/ICglxJKgysHUFflrptSWmH4slsacK4jlx72LiZCUYKYjvO7fQeq5rg0pvirJBJrD4nDq795ncuNZZiYO4gT4dfuxHKmfDe0t36Wtu+UFq7CkkkBbn3gx0XNp4dBO0TrTlxNvlE04vUJ6ZpbN0gQ2o6Hz6V4WIUvyBAjnrqD6U/wARwzOoa2ATAVhOsqB845elLsZhSFUldSpBHUqdDodZEH1ms8otGmGRXoM4WZXbamDPAmRt1FZ3D3GQb6eVSucTABXn6cvh1qtJp6JPC5OxjiMZGxjX9ftob/aJ/RoL/aSSAwgc6v8ApVjp8/41LkifCiu0fm0GpLXtK7Nd84xMHSoAVxnrwPuoUEs30AknT41vOK4S1Zu3LuIIaWlLCnV453G+yvluflWHwuIZHV1gFTI0mCOcHSp4rGM5JYkk6kkyT76SSbeh00lsYca4295vEQFGioohEHRVFJnaTVq3l0lFJ6+L84qxMYB/VWj6hv3qKVdID32wexG5orJOnXT9GprxYD/5fDn1Q/vVzE8VzgDurNuP7NIn1Mkmi7JpBdvhlwWg+e1lzlJLrBYAErm9CD767jMM9rIzgAXUFxdQZQkrOm2qka9K4eIIcGtmfGMQ1wiNMrW1Qa7TKnSrsfxUMlhVCN3dgWzntqYYMzGCRqPF+NJsfRK/wi+jXVZADZKi4S6QhuiUk5oM+U+dLroKmJB/wsCPiNK0N/jltnxhBB7/ALrLnQkHu/azLGnlWfN9UcEFHjWGXwnyKtuKkW/YDSODzNdUUV/tOdfo+GHpbP71QONn+qtD0Vv3qJK+p6JGo16ijrN5L0B27q4qhVMeBgugBA9j1GnWhLVwfcX/AJv3q5dsgyYih2ROhnxDBsuWFkLatl4HsnLBkj03oRN9oqgX3gSxIAjUzpvFX4czvtS1SHu2GWOumvxo7DmdNqBtQBJmmOHtgjmDVTRYmLe0ZlV8ieXl/wB/hWccVseI4E3VgESDpqfQRHOs/juB311FssJ3WTtvoNtxT45KqBJPsVEj0onhfDbmIuZEHqek6e8nYDnQ9rCu5gAmNT5CYJPSvoHCeF3cPhg1hQ11vENdzET08MnQ0+SfFa7DjSlt9DXh4w3CVZXAfEFZgESDyDnWD/d2FZ/tB2vxGMMucqBYMGAfcPQUkxGEZWm80sdTqCdSZ1Gm5PxqnOrNGgRRmJ8hyLHqelLwXaJ8Xe/4HXZbhaPf7zE3DbwthO+uMNCVBhUBGsuSBpr+NfcOx+HwiYENgkKWrxa4A25lo+UQPKvjvYpVu4/DrcI7svncN7JFpGuDMDpErz619L7L9qMO9n6qLdoOUtoEYzJOSLaSfEyk6baVXzqSv8/Nljhyg2vv+3X+jCW8ewEEMYEkmeW5P7apvdow6soUW0sk7wWuPHicmJGkKFGgE7k1sOL4fCWWv2iwd2tG4Flcw7u4tzJEeHTLJDEkawI1+IYu8xLawGYsQNgTroOnIVIwttMzqCq2fUbDWbqt3Ai0ls3HuMsG4+kmNSAWKIoOp1PSs4wCw05yNSpGhHOJmD7zSnA41ye8c5Vy5UQTlA6xz9/5VC9fLazHQ1OGxVPj0PrePSIEARI8wf1FC4vEKwKkBlPIz7tiJrP2rpznUxHzmTHrV6YrqabjQras3P8AJ92yOGe/9LusbfcqVBzEFrWgykyQSmkGZgCRAr6XdxudDIUg7QOZEqRz5GvzzcvMQcvTmd4Omh38x0mvr3De0Fpzkt5R9RbYREKXzZRA2K5NujVV6lOk0aPTU27C8ZjGEECDm0PKOQ1mffTTClbgzXUVmjQiRPQAD2teVZziOKzroIVRGg0nqTG5J9daqucYusiDMFyDSNOXMzz9PxrMomxq0POL8HtkF7UqV1KRII02P2dzvv8Ail8P6H/tq/hOPc5y7lQ2m3tHXNvyAP4VZ9Bs/fu/6P4VGtjwk4qmz8/zVmGxDowdGZWGzKSCPQiqia7b3HrXZOIfWuwXaTE3cHjTdvO7JabuyTqjKmZWB35+h0msSO3nEOeJY+TKhHwK087HcTbusWhyBRh3gKiLqRqSVALGBz6Vje7XmKzwrlKy53S2bzguGs8Yw91Xt27ONtglL1pQi3SBOW6i6GQDDAAg/PJdmMDZuNdfEKe5tWy7kMVIOyKp2LMxAg8gTyrSdkP90w9zFN4QxhAd2AUwVHmxgdYNJcW4t20w5G7d9eEnVyPCPRR8yaCybcUHh1Jku1/Z1bF5Gw2ZsNeQPbZjqNhcRmAGqtPLYimPDODYO5hr982XDWdlF4nN4Sx+x0Xei+HXhisLcwYUBl+tseImLgBzKCfvrIjqooXgmKf6JilgDwEEZAPsENm0mQDzoOcnEKikyngfDMHibosmxeQkE5kuBiAozMSrIAQACd6p4XwGwcY+HukOgz5XUlZyCVMDqI05U47O4gXrVy0jrh75SAyrbVbnlcIWQp5kbEyQRsl4C123jDbuLluDNnzKC4IBkBiCRPUbzQUpfNvoZxWvxC7E8JDYq5ZsjKqMQSzEhVQwWc8h+2AN6r4q9jNFhGAH2mckt18Ow+fqad4Diqu9yxiArZ2ILAKpLA6SygazsevzTcZ4S1hhrmtt7LxufusPsuOnvGlPGdumJKFK0AA1quAcVbA27dwk5rzghZMJaU6tl2zMfLZfOs9wnCC7cAbRB4rh6Iu/vOw8zV2K4kly8Xu2y6+yqhyuVRoo0B5U0t6BDWx1274YqXVv2hFjEzcUDZLh1uoPKWzAdGHSqcPwa1asLiMUXOfW3aQgZlOxdyDlnoBtz6McBiUxWGuYQLkghrQLZsrqPDqdYYSh9R0qi+5xeFQJrdswDb+0VAynKOZETA86pU3SX8ljjTv+AC1j8MTrhSB/dv3MwHq4Kn4U14BgcNiMX3UXDaIlSXhxCgmSogmZ5Us4FhFe6tu5hy0ky03VKgCdQpgbbxTLs+UTHstpQFAYLBY6ZZmWJNNKVWl7CJXTKcQcOlx1+isYYj+kNrHOO7ovgWDw9+5cbJcVLdvN3KsGe44+yrsIAmTMaDlQ+PxV5mYNatzmOq4dQx13zATXMHYvKc9sMrgZoA8RU8435A/Oo2+NhVXRMY+xJnBQDppiLuf3Z1Kz/lonCPbz/VTkO2eJg7TGk+lGLxzGmNTcOgKFASY/xA1V9IDXXbwmDC5VQDYAxkAkTOutJyflFlL8sNTDiSI1mfjTa4qWrYuMdBqwAJgDWYGu3Sg8FfA5rJ9rrRPGSDh7oUgHu21LRlGUyZ123rNN26NONaE9sWnd71oAM7SVAE9PF0JH40k4xxlA2W1I53CpIDEaGBMaDmOhpXi+KXFHgueFpHIEwBOYb7MN6SFiRO36itOPDu2U5cmuKCMbjWJJLe18T5/KqMAgZ1B2nbrHWn/ZngNq6j3Lxc5I8I5yOtLsPh0DM3IfrSeWwq/mnaXgz/DapvyE3Lg1IMbjppqD8ZivonZniVq1w61dRUF0XTYcmYctLLm1gHLBDaEFBXzTX7Op/Pl616+l1VNm2zFbxWUj22Uyp9xY6+ZqmeLlqzTjzcHff09z7L2vsYW7w8m2WV1JRBoWF5gFOvNjm1edQ2Y7V8QxGCYMQZKgkZgDBKmCFJHiit1xOwcPhlRmDGypzHSGvXF1O2oUDKCfyrWdmcLh7vDrNp8tyFllKgrc5nI85S4JjcOI3oxnxSvyCePly+H0v52fJrFh7qOyjwWgC55AFgi+pJbbyPShrjV9K7Q8Pw/0b6JhciWzcRe8BZlZszM7EjMzAFWXxagARWBx3BLlrRirDkVJPxBAIpk0ZJY2hcW8UfD1qJJP68qtTCknY/rrHlVtwIrsGGgkDnPNdOehG9P9hOJA2z3RfMRBGk7g84/b5Gtx2HtMyqv0Y2wEzvd1Hfe0LcAjqzEx90Vi7OHuX2KWkLwuZo5KOp5k6D4ACvrnDMZeNkXTZNhAAEUzmEaAt90dBv1qn1EqVGr08d2EPjCUZDlAjaDr+RpL9IW1muMYC6yRMRvp1pkuLViTdkkxr+vKsV26x6q30dG13eOm6j9vwrPjhbo2SnxVg3GO1926x7vwDkx1eNh5Clf+1MR/4i5/q/jQOFjf4fxq7I3X5Vp4qOjO5yexJGlcrorhrWYB1geLNbtuiBALi5WaDmg7wZ0qzD8UKAZbVkRs3dqW/wBTSaT4Y1dmqp442y1ZHQzxHGL1xgzuxI2PIEbQNqHv4l3ILsWIEAk6wOVUA1E60FBLoLm32FWuIXVXKlxlWc0BiPENAdOYro4te1+uuakk+I6kiCT1kaUKqzuai1qNeVNSF5S9y5L7KQykhgZBG4NN3473qjvGa3dVcgvW9yn3WAIlemunppWeJoi23KNOdBwT2FZGtEcYxLkm4LhOubXX1zCZrpxt0gqbjkHcSYPqKhcTUxtUIpqQtsMscSZENtVTK3teHV+WpnlJgcpoKda6RXclSkS2GYPiT2s3d5ZbdiJMDUAE7ajlUb2Md37zRXO5QZZPMkDSTziqAkV4ClpB5MMucTvuuU3rjDmC7a+uutcwV11koxSRBgkSOkiqbS0RaWD61KROT9xjaxl2INy7PUO/51fYTOZLHMPtSZn1melDYdxoPgfTern8Pv5/rakaQ6lJ+Sy5iSRBZ2HRncj3gnWiMIS5Cg+mw2/AUqsXwx30mB/e8/SrTfIYhSAY0nSQd41Hrv1pWvBanqzY4bhpAnODpIAmSZgADc777VZxXChLFwX7i2oScpIL3BE5UExmO2u0zB54fEG8+gZt95A398x5Vbg8StgN3uR55sstMaBWOoA3ofCXZFma0KMRZDeILLfa3PmDGwqm6SokjU6VpcLgDiFzK6qvJSdz/hBknzY8tBrV2E7Ht3qi4/i1OUoWDLyIB02PmNvSrVS0I5XsP7HYQjDMzb3TIHQRAPqdTWRW2c7CIkkawco9BpPX5V9LwnHAjd2LR0BPiAVV2CyW0jTkB5VTdxuCe+D3CG4TJcMuUn7zpAJIHPffearjFxbb8jylaS9jA4ZXkjLIGpaDoPOBFbLshg7VoNirrePKRaBj/MRPMkj3etFdou162tBLg6KMzKum8Km/yFZHF8eOKuC3cYKhHgygqi3NMmYblSRB5+KaL6Al7Gj4jjku2HuXFUrYv2gwJ0uJdJDk6SdR7taNXtV9HW/wrGMVRJSziAJCqfFZLiNYBUzv161ixbxHcX8ObZXM1sXJWSCrEiGOwlhqN6v7T8Sa6uIN1fGHsohiCO6UjXqSjAGhxUnQ0bhGx1wZu/tOj31bEo8BUVbgdd1ZSSOpAYEwCARvCzDM2Ia6EVlK6kOChUaat4iBu2nl7qxtq4QZEgjmDB9xGtbbslxF7jN3rl2CZQWgkrmkgtuwE853NSceKbQYz+JJKQiwWHvYh2SwisRqZdNRMD2t/dXsFwgNfa1irq2SmhO+cjSFYnKPX5VvxwfDEhu4QH7yjLPX2YpZ2h4klvwI94KgEiywXIX9nPcYEkmdFHqaVZnJ1EjwKO5F2H7M4ZCr2bl5YWPA8B+clva1nlppTexihbXIJyxljU+epO+tZjsfxdWtvbdvEGJQs2pVtRqd4OnvppfczO37KomnypmiHHjaQ9tvbYQUUMD9nSR51gu3uCU4i2ymWdYYa+ELoGn0JHurVC8EcASQevnWN7ZsXvuS2XKi5eUggsfXXMKbDfIXKlwEqvlaYjeB+vKrfpQ6t8f40tFssJmY0HvqvuDWvijLyfgr1qMVYaiRVplPW3iiFoWrLb5dRUYUEsa5JrqGTNTe3ShPWnrt0z76mlho01B6Vy4tQhReSDUgOdXqoaJq8oqiRvUsJRZMaGqHtEHWpQd67cuE6VAHAInSq2aY0qYUmpi3UCQXWuipxQ+MbWKhD1zE/d+NVG+2+Y1WBVoSjQtluHxrLl5hTMH8/fWltX0vIQp5a9VkRWRuHlRfBMX3d5Wb2ZhvQ/lv7qEo2gxYWjBcwfRlEL5FdNPgKYHD98iuh1iOkkbU541wdHQssd5HhPJh0PX9lKOz1wCQdAT8GiIPw+VUOVq0aYaYovYi4pysTI5Sw/A0P3uY+Iemv701t76WiC1xA2USBG52A+dY7GXs1wsRudFGkDkPKnhPkLkxpbQTw7EG2fCSI6E/MU7wGKxLtnS4ymIzGdBzANZ19DNNk49kQZVGaI119/rR2wdIhxviVwnKdxu51Zj68h5fGk2HxjqxI3IgyOX6FHXrmbVjJO5oC6cpqRoFj/A9l799g94hUOszLEHoNh761uC7P4a0P5pSeRbxEfGquy/EDcs25+yMp33Gg+UE03xNzMOVYsuSTlxZuxY41Z844/xO81+5mvM0PAgmPAdIHLal+Nx7vbCNBhixcyWJIgyelWvhTcxGRdM9whfIE7+6mfang62WXJOQrp5Rodfn761JxjSKJcpcnZm1nrT/ALJ4lUu5nZVTKwMnrrP/AC/OkjCtFwSyrWXa0At9RClvtnfwZtAxUEZec6a6U8toojqVm7wF3vo7ki5yWD4RM7tGm2/lXOJcF7oAu1tmBL5ROrmZidzvE7eVA8G4mlu2bl5grtAgeFlZSQwiBKw1vT8IFLOP8ZVwwDTz02I6gToaoWOKVF8ssmxNj8rXC6WrgB9oZDo4Jk6aevmKpxj4i0ubKyLsNZgnaVnb1o/g3GWgqxnp19/qOflTq+Fu2yNCHGvv/KmlJwpNaJCKnbT2S4VihfVHUwRowO6kcvyrnGFtH+eyGNpA5n47isfw7GPhbxnWPC4+8NwRPPmPWmXabGC53b22BDAg9VgyZ6b0nCpaH5qUd9mfv3AJIEAuzD0nSgO9ojFXRMbwI0oGK1RRknOuixqkEJHlVT0SvsU7Kgc1wCumuiiAswzQYpi+opWvtD1pmu1Ix0W2bkCPLmNq5iGBHQ/jXE2PpXL/ACoEKIqbHrUTz/XKvXtl9RRISevZahe+z/iq2gEkBUgKim9T5UAkWAGppZebMxNHY/2feKATnToSR1F8quJAEioWa4fy/bRAUKNa6wr3M1NqgD6EuLzWkc7lVPxAms/xXDFGVgIDbkdT1ppb/o1v0T/pFe43/Rx6j8TWNOpG5xuIotYt9QCcp0IO6HffoaUXx4iZnzo7C+0/p+dA3eXpV6W7KW9cSxG0jrFVtprVh2H651LFb+79pooWSKLZ1qWI3rlrepXqnkA64bi7qWrdu0+UuSxJjwrmI6c4maZ4XHXkLK9zvFK6EGdTtH6/iks+1b/4P50bhft+tVygmXwnLklf5QTwHCBrwukyFkr5fZHyLGn/ABbDC9aynQjxA+YH7RSfsz7I9D/1Gnt72G/wn8Kz5X85oxJOH3PmjCjsDmtqLkyrNlCffj2pXpynqdKFTc/rpRp9iz/n/EVr8GLyWcY4o2ZUjwr4gTqfrFBPiOpGi78waAfEZgdOVT4ptb/wn8aFXlQSVILD+Fglgfl+E1pOBY+xbtut0sYY5YbUCehHlO9Z/g+7eh/6TQ6e03q1GStCwk0zQY3gwxl0th3SQsuGJBAGgIEeLeNOgrP4/hrq5VSCQIMfspr2c/nR/hP41bxPaz/iH4GlWh5u9iazwDMARdGv90yPdNFf/DA/tT/pH50Vifte6gaHOXuCKi/B/9k=" 
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">Doom: The Dark Ages</div>
          </div>
          
          <Link to={latestReview ? `/reviews/${latestReview._id}` : '#'} className="featured-game-card-link">
            <div className="featured-game-card">
              <div className="featured-label">Recently Added:</div>
              <img 
                src={latestReview && latestReview.imageUrls && latestReview.imageUrls.length > 0 
                  ? latestReview.imageUrls[0] 
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzw8H75F9xJrs2hUfSqNZstyQRrf_LfKwaT1OXOXEUilx6-1svA&s=10&ec=72940544"} 
                alt={latestReview ? latestReview.title : "Recently Added Game"} 
                className="featured-image" 
              />
              <div className="featured-title">{latestReview ? latestReview.title : "Loading..."}</div>
            </div>
          </Link>
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