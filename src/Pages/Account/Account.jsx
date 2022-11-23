import React, { useEffect, useState } from 'react';
import { useDataProvider, Title } from 'react-admin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArticleIcon from '@mui/icons-material/Article';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FactoryIcon from '@mui/icons-material/Factory';
import PersonIcon from '@mui/icons-material/Person';
import { GiPig } from "react-icons/gi";
import { Card, Grid, Divider, ListItem, CardContent, ListItemIcon, ListItemText, Typography } from '@mui/material';
const initial_accont = {
  email: "",
  first_name: "",
  id: "",
  is_active: false,
  last_name: "",
  number_of_companies: 0,
  number_of_loadings: 0,
  role: "",
  total_deviation: 0,
  total_duration_in_hours: 0,
  total_gta: 0,
  total_pigs: 0,
  username: "",
}

function Account() {
  const [account, setAccount] = useState(initial_accont);
  const [secondary, setSecondary] = React.useState(true);

  const dataProvider = useDataProvider();

  useEffect(() => {
    const promise = dataProvider.getAccount('account');
    promise.then(response => response.json).then(account => setAccount(account));

    console.log(account);
  }, []);


  return (
    <div className="account">
      <Title title="Account Details" />

      <Card>
        <CardContent>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
            Account Details
          </Typography>
          <Divider />
          <Grid container spacing={3}>
            <ListItem sx={{ mt: 4 }}>
              <ListItemIcon>
              <PersonIcon/>
              </ListItemIcon>
              <ListItemText
                primary={account.username}
                secondary={secondary ? 'Username' : null}
              />
            </ListItem>
            <ListItem  divider>
              <ListItemIcon>
              <PersonIcon/>
              </ListItemIcon>
              <ListItemText
                primary={account.email}
                secondary={secondary ? 'E-mail' : null}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <FactoryIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${account.number_of_companies} companies`}
                secondary={secondary ? 'Number of companies user has access' : null}
              />
            </ListItem>
            <ListItem >
              <ListItemIcon>
              <GiPig style={{fontSize: '2rem'}}/>
              </ListItemIcon>
              <ListItemText
                primary={`${account.number_of_loadings} loadings`}
                secondary={secondary ? 'Number of loadings successfully executed by the Compig' : null}
              />
            </ListItem>
            <ListItem >
              <ListItemIcon>
              <ArticleIcon/>
              </ListItemIcon>
              <ListItemText
                primary={`${account.total_gta} swines`}
                secondary={secondary ? 'Number total of swines counted using the GTA' : null}
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
              <AnalyticsIcon/>
              </ListItemIcon>
              <ListItemText
                primary={`${account.total_deviation} swines`}
                secondary={secondary ? 'Total number of discrepancies found between the Coping and the GTA' : null}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${account.total_duration_in_hours} hours`}
                secondary={secondary ? 'Total hours consumed while counting' : null}
              />
            </ListItem>


          </Grid>
        </CardContent>

      </Card>
    </div>
  )
}

export default Account