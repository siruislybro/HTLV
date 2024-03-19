<template>
    <div class = "nav_bar_rectangle"> 
        <div id = "main_logo_rect">
        <router-link to = "/" id= "logo_home_tab">
            <img class = "main_logo" src= "../assets/HTLVlogo.png" alt = "HTLV Logo"> 
        </router-link> 
        </div>
    
        <div class = "nav_links">
            <router-link to = "/" id= "home_tab" class = "tab">Home</router-link> 
            <router-link to = "/itineraries" id= "itineraries_tab" class = "tab">My Itineraries</router-link> 
            <router-link to = "/itineraries" id= "community_tab" class = "tab">Community</router-link> 
            <router-link to = "/itineraries" id= "about_tab" class = "tab">About</router-link> 
        </div>
        <div id = "search_bar_container"> 
            <form id = "search_bar_form">
                <input type="text" id = "search_bar_input" placeholder="Where to next?"> 
                <button type = "submit" id = "submit_button">
                    <img src = "../assets/search_icon.png" alt = "search">
                </button>
            </form>
            
        </div>

        <div id = "profile_rect">
        <router-link to = "/itineraries" id= "profile_logo">
            <img class = "profile_logo" src= "../assets/profile_pic1.jpeg" alt = "Profile Picture"> 
        </router-link> 
        </div>
    </div>
</template>
  
  <script>
  import { RouterLink, RouterView } from "vue-router";
  export default {
    name: 'NavBar',
  };
  </script>
  
<style scoped>
.nav_bar_rectangle {
    display: flex;
    justify-content:flex-start; 
    align-items: center;
    width: 100%;
    height: 9vh;
    border-bottom: 2px solid black;
    background-color: white;
    overflow: hidden;
}

#main_logo_rect {
    display: relative;
    width: 80px;
    overflow: hidden;
    padding: 15px;
}
.main_logo {
    cursor: pointer;
    width: 80px;
    height: auto;
}

#main_logo_rect:hover {
    background-color: #FFF35D;
}

.nav_links{
    font-size: 28px;
    display: flex;
    font-weight: 500;
}

.tab {
    cursor: pointer;
    text-decoration: none;
    color: #FF5A5F;
    padding: 60px 20px;
    width: 200px;
    text-align: center;
}

.tab:hover {
    background-color: #FFF35D;
    color:#FF2C3B;
}

#search_bar_container {
    position: relative;
    display: block;
    padding: 10px 8px;
    ;
}

#search_bar_input {
    margin-left: 30px;
    width: 175px;
    font-style: italic;
    border: 1px solid;
    border-radius: 25px;
    padding: 10px 40px 5px 15px;
    background-color: rgb(232, 225, 225);
    color: #7f7272;
    font-size: large;
}

#search_bar_input:hover {
    border: 2px solid #FF5A5F; /* Change border color */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add shadow effect */
}

#submit_button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

#submit_button img {
    width: 20px;
    height: 20px;
}

#profile_rect {
    padding-left: 30px;
    display: flex;
    align-items: center;
}

.profile_logo {
    cursor: pointer;
    width: 80px;
    height: 60px;
    border-radius: 50%;
}

.profile_logo:hover {
    border: 2px solid #FF5A5F; /* Change border color */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add shadow effect */
}
</style>