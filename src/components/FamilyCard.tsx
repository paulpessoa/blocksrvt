import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import './family-card.css'

interface FamilyCardProps {
    premium: boolean;
    name: string;
    description: string;
    onClick: () => void;
    id: string;
}

const FamilyCard: React.FC<FamilyCardProps> = ({ premium, name, description, id, onClick }) => {
    const imageUrl = process.env.REACT_APP_IMAGE_SOURCE_URL + `${id}.jpg`;

    return (
        <Card className="card" variant="outlined">
            <CardContent className="card-content">
                {/* {premium && <span className="premium-tag">Premium</span>} */}
                <img className='card-image' src={imageUrl && imageUrl.includes('undefined') ? '/img/default.jpg' : imageUrl} alt={name} />
            </CardContent>
            <CardActions className="card-actions">
                <text className="card-text">
                    {description.length > 40 ? `${description.substring(0, 40)}...` : description}
                </text>
                <Divider className='card-divider' orientation="vertical" flexItem />
                <img src="/icons/arrow-outward.svg" alt={name} />
            </CardActions>
        </Card>
    );
};

export default FamilyCard;