import React from 'react';
import './App.css';
import Pie from './Components/Pie'  

function App() {

  return (

<div className="App">

<div class="row">

<div class="_chk-10 section-left">

<h1>Statistics</h1>

{/* <svg class="underline" height="5" >
<g fill="none" stroke="#E2E0E0" stroke-width="1.3">
<path stroke-dasharray="1.9" d="M1 2 l9915 0" />
</g>
</svg> */}

<div class="line-chart">

<ul class="nav-list up-nav">
<div class="site-title">Web Site</div>
<li class="visit-text">Unique Visitors</li>
<li><div class="chart-month ch-nav">Month</div></li>
<li><div class="chart-day ch-nav">Day</div></li>
</ul>

<div class="lower-nav-wrap">
<ul class="nav-list">
<li><div class="chart-in ch-nav low-nav">-</div></li>
<li><div class="chart-out ch-nav low-nav">+</div></li>
</ul>
</div>
</div>

<div class="row">

<div class="_chk-4">
<ol class="top-entry-list">
<h4>Top Entries</h4>
</ol>

<ol class="top-visitor-list">
<h4>Top Visitors</h4>

</ol>
</div>
<div class="_chk-2">
<div class="pie-title">Popular Page Types</div>

          
<div class="pie-chart">
{/* - ADD PIE CHART */}
<Pie/>
{/* - ADD PIE CHART */}
</div>
            
</div>
</div>
</div>

<div class="_chk-2">
<div class="sidebar"></div>
</div>
</div>

</div>

  );
}

export default App

