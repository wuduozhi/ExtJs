Ext.require([
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.onReady(function(){
    Ext.define('Book',{
        extend: 'Ext.data.Model',
        fields: [
            // set up the fields mapping into the xml doc
            // The first needs mapping, the others are very basic
            {name: 'Author', mapping: 'ItemAttributes > Author'},
            'Title', 'Manufacturer', 'ProductGroup'
        ]
    });

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        model: 'Book',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });

    // create the grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {text: "Author", flex: 1, dataIndex: 'Author', sortable: true},
            {text: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {text: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {text: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ],
        renderTo:'example-grid',
        width: 540,
        height: 200
    });
});
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.toolbar.Paging',
    'Ext.ux.PreviewPlugin',
    'Ext.ModelManager',
    'Ext.tip.QuickTipManager'
]);
Ext.onReady(function(){
    var sexRenderer = function(value){
        if(value == 1){
            return '<span style="color:red;font-weight:bold;">男</span>';
        }else if(value == 2){
            return '<span style="color:green;font-weight:bold;">女</span>';
        }
    };

    var columns = [
        {header:'学号'，dataIndex:'code'},
        {header:'姓名'，dataIndex:'name'},
        {header:'性别'，dataIndex:'sex',renderer:sexRenderer},
        {header:'年龄'，dataIndex:'age'},
        {header:'政治面貌'，dataIndex:'political'},
        {header:'籍贯'，dataIndex:'origin'},
        {header:'所属系'，dataIndex:'professional'}
    ];
    var store = new Ext.data.Store({
        pageSize:15,
        proxy:{
            type:'ajax',
            url:'../api/grid.php',
            reader:{
                type:'json',
                totalProperty:'totalProperty',
                root:'root',
                idProperty:'id'
            }
        },
        fields:[
            {name:'id',type:'int'},
            {name:'code',type:'string'},
            {name:'name',type:'string'},
            {name:'sex',type:'int'},
            {name:'age',type:'int'},
            {name:'political',type:'string'},
            {name:'origin',type:'string'},
            {name:'professional',type:'string'}
        ]
    });

    var grid = new Ext.grid.GridPanel({
    	renderTo:'grid',
    	autoHeight:true,
        title:'学生信息表',
        store:store,
        columns:columns,
        forceFit:true,
        bbar:new Ext.PagingToolbar({
            pageSize:10,
            store:store,
            displayInfo:true,
            displayMsg:'显示第 {0} 条到 {1} 条记录，一共 {2} 条',
            emptyMsg:"没有记录"
        })
    });



    store.load({
    	params:{start:0,limit:10}
    });
});