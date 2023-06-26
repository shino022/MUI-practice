import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  spacer: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    // maxWidth: 400,
    //  minWidth: 275
  },
  bullet: {},
  title: {},
  pos: {},
}));

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: { target: { name: any; checked: any } }) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My React app
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.spacer} />

        <Grid container spacing={5} direction={"column"}>
          <Grid item xs={12}>
            <Typography variant="h4">
              React material UI is{" "}
              <span role="img" aria-label="heart emoji">
                ❤️
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="primary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="secondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.container}>
              <Button>Default</Button>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Secondary"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
