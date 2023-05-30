import axios from 'axios';
import './catalog.css'
import React, { useState, useEffect } from 'react';
import FamilyCard from './FamilyCard';
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
    const skip = 0;
    const take = 21;

    useEffect(() => {
        const fetchFamilies = async () => {
            try {
                const response = await axios.get(
                    apiUrl + `families?skip=${skip}&take=${take}`
                );
                setFamilies((prevFamilies) => [...prevFamilies, ...response.data]);
            } catch (error) {
                console.log('Error fetching families:', error);
            }
        };

        fetchFamilies();
    }, [skip, take]);

    return (
        <div className='page'>
            <div className='page-header'>
                <div className='container'>
                    <h1 className='page-title'>Catálogo</h1>
                    <div className='page-line'></div>
                </div>
            </div>

            <div className='container'>
                <h1 className='page-subtitle'>Resultados</h1>
            </div>
            <div className='catalog'>
                {families.map((family) => (
                    <FamilyCard
                        id={family.id}
                        key={family.id}
                        premium={family.premium}
                        name={family.details.name}
                        description={family.details.description}
                        onClick={() => console.log("oi")}
                    />
                ))}
            </div>
        </div>
    )
}
export default Catalog;