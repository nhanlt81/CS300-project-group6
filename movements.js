function Mymove(k,direction,MAX,x,y){
	
    if (direction == 0) // move right
    {
        if(x < MAX - k){
            x += k;
        }else{
        		x = Math.floor((Math.random() * 128) + 1);
        		y = Math.floor((Math.random() * 128) + 1);
        }
        
    } else if(direction == 90) // move up
    	{
        if (y < MAX - k){
            y += k;
        }else{
        	
        	x = Math.floor((Math.random() * 128) + 1);
    		y = Math.floor((Math.random() * 128) + 1);
        	
        }
        
    }else if (direction == 180) // move left
    {
        if( x >= k ){
            x -= k;
        }else
        {
        	x = Math.floor((Math.random() * 128) + 1);
    		y = Math.floor((Math.random() * 128) + 1);
        	
        }
    }else{
        // move down
        if(y >= k){
            y -= k;
        }else{
        	
        	x = Math.floor((Math.random() * 128) + 1);
    		y = Math.floor((Math.random() * 128) + 1);
        }
        
    }
    var location = [x,y]
    return location;
    
}

