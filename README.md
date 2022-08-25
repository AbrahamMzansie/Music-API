# Create a simple Music API to handle operations on Tracks and Playlists.

# How to run this project
# (a)-Install Dependencies
Naviagate to the folder shopping-cart-backend and do the following . Image below show the same technique to install dependencies . Run the following command
#yarn install


# (b) Run the project 
 Go to MUSIC API and issue the following command
 # yarn dev
 For example in my machine l did this 
 #PS C:\PROJECTS\music-project\Music-API> yarn dev
 
 # ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 # Testing endpoints with PostMan
 
 
 # (a)CREATE TRACK ENDPOINT
 
 using the following end point <br />
 URL : http://localhost:3000/api/track/create-track <br />
 method : POST <br />
 Authorization type : Bearer Token <br />
 body data :  { <br />
    "name" : "Basiboy",, <br />
    "album" : "Basiboy", <br />
    "artist" : "Themba Mathe", <br />
    "duration" : "10mins",<br />
    "artwork" : "Rhumba", <br />
    "audio": "url link" ,<br />
} <br /> 
 
 # (b) UPDATE TRACK ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/track/update-track/63072d6768b0dfcc4a1d0fbc <br />
 method : PUT <br />
Authorization type : Bearer Token <br /> 
 body data :  { <br />
    "name" : "Basiboy1",, <br />
    "album" : "Basiboy1", <br />
    "artist" : "Themba Mathe1", <br />
    "duration" : "10mins1",<br />
    "artwork" : "Rhumba1", <br />
    "audio": "url link1" ,<br />
} <br />

# (b) GET ALL TRACK ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/track/get-all-tracks <br />
 method : GET <br />
Authorization type : Bearer Token <br />  


# (b) GET SINGLE TRACK ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/track/get-track/63072d6768b0dfcc4a1d0fbc <br />
 method : GET <br />
Authorization type : Bearer Token <br />  
 
 
 # (b) DELETE SINGLE TRACK ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/track/delete-track/63073d5f26d02305c88bc97d <br />
 method : DELETE <br />
Authorization type : Bearer Token <br />  
 
 # ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 # TESTING PLAYLIST END POINT
 
 # (1) how to create a playlist 
 using the following end point <br />
 URL : http://localhost:3000/api/playList/create-playList <br />
 Authorization type : Bearer Token <br />  
 method : POST <br />
 body data :  { <br />
   "name" : "All Mokis Connection Songs", <br />
    "creator," : "Abraham Nkomo", <br />
    "playtime" : "300hours"	 <br />
    } <br />
# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


 
 # (1) HOW TO  ADD TRACK TO LIST
 using the following end point <br />
 URL : http://localhost:3000/api/playList/add-track-to-playlist <br />
 method :POST <br />
 Authorization type : Bearer Token <br />  
 body data :  { <br />
   "id" : "630757949597457ccb00db9b", <br />
    "trackList" :{<br />
        "track" : "63074d6541264c99ee153675"}	 <br />    
                 } <br />
    } <br />
# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#

# (b) UPDATE PLAYLIST ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/track/update-track/63072d6768b0dfcc4a1d0fbc <br />
 method : PUT <br />
Authorization type : Bearer Token <br /> 
 body data :  { <br />
    "name" : "All Mokis Connection Songs", <br />
    "creator," : "Abraham Nkomo", <br />
    "playtime" : "300hours"	 <br />
    } <br />
} <br />


# (b) GET ALL PLAYLIST ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/playList/get-all-playList <br />
 method : GET <br />
Authorization type : Bearer Token <br />  

# (b) GET A SINGLE PLAYLIST ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/playList/get-playList/630757949597457ccb00db9b <br />
 method : GET <br />
Authorization type : Bearer Token <br />  


# (b) DELETE SINGLE PLAYLIST ENDPOINT 
 using the following end point <br />
 URL : http://localhost:3000/api/playList/delete-playList/630757629597457ccb00db99 <br />
 method : DELETE <br />
Authorization type : Bearer Token <br />  
  
  # --------------------------------------------------------------------------------------------------------------------------------------------------------#




 
 
 
