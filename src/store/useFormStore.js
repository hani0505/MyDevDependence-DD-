// src/store/useLibraryStore.js
import { create } from 'zustand';

export const useFormStore = create((set, get) => ({
  // Estado
  libraries: [],
  selectedLibraries: [],
  
  // Actions
  addLibrary: (name, command) => {
    const id = name.toLowerCase().replace(/\s+/g, '-');
    const newLibrary = { id, name, command };
    
    set((state) => ({
      libraries: [...state.libraries, newLibrary]
    }));
  },
  
  toggleLibrary: (id) => {
    set((state) => ({
      selectedLibraries: state.selectedLibraries.includes(id)
        ? state.selectedLibraries.filter(libId => libId !== id)
        : [...state.selectedLibraries, id]
    }));
  },
  
  removeLibrary: (id) => {
    set((state) => ({
      libraries: state.libraries.filter(lib => lib.id !== id),
      selectedLibraries: state.selectedLibraries.filter(libId => libId !== id)
    }));
  },
  
  // Gerar script
  generateScript: () => {
    const { libraries, selectedLibraries } = get();
    const selected = libraries.filter(lib => selectedLibraries.includes(lib.id));
    
    if (selected.length === 0) return '# Selecione pelo menos uma biblioteca';
    
    let script = '#!/bin/bash\n\n';
    script += '# Script gerado automaticamente\n';
    script += 'echo "Iniciando instalação..."\n\n';
    
    selected.forEach(lib => {
      script += `echo "Instalando ${lib.name}..."\n`;
      script += `${lib.command}\n\n`;
    });
    
    script += 'echo "Instalação concluída!"\n';
    return script;
  }
}));