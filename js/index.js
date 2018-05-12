  window.onload = function(){
        var Icon = ['images/1.jpg','images/2.jpg'];
        var num = 0;     //控制头像改变
        var iNow = -1;    //用来累加改变左右浮动
        var icon = document.querySelector('#userIcon').getElementsByTagName('img');
        var btn = document.querySelector('#btn');
        var text = document.getElementById('text');
        var content = document.getElementsByTagName('ul')[0];
        var img = content.getElementsByTagName('img');
        var span = content.getElementsByTagName('span');

        icon[0].onclick = function(){
            if(num==0){
                this.src = Icon[1];
                num = 1;
            }else if(num==1){
                this.src = Icon[0];
                num = 0;
            }
        }



        btn.onclick = function(){
            if(text.value ==''){
                alert('不能发送空白消息');
            }else {
                content.innerHTML += '<li><img src="'+Icon[num]+'"><span>'+text.value+'</span></li>';
                iNow++;
                if(num==0){
                    img[iNow].className += 'imgright';
                    span[iNow].className += 'spanright';
                }else {
                    img[iNow].className += 'imgleft';
                    span[iNow].className += 'spanleft';
                }
                text.value = '';
                
                // 内容过多时,将滚动条位于最底端
                content.scrollTop=content.scrollHeight;
            }
        }
        document.onkeydown=function(event){
            var e = event || window.event;
            if(e && e.keyCode==13){ 
                // alert(11111);
                 btn.click(); 
                
           

            }                
        }
    }