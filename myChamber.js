define(function (require) {
    'use strict';
 
    const
        TabbedListChamber = require('common/platform/chamber/TabbedListChamber');
 
    return class MyChamber extends TabbedListChamber {
		data () {
		  return [
		    {
		      text: 'Tab 1',
		      icon: `${window.MODULE_PATH}/icons/analysis.svg`,
		      enabled: true,
		      selected: true,
		      _data_tree_branch: [{
		        text: 'List Item 1'
		      },{
		        text: 'List Item 2',
		        checked: true
		      },{
		        text: 'List Item 3',
		        text1: 'More text'
		      },{
		        text: 'List Item 4',
		        status: 'status'
		      },{
		        text: 'List Item 5',
		        icons: ['bell']
		      }]
		    },
		    {
		      text: 'Tab 2',
		      icon: `${window.MODULE_PATH}/icons/blood-sample.svg`,
		      enabled: true,
		      selected: false,
		      _data_tree_branch: [{
		        text: 'List Item 1',
		        text1: 'Tab 2 List Item'
		      },{
		        text: 'List Item 2',
		        text1: 'Tab 2 List Item'
		      }]
		    }
		  ]
		}

		tabClick (model) {
			console.log(model);
		}

		itemClick (model) {
			console.log(model);
		}
    }
});
