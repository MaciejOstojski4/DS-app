import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

interface IActivableProps {
  isActive: boolean;
}

export const ItemLink = styled(Link)<IActivableProps>(({ theme: { palette }, isActive }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 15px 0',

  '& > svg': {
    color: isActive ? palette.cyan[900] : palette.grey[900],
    fontSize: '12px',
    margin: '0 12px 0 0',
  }
}));

export const Label = styled(Typography)<IActivableProps>(({ theme: { palette }, isActive }) => ({
  color: isActive ? palette.cyan[900] : palette.grey[900],
  fontWeight: '500'
}));
