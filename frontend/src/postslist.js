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
        this.state = { posts: []}
    }

    componentDidMount() {
        const apiURL = "http://localhost:4000/tutor/";

        fetch(apiURL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => this.setState( {posts: data }))
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
        .then(data => console.log('Success:', data))
        .catch(err => console.error('Error:', err));
    }
    handleDislike = (event) => { 
        const id = event.target.id;
        const apiURL = "http://localhost:4000/tutor/dislike/" + id;
        fetch(apiURL, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
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
                        return <div className='tutorPost'>
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
                                        <p>Likes: {postDetail.likes}</p>
                                        <p>Dislikes: {postDetail.dislikes}</p>
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