Namaste-React
-------------

\====================

Package Configuration
---------------------

\-------------------------

package.json
------------

*   package.json is a configuration file for NPM (Node Package Manager) that contains metadata about the project, including dependencies, scripts, and version.
    
*   It's used to manage project dependencies, scripts, and versioning.
    
*   A well-structured package.json file is essential for maintaining a healthy and scalable project.
    
*   It's also used by package managers like npm and yarn to install dependencies.
    

Dependencies
------------

*   Dependencies are categorized into two types: **devDependencies** and **dependencies**.
    
*   **devDependencies** are required for development environments, such as testing frameworks and code linters.
    
*   **dependencies** are required for production environments, such as libraries and frameworks used in the application.
    
*   Understanding the difference between these two types of dependencies is crucial for optimizing project performance and security.
    

Versioning
----------

\-------------

Caret (^)
---------

*   The caret symbol (^) is used to specify a version range that allows for updates to the minor version and patch version.
    
*   For example, ^1.2.3 would allow updates to 1.2.4, 1.3.0, but not 2.0.0.
    
*   Using the caret symbol provides flexibility for updating dependencies while minimizing breaking changes.
    

Tilde (~)
---------

*   The tilde symbol (~) is used to specify a version range that allows for updates to the patch version.
    
*   For example, ~1.2.3 would allow updates to 1.2.4, but not 1.3.0 or 2.0.0.
    
*   Using the tilde symbol provides a more conservative approach to updating dependencies, reducing the risk of breaking changes.
    

Package Lock
------------

\----------------

*   package-lock.json is a file generated by npm that keeps track of the exact versions of dependencies installed in the project.
    
*   It ensures that the same versions of dependencies are installed across different environments, including development, staging, and production.
    
*   The package-lock.json file is essential for maintaining consistency and reproducibility across different environments.
    

Node Modules
------------

\----------------

*   Node modules are packages installed using npm or yarn that provide reusable functionality for JavaScript applications.
    
*   Node modules can be installed globally or locally, depending on the project requirements.
    
*   Understanding how to manage node modules is crucial for maintaining a healthy and scalable project.
    

Transitive Dependencies
-----------------------

*   Transitive dependencies are dependencies that are installed as dependencies of other dependencies.
    
*   For example, if a project depends on parcel, and parcel depends on webpack, then webpack is a transitive dependency of the project.
    
*   Understanding transitive dependencies is important for optimizing project performance and security.
    

React Fundamentals
------------------

\------------------------

<!-- /****
 * Header
 *      - Logo
 *      - Nav items
 * Body
 *      - Search
 *      - RestaurantContsiner
 *      - RestaurantCard
 * Footer
 *      - copyright
 *      - Links
 *      - Address
 *      - Contact
 */-->

Episode 4
---------

Props
-----

*   Props (short for "properties") are arguments passed to a React component.
    
*   Props are immutable, meaning they cannot be changed once they are passed to a component.
    
*   Understanding how to work with props is essential for building reusable and maintainable React components.
    

Key
---

*   In React, a key is a unique identifier assigned to an element in an array.
    
*   Keys help React keep track of elements and their positions in the array.
    
*   Understanding how to use keys correctly is important for maintaining performance and preventing bugs in React applications.
    

Episode 5
---------

Code Restructuring
------------------

*   Code restructuring is the process of reorganizing code to make it more maintainable, scalable, and efficient.
    
*   Code restructuring can involve breaking down large components into smaller ones, simplifying complex logic, and removing unnecessary code.
    
*   Regular code restructuring is essential for maintaining a healthy and scalable project.
    

Best Practice: Organizing Code
------------------------------

*   One popular way to organize code is to create a src folder that contains all the source code for the project.
    
*   Within the src folder, code can be organized into subfolders based on functionality, such as components, containers, actions, and reducers.
    
*   Following a consistent code organization pattern makes it easier for developers to navigate and maintain the codebase.

**Type of export** :
------------------------------
**Default import/export :** when we are exporting single thing from a file ex; in a component file
- export default myData;
- import myData from "my_file_path";


**Named import/export :** when we have to export multiple things from a file
we use named export
- export const CDN_URL;
- import {CDN_URL}  from "my_file_path"; 

**React Hooks**
------------------------
A simple javascript function given to us by react  which has it own usecase.
- When evr a state variable is updated react rerenders the component, as soon as my data layer changes my UI layer is also changed as react rerenders it.
**Reconciliation algorithm/React Fibre**
An algo used by react to diff and rerender the UI in a faster and efficient manner.Came in react-16
**Virtual DOM**
Representation of an actual DOM, its an object and normal JS object
finding out diff b/w two JS objects is faster as compared to HTML and hence it makes an obj representation of the actual DOM.
**Diff Algorithm**
Find outs the difference between old and new virtual DOM.

**USE EFFECT**
- A normal JS function given by react with some specific usecase, it takes two arguments
- Callback function and a dependency array:
useeffect(()=>{
    console.log("useeffect called");
},[])
- when there is no dependency array, useeffect is called every time the component renders
- use effect is called on initial render and just once when the dependency array is empty array[]
- if we put something inside the dependency array is present , useffect is called every time the dependency changes
- used to call local state variable inside the functional component.
- **never create state variables/hooks inside if/else block, for loop , or a function , react will mess up with the code.**

whenever u change the local state variable, reconciliation algo runs and  react rerenders the whole component.

**React Routing**
- To introduce routing we need to form routing configuration
- Routing configuration is done in index file.
- react router dom gives a utility/hook for errors=> useRouteError().
- In order to intact the header we need to have children routing
- Never ever use an anchor tag while using react, it will refresh the whole page.
- <link> component is the superpower given by react
- **There are 2 types of routing :**
- Client side routing : HTML page is being served by the client, all routing configurations and routes are present in client side code.
- Server side routing: HTML page served by server 
- **Dynamic route and Load content inside it:**
- **UseParam Hook:** used to read the params in react
