import React from 'react';


//MAY USE THIS

class General extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: null,};
    }
    
    render() {
      return (
        <div>
          <p className="general1">
            {this.props.text} {" "} 
          </p>
          <p className="general2">
             * {""}
          </p>
        </div>
      );
    }
  }

class PostList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            posts: [],
            likes: {},
            dislikes: {},
        }
    }

    componentDidMount() {
        const apiURL = "http://localhost:4000/tutor/";

        fetch(apiURL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            let likes = {};
            let dislikes = {};
            data.forEach(element => {
                likes[element._id] = element.likes
            });
            data.forEach(element => {
                dislikes[element._id] = element.dislikes
            });
            this.setState({
                posts: data,
                likes: likes,
                dislikes: dislikes,
            });
        })
        .catch(err => console.error('Error', err));
    }

    //TODO FINISH THESE FUNCTIONS, increment the number of Likes and Dislikes 
    handleLike = (event) => { 
        const id = event.target.id;
        const apiURL = "http://localhost:4000/tutor/like/" + id;
        fetch(apiURL, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            let likes = this.state.likes;
            likes[id]++;
            this.setState({ likes: likes });
        })
        .catch(err => console.error('Error:', err));
    }
    handleDislike = (event) => { 
        const id = event.target.id;
        const apiURL = "http://localhost:4000/tutor/dislike/" + id;
        fetch(apiURL, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            let dislikes = this.state.dislikes;
            dislikes[id]++;
            this.setState({ dislikes: dislikes });
        })
        .catch(err => console.error('Error:', err));
    }

    //TODO: Need to  STYLE
    render(){
        return(
            <div>
                <h1> Tutors</h1>
                <br></br>
                <br></br>
                    {this.state.posts.map((postDetail)=>{
                        return <div className='tutorPost' key={postDetail._id}>
                                    <div className='tutorName'>
                                        <h2>{postDetail.firstName} {postDetail.lastName}</h2>
                                    </div>
                                    <div className='contactInfo'>
                                        <p>Phone: {postDetail.phone} Email: {postDetail.email}</p>
                                    </div>
                                    <div className='generalInfo'>
                                        <p>Subjects: {postDetail.subjects}</p>
                                        <p>In Person: {postDetail.canDrive ? "Yes": "No"}</p>
                                    </div>
                                    <div className='feedback'>
                                        <p>Likes: {this.state.likes[postDetail._id]}</p>
                                        <p>Dislikes: {this.state.dislikes[postDetail._id]}</p>
                                        <button onClick={this.handleLike} id={postDetail._id}>Like</button>
                                        <button onClick={this.handleDislike} id={postDetail._id}>Dislike</button>
                                    </div>
                                    <br></br>
                                    <br></br>
                               </div>
                    })}
            </div>
        )
    } 
}

export default PostList;