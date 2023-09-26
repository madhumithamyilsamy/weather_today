* {
    padding: 0;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    box-sizing: border-box;
}

main {
    width: 100%;
    height: 100vh;
    background-image:url('https://res.cloudinary.com/practicaldev/image/fetch/s--vqF9LVka--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://images.unsplash.com/photo-1545193544-312983719627%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1650%26q%3D80');
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.row {
    display: flex;
    align-items: center;
    /* vertically */
    justify-content: center;
    /* horizontally */
    width: 1000px;
    margin: 10px;
    font-size: 40px;
    color: white;
}

#search {
    font-size: 25px;
    padding: 10px;
    border-radius: 25px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px grey;
}
