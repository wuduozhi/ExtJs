Ext.require([
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.onReady(function(){
    Ext.define('Book',{
        extend: 'Ext.data.Model',
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

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        model: 'Book',
        autoLoad: true,
        proxy:{
            type:'ajax',
            url:'../api/page.php',
            reader:{
                type:'json',
                totalProperty:'totalCount',
                root:'result',
                idProperty:'id'
            }
        },
    });
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

    // create the grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: columns,
        renderTo:'example-grid',
        width: 540,
        height: 200
    });
});
