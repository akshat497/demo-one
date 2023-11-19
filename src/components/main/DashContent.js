import React from 'react'

export default function DashContent() {
  return (
<div className="home-content">
  <div className="overview-boxes">
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Total Order</div>
        <div className="number">40,876</div>
        <div className="indicator">
          <i className="bx bx-up-arrow-alt" />
          <span className="text">Up from yesterday</span>
        </div>
      </div>
      <i className="bx bx-cart-alt cart" />
    </div>
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Total Sales</div>
        <div className="number">38,876</div>
        <div className="indicator">
          <i className="bx bx-up-arrow-alt" />
          <span className="text">Up from yesterday</span>
        </div>
      </div>
      <i className="bx bxs-cart-add cart two" />
    </div>
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Total Profit</div>
        <div className="number">$12,876</div>
        <div className="indicator">
          <i className="bx bx-up-arrow-alt" />
          <span className="text">Up from yesterday</span>
        </div>
      </div>
      <i className="bx bx-cart cart three" />
    </div>
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Total Return</div>
        <div className="number">11,086</div>
        <div className="indicator">
          <i className="bx bx-down-arrow-alt down" />
          <span className="text">Down From Today</span>
        </div>
      </div>
      <i className="bx bxs-cart-download cart four" />
    </div>
  </div>
  <div className="sales-boxes">
    <div className="recent-sales box">
      <div className="title">
        <div><h1>History</h1></div>
        <div><i className="bx bx-grid-alt" />
          <i className="bx bx-plus-circle" />
          <span className="links_name">Dashboard</span></div>
      </div>
      <div className="sales-details">
        <ul className="details">
          <li className="topic">Time</li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
        </ul>
        <ul className="details">
          <li className="topic">Discription</li>
          <li><a href="#">Alex Doe</a></li>
          <li><a href="#">David Mart</a></li>
          <li><a href="#">Roe Parter</a></li>
          <li><a href="#">Diana Penty</a></li>
          <li><a href="#">Martin Paw</a></li>
          <li><a href="#">Doe Alex</a></li>
          <li><a href="#">Aiana Lexa</a></li>
          <li><a href="#">Rexel Mags</a></li>
          <li><a href="#">Tiana Loths</a></li>
        </ul>
        <ul className="details">
          <li className="topic">Sales</li>
          <li><a href="#">Delivered</a></li>
          <li><a href="#">Pending</a></li>
          <li><a href="#">Returned</a></li>
          <li><a href="#">Delivered</a></li>
          <li><a href="#">Pending</a></li>
          <li><a href="#">Returned</a></li>
          <li><a href="#">Delivered</a></li>
          <li><a href="#">Pending</a></li>
          <li><a href="#">Delivered</a></li>
        </ul>
        <ul className="details">
          <li className="topic">Total</li>
          <li><a href="#">$204.98</a></li>
          <li><a href="#">$24.55</a></li>
          <li><a href="#">$25.88</a></li>
          <li><a href="#">$170.66</a></li>
          <li><a href="#">$56.56</a></li>
          <li><a href="#">$44.95</a></li>
          <li><a href="#">$67.33</a></li>
          <li><a href="#">$23.53</a></li>
          <li><a href="#">$46.52</a></li>
        </ul>
        <ul className="details">
          <li className="topic">Total</li>
          <li><a href="#">$204.98</a></li>
          <li><a href="#">$24.55</a></li>
          <li><a href="#">$25.88</a></li>
          <li><a href="#">$170.66</a></li>
          <li><a href="#">$56.56</a></li>
          <li><a href="#">$44.95</a></li>
          <li><a href="#">$67.33</a></li>
          <li><a href="#">$23.53</a></li>
          <li><a href="#">$46.52</a></li>
        </ul>
        <ul className="details">
          <li className="topic">Total</li>
          <li><a href="#">$204.98</a></li>
          <li><a href="#">$24.55</a></li>
          <li><a href="#">$25.88</a></li>
          <li><a href="#">$170.66</a></li>
          <li><a href="#">$56.56</a></li>
          <li><a href="#">$44.95</a></li>
          <li><a href="#">$67.33</a></li>
          <li><a href="#">$23.53</a></li>
          <li><a href="#">$46.52</a></li>
        </ul>
      </div>
      <div className="button">
        <a href="#">See All</a>
      </div>
    </div>
  </div>
</div>

  )
}
