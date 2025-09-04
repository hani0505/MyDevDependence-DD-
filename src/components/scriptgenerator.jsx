// src/components/ScriptGenerator.jsx
import { useFormStore } from '../store/useFormStore';
import JSZip from 'jszip';
import {saveAs} from 'file-saver'


export function ScriptGenerator() {
  const generateScript = useFormStore(state => state.generateScript);
  const selectedLibraries = useFormStore(state => state.selectedLibraries);
  const libraries = useFormStore(state => state.libraries
  )

  
  const scriptContent = generateScript();
  const hasSelected = selectedLibraries.length > 0;

   const generateReadme = () => {
    const selectedLibs = libraries.filter(lib => selectedLibraries.includes(lib.id));
    
    return `# 📦 Pacote de Instalação Automatizado

## Bibliotecas incluídas:
${selectedLibs.map(lib => `- **${lib.name}** - \`${lib.command}\``).join('\n')}

## 📋 Como usar:

### 1. Preparação
\`\`\`bash
# Torne o script executável
chmod +x install.sh

# Execute o script
./install.sh
\`\`\`

### 2. Opção com permissões de administrador
\`\`\`bash
# Se precisar de sudo
sudo ./install.sh
\`\`\`

## ⚠️ Pré-requisitos
- Sistema Linux/macOS/WSL
- Conexão com internet
- Permissões necessárias

## 🛠️ Comandos individuais:
${selectedLibs.map(lib => `### ${lib.name}
\`\`\`bash
${lib.command}
\`\`\``).join('\n')}

---
*Gerado automaticamente em ${new Date().toLocaleDateString()}*`;
  };




  const downloadScript = async () => {
 if (!hasSelected) {
      alert('Selecione pelo menos uma biblioteca!');
      return;
    }

    try {
      const zip = new JSZip();
      
      // Adiciona o script de instalação
      zip.file("install.sh", scriptContent);
      
      // Adiciona o README
      zip.file("README.md", generateReadme());
      
      // Gera o ZIP
      const zipBlob = await zip.generateAsync({ type: "blob" });
      
      // Faz o download
      saveAs(zipBlob, "installation_package.zip");
      
      alert('📦 ZIP baixado com sucesso!');
      
    } catch (error) {
      console.error('Erro ao gerar ZIP:', error);
      alert('Erro ao gerar arquivo ZIP.');
    }
  };

  return (
    <div className="mt-6">
      <div className="flex gap-4 mb-4">

        
        <button
          onClick={downloadScript}
          disabled={!hasSelected}
          className={`px-4 py-2 rounded ${
            hasSelected
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Download Script
        </button>
      </div>

      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
        <pre>{scriptContent}</pre>
      </div>


    </div>
  );
}