

first time upload on github
i>     git init 
ii>    git add .
iii>   git commit -m "27th april session"
iv>    git branch
v>     git remote add origin go to github click on code copy the link   and  paste here.
vi>    git push origin master


Regular upload on github

i>     git status
ii>    git add file-name
iii>   git commit -m "27th April 20222 session"
iv>    git branch
v>     git push origin master


git first download

i>     git clone : downloaded blank repository to your system.
ii>    npn install
iii>   npm start
iv>    git pull origin master


How to create blank repository npm dependent.
i>    npm init
      package name
ii>   npm install react    :it is going to install latest version of react.
iii>  npm install raact-dom 


How to upload project on heroku
i> heroku login
ii> git init
iii> heroku create -b https://github.com/mars/create-react-app-buildpack.git
iv> git add
v> git commit -am "my first commit"
vi> git push heroku master

How to upload react project on netlify.
1> Build Your application

i> yarn build or npm build
ii> Drag and drop your build folder to Netlify mannual upload section.

2> Deploy using Github
i> Connect to the Github
ii> Choose your repository/branch
iii> Change the deployment code to

There are two types of components.
i>    Class components.
ii>   function components.

Templating -> handling of html in any framework or library or any kind of web-development plateform that concept is called templating.


require                     vs             import/export                
complete file is brought                   single module
one by one/synchronous/blocked        parallel/asynchronous                
we can use anywhere                   import - hoisting
require - if else                     import - no if else

if(){                                 if(){
                                            import-not allowed.
                                          }
      require-allowed
}

Snapshot : Rough version of actual dom.

Virtual dom : make a copy of orignal and make changes and then upload on 
main server.
means: State changes -> Compute differences -> Re-render

Fragment tag : it is a concept where we are going wrap multiple sibling
elements so that one element is going to return from react.

it can be written in this way also <> </>

div span : it will peak all the nested child.
div > span : it will peak only the immediate child.


State vs Props

Props/something else : data transfer across components - not possible using js
data transfer across componets have two scenario.
scene 1 : not connected components
props object : scene 2 - connected component parent-child means we can transfer data from parent to child and child to parent

State object : data storage inside component - js possible


State                  vs                             Props
inside components                  Across component/communicate
update data/mutable                no updation of data is allowed/read only/immutable
not possible in functional         possible in both components
components
State can be passed inside props   props can't be passed inside state.
state does not make components     props make components reusable.
reusable 

Stateless component:- functional
Statefull component:- class


class component is actual component but fuctional component is used to display dummy data. 


forceUpdate(); - intentionally component ko re-rendered karwa deta hai,means fir se update karwa deta hai.
setState() - virtual dom ko batayege new value aaya hai update karna hai to karlo.

<>

</>

Why we use hook ?
All standard react features only present for class component i.e is not working with functional component so later on developer thought lets make those concept available for functional component also so they have introduce hook concept.

Why we use usestate ?
in functional component to achieve state

in react instead of if - && operator
         instead of if-else - ?:


useEffecct is triggered once when setState is completed.


Higher order function(HOF) => In a function either you are accepting
a function as a parameter or returning a function as a parameter 
or both.


ex. 
function(fn) {
      return fn;
}


Higher order component(HOC) => HOC is a function which accept component as an input and returns component as an output.

Uncontroled Component : ref is uncontroled component because it is not in the controlled of react.

Controled Component : onSubmit onClick these are controlled component because react 
controlled these all.


Class Component : in a class component complete sequence of predefined functions are allready established.

LifeCycle : Complete cycle of class component.
There are three phases in a life cycle.

i>    Mounting
ii>   re-render
iii>  Un-Mounting


phase 1 : mounting:
***** constructor : we use it for all kind of initialization.
getDerivedStateFromProps : inclusion of props variable.
*****render : it is also a life cycle method, main purpose is throwing jsx.
***** componentDidMount : just after first dom creation.


custom function triggered -> state get updated -> props updated.
phase 2 : re-render : 
due to those external effect now re-rendering process is going to start. 
getDerivedStateFromProps : it going to check current status of all the variable
shouldComponentUpdate :  comparing virtual dom
***** render-jsx
getSnapshotbeforeUpdate : 
***** componentDidUpdate : after every re-rendering.


phase 3 : unmounting 
***** componentWillUnmount - just before component unmounting


mainly we need...
constructor
render
componentDidMount
componentDidUpdate
componentWillUnmount


Note: in functional component we can create as many as state variable i want.
ex,
const [status, setStatus] = useState('');
const [update, setUpdate] = useState('');

but in class component we can create only one state variable.
ex, this.state = {
      count : 0,
      status : false,
      balance : 1000,
      studentsName : ['Raja','Babu']
}


// functional component

import React from "react";

const Practice = () => {
    return(
        <>
                
        </>
    );
}
export default Practice;


// class component

class Practice extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <>
            
            </>
        )
    }
}
export default Practice;


useEffect : it is going to solve the purpose of 3 life cycle method.

i> componentDidMount : it means it is going to run just after first render.
it works like componentDidMount.
useEffect(() => {

},[])

ii> componentDidMount and ComponentDidUpdate : it works like both.
useEffect(() => {

})

This is used for the particular scenario : it means here i am going to update pageNum only.
this helps us to solve the probelems of infinite loops.
useEffect(() => {

},[pageNum])



Rest API
 
CRUD   - API
Create - POST
Read -  GET
Update - PUT
Delete - DELETE


Redux : it is a common global storage. it is used for sharing data on global level.
context-variable is also used for sharing data on global level.


// reducer is a functio which will accept two parameter.
    // reducer is going to implement like if else like yeh hai to ye kardo ye hai to ye kardo

    ye kam kar raha hai switch case ki tarah.
    const reducer = (state, action) => {

    }
    // action will come from dispatch in hidden form.

    // Way of initializing useState
    const [show, setShow] = useState(false) 

    // Way of intializing useReducer
    const [state, dispatch] = useReducer(reducer,initialvalues);
    // state: global state variable
    // dispatch: function to update state
    // dispatch: it will have one parameter to explain the action type.
    // reducer: function to handle all type of actions and update state

    why we use switch case?
    if lot of if condition is there then we use switch case.

    name = {name}

    first name is  apna key value pair 
    {name} is useState ka variable 


    consumer part accept function as a parameter in context api.


    in context folder. we can remove props 

    <Comp>
      <compa></compa>
      <compb></compb>
      <compc></compc>
    </Comp>

    <Comp>
      {Children}
    </Comp>


    here we are passing as key value pair.
    <BollywoodChild temp="runway-34" /> then we can access props.temp



    these things can be access props.children
    <BollywoodChild>
      Runway - 34
      abc
      ---------
      <Button>

      </Button>
    </BollywoodChild>


    Limitation of Context : All those Component who are using context variable will be
    re-rendered if there any change on app level context-variable.
    all data have to be stored in single context component.
    if api call store all on that single object.
    component to component data sharing is not possible.


    useEffect(() => {
      this part will run just after runnig jsx part or we can say just after render.
    })


    usememo : it is used when we have to render something when there is any update on that.
    const renderCars = useMemo(() => displayCars(cars), [cars]);
    in this we see how to save the extra loop render

    useMemo is going to remember the final value of function

    useCallback : we see how to save re-render of child component
    callBack is going to remember the complete function.


    Hooks Lists: 

    React: 
    i>    state - useState();
    ii>   LifeCycleMethod - useEffect();
    iii>  context - useContext();
    iv>   Redux - useReducer();
    v>    Ref - useRef();
    vi>   Memo - useMemo();
    vii>  useCallback 
    viii> useLayoutEffect();

    react-router-dom : 

    ix>   useNavigate();
    x>    useLocation();
    xi>   useParams();


    Lift State : in lift state we are passing some new data from child to parent that is called lifting state up.

    in functional component if you have to pass any data use arrow function not a normal function.

    in liftstate we are learning how to take input from users.


    Why do we use react over other component ?
    One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application

    What is DOM in React?
    The DOM (Document Object Model) represents the web page as a tree structure. Any piece of HTML that we write is added as a node, to this tree. With JavaScript, we can access any of these nodes (HTML elements) and update their styles, attributes, and so on.

    What is hooks in react?
    React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states

    What is JSX in React?
    JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

    Why is React better than angular?
    React is better than Angular due to it's virtual DOM implementation and rendering optimizations.

    What is virtual DOM vs Real DOM?
    Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.

    Real Dom                               Virtual Dom
    Dom manipulation is very expensive    Dom manipulation is very easy.
    There is to much memory wastage       No memory wastage
    It updates Slow                       It updates fast
    It can directly update HTML           It can't update HTML directly
    Create a new DOM if the elements      Update the JSX if the element update
    update.                                
    It allows us to directly target any   It can produce about 200,000 Virtual DOM
    specific node (HTML element)          Nodes / Second. 
    It represents the Ul of your          It is only a virtual representation of the DOM
    application


    setState() is async or sync in nature? Explain?
    Yes, setState() is asynchronous, React does not guarantee that the state changes are applied immediately. setState() does not always immediately update the component.

    useMemo() : in this react is going to memorize our value if there is no any changes 
    in that so it is not going to render it again and again.
    re-rendering se bachne ke liye something which is not required we don't render it.

    useMemo is one of the important hooks to improve performence.
    usememo is going to memorize the output or final value of function 

    in case of callBack callBack is going to remember its complete function
    (temp) => {
        return 'Data from render - ' + temp + name;
    }  

    useCallback : it is similar if it is not required we don't re-render it.
    if we want save our child component to re-render then we can use callBack function.


    useMemo is going to memorize the value of that function but useCallback is going to 
    memorise function itself.
    both of them have purpose to solve the extra re-rendering.

    useNavigate() - it is used for re-direct.
    useLocation() - fetch data from url in hidden. redirect wale scenario me we are
    going to fetch data.
    useParam() - exactly  parameter url se leke aayenge.

    useRef() : 

    when we use redux and contextApt?
    when we have to keep mostly things on local then we use redux
    and when we have to keep less things on local then we use contextApi.

    if we have redux then don't use state variable.