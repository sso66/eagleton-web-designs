import React from 'react';
import './guidelines.css';

function GridLayout() {

    return (
		<div id="wrapper">	
			<div id="guidelines">
				<div class="column-1">1</div>	
				<div class="column-2">2</div>	
				<div class="column-3">3</div>	
				<div class="column-4">4</div>	
				<div class="column-5">5</div>	
				<div class="column-6">6</div>	
				<div class="column-7">7</div>	
				<div class="column-8">8</div>	
				<div class="column-9">9</div>	
				<div class="column-10">10</div>	
				<div class="column-11">11</div>	
				<div class="column-12">12</div>					
			</div>
            <header>
				<hr class="style-eight" /><span>Header Section</span>
				<h1>Eagleton Designs Styles Guide and Patterns</h1>
				<h2>Themeable User Interfaces </h2>
            </header>
			<div id="main">
				<hr class="style-eight" /><span>Main Content Section</span>
				<ol id="basic">
					<li><a href="#">Link</a></li>	
					<li><blockquote>Block Quote</blockquote></li>				
					<li><h1>Header 1</h1></li>
					<li><h2>Header 2</h2></li>
					<li><h3>Header 3</h3></li>
					<li><h4>Header 4</h4></li>
					<li><h5>Header 5</h5></li>
					<li><h6>Header s</h6></li>
					<li><p>Paragraph</p></li>
					<li><button>Button</button></li>
					<li><input type="text" placeholder="Input Type text - default" /></li>
					<li><input type="button" value="Input Type button" /></li>
					<li><input type="checkbox" />&nbsp;Input Typed checkbox</li>
					<li><input type="radio" />&nbsp;Input Typed Radio</li>		
					<li><input type="password" value="123456"/>&nbsp;Input Typed password</li>				
					<li><input type="email" value="ssoo@castlebranch.com"/>&nbsp;Input Typed email</li>	
					<li><input type="datetime" value="4/25/2016 9:15am"/>&nbsp;Input Typed datetime</li>
					<li><textarea>This is a textarea</textarea></li>	
					<li><select><option>--Select--</option></select></li>
					<li><fieldset>fieldset</fieldset></li>	
					<li><iframe>iFrame</iframe></li>	
					<li><img src="planet-earth.png" alt="Planet Earth" /></li>	
					<li>Definition List<dl><dt>Term</dt><dd>Description</dd></dl></li>	
					<li><p id="content">ID Selector Main Content</p></li>																
				</ol>	
				
				<ol>/* Button */
					<li><button class="basicButton"><span>Hide Registration Button</span></button></li>	
					<li><button class="basicButton column-10"><span>Add To Card Button</span></button></li>
				</ol>
				<ol>/* Department button */
					<li><button class="departmentButton"><span>Login</span></button></li>	
					<li><button class="departmentButton"><span>Dashboard</span></button></li>
				</ol>
			</div>
			<nav><hr class="style-eight" /><span>Navigation Section</span></nav>
			<aside><hr class="style-eight" /><span>Sidebar Section</span></aside>
			<footer>				
			
				<hr class="style-eight" /><span>Footer Section</span>
			</footer>
		</div>
    )
}

export default GridLayout;

// eof