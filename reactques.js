    // 1. What is react?
    // React is a library built on top of js for creating UI built by meta.

    // 2. Is react library or framework?
    // React is a library built on top of js. Its library because its provides more control to the user and donot 
    // have strict folder structure built in rules like frameworks like nextjs.

    // 3. Whts the difference in angular and react?
    // React is library and angular is a complete framework. That means react provides more control and freedom abt folder
    // structure, routing while angular has strict folder structure and has built in rules and react is also morelightweight 
    // compared to angular.
    
    // 4. what is the rule of node modules folder.
    // node module is generated code, so we should never touch and commit it. Node module folder is a place where all 
    // our installed external dependencies and libraries are stored for our project. While npm is node package manager which 
    // is default package manager for js runtime environment , npm helps to instal and uninstall all the external dependencies and 
    // libraries to our project in the node modules folder. 
 
    // 5. What is package.json?
    // package.json is a file that provides overview of all our dependencies and scripts. So, whenever someone downloads 
    // our project from github to their computer, npm looks into package.json file and downloads all the dependencies needed in 
    // node modules folder.
    
    // 6. What is the difference between stateful and stateless component?
    // The component that has its own dynamic data, managed by usestate hook and can change its data causing itself to rerender 
    // are stateful componet. The componenet that donot have its own dynamic data and relies on parent component to manage the data 
    // instead of usestate hook are stateless component.

    // 7. whats the rule of fragment in jsx?
    // The rule of fragment implies that every functional components in react should only return single root element. If two
    // adjacent elements are returned, then it throws error. So, for this we use react fragment which is an empty tag and wrap
    // all our elements inside it.

    // 8. What is JSX?
    // JSX is javascript XML which is a syntax extension for js that allows us to write html and js code in single same file.

    // 9. Explain lifecycle methods of react.
    //  There are 3 lifecycle methods of react: Mouting, updating and unmounting. Mounting is wheh component renders for 
    //  the first time and shown in the screen. Updating is when state changes and component rerenders to update the the UI.
    // Unmounting is when component is removed from the UI which usually happens when we navigate to other pages.

    // 10. how u use useeffect to manage life cycle methods?
    // So, we manag it by using dependency array. If we want the code to run only affter component's first render, we keep code
    // inside callback function in useeffect and keep dependency array empty. If we want the code to run whenever te satae changes,
    // we keep that cariable inside dependency arry. Then if we want the code to run after compoennt unmounts we run a cleanup 
    // function which is a function returned inside useeffect.

    

    