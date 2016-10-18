define(function (require) {
    'use strict';
 
    const 
    	TabbedListChamber = require('common/platform/chamber/TabbedListChamber'),
    	// Define data that will be loaded using a fetch function.
    	cityData = [
    		{
				text: 'Washington',
				text1: 'DC'
			},
			{
				text: 'Baltimore',
				text1: 'MD'
			},
			{
				text: 'Philadelphia',
				text1: 'PA'
			},
			{
				text: 'New York',
				text1: 'NY'
			},
			{
				text: 'Boston',
				text1: 'MA'
			}
    	];

    // Define the data to be returned from the overridden data method in the class that extends TabbedListChamber.
    // This data will be used to populate the models that back the tabs and corresponding lists.
    let dataTree = [
	    {
	    	text: 'Tab 1',
	    	icon: `${window.MODULE_PATH}/icons/analysis.svg`,
	    	enabled: true,
	    	selected: true,
	    	_data_tree_branch: [
	    		{
	    		  	text: 'List Item 1'
	    		},
	    		{
	    	  		text: 'List Item 2',
	    	  		checked: true
	    		},
	    		{
	    	  		text: 'List Item 3',
	    	  		text1: 'More text'
	    		},
	    		{
	    	  		text: 'List Item 4',
	    	  		status: 'status'
	    		},
	    		{
	    	  		text: 'List Item 5',
	    	  		icons: ['bell']
	    		}
	    	]
	    },
	    {
	    	text: 'Tab 2',
	    	icon: `${window.MODULE_PATH}/icons/blood-sample.svg`,
	    	enabled: true,
	    	selected: false,
	    	_data_tree_branch: [
	    		{
	    	  		text: 'List Item 1',
	    	  		text1: 'Tab 2 List Item'
	    		},
	    		{
	    	  		text: 'List Item 2',
	    	  		text1: 'Tab 2 List Item'
	    		}
	    	]
	    },
	    {
	    	text: 'Fetch URL',
	    	icon: 'jpy',
	    	fetchInfo: {
	    		url: 'localhost:3000'
	    	}
	    },
	    {
	    	text: 'Fetch Function',
	    	fetchInfo: {
	    		fetchFunction: "myFetchFunction"
	    	}
	    }
	  ];


    return class MyChamber extends TabbedListChamber {
    	// Return an object that represents the data that will populate the list for each tab.
		data () {
		  return dataTree; 
		}

		// The function to be used for populating data in the fourth tab.
		// The framework knows to execute this function because it was included
		// in the overridden getFetchFunctions method in this class.
		myFetchFunction () {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(cityData);
				}, 1000);
			});
		}

		// Override getFetchFunctions.
		// Return an object that contains fetch function names for the keys,
		// and references to the corresponding functions for the values.
		getFetchFunctions () {
			return {
				myFetchFunction: this.myFetchFunction
			}
		}

		// Override the tabClick method, which will be called each time a tab is clicked.
		// The argument passed to this method is the model backing the tab that was clicked.
		tabClick (tabModel) {
			console.log(tabModel);
		}

		// Override the itemClick method, which will be called each time a list item is clicked.
		// The arguments passed to this method are the list control itself, and the list item that was clicked.
		itemClick (listControl, listItem) {
			console.log(listItem);
		}
    }
});
