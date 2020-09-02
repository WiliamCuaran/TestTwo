$(function(){
    const socket = io();
    //console.dir ( ip.address() );
    
    const $onp = $('#onp');
    const $ofp = $('#ofp');
    const $upl = $('#upl');
    const $dol = $('#dol');
    const $dtss = $('#dtss');
    const $dtsss = $('#dtsss');
    
    
    $("#onp").click(() =>{
        socket.emit('onpum',{
            On:"Pum"
        })
    });
    
    $("#ofp").click(() =>{
        socket.emit('offpum',{
            Off:"pum"
        });
    });
    
    $("#upl").click(() =>{
    
    
        socket.emit('upled',{
            up:"led"
        });
    });
    
    $("#dol").click(() =>{
        socket.emit('downled',{
            down:"led"
        });
    
    
    });
    
    socket.on('load old msgs', function(data) {
        
        
            $dtsss.html(`${data.hume}` + " "+ '°C');
        
        
    });
    
    socket.on('load old msgs', function(data) {
        
            $dtss.html(`${data.temperature}`+ ' '+'%humedad');
        
    });
    
    socket.on('sabado' ,(data) => {
     console.log(data);
    })
    
    socket.on('ip', (data) => {
        console.log(data);
    })
    
  
  
    
    
    });