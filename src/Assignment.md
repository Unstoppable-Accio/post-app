
A basic Shooping Cart Project: 1. Make a real life shopping cart application where there are 2 pages - First is the home page where you fetch a list of products from an api and the products are displayed. The second page is the my cart Page.
2. The goal is to accomplish the cart functionality using redux. So make a redux state for your cart and make a redux state of all the products that you get from the api.
3. Ui for the contest is as follows - https://www.figma.com/file/qDWVMfoVJknM2YYYiC2kz6/Untitled?node-id=0%3A1&t=9jUVQJ8hsvwb5m7Y-1
4. Home Page - 
i. Fetch the products from this api link - execute a get request at this link - https://dummyjson.com/products
This gives a list of 30 products, all of which have an id, title, price and image. Show all of these in the ui and create an add to the cart button.
ii. Map the products as shown in the home page and on click of add to the cart button - add the object in the redux state. 
ii. Make sure that if an item is already added you cannot add it again.

5. My Cart Page - 
i. Get your cart products from the redux state and map them as shown.
ii. on click of  remove from the cart - again update the redux state everytime.
iii. On the right side, make a sidebar where you show the final checkout list and also the total price. 
ii. On click of checkout button -  get rid of the entire cart and reset the redux state of myCart and display a success message saying that items have been checkout out.
