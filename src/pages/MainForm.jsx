// src/App.jsx
import { FormGroup } from '../components/FormGroup';
import { LibraryList } from '../components/LibraryList';
import { ScriptGenerator } from '../components/scriptgenerator';

export function MainForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 dark:bg-gray-700">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Gerador de Script de Instalação
        </h1>
        
        <FormGroup />
        <LibraryList />
        <ScriptGenerator />
      </div>
    </div>
  );
}

