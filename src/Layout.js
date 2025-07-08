import './Layout.css';
import Card from './Card';

const Layout = () => {
  return (
    <div className="card-container">
      <div className="card-top">
        <Card 
          className="card card-one" 
          />
        <Card 
          className="card card-two" 
          />
      </div>
      <div className="card-middle">
        <Card 
          className="card card-three" 
        />
        <Card 
          className="card card-four" 
        />
        <Card 
          className="card card-five" 
        />
      </div>
      <div className="card-bottom">
        <Card 
          className="card card-six" 
        />
        <Card 
          className="card card-seven" 
        />
      </div>
    </div>
  )
};

export default Layout;