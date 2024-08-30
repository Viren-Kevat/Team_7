import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const minicard = ({ symb, h5, p }) => {
    return (
        <Card sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center', 
            height: { xs: 'auto', sm: '8rem' }, // Responsive height
            margin: { xs: '0.5rem', sm: '2rem' } // Responsive margin
        }}>
            <CardMedia
                component="div"
                sx={{ 
                    width: { xs: '22%', sm: 151 }, // Responsive width
                    height: {  sm: 'auto' }, // Responsive height
                }}
            >
                {symb}
            </CardMedia>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                padding: '1rem', 
                flex: 1
            }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" sx={{ color: "#fff", fontSize: { xs: '1rem', sm: 'inherit' } }}>
                        <h5>{h5}</h5>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ 
                        color: "#fff", 
                        padding: "0 0 0.2rem 0",
                        fontSize: { xs: '0.875rem', sm: 'inherit' } // Responsive font size
                    }}>
                        <span>{p}</span>
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default minicard;
