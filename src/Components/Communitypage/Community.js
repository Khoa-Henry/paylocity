import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import  Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Avatar} from '@material-ui/core';
import Mansuit from './Images/mansuit.jpg';
import Mansuit2 from './Images/mansuit2.jpg';
import Girlpic from './Images/girlpic.jpg';
import Girlpic2 from './Images/girlpic2.jpg';
import {Input, TextField, MenuItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//testing push to master
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
// import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Modal, Button} from 'react-bootstrap'
import moment from 'moment';
import Person from '../Dashboardpage/person.jpg';





const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url
    ('https://www.vectorstock.com/royalty-free-vector/people-holding-hands-around-globe-earth-vector-4659255')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-reapeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize:"4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  newsfeedContainer: {
    paddingTop: theme.spacing(3)
  },
  newsfeedTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  CardActions: {
    display: "flex",
    margin: "0 10ox",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  bottombar: {
    top: 'auto',
    bottom: 0,
    color:"#1588afff"
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function App(props) {
  const [show, setShow] = React.useState(false);
  const [err, setErr] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [pic, setPic] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classes = useStyles();
  const picButton= ()=>{
    setErr('Something went wrong :(')
  }
  const post = ()=>{
    let newObj = {
      category: category,
      description: description,
      // firstName: props.currentUser.firstName,
      // lastName: props.currentUser.lastName,
      date: moment(new Date()).format('LL'),
      urlPic: pic
    }
    let newArray = [...props.post]
    newArray.unshift(newObj)
    props.setPost(newArray)
    setDescription('')
    setCategory('')
    setPic('')
    setShow(false)
  }

  return (
    <div className="App">
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Link to='/dashboard'>
              <Typography variant="h6" color="primary">
              Back
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box> Pay Lots of News</Box>
        </Box>
        <Container maxWidth="lg" className={classes.newsfeedContainer}>
        <Typography variant="h4" className={classes.newsfeedTitle}>
          What's The News?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          {props.post.map(postItem =>

          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
           <Card className={classes.Card}>
           <CardActions className={classes.CardActions}>
           <Box className={classes.author}>
             <Avatar 
             src={Person}/>
               <Box ml={2}></Box>
               {props.currentUser.map(item=><Typography variant="subtitle2" component="p">
                 {item.firstName} {item.lastName}
                 <Typography variant="subtitle2" color="textSecondary" component="p">
                   {postItem.date}
                 </Typography>
               </Typography> 
               )}   
           </Box><i className="heart outline icon"></i>
           </CardActions>
           <CardActionArea>
             {/* Insert profile bar */}
             <CardMedia
               className={classes.media}
               image={postItem.urlPic}
               title="Good news"/>
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {postItem.category}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
               {postItem.description}
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions className={classes.CardActions}>
           {/* //The box element is the profile bar replace this with engagemnet bar add like share and comment icons */}
               <Input placeholder="Comment" fullWidth
                 id="input-with-icon-adornment"
                 startAdornment={
                   <InputAdornment position="start">
                     <AccountCircle />
                   </InputAdornment>
                 }
               /> 
           </CardActions>
         </Card>
         </Grid>
         </Grid>
        )}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.Card}>
        <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
          <Avatar 
          src="https://images.unsplash.com/photo-1559418068-807707964448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            <Box ml={2}></Box>
            <Typography variant="subtitle2" component="p">
              Christopher Higgins
              <Typography variant="subtitle2" color="textSecondary" component="p">
                October 14, 2020
              </Typography>
            </Typography>    
        </Box><i className="heart outline icon"></i>
        </CardActions>
        <CardActionArea>
          {/* Insert profile bar */}
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1504465188792-96c4e8752e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
            title="Good news"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Annoucements
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ATTENTION TO ALL EMPLOYEES: All employees MUST attend mandortory safety meeting on October 13, 2020 at 1:30pm!!!!! Please be on time!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
        {/* //The box element is the profile bar replace this with engagemnet bar add like share and comment icons */}
            <Input placeholder="Comment" fullWidth
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            /> 
        </CardActions>
      </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.Card}>
        <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
            <Avatar 
            Image src="https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            <Box ml={2}></Box>
            <Typography variant="subtitle2" component="p">
              Kyle Smith
              <Typography variant="subtitle2" color="textSecondary" component="p">
              October 14, 2020
              </Typography>
            </Typography>
        </Box><i className="heart outline icon"></i>
        </CardActions>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1533299150403-a196e9ae00ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
            title="Pineapple"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Shout Outs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            We would like to give a BIG SHOUTOUT to Megan for best attendance this year!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
          <Input placeholder="Comment" fullWidth
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              /> 
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.Card}>
        <CardActions className={classes.CardActions}>  
        <Box className={classes.author}>
            <Avatar 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
            <Box ml={2}></Box>
            <Typography variant="subtitle2" component="p">
              Maria Sanchaez
              <Typography variant="subtitle2" color="textSecondary" component="p">
              October 14, 2020
            </Typography>
            </Typography>
        </Box><i className="heart outline icon"></i>
        </CardActions>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="Pineapple"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Celebrate
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
        <Input placeholder="Comment" fullWidth
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            /> 
        </CardActions>
      </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.Card}>
        <CardActions className={classes.CardActions}>  
        <Box className={classes.author}>
            <Avatar 
            src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            <Box ml={2}></Box>
            <Typography variant="subtitle2" component="p">
              Cheryl Morris
              <Typography variant="subtitle2" color="textSecondary" component="p">
                October 20, 2020
              </Typography>
            </Typography>
        </Box> <i className="heart outline icon"></i>
        </CardActions>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1589394434125-8ae8b2b3d853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            title="Covid-19"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              COVID-19 Updates
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Covid cases continue to skyrocket as the summer comes to an end. More than 2,000
              people have tested positive for Covid-19. What does the winter bring, some say that cases will continue to rise throughout the winter season.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
              <Box>
              <Input placeholder="Comment" fullWidth
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            /> 
        </Box>
        <Box>
          {/* <BookmarkBorderIcon/> */}
        </Box>
        </CardActions>
      </Card>
            </Grid>
            </Grid>
            <AppBar position="fixed"  className={classes.bottombar}>
              <Toolbar>
                <IconButton edge="start" color="white" aria-label="open drawer">
                  <MenuIcon />
                </IconButton>
                <Fab color="white" aria-label="add" className={classes.fabButton}>
                  <AddIcon onClick={handleShow}/>
                </Fab>
                <div className={classes.grow} />
                {/* <IconButton color="white">
                  <SearchIcon />
                </IconButton> */}
                <IconButton edge="end" color="white">
                  <MoreIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            {props.currentUser.map(item=><Modal.Title>What's on your mind, {item.firstName}?</Modal.Title>)}
        </Modal.Header>
        <Modal.Body>
          <TextField
            id="standard-multiline-flexible"
            label="Category"
            multiline
            fullWidth
            select
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
          >
            <MenuItem value="Annoucements">Annoucements</MenuItem>
            <MenuItem value="Celebrate">Celebrate</MenuItem>
            <MenuItem value="ShoutOuts">ShoutOuts</MenuItem>
            <MenuItem value="Memes">Memes</MenuItem>
            <MenuItem value="Covid-19 Updates">Covid-19 Updates</MenuItem>
          </TextField>
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            fullWidth
            rows={4}
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
          />
          <div style={{paddingTop:'10%'}}>
          <Button onClick={()=>picButton()}>Choose a picture</Button>
          {err && <h5 style={{color: 'red'}}>{err}</h5>}
          <div className="ui horizontal divider">Or</div>
          <TextField 
            label="Url for Picture"
            fullWidth
            onChange={(e)=>setPic(e.target.value)}
            value={pic}
          />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={post}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
