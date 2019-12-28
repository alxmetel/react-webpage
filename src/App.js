import React, { Component } from 'react';
import style from './App.less';
import Card from './containers/Card/Card';
import logo from './assets/logos/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoLink: "https://www.acuityads.com/",
      pageTitle: "Our Team",
      pageDescription: "Aenean efficitur ac nulla eget cursus. Morbi eget sem id lectus sollicitudin pharetra vitae vel lectus. Fusce placerat mollis malesuada. Cras nisl diam, posuere sit amet magna eu, dictum consequat ante. Mauris blandit enim velit, sodales luctus nunc facilisis eu. Sed ligula tellus, condimentum vel urna vel, faucibus pretium ante. Vivamus mollis commodo nisl nec tempus.",
      footerCopyrightText: "© 2019 AcuityAds. All rights reserved.",
      team: [
        {
          id: 1,
          firstName: "Elizabeth",
          middleName: "J.",
          lastName: "Koch",
          position: "Retail Salesperson",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque pulvinar metus, non consectetur diam malesuada eget. Nam orci ipsum, dapibus ac odio eget, sodales bibendum leo.",
          readMoreInfo: "Link to the detailed page about Elizabeth J. Koch",
          photo: "photo_person_1.png"
        },
        {
          id: 2,
          firstName: "Thomas",
          middleName: "K.",
          lastName: "Brown",
          position: "Revenue Agent",
          description: "Nunc id urna dapibus lorem dapibus sagittis sit amet nec ligula. Sed ut aliquam metus. Sed sapien tellus, maximus quis egestas eu, luctus vulputate dolor.",
          readMoreInfo: "Link to the detailed page about Thomas K. Brown",
          photo: "photo_person_2.png"
        },
        {
          id: 3,
          firstName: "Osamu",
          middleName: "K.",
          lastName: "Clayton",
          position: "Electrical Inspector",
          description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pellentesque malesuada dolor, non euismod sapien tincidunt sed. Sed lorem arcu, ornare vitae neque quis, rutrum efficitur odio.",
          readMoreInfo: "Link to the detailed page about Osamu K. Clayton",
          photo: "photo_person_3.png"
        },
        {
          id: 4,
          firstName: "Nicole",
          middleName: "L.",
          lastName: "Coble",
          position: "Workforce Development Specialist",
          description: "Etiam tristique tortor sed euismod gravida. Etiam vel ligula consequat, ultricies magna id, ornare orci. Fusce ultricies maximus porta. Integer ac lorem a felis accumsan mattis ut ac tellus. Etiam non pulvinar metus. Pellentesque imperdiet nulla in finibus elementum.",
          readMoreInfo: "Link to the detailed page about Nicole L. Coble",
          photo: "photo_person_4.png"
        }
      ]
    }
  }

  render() {

    return (
      <div className={style.App}>

        <header>
          <a href={this.state.logoLink} title="AcuityAds">
            <img className={style.logo} src={logo} alt="AcuityAds Logo" />
          </a>
          <div className={style.divider}></div>
        </header>

        <main>
          <h1 className={style.pageTitle}>{this.state.pageTitle}</h1>
          <p className={style.pageDescription}>{this.state.pageDescription}</p>

          <div className={style.cardsContainer}>
            {this.state.team.map(contentObj => {
              return (
                <Card
                  cardContent={contentObj}
                  key={contentObj.id}
                />
              );
            })}
          </div>
        </main>

        <footer>
          <div className={style.copyrightText}>{this.state.footerCopyrightText}</div>
        </footer>
        
      </div>
    );
  }
}

export default App;
