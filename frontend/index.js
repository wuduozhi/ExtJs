
Ext.onReady(function(){
    var viewport = new Ext.Viewport({
        layout:'border',
        items:[{
            region:'north',
            contentEl:'head'
        },grid,{
            region:'east',
            html:'form'
        },{
            region:'south',
            contentEl:'foot'
        }]
    });
});


// Ext.require('Ext.tab.*');
var sexRenderer = function(value){
    if(value == 1){
        return '<span style="color:red;font-weight:bold;">男</span>';
    }else if(value == 2){
        return '<span style="color:green;font-weight:bold;">女</span>';
    }
};

Ext.define('StudentRecord',{
    extend:'Ext.data.Model',
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


var store = new Ext.data.Store({
    pageSize:15,
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
    model:StudentRecord,
    remoteSort:true
});

store.load();

var columns = [
    {header:'学号'，dataIndex:'code'},
    {header:'姓名'，dataIndex:'name'},
    {header:'性别'，dataIndex:'sex',renderer:sexRenderer},
    {header:'年龄'，dataIndex:'age'},
    {header:'政治面貌'，dataIndex:'political'},
    {header:'籍贯'，dataIndex:'origin'},
    {header:'所属系'，dataIndex:'professional'}
];



var grid = new Ext.grid.GridPanel({
    title:'学生信息表',
    region:'center',
    loadMask:true,
    store:store,
    columns:columns,
    forceFit:true,
    bbar:new Ext.PagingToolbar({
        pageSize:15,
        store:store,
        displayInfo:true
    })
});


// Ext.onReady(function(){
//     var viewport = new Ext.Viewport({
//         layout:'border',
//         items:[{
//             region:'north',
//             contentEl:'head'
//         },grid,{
//             region:'east',
//             html:'form'
//         },{
//             region:'south',
//             contentEl:'foot'
//         }]
//     });
// });