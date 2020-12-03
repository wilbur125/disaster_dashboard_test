import React from 'react';

// const SEARCH_KEY = 'cute puppy kitten';

class RandomGif extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageSrc: '',
      keyword: 'cute puppies',
      apiKey: `${process.env.REACT_APP_PUPPIES}`,
    }

    //process.env.REACT_APP_PUPPIES
    this.loadImage = this.loadImage.bind(this);
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
    let url = `https://api.giphy.com/v1/gifs/random?tag=${this.state.keyword}&api_key=${this.state.apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({ imageSrc: res.data.image_url}))
      .catch((res) => {
        console.log('ERROR: No image from API!');
      });
  }

  render() {
    return(
      <div className='card-item-puppies'>
          <h1>{`Random ${this.state.keyword} image`}</h1>
          <button onClick={this.loadImage} className='btn-loading'>woof!</button>
          <img src={this.state.imageSrc}alt="Random Puppy Gif"
            style={{width: "100%", maxHeight:"auto"}}/>

      </div>
    );
  }
}

// ReactDOM.render(<RandomGif apiKey="afea92ac6eff442ba6fca79368717d0d" keyword={SEARCH_KEY} />, document.getElementById('card'));

export default RandomGif;
