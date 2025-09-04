import {Acordion} from "./components/Acordion";
import { ThemeToggle } from "./components/ThemToggle";
import {MainForm} from './pages/MainForm'
import { DivAnimated } from "./components/DivAnimated";
import { FormGroup } from "./components/FormGroup";

function App() {


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <header className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">MyLibrary</h1>
        <h1 className="text-xl font-bold text-slate-400">DevDependencies</h1>
        <ThemeToggle />
      </header>
      
      <main className="p-6">
          <DivAnimated></DivAnimated>
          <MainForm />
      </main>


 


    </div>
  );
}

export default App;