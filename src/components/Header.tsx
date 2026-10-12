import React from 'react';

interface HeaderProps {
  currentTab: 'explorar' | 'mi-espacio' | 'clinica' | 'gestion';
  onTabChange: (tab: 'explorar' | 'mi-espacio' | 'clinica' | 'gestion') => void;
  onProfileClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onTabChange, onProfileClick }) => {
  // Map between bottom nav tab and top pill roles
  const getRoleTab = () => {
    switch (currentTab) {
      case 'explorar':
        return 'Explorar';
      case 'mi-espacio':
        return 'Dueño';
      case 'clinica':
        return 'Vet';
      case 'gestion':
      default:
        return 'Refugio';
    }
  };

  const currentRole = getRoleTab();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fff8f5]/90 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e9e1dc]/80">
      <div className="max-w-2xl mx-auto h-20 px-4 flex items-center justify-between gap-2">
        {/* Brand & Wordmark */}
        <div 
          onClick={() => onTabChange('gestion')}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <img
            alt="Hashiko Pet Rescue Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqxZGTaiTV0q0q2PuVRah1z9tocJCO8IH5pUvE6puRMRQSaMswQk9HEhh2Rgg4QT5Tw1ykzR89qjHlN0pay9BeffRg3IrYt_XEFt_WM-W7SRKobtUzybNaokVoft4PLq2eyMqlBEB2nhpl9vlle7yWapI7RVVr1e08dccyOy4wmkI4_QCsoYwsglLqvs2FFWKE20-Oa60asGfoeeTMwc6wKACNslxj17rjHzFwr5YnwTKAcX4t2akt"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-['Epilogue'] font-bold text-xl text-[#1e1b18] tracking-tight leading-none">
                Hashiko
              </span>
              <span className="material-symbols-outlined text-[#99462a] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                pets
              </span>
            </div>
            <span className="font-['Quicksand'] text-[11px] font-semibold text-[#55433d] truncate max-w-[100px]">
              Gestión
            </span>
          </div>
        </div>

        {/* Top Role Switcher Pills */}
        <div className="flex items-center bg-[#efe6e2]/90 p-1 rounded-full shadow-[2px_2px_0px_#88726c] border border-[#88726c]/30">
          <button
            onClick={() => onTabChange('explorar')}
            className={`px-2.5 py-1 rounded-full font-['Quicksand'] text-[12px] font-bold min-h-[30px] flex items-center transition-all ${
              currentRole === 'Explorar'
                ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            Explorar
          </button>
          <button
            onClick={() => onTabChange('mi-espacio')}
            className={`px-2.5 py-1 rounded-full font-['Quicksand'] text-[12px] font-bold min-h-[30px] flex items-center transition-all ${
              currentRole === 'Dueño'
                ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            Dueño
          </button>
          <button
            onClick={() => onTabChange('clinica')}
            className={`px-2.5 py-1 rounded-full font-['Quicksand'] text-[12px] font-bold min-h-[30px] flex items-center transition-all ${
              currentRole === 'Vet'
                ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            Vet
          </button>
          <button
            onClick={() => onTabChange('gestion')}
            className={`px-2.5 py-1 rounded-full font-['Quicksand'] text-[12px] font-bold min-h-[30px] flex items-center transition-all ${
              currentRole === 'Refugio'
                ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            Refugio
          </button>
        </div>

        {/* User Profile Avatar with Online indicator */}
        <button
          onClick={onProfileClick}
          aria-label="Perfil y ajustes"
          className="relative p-1 rounded-full bg-[#fbf2ed] shadow-[2px_2px_0px_#88726c] border border-[#88726c]/30 flex items-center justify-center min-w-[44px] min-h-[44px] shrink-0 hover:scale-105 active:scale-95 transition-transform"
        >
          <img
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-K2E7mpFd10F3ZsshKmulScdMXYOfJIWeXFkcLxwRv013nMwYWUJvC8oEI5DNTEXv2sCL002DXcinBeHP7cPTRILTKkVPy37kNrU112iuQXvOhTpJQGI6RQ6fxYTdUVu-v-Omkc9QRa2M1tG12ekfg4-P0Y8bWn5haBdRclreXuNuI0XuTqTAUCnjHB1paAlaVmCQJQQ80zPV0fScYlpeOsqZfLPf28lK_8JBIR2GefSNPrZWrlVf"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#526254] rounded-full border-2 border-[#fff8f5]"></span>
        </button>
      </div>
    </header>
  );
};
