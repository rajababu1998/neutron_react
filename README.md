

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

There are two types of components.
i>    Class components.
ii>   function components.

Templating -> handling of html in any framework or library or any kind of
web-development plateform that concept is called templating.


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

Uncontroled Component : ref is uncontroled component because it is not in the controlled of
react.

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