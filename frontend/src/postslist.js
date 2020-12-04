import React, {Component} from 'react'


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

class PostList extends Component{
    constructor(props){
        super(props);
        // TO DO: FIND A WAY TO POPULATE THIS LIST FROM THE BACKEND. SAMPLE DATA IS HERE
        this.posts =
        [
            {
                "FirstName": "Lance",
                "LastName":"Ding",
                "Email":"lanceding2001@gmail.com",
                "Phone":"949-355-1311",
                "Subjects": "Math",
                "Drive": true,
                "Availability":"All day Everyday",
                "Likes": 2,
                "Dislikes":0
            },
            {
                "FirstName": "Donald",
                "LastName":"Trump",
                "Email":"itsHUGE@gmail.com",
                "Confirm Email":"itsHuge@gmail.com",
                "Phone":"949-355-1311",
                "Subjects": "History",
                "Drive": false,
                "Availability":"Thursdays 3-5pm",
                "Likes": 0,
                "Dislikes":1
            }
        ]
    }
    //TODO FINISH THESE FUNCTIONS, increment the number of Likes and Dislikes 
    handleLike = (event) => { }
    handleDislike = (event) => { }

    //TODO: Need to  STYLE
    render(){
        return(
            <div>
                <h1> Tutors</h1>
                <br></br>
                <br></br>
                    {this.posts.map((postDetail)=>{
                        return <div className='tutorPost'>
                                    <div className='tutorName'>
                                        <h2>{postDetail.FirstName} {postDetail.LastName}</h2>
                                    </div>
                                    <div className='contactInfo'>
                                        <p>Phone: {postDetail.Phone} Email: {postDetail.Email}</p>
                                    </div>
                                    <div className='generalInfo'>
                                        <p>Subjects: {postDetail.Subjects}</p>
                                        <p>In Person: {postDetail.Drive}</p>
                                    </div>
                                    <div className='feedback'>
                                        <p>Likes: {postDetail.Likes}</p>
                                        <p>Dislikes: {postDetail.Dislikes}</p>
                                        <button onSubmit={this.handleLike}>Like</button>
                                        <button onSubmit={this.handleDislike}>Dislike</button>
                                    </div>
                                    <br></br>
                                    <br></br>
                               </div>
                    })}
            </div>
        )
    } 
}

export default PostList