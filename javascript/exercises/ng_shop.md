# Exercise Angular

Create Angular App to show product of our shop

## Part 1

- Create app to show products in
    - Panel View
    - Table View
- Toggle views by a button click
- Load products from API
  [euri-test-api](https://euri-test-api.now.sh)
- Table view
    - Id
    - Sku
    - Title
    - Price
    - BasePrice
    - Stocked
- Panel view
    - Image
    - Id
    - Sku
    - Title
    - Desc
    - Stocked
    - Price
- Style with bootstrap
- Add model for product and pass model in components
- Create pipes
    - To format price
    - To format date
- Add unit test for
    + Pipes
    + Models
    + Http Services (productService)
- Add Error handling for failed http calls (interceptor & display error)
- Remark:
    + Keep your component so lite as possible

- Optional
    + Add an error message when the communication fails, handle this globally.
    + Load more products when scrolling down, use [ngInfiniteScroll](https://sroze.github.io/ngInfiniteScroll/)

## Part 2

- Add router to application
- Refactor Panel & Table view with router

## Part 3

- Add detail product page
    - By clicking on product in table view, and 'Add New' button.
    - Reactive based form to change/add product
- Add validation to form
    + Title: required
    + Price: required and above 0
- Add delete button in details page & table view
- Extend unit test where needed
    + Models (Product)
    + Http Services (productService)

- Remark:
    + No image upload

## Part 4

- Add shopping basket
- Allow products to put in basket (add to basket button)
- Use basket API from [euri-test-api](https://euri-test-api.now.sh)
- Show following fields in basket
    + Product name & price
    + Quantity
    + Total price
- Provide a clear basket
- Store the basket on the server. On refresh page make sure the basket is filled in
- Add unit test for
    + Models (Basket)
    + Http Services (basketService)

## Part 5

- Refactor application to use NgRx

## Part 6

- Refactor application to use GraphQL
