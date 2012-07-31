jquery-fixed-table-header
==================


An extra-small ( <1k ) and easy tool that allow you to make constat header for tables.

Installation
--------------

Go to the fridge and drink some beer. 

Include jQuery script:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>

Download `jquery-fixed-table-header.js` script and include it in your page:	 

	<script src="jquery-fixed-table-header.js" type="text/javascript"></script>

Define your table and define inside of `thead` whatever you want to be fixed:

	<table id="myTable">
		<thead>
			<tr>
				<th>this header will be always on top</th>
			</tr>
		</thead>
		<tbody> ... </tbody>
	</table>

From within your code call to the `fixedTableHeader()` function on your selector. 

	$("#myTable").fixedTableHeader();

Go and have another beer.      
    

Contribution
------------

- Sagiv Ofek

License
-------
free for all! :)