### It's a Markdown for the fundamentals for React

> We require React library for the use of JSX
> And we need the react-dom/client for rendering the root element with id 'root'

#### First Component in detail

- Function name starts with capital letter
- Syntax is similar to functions in js
- Should always return a JSX

#### JSX

- JSX stands for javascript XML
- Which is similar to the Html
- retrun single element , Means One parent element like wrapping grouping of jsx element inside a <div><div/>
- For return `js(<h2>Hello Word</h2>)`; which has been
  converted into React.createElement('h2',{},"Hello Word")
- For return `js(<div><h2>Hello Word</h2></div>)`; which has been converted into React.createElement(
  'div',{},React.createELement('h2',{},"Hello Word")
  )
- Instead of using Div to return as a parent element we can use semantics element like section and article
- Or else we can use fragments <></> || <React.Fragment></React.Fragment>
- Properties naming should be in camel case
  ```js
  //Example of JSX which return a single element
  const App = () => {
    return (
      <div className="container">
        <h1>Testing</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  };
  ```
