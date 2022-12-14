import {createElement, React } from 'react';
import { Card, Box, Typography, Divider } from '@mui/material';
import { Link} from 'react-router-dom';
import cartouche from './cartouche.png';
import cartoucheDark from './cartoucheDark.png';

function CardWithIcon({ icon, to, title, subtitle, children, iconKlass }) {
    return (
        <Card
            sx={{
                minHeight: 52,
                display: 'flex',
                flexDirection: 'column',
                flex: '1',
                '& a': {
                    textDecoration: 'none',
                    color: 'inherit',
                },
            }}
        >
            <Link to={to}>
                <Box
                    sx={{
                        overflow: 'inherit',
                        padding: '1rem',
                        background: theme =>
                            `url(${theme.palette.mode === 'dark'
                                ? cartoucheDark
                                : cartouche
                            }) no-repeat`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        '& .icon': {
                            color: theme =>
                                theme.palette.mode === 'dark'
                                    ? 'inherit'
                                    : '#dc2440',
                        },
                    }}
                >
                    <Box width="3em" className={"icon"}>
                        {createElement(icon, { fontSize: 'large', className: `${iconKlass?iconKlass:''}`})}
                    </Box>
                    <Box textAlign="right">
                        <Typography color="textSecondary">{title}</Typography>
                        <Typography variant="h5" component="h2">
                            {subtitle  }
                        </Typography>
                    </Box>
                </Box>

            </Link>
            {children && <Divider />}
            {children}
        </Card>
    )
}

export default CardWithIcon