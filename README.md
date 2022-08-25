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
 body data :  { <br />
    "name" : "Basiboy",, <br />
    "album" : "Basiboy", <br />
    "artist" : "Themba Mathe", <br />
    "duration" : "10mins",<br />
    "artwork" : "Rhumba", <br />
    "audio": "url link" ,<br />
} <br /> 
 
 # (b) Login to get unique API Key 
 using the following end point <br />
 URL : http://localhost:3000/api/auth/login <br />
 method : POST <br />
 body data :  { <br />
    "email" : "admin.admin@gmail.com", <br />
    "password" : "12345678" <br />
} <br />

# (c) WHERE TO GET UNIQUE API Key 
Send your rest api to the server to get your unique API Key to use it in cart endpoint .
![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(96).png)
 
 
 # ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 # TESTING CART END POINT
 
 # (1) how to create a cart 
 using the following end point <br />
 URL : http://localhost:3000/api/cart/create-cart <br />
 Authorization type : API KEY <br />
 method : POST <br />
 body data :  { <br />
    "cartItems" : { <br />
           "product" : "6154724cd721e64a14361c4b", <br />
           "quantity" : "1" <br />
    }<br />
    
}<br />

# Image below show you how to create cart 

First you need to attach your unique API Key obtained when login in 
Do the following to add your API Key to your create cart end point(without unique API Key you cannot create cart)
# Choose "API Key" as your  Authorization Type and add your API Key as shown below

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(95).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(90).png)


# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


 
 # (1) HOW TO GET CART
 using the following end point <br />
 URL : http://localhost:3000/api/cart/get-cart <br />
 method :GET <br />
 Authorization type : API Key <br />

# Image below show you how to get cart 

First you need to attach your key obtained when login in 
Do the following to add your API Key to your get cart end point(without key you cannot get your cart)
# Choose "API Key" as your  Authorization Type and add your key as shown below

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(95).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(91).png)

# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


# (1) HOW TO UPDATE CART
 using the following end point <br />
 URL : http://localhost:3000/api/cart/update-cart <br />
 method :PUT <br />
 Authorization type : API Key <br />

# Image below show you how to update cart 

First you need to attach your key obtained when login in 
Do the following to add your API Key to your update cart end point(without key you cannot update your cart)
# Choose "API Key" as your  Authorization Type and add your key as shown below

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(95).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(92).png)

# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


# (1) HOW TO DELETE CART
 using the following end point <br />
 parameter : <enter cart id like below URL> for example URL = (http://localhost:3000/api/cart/delete-cart/) , parameter = 6154c477c437a05124670c80 <br />
  URL : http://localhost:3000/api/cart/delete-cart/6154c477c437a05124670c80 <br />
  Authorization type : API Key <br />
 method :DELETE <br />
  
# Image below show you how to delete cart

First you need to attach your key obtained when login in 
Do the following to add your key to your delete cart end point(without API key you cannot delete your cart)
# Choose "Bearer token" as your  Authorization Type and add your token as shown below
  
![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(95).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(93).png)
  
  # --------------------------------------------------------------------------------------------------------------------------------------------------------#




 
 
 
