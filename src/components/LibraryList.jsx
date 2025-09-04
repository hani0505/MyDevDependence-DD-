// src/components/LibraryList.jsx
import { useFormStore } from '../store/useFormStore';

export function LibraryList() {
  const { libraries, selectedLibraries, toggleLibrary, removeLibrary } = useFormStore();

  if (libraries.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded text-center text-gray-500 mt-11">
        Nenhuma biblioteca adicionada ainda.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold mb-4">Bibliotecas Disponíveis:</h2>
      
      {libraries.map((library) => (
        <div key={library.id} className="p-3 bg-white rounded border flex items-center dark:text-black">
          <input
            type="checkbox"
            id={library.id}
            checked={selectedLibraries.includes(library.id)}
            onChange={() => toggleLibrary(library.id)}
            className="mr-3"
          />
          
          <div className="flex-1">
            <label htmlFor={library.id} className="font-semibold cursor-pointer">
              {library.name}
            </label>
            <p className="text-sm text-gray-600 font-mono">{library.command}</p>
          </div>
          
          <button
            onClick={() => removeLibrary(library.id)}
            className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}