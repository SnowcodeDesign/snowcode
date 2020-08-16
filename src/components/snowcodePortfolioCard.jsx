import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 195,
    marginRight: 10,
    marginTop: 10,
    display: 'inline-block'
  },
  media: {
    height: 140,
  },
});

export default function SnowcodePortfolioCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ item.image }
          title={ item.title }
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            { item.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
            { item.subtitle }

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
