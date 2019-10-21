import React, {useState, useEffect, useRef, Component} from 'react';
import '../styles/Title.css'
const TITLES = [
  'I am a graduate from Red River BIT program',
  'I am an enthusiastic learner',
  'I built this website using React.js',
  'I love to cook!',

];

class Title extends Component {
  state = {titleIndex: 0, fadeIn: true}

  componentDidMount(){
    this.setTimeout = setTimeout(()=> this.setState({ fadeIn:false }), 2000);
    this.animateTitles();
  }

  animateTitles = () => {
   this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({titleIndex, fadeIn:true});
      this.setTimeout = setTimeout(()=> this.setState({ fadeIn:false }), 2000);

    }, 4000)
  }

  componentWillUnmount = () => {
    clearInterval(this.titleInterval);
    clearTimeout(this.setTimeout);
  }
  render() {

    const {fadeIn, titleIndex} = this.state
    const title = TITLES[titleIndex]


    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
    )
  }
}

export default Title;

