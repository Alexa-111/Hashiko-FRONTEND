import React from 'react';

interface BottomNavProps {
  currentTab: 'explorar' | 'mi-espacio' | 'clinica' | 'gestion';
  onTabChange: (tab: 'explorar' | 'mi-espacio' | 'clinica' | 'gestion') => void;
  urgentCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange, urgentCount = 3 }) => {
  const tabs = [
    {
      id: 'explorar' as const,
      label: 'Explorar',
      icon: 'travel_explore',
      badge: null,
    },
    {
      id: 'mi-espacio' as const,
      label: 'Mi Espacio',
      icon: 'cottage',
      badge: null,
    },
    {
      id: 'clinica' as const,
      label: 'Clínica',
      icon: 'medical_services',
      badge: null,
    },
    {
      id: 'gestion' as const,
      label: 'Gestión',
      icon: 'fact_check',
      badge: urgentCount > 0 ? urgentCount : null,
    },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#fff8f5]/92 backdrop-blur-xl border-t border-[#e9e1dc] shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-2xl mx-auto h-20 px-3 flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-1 w-20 h-16 min-w-[48px] min-h-[48px] rounded-xl transition-all ${
                isActive
                  ? 'text-[#99462a] font-bold scale-105'
                  : 'text-[#55433d] hover:text-[#1e1b18] hover:bg-[#efe6e2]/40 active:scale-95'
              }`}
            >
              <div className="relative">
                <span
                  className="material-symbols-outlined text-[26px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {tab.icon}
                </span>
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-2.5 px-1.5 py-0.2 bg-[#99462a] text-white text-[10px] font-bold rounded-full border border-white shadow-xs">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="font-['Quicksand'] text-[11px] tracking-tight text-center leading-none">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-4 h-1 bg-[#99462a] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
