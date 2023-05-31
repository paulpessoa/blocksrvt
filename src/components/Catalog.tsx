import axios from 'axios';
import './catalog.css';
import React, { useState, useEffect } from 'react';
import FamilyCard from './FamilyCard';
import CircularProgress from '@mui/material/CircularProgress';

const apiUrl = process.env.REACT_APP_API_URL;

interface Family {
  id: string;
  premium: boolean;
  details: {
    name: string;
    description: string;
  };
}

const Catalog: React.FC = () => {
  const [families, setFamilies] = useState<Family[]>([]);
  const [skip, setSkip] = useState(0);
  const take = 21;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${apiUrl}families?skip=${skip}&take=${take}`
        );
        setFamilies((prevFamilies) => [...prevFamilies, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching families:', error);
      }
    };

    fetchFamilies();
  }, [skip, take]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
      !loading
    ) {
      setSkip((prevSkip) => prevSkip + take);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Catálogo</h1>
          <div className="page-line"></div>
        </div>
      </div>

      <div className="container">
        <h1 className="page-subtitle">Resultados</h1>
      </div>
      <div className="catalog">
        {families.map((family) => (
          <FamilyCard
            id={family.id}
            key={family.id}
            premium={family.premium}
            name={family.details.name}
            description={family.details.description}
            onClick={() => console.log('oi')}
          />
        ))}
      </div>
      {loading && (
        <div className="loading">
          <CircularProgress size={30}/>
          <span className='loading-text'>Loading</span>
        </div>
      )}
    </div>
  );
};

export default Catalog;
