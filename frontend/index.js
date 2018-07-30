// Ext.require('Ext.tab.*');

Ext.onReady(function(){
    var viewport = new Ext.Viewport({
    	layout:'border',
    	items:[{
    		region:'north',
    		html:'head'
    	},{
    		region:'center',
    		html:'grid'
    	},{
    		region:'east',
    		html:'form'
    	},{
    		region:'south',
    		html:'foot'
    	}]
    });
});
