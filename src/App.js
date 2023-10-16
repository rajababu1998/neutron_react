import logo from './logo.svg';
import './App.css';

import App1 from './App1';
import home from './home';
import Cricket from './Cricket';
import CricketChild from './CricketChild';
import Bollywood from './Bollywood';
import BollywoodChild from './BollywoodChild';
import Tollywood from './Tollywood';
import TollywoodChild from './TollywoodChild';
import LiftState from './LiftState';
import RefClass from './RefClass';
import RefFn from './RefFn';
import FormFn from './FormFn';
import FormPr from './FormPr';
import FormFnValidation from './FormFnValidation';
import HOC_Country from './hoc/HOC_Country';
import HOC_State from './hoc/HOC_State';
import HOC_City from './hoc/HOC_City';
import ToDo from './ToDo';
import ModalComp from './Modal';
import ClassComp from './ClassComp';
import Practice from './Practice';
import Github from './Github';
import GithubFn from './GithubFn';
import ContactApp from './ContactApp';
import HookReducer from './hooks/HookReducer';
import Parent from './context/Parent';
import Parent1 from './context1/Parent1';
import Pr1 from './Pr1';

import './css/myStyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import EMI from './emi/EMI';

import Header from './common/Header';
import Menubar from './common/Menubar';
import Footer from './common/Footer';
import Left from './common/Left';
import Right from './common/Right';

import DataApp, {DataAppContext} from './common/DataApp';
import Login from './Login';
import ColorApp from './ColorApp';
import NotFound from './common/NotFound';
import Misc from './Misc';
import HookLayoutEffect from './hooks/HookLayoutEffect';
import HookParams from './hooks/HookParams';
import HookMemo from './hooks/HookMemo';
import HookCallback from './hoc/HookCallback';
import Calculator from './Calculator';
import Pr2 from './Pr2';



function App() {
  return (
    // <div className="container">
      <BrowserRouter>
      <DataApp>
        <Header/>
        <Menubar/>
        <div className="row">
          <Left/>
          <div className='col-8 bg-light bg-opacity-75'> 

            {/* <App1 />
            <Cricket />
            <CricketChild />
          */}

            <Routes>
              <Route path='/app1' element={<App1 />}/>
              <Route path='/cricket' element={<Cricket />}/>
              <Route path='/cricketChild' element={<CricketChild />}/>
              <Route path='/bollywood' element={<Bollywood />}/>
              <Route path='/bollywoodChild' element={<BollywoodChild />}/>
              <Route path='/tollywood' element={<Tollywood />}/>
              <Route path='/tollywoodChild' element={<TollywoodChild />}/>
              <Route path='/liftState' element={<LiftState />}/>
              <Route path='/emi' element={<EMI />}/>
              <Route path='/refclass' element={<RefClass />}/>
              <Route path='/refFn' element={<RefFn />}/>
              <Route path='/formfn' element={<FormFn />}/>
              <Route path='/formpr' element={<FormPr />}/>
              <Route path='/formfn2' element={<FormFnValidation />}/>
              <Route path='/hoccountry' element={<HOC_Country />}/>
              <Route path='/hocstate' element={<HOC_State />}/>
              <Route path='/hoccity' element={<HOC_City />}/>
              <Route path='/todo' element={<ToDo />}/>
              <Route path='/modal' element={<ModalComp />}/>
              <Route path='/classcomp' element={<ClassComp />}/>
              <Route path='/practice' element={<Practice />}/>
              <Route path='/github' element={<Github />}/>
              <Route path='/githubfn' element={<GithubFn />}/>
              <Route path='/contactapp' element={<ContactApp />}/>
              <Route path='/hookreducer' element={<HookReducer />}/>
              <Route path='/parent' element={<Parent />}/>
              <Route path='/parent1' element={<Parent1 />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/colorapp' element={<ColorApp />}/>
              <Route path='/apps'>
                <Route path='app1' element={<EMI />}/>
                <Route path='app2' element={<ColorApp />}/>
                <Route path='app3' element={<ContactApp />}/>
              </Route>

              <Route path='/hooklayouteffect' element={<HookLayoutEffect />}/>
              <Route path='/hookparams/:id' element={<HookParams />}/>
              <Route path='/misc' element={<Misc />}/>
              <Route path='/hookmemo' element={<HookMemo />}/>
              <Route path='/hookcallback' element={<HookCallback />}/>

              <Route path='/*' element={<NotFound />}/>
              <Route path='/' element={<Login />}/> 
              <Route path='/pr1' element={<Pr1 />}/>
              <Route path='/pr2' element={<Pr2 />}/> 
              <Route path='/calculator' element={<Calculator />}/>
              
            </Routes>
              
          </div>
          <Right/>
        </div>
        <Footer />
      </DataApp>
      </BrowserRouter> 
      
    // </div>
  );
  }
  

export default App;
