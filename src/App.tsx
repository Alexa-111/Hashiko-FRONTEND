import React, { useState } from 'react';

interface Animal {
  id: string;
  name: string;
  breed: string;
  age: string;
  kennel: string;
  status: 'Listo p/ adopción' | 'En tratamiento' | 'En observación';
  statusClass: string;
  note: string;
  noteIcon: string;
  noteColor: string;
  photoUrl: string;
  vet: string;
  history: string;
}

interface Application {
  id: string;
  petName: string;
  petType: string;
  applicant: string;
  matchScore?: string;
  timeAgo: string;
  tags: string[];
  status: string;
  statusClass: string;
  photoUrl: string;
  phone: string;
  email: string;
  details: string;
}

export default function App() {
  // Navigation & Role states
  const [activeTab, setActiveTab] = useState<'explorar' | 'dueño' | 'vet' | 'refugio'>('refugio');
  
  // Shelter Data state
  const [capacity, setCapacity] = useState({ current: 38, max: 45 });
  const [teamReminder, setTeamReminder] = useState(
    'La jornada de adopción abierta comunitaria es este sábado a las 11:00 AM en Plaza Mayor.'
  );

  // Applications
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'luna',
      petName: 'Luna',
      petType: 'Gatita · 4m',
      applicant: 'Camila R.',
      matchScore: '95% Match',
      timeAgo: 'Hace 2 horas',
      tags: ['Casa propia con patio seguro', 'Experiencia con felinos', 'Entrevista hoy 16:30 hrs'],
      status: 'En revisión',
      statusClass: 'bg-[#d2e4d2] text-[#101f13]',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChdZx7_lyj9bYIuCd6nNNMn5yvZqs8WTdAfZTdXXblBqv-jAdJEhp7cZbJ2u1Ti7R4L7vHFfjpSLfeKq_WFI7dYoK8A5zl7Dl_D2M89Mq0jFXUAxQkqxGJSOjC_IGW1VnNbVfeqL_mIzqgLr1DuyRPhm7o0zQHoDiJtyjpZZPiANBG3PpMx1zzstfCGOH8tlRtw0fc4ovBGVduIB57V3bHGEdXgokf9LJtgWw1LgBRVz5LVPrMriCS',
      phone: '+56 9 8472 1928',
      email: 'camila.ramirez@correo.com',
      details: 'Cuenta con protecciones de seguridad en ventanales y experiencia de 6 años cuidando gatos rescatados. Trabajo 100% remoto.'
    },
    {
      id: 'rocky',
      petName: 'Rocky',
      petType: 'Mestizo · 2a',
      applicant: 'Mateo G.',
      matchScore: undefined,
      timeAgo: 'Ayer 18:40',
      tags: ['Esperando visita ambiental virtual'],
      status: 'Pendiente',
      statusClass: 'bg-[#ffe08f] text-[#241a00]',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB9n1sQzsFx6TM5vvixic7yh9Atzfi-K02VxaZIkMsa-Ukd_0h74Ts86bShtPLO0TclPrMjFpQPH0Nnn-XsZExfA-7DVfItdWemgvu0YP7NU7DgB0a2A66KsFhX3Ie7Sf7AyAXlmCmTRsM0e1vw3WvCr8-mkF5Ix5L8u0LP4emAfdc1y1KSJRsfzWI1UrSM-_lkG2h_flT2scLPyITcwqLfKoCg3RJDH4d3j51MUnEW_arFABqSA6h',
      phone: '+56 9 7382 9102',
      email: 'mateo.gutierrez@correo.com',
      details: 'Familia activa que realiza paseos diarios. Buscan un perro compañero y cariñoso con espacio en patio exterior cerrado.'
    }
  ]);

  // Animals in custody
  const [animals, setAnimals] = useState<Animal[]>([
    {
      id: 'max',
      name: 'Max',
      breed: 'Mestizo',
      age: '1 año',
      kennel: 'Canil A-04',
      status: 'Listo p/ adopción',
      statusClass: 'bg-[#d2e4d2] text-[#101f13]',
      note: 'Cuarentena y vacunas completas',
      noteIcon: 'verified',
      noteColor: 'text-[#526254]',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyx_1xLxve9C7csFb_SwyGoQEQ_qDsvQin33-GyMrOF-uPYUMhpM3vZFinHTRQt2uK74Sl0UFpaE-c8r9yqMrXk_dwU_h2gnJ_8cD0fKQOie-_QLCPX3Mi-BqRlUEje_RRuAwGrCxdYfDOEjEErGS1rsGkG4GwE_uwMvz9pdGT7ZG7_YC5t1GjYFVOqh5HnKVVg6vBLWcZzEIqjDlIjrL5BlXmBnHbOFOa8owOn8DwUv9njfOlwogS',
      vet: 'Dr. Alejandro Peña',
      history: 'Rescatado con excelente temperamento. Sociable con perros y niños, activo y juguetón.'
    },
    {
      id: 'kiko',
      name: 'Kiko',
      breed: 'Cachorro rescatado ayer',
      age: '3 meses',
      kennel: 'Módulo Vet',
      status: 'En tratamiento',
      statusClass: 'bg-[#ffdad6] text-[#93000a]',
      note: 'Dra. Sofía atendiendo deshidratación',
      noteIcon: 'medication',
      noteColor: 'text-[#755b00]',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkCmT3vuYZlJ_g9K6rEqKOznyPMcPLl8ZdxDZjIKmrzMdA0qVsE9eprstui87Y4n9tuVUwNCbvmcgQddQ2V8PuJ3TOrq-hF8xdmiDJen9r5H-v2zoI4UlyY_YFuEMHSHRGcw7hVSZGJvUEZLwzjn6D3tsLmZTLEvZ-2OX0EiuH14fdJcJF3YFeMEhCqxU1ruDvSv8oxGKNUXKe7152vMm9tS30nDyN-b4uHV5BKS_IDqK_cL2WH5Lp',
      vet: 'Dra. Sofía Morales',
      history: 'Ingresó con deshidratación y desnutrición leve. En plan de fluidoterapia y suero glucosalino. Evolución favorable.'
    }
  ]);

  // Modal States
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showNewRescueModal, setShowNewRescueModal] = useState(false);
  const [showMassAlertModal, setShowMassAlertModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState<string | null>(null);

  // Form states for modals
  const [newRescueForm, setNewRescueForm] = useState({
    name: '',
    species: 'Perro',
    age: '',
    kennel: 'Canil A-05',
    notes: ''
  });
  const [scheduleDate, setScheduleDate] = useState('Hoy 18:00 hrs');
  const [alertText, setAlertText] = useState('Alerta de búsqueda activa en el sector Parque Central.');

  const triggerToast = (msg: string) => {
    setShowSuccessToast(msg);
    setTimeout(() => setShowSuccessToast(null), 3000);
  };

  const handlePreApprove = (appId: string) => {
    setApplications(prev =>
      prev.map(a =>
        a.id === appId
          ? { ...a, status: 'Pre-aprobada ✓', statusClass: 'bg-[#d2e4d2] text-[#101f13] font-bold' }
          : a
      )
    );
    triggerToast(`¡Postulación de ${applications.find(a => a.id === appId)?.applicant} pre-aprobada con éxito!`);
    setSelectedApplication(null);
  };

  const handleCreateRescue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRescueForm.name) return;

    const newAnimal: Animal = {
      id: `rescue-${Date.now()}`,
      name: newRescueForm.name,
      breed: `${newRescueForm.species} Mestizo`,
      age: newRescueForm.age || 'Edad est. 1 año',
      kennel: newRescueForm.kennel,
      status: 'En observación',
      statusClass: 'bg-[#ffe08f] text-[#241a00]',
      note: newRescueForm.notes || 'Ingreso registrado en enfermería',
      noteIcon: 'sound_detection_dog_barking',
      noteColor: 'text-[#755b00]',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyx_1xLxve9C7csFb_SwyGoQEQ_qDsvQin33-GyMrOF-uPYUMhpM3vZFinHTRQt2uK74Sl0UFpaE-c8r9yqMrXk_dwU_h2gnJ_8cD0fKQOie-_QLCPX3Mi-BqRlUEje_RRuAwGrCxdYfDOEjEErGS1rsGkG4GwE_uwMvz9pdGT7ZG7_YC5t1GjYFVOqh5HnKVVg6vBLWcZzEIqjDlIjrL5BlXmBnHbOFOa8owOn8DwUv9njfOlwogS',
      vet: 'Equipo Veterinario Hashiko',
      history: 'Ficha médica aperturada hoy. Se programó examen parasitológico y plan vacunal.'
    };

    setAnimals(prev => [newAnimal, ...prev]);
    setCapacity(prev => ({ ...prev, current: Math.min(prev.max, prev.current + 1) }));
    setShowNewRescueModal(false);
    setNewRescueForm({ name: '', species: 'Perro', age: '', kennel: 'Canil A-05', notes: '' });
    triggerToast(`¡Ficha de ${newAnimal.name} creada y asignada a ${newAnimal.kennel}!`);
  };

  const freeKennels = capacity.max - capacity.current;
  const capacityPercent = Math.round((capacity.current / capacity.max) * 100);

  return (
    <div className="bg-[#fff8f5] font-['Quicksand'] text-[#1e1b18] min-h-screen flex flex-col selection:bg-[#ffdbd0] selection:text-[#541400]">
      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1e1b18] text-[#fff8f5] px-4 py-2.5 rounded-xl shadow-lg border border-[#88726c] flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#ffe08f] text-[20px]">check_circle</span>
          <span className="text-sm font-semibold">{showSuccessToast}</span>
        </div>
      )}

      {/* FIXED HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#fff8f5]/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e9e1dc]/60">
        <div className="h-20 px-4 max-w-md mx-auto flex items-center justify-between gap-1">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('refugio')}
            className="flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
          >
            <img
              alt="Hashiko Pet Rescue Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqxZGTaiTV0q0q2PuVRah1z9tocJCO8IH5pUvE6puRMRQSaMswQk9HEhh2Rgg4QT5Tw1ykzR89qjHlN0pay9BeffRg3IrYt_XEFt_WM-W7SRKobtUzybNaokVoft4PLq2eyMqlBEB2nhpl9vlle7yWapI7RVVr1e08dccyOy4wmkI4_QCsoYwsglLqvs2FFWKE20-Oa60asGfoeeTMwc6wKACNslxj17rjHzFwr5YnwTKAcX4t2akt"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-['Epilogue'] font-bold text-[19px] text-[#1e1b18] tracking-tight leading-none">
                  Hashiko
                </span>
                <span className="material-symbols-outlined text-[#99462a] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  pets
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#55433d] truncate max-w-[90px]">
                Gestión
              </span>
            </div>
          </div>

          {/* Top Navigation Switcher Pills */}
          <div className="flex items-center bg-[#efe6e2]/90 p-1 rounded-full shadow-[2px_2px_0px_#88726c] border border-[#88726c]/30">
            <button
              onClick={() => setActiveTab('explorar')}
              className={`px-2 py-1 rounded-full font-bold text-[11px] min-h-[30px] flex items-center transition-all ${
                activeTab === 'explorar'
                  ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                  : 'text-[#55433d] hover:text-[#1e1b18]'
              }`}
            >
              Explorar
            </button>
            <button
              onClick={() => setActiveTab('dueño')}
              className={`px-2 py-1 rounded-full font-bold text-[11px] min-h-[30px] flex items-center transition-all ${
                activeTab === 'dueño'
                  ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                  : 'text-[#55433d] hover:text-[#1e1b18]'
              }`}
            >
              Dueño
            </button>
            <button
              onClick={() => setActiveTab('vet')}
              className={`px-2 py-1 rounded-full font-bold text-[11px] min-h-[30px] flex items-center transition-all ${
                activeTab === 'vet'
                  ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                  : 'text-[#55433d] hover:text-[#1e1b18]'
              }`}
            >
              Vet
            </button>
            <button
              onClick={() => setActiveTab('refugio')}
              className={`px-2 py-1 rounded-full font-bold text-[11px] min-h-[30px] flex items-center transition-all ${
                activeTab === 'refugio'
                  ? 'bg-[#99462a] text-white shadow-[1px_1px_0px_#541400]'
                  : 'text-[#55433d] hover:text-[#1e1b18]'
              }`}
            >
              Refugio
            </button>
          </div>

          {/* Profile Button */}
          <button
            onClick={() => triggerToast('Sesión activa: Refugio Huellitas de Esperanza (Admin)')}
            className="relative p-1 rounded-full bg-[#fbf2ed] shadow-[2px_2px_0px_#88726c] border border-[#88726c]/30 flex items-center justify-center min-w-[40px] min-h-[40px] shrink-0 active:scale-95 transition-transform"
            aria-label="Perfil de usuario"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-K2E7mpFd10F3ZsshKmulScdMXYOfJIWeXFkcLxwRv013nMwYWUJvC8oEI5DNTEXv2sCL002DXcinBeHP7cPTRILTKkVPy37kNrU112iuQXvOhTpJQGI6RQ6fxYTdUVu-v-Omkc9QRa2M1tG12ekfg4-P0Y8bWn5haBdRclreXuNuI0XuTqTAUCnjHB1paAlaVmCQJQQ80zPV0fScYlpeOsqZfLPf28lK_8JBIR2GefSNPrZWrlVf"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#526254] rounded-full border-2 border-[#fff8f5]"></span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full max-w-md mx-auto pt-22 pb-28 px-4 flex flex-col gap-4">
        {/* Conditional Screen Context: If other tabs are chosen, show lightweight friendly view */}
        {activeTab !== 'refugio' ? (
          <div className="bg-white rounded-xl p-5 shadow-md flex flex-col gap-3 border border-[#88726c]/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#99462a] text-[24px]">
                {activeTab === 'explorar' ? 'travel_explore' : activeTab === 'dueño' ? 'cottage' : 'medical_services'}
              </span>
              <h2 className="font-['Epilogue'] font-semibold text-lg text-[#1e1b18] capitalize">
                {activeTab === 'explorar' ? 'Módulo Explorar & Adopciones' : activeTab === 'dueño' ? 'Mi Espacio Dueño' : 'Clínica Veterinaria'}
              </h2>
            </div>
            <p className="text-sm text-[#55433d]">
              {activeTab === 'explorar' && 'Explora animales listos para adopción responsable en la red comunitaria de Hashiko.'}
              {activeTab === 'dueño' && 'Gestiona el carnet digital de tu mascota, vacunas, chip y citas médicas.'}
              {activeTab === 'vet' && 'Historial clínico, triaje veterinario y tratamientos en curso para animales del refugio.'}
            </p>
            <button
              onClick={() => setActiveTab('refugio')}
              className="mt-2 py-2 px-4 rounded-lg bg-[#99462a] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-98"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Volver al Cuaderno de Gestión Refugio
            </button>
          </div>
        ) : null}

        {/* PRIMARY REFUGIO SCREEN (The exact UI from screenshot) */}
        {activeTab === 'refugio' && (
          <>
            {/* Washi Tape Banner & Shelter Title Card */}
            <div className="relative w-full bg-white rounded-xl p-4 shadow-md border border-[#88726c]/20">
              {/* Faux Washi Tape Accent */}
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#ffe08f]/95 text-[#241a00] font-bold text-[11px] shadow-sm rounded -rotate-2 select-none border border-[#c9a84c]/50">
                ✦ CUADERNO DE GESTIÓN VET &amp; REFUGIO
              </div>

              <div className="flex items-start justify-between gap-2 pt-2">
                <div className="flex flex-col">
                  <h1 className="font-['Epilogue'] font-semibold text-[20px] text-[#1e1b18] leading-tight">
                    Huellitas de Esperanza
                  </h1>
                  <span className="text-[13px] text-[#55433d] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-[#99462a]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      home_pin
                    </span>
                    Sede Central Norte · Matrícula REF-409
                  </span>
                </div>
                <button
                  onClick={() => triggerToast('Cámara de reconocimiento e inventario lista')}
                  className="w-10 h-10 rounded-full bg-[#efe6e2] flex items-center justify-center text-[#99462a] shadow-sm hover:bg-[#e9e1dc] active:scale-95 transition-transform"
                  aria-label="Cámara"
                >
                  <span className="material-symbols-outlined text-[22px]">flip_camera_ios</span>
                </button>
              </div>

              {/* Capacity Bar / Gauge */}
              <div className="mt-4 bg-[#fbf2ed] rounded-lg p-2.5 flex flex-col gap-1.5 shadow-inner border border-[#dbc1b9]/50">
                <div className="flex items-center justify-between text-[12px] font-bold">
                  <span className="text-[#1e1b18] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#755b00]">inventory_2</span>
                    Capacidad del Refugio
                  </span>
                  <span className="text-[#99462a] font-bold">
                    {capacity.current} / {capacity.max} cupos ({capacityPercent}%)
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-3 bg-[#f5ece7] rounded-full overflow-hidden p-0.5 border border-[#88726c]/20">
                  <div
                    className="h-full bg-[#d97757] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, capacityPercent)}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-[#55433d] text-[11px] pt-0.5">
                  <span className="font-semibold">{freeKennels} caniles libres</span>
                  <span className="text-[#755b00] font-bold flex items-center gap-0.5">
                    ⚡ Alerta de espacio alta
                  </span>
                </div>
              </div>
            </div>

            {/* Key Metrics Bento Grid (Paper Notes Style) */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Note 1: Custodia */}
              <div className="relative bg-white p-3.5 rounded-xl shadow-md border border-[#88726c]/20 flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-1.5 right-4 w-6 h-3 bg-[#d2e4d2]/90 rounded-sm rotate-6 border border-[#526254]/30"></div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-[#d2e4d2] flex items-center justify-center text-[#566758]">
                      <span className="material-symbols-outlined text-[16px]">sound_detection_dog_barking</span>
                    </span>
                    <span className="text-[11px] font-bold bg-[#f5ece7] px-2 py-0.5 rounded-full text-[#55433d]">
                      Activos
                    </span>
                  </div>
                  <div className="mt-2 font-['Epilogue'] font-semibold text-[24px] text-[#1e1b18]">
                    24
                  </div>
                  <div className="text-[12px] font-bold text-[#1e1b18]">
                    En custodia
                  </div>
                </div>
                <div className="mt-2 pt-1.5 bg-[#fbf2ed] rounded-lg p-1.5 text-center text-[11px] font-semibold text-[#55433d]">
                  🐶 15 Perros · 🐱 9 Gatos
                </div>
              </div>

              {/* Note 2: Adopciones */}
              <div className="relative bg-white p-3.5 rounded-xl shadow-md border border-[#88726c]/20 flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-1.5 left-4 w-6 h-3 bg-[#ffe08f]/90 rounded-sm -rotate-3 border border-[#755b00]/30"></div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-[#c9a84c]/30 flex items-center justify-center text-[#503d00]">
                      <span className="material-symbols-outlined text-[16px]">assignment</span>
                    </span>
                    <span className="text-[11px] font-bold bg-[#ffdbd0] text-[#7a2f15] px-2 py-0.5 rounded-full">
                      3 URG
                    </span>
                  </div>
                  <div className="mt-2 font-['Epilogue'] font-semibold text-[24px] text-[#1e1b18]">
                    12
                  </div>
                  <div className="text-[12px] font-bold text-[#1e1b18]">
                    Adopciones
                  </div>
                </div>
                <div className="mt-2 pt-1.5 bg-[#fbf2ed] rounded-lg p-1.5 text-center text-[11px] font-semibold text-[#55433d]">
                  3 entrevistas hoy
                </div>
              </div>

              {/* Note 3: Full Width Reunited highlight note */}
              <div className="col-span-2 relative bg-[#d2e4d2] p-3.5 rounded-xl shadow-md border border-[#526254]/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-white text-[#526254] flex items-center justify-center shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      favorite
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Epilogue'] font-semibold text-[18px] text-[#101f13] leading-tight">
                      5 Reencuentros
                    </span>
                    <span className="text-[13px] text-[#3b4b3d] leading-snug">
                      Casos de extravío resueltos con éxito esta semana 💛
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#526254] text-[24px]">verified</span>
              </div>
            </div>

            {/* Administrative Quick Actions (Bocetados) */}
            <div className="flex flex-col gap-1.5 mt-1">
              <div className="flex items-center justify-between px-1">
                <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#99462a] text-[20px]">draw</span>
                  Acciones Rápidas
                </span>
                <span className="text-[11px] font-bold text-[#55433d]">Atajos de campo</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setShowNewRescueModal(true)}
                  className="flex flex-col items-center justify-center p-2.5 bg-white rounded-xl shadow-sm hover:shadow-md border border-[#88726c]/20 text-center group active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd0] flex items-center justify-center text-[#99462a] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  </div>
                  <span className="mt-2 text-[12px] font-bold text-[#1e1b18] leading-tight">
                    Nuevo Rescate
                  </span>
                </button>

                <button
                  onClick={() => setShowMassAlertModal(true)}
                  className="flex flex-col items-center justify-center p-2.5 bg-white rounded-xl shadow-sm hover:shadow-md border border-[#88726c]/20 text-center group active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ffe08f] flex items-center justify-center text-[#584400] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">campaign</span>
                  </div>
                  <span className="mt-2 text-[12px] font-bold text-[#1e1b18] leading-tight">
                    Alerta Masiva
                  </span>
                </button>

                <button
                  onClick={() => setShowReportModal(true)}
                  className="flex flex-col items-center justify-center p-2.5 bg-white rounded-xl shadow-sm hover:shadow-md border border-[#88726c]/20 text-center group active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d5e7d5] flex items-center justify-center text-[#526254] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                  </div>
                  <span className="mt-2 text-[12px] font-bold text-[#1e1b18] leading-tight">
                    Reporte Mes
                  </span>
                </button>
              </div>
            </div>

            {/* Bandeja de Adopciones */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18]">
                    Bandeja de Adopciones
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#99462a] text-white text-[11px] font-bold shadow-sm">
                    {applications.length}
                  </span>
                </div>
                <button 
                  onClick={() => triggerToast(`Visualizando las ${applications.length} solicitudes activas`)}
                  className="text-[12px] font-bold text-[#99462a] hover:underline"
                >
                  Ver todas
                </button>
              </div>

              {/* Review Card 1 (Luna) */}
              {applications.filter(a => a.id === 'luna').map(app => (
                <div
                  key={app.id}
                  className="relative bg-white rounded-xl p-3.5 shadow-md border border-[#88726c]/20 flex flex-col gap-2.5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        className="w-12 h-12 rounded-lg object-cover shadow-sm border border-[#88726c]/20"
                        alt="Luna Gatita"
                        src={app.photoUrl}
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18] leading-tight">
                            {app.petName}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-[#f5ece7] text-[11px] font-semibold text-[#55433d]">
                            {app.petType}
                          </span>
                        </div>
                        <span className="text-[13px] text-[#55433d]">
                          Postulante: <strong className="text-[#1e1b18] font-semibold">{app.applicant}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-2 py-0.5 rounded-full bg-[#d2e4d2] text-[#101f13] text-[12px] font-bold flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">psychology</span>
                        {app.matchScore}
                      </span>
                      <span className="text-[#55433d] text-[11px] mt-1">{app.timeAgo}</span>
                    </div>
                  </div>

                  {/* Applicant Quick Factors */}
                  <div className="bg-[#fbf2ed] rounded-lg p-2 flex flex-wrap gap-1.5 text-[#55433d] text-[11px]">
                    <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded shadow-xs text-[#1e1b18] font-medium border border-[#88726c]/10">
                      <span className="material-symbols-outlined text-[13px] text-[#526254]">house</span>
                      Casa propia con patio seguro
                    </span>
                    <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded shadow-xs text-[#1e1b18] font-medium border border-[#88726c]/10">
                      <span className="material-symbols-outlined text-[13px] text-[#526254]">pets</span>
                      Experiencia con felinos
                    </span>
                    <span className="flex items-center gap-1 bg-[#ffe08f] text-[#584400] px-2 py-0.5 rounded shadow-xs font-bold border border-[#c9a84c]/40">
                      <span className="material-symbols-outlined text-[13px]">event_available</span>
                      Entrevista hoy 16:30 hrs
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <button
                      onClick={() => setSelectedApplication(app)}
                      className="flex-1 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-[12px] font-bold flex items-center justify-center gap-1 shadow-sm hover:bg-[#e9e1dc] active:scale-98 transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">folder_open</span>
                      Revisar Ficha
                    </button>
                    <button
                      onClick={() => handlePreApprove(app.id)}
                      className="flex-1 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#99462a] text-white text-[12px] font-bold flex items-center justify-center gap-1 shadow-sm hover:bg-[#7a2f15] active:scale-98 transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                      {app.status === 'Pre-aprobada ✓' ? 'Pre-aprobada ✓' : 'Pre-aprobar'}
                    </button>
                  </div>
                </div>
              ))}

              {/* Review Card 2 (Rocky) */}
              {applications.filter(a => a.id === 'rocky').map(app => (
                <div
                  key={app.id}
                  className="relative bg-white rounded-xl p-3.5 shadow-md border border-[#88726c]/20 flex flex-col gap-2.5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        className="w-12 h-12 rounded-lg object-cover shadow-sm border border-[#88726c]/20"
                        alt="Rocky Perro"
                        src={app.photoUrl}
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18] leading-tight">
                            {app.petName}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-[#f5ece7] text-[11px] font-semibold text-[#55433d]">
                            {app.petType}
                          </span>
                        </div>
                        <span className="text-[13px] text-[#55433d]">
                          Postulante: <strong className="text-[#1e1b18] font-semibold">{app.applicant}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-2 py-0.5 rounded-full bg-[#ffe08f] text-[#241a00] text-[12px] font-bold flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">pending</span>
                        {app.status}
                      </span>
                      <span className="text-[#55433d] text-[11px] mt-1">{app.timeAgo}</span>
                    </div>
                  </div>

                  {/* Detail Status & Agendar CTA */}
                  <div className="bg-[#fbf2ed] rounded-lg p-2 flex items-center justify-between text-[#55433d] text-[11px]">
                    <span className="flex items-center gap-1 text-[#1e1b18] font-medium">
                      <span className="material-symbols-outlined text-[15px] text-[#755b00]">home_health</span>
                      Esperando visita ambiental virtual
                    </span>
                    <button
                      onClick={() => setShowScheduleModal(true)}
                      className="text-[#99462a] text-[12px] hover:underline font-bold"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Animales en Custodia - Fichas Rápidas */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18]">
                    Animales en Custodia
                  </span>
                  <span className="text-[12px] font-bold text-[#55433d]">
                    ({animals.length} fichas activas)
                  </span>
                </div>
                <button
                  onClick={() => triggerToast('Filtro: Todos los animales en custodia')}
                  className="text-[12px] font-bold text-[#99462a] hover:underline"
                >
                  Filtros
                </button>
              </div>

              {/* Animal Card 1: Max */}
              {animals.filter(a => a.id === 'max').map(animal => (
                <div
                  key={animal.id}
                  onClick={() => setSelectedAnimal(animal)}
                  className="bg-white rounded-xl p-3.5 shadow-md border border-[#88726c]/20 flex items-center justify-between gap-2.5 cursor-pointer hover:border-[#99462a]/40 transition-all active:scale-99"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-14 h-14 rounded-xl object-cover shadow-sm shrink-0 border border-[#88726c]/20"
                      alt={animal.name}
                      src={animal.photoUrl}
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18]">
                          {animal.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#d2e4d2] text-[#101f13] text-[11px] font-bold">
                          {animal.status}
                        </span>
                      </div>
                      <span className="text-[13px] text-[#55433d]">
                        {animal.breed} · {animal.age} · {animal.kennel}
                      </span>
                      <span className="text-[11px] text-[#526254] flex items-center gap-1 mt-0.5 font-bold">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        {animal.note}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg bg-[#efe6e2] text-[#1e1b18] hover:bg-[#e9e1dc] transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
              ))}

              {/* Animal Card 2: Kiko */}
              {animals.filter(a => a.id === 'kiko').map(animal => (
                <div
                  key={animal.id}
                  onClick={() => setSelectedAnimal(animal)}
                  className="bg-white rounded-xl p-3.5 shadow-md border border-[#88726c]/20 flex items-center justify-between gap-2.5 cursor-pointer hover:border-[#99462a]/40 transition-all active:scale-99"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-14 h-14 rounded-xl object-cover shadow-sm shrink-0 border border-[#88726c]/20"
                      alt={animal.name}
                      src={animal.photoUrl}
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-['Epilogue'] font-semibold text-[18px] text-[#1e1b18]">
                          {animal.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] text-[11px] font-bold">
                          {animal.status}
                        </span>
                      </div>
                      <span className="text-[13px] text-[#55433d]">
                        {animal.breed} · {animal.kennel}
                      </span>
                      <span className="text-[11px] text-[#755b00] flex items-center gap-1 mt-0.5 font-bold">
                        <span className="material-symbols-outlined text-[14px]">medication</span>
                        {animal.note}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg bg-[#efe6e2] text-[#1e1b18] hover:bg-[#e9e1dc] transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Interactive Journal Tip Box / Team Reminder */}
            <div className="relative bg-[#f5ece7] rounded-xl p-3.5 shadow-inner border border-[#dbc1b9]/60 flex items-center gap-3 mt-1">
              <div className="w-8 h-8 rounded-full bg-[#ffe08f] text-[#584400] flex items-center justify-center shrink-0 shadow-xs border border-[#c9a84c]/40">
                <span className="material-symbols-outlined text-[18px]">lightbulb</span>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#1e1b18]">
                    Recordatorio del Equipo
                  </span>
                  <button
                    onClick={() => {
                      const newText = prompt('Editar recordatorio del equipo:', teamReminder);
                      if (newText) setTeamReminder(newText);
                    }}
                    className="text-[11px] text-[#99462a] hover:underline font-bold"
                  >
                    Editar
                  </button>
                </div>
                <span className="text-[13px] text-[#55433d] leading-snug">
                  {teamReminder}
                </span>
              </div>
            </div>
          </>
        )}
      </main>

      {/* BOTTOM FIXED NAVIGATION BAR */}
      <nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#fff8f5]/90 backdrop-blur-xl border-t border-[#e9e1dc] shadow-[0_-2px_12px_rgba(0,0,0,0.05)]">
        <div className="h-20 max-w-md mx-auto px-4 flex items-center justify-around">
          <button
            onClick={() => setActiveTab('explorar')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 min-w-[44px] min-h-[44px] transition-all ${
              activeTab === 'explorar'
                ? 'text-[#99462a] font-bold'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={activeTab === 'explorar' ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              travel_explore
            </span>
            <span className="text-[11px] font-bold text-center">Explorar</span>
          </button>

          <button
            onClick={() => setActiveTab('dueño')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 min-w-[44px] min-h-[44px] transition-all ${
              activeTab === 'dueño'
                ? 'text-[#99462a] font-bold'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={activeTab === 'dueño' ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              cottage
            </span>
            <span className="text-[11px] font-bold text-center">Mi Espacio</span>
          </button>

          <button
            onClick={() => setActiveTab('vet')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 min-w-[44px] min-h-[44px] transition-all ${
              activeTab === 'vet'
                ? 'text-[#99462a] font-bold'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={activeTab === 'vet' ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              medical_services
            </span>
            <span className="text-[11px] font-bold text-center">Clínica</span>
          </button>

          <button
            onClick={() => setActiveTab('refugio')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-14 min-w-[44px] min-h-[44px] transition-all ${
              activeTab === 'refugio'
                ? 'text-[#99462a] font-bold'
                : 'text-[#55433d] hover:text-[#1e1b18]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={activeTab === 'refugio' ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              fact_check
            </span>
            <span className="text-[11px] font-bold text-center">Gestión</span>
          </button>
        </div>
      </nav>

      {/* MODAL 1: REVISAR FICHA DE POSTULANTE (Luna) */}
      {selectedApplication && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-[#88726c]/30 flex flex-col gap-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#e9e1dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#99462a]">assignment_ind</span>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#1e1b18]">
                  Ficha de Postulación
                </h3>
              </div>
              <button
                onClick={() => setSelectedApplication(null)}
                className="w-8 h-8 rounded-full bg-[#f5ece7] text-[#55433d] flex items-center justify-center hover:bg-[#e9e1dc]"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-3 bg-[#fbf2ed] p-3 rounded-xl border border-[#dbc1b9]/40">
              <img
                src={selectedApplication.photoUrl}
                alt={selectedApplication.petName}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-['Epilogue'] font-semibold text-base text-[#1e1b18]">
                  {selectedApplication.petName}
                </h4>
                <p className="text-xs text-[#55433d]">{selectedApplication.petType}</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-[#d2e4d2] text-[#101f13] text-[11px] font-bold">
                  {selectedApplication.matchScore || 'En Evaluación'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#1e1b18]">
              <div>
                <span className="text-xs text-[#55433d] font-bold uppercase">Postulante:</span>
                <p className="font-semibold">{selectedApplication.applicant}</p>
                <p className="text-xs text-[#55433d]">📞 {selectedApplication.phone} · ✉️ {selectedApplication.email}</p>
              </div>

              <div>
                <span className="text-xs text-[#55433d] font-bold uppercase">Condiciones del Hogar:</span>
                <p className="text-xs text-[#55433d] mt-0.5">{selectedApplication.details}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#e9e1dc]">
              <button
                onClick={() => setSelectedApplication(null)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-xs font-bold hover:bg-[#e9e1dc]"
              >
                Cerrar
              </button>
              <button
                onClick={() => handlePreApprove(selectedApplication.id)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#99462a] text-white text-xs font-bold hover:bg-[#7a2f15]"
              >
                Aprobar Postulación
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: AGENDAR VISITA AMBIENTAL (Rocky) */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-[#88726c]/30 flex flex-col gap-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#e9e1dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#755b00]">videocam</span>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#1e1b18]">
                  Agendar Visita Virtual
                </h3>
              </div>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="w-8 h-8 rounded-full bg-[#f5ece7] text-[#55433d] flex items-center justify-center hover:bg-[#e9e1dc]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#55433d]">
              Coordinación de llamada ambiental para validar cerramientos de terraza y conocer a la familia de Mateo G. (Postulante de Rocky).
            </p>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#1e1b18]">Horario propuesto:</label>
              <input
                type="text"
                value={scheduleDate}
                onChange={e => setScheduleDate(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#88726c] bg-white focus:outline-[#99462a]"
              />
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#e9e1dc]">
              <button
                onClick={() => setShowScheduleModal(false)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-xs font-bold hover:bg-[#e9e1dc]"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowScheduleModal(false);
                  triggerToast(`¡Visita virtual con Mateo G. confirmada para ${scheduleDate}!`);
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-[#99462a] text-white text-xs font-bold hover:bg-[#7a2f15]"
              >
                Confirmar Cita
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: NUEVO RESCATE */}
      {showNewRescueModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateRescue}
            className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-[#88726c]/30 flex flex-col gap-3.5 animate-in fade-in zoom-in-95"
          >
            <div className="flex items-center justify-between border-b border-[#e9e1dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#99462a]">pets</span>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#1e1b18]">
                  Nuevo Ingreso / Rescate
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowNewRescueModal(false)}
                className="w-8 h-8 rounded-full bg-[#f5ece7] text-[#55433d] flex items-center justify-center hover:bg-[#e9e1dc]"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1e1b18]">Nombre provisorio:</label>
              <input
                required
                placeholder="Ej. Bruno"
                value={newRescueForm.name}
                onChange={e => setNewRescueForm({ ...newRescueForm, name: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#88726c] bg-white focus:outline-[#99462a]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1e1b18]">Especie:</label>
                <select
                  value={newRescueForm.species}
                  onChange={e => setNewRescueForm({ ...newRescueForm, species: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#88726c] bg-white"
                >
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1e1b18]">Canil Asignado:</label>
                <input
                  value={newRescueForm.kennel}
                  onChange={e => setNewRescueForm({ ...newRescueForm, kennel: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#88726c] bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1e1b18]">Notas de ingreso:</label>
              <input
                placeholder="Ej. Cuarentena preventiva, desparasitado"
                value={newRescueForm.notes}
                onChange={e => setNewRescueForm({ ...newRescueForm, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#88726c] bg-white"
              />
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#e9e1dc]">
              <button
                type="button"
                onClick={() => setShowNewRescueModal(false)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-xs font-bold"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 py-2 px-3 rounded-lg bg-[#99462a] text-white text-xs font-bold hover:bg-[#7a2f15]"
              >
                Registrar Ficha
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL 4: ALERTA MASIVA */}
      {showMassAlertModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-[#88726c]/30 flex flex-col gap-3.5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#e9e1dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#755b00]">campaign</span>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#1e1b18]">
                  Emisión de Alerta Masiva
                </h3>
              </div>
              <button
                onClick={() => setShowMassAlertModal(false)}
                className="w-8 h-8 rounded-full bg-[#f5ece7] text-[#55433d] flex items-center justify-center hover:bg-[#e9e1dc]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#55433d]">
              Envía una notificación prioritaria a la red de voluntarios, clínicas veterinarias cercanas y hogares temporales.
            </p>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1e1b18]">Mensaje de alerta:</label>
              <textarea
                rows={3}
                value={alertText}
                onChange={e => setAlertText(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#88726c] bg-white"
              />
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#e9e1dc]">
              <button
                onClick={() => setShowMassAlertModal(false)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-xs font-bold"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowMassAlertModal(false);
                  triggerToast('¡Alerta masiva transmitida a 1.240 rescatistas de la zona!');
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-[#99462a] text-white text-xs font-bold hover:bg-[#7a2f15]"
              >
                Emitir Alerta
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: REPORTE MENSUAL */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-[#88726c]/30 flex flex-col gap-3.5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#e9e1dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#526254]">analytics</span>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#1e1b18]">
                  Reporte Operativo Mensual
                </h3>
              </div>
              <button
                onClick={() => setShowReportModal(false)}
                className="w-8 h-8 rounded-full bg-[#f5ece7] text-[#55433d] flex items-center justify-center hover:bg-[#e9e1dc]"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#fbf2ed] p-3 rounded-xl flex flex-col gap-2 text-xs text-[#55433d]">
              <div className="flex justify-between font-bold text-[#1e1b18]">
                <span>Total ingresos del mes:</span>
                <span>28 rescates</span>
              </div>
              <div className="flex justify-between font-bold text-[#526254]">
                <span>Adopciones concluidas:</span>
                <span>19 adopciones</span>
              </div>
              <div className="flex justify-between font-bold text-[#755b00]">
                <span>Mascotas reunidas (extravíos):</span>
                <span>14 reencuentros</span>
              </div>
              <div className="flex justify-between font-bold text-[#99462a]">
                <span>Índice de permanencia media:</span>
                <span>21 días</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#e9e1dc]">
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-xs font-bold"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setShowReportModal(false);
                  triggerToast('Reporte PDF descargado');
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-[#526254] text-white text-xs font-bold"
              >
                Exportar PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 6: DOSSIER CLÍNICO DEL ANIMAL (Max, Kiko, etc.) */}
      {selectedAnimal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-[#88726c]/30 flex flex-col gap-3.5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#e9e1dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#99462a]">medical_information</span>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#1e1b18]">
                  Ficha Médica &amp; Canil
                </h3>
              </div>
              <button
                onClick={() => setSelectedAnimal(null)}
                className="w-8 h-8 rounded-full bg-[#f5ece7] text-[#55433d] flex items-center justify-center hover:bg-[#e9e1dc]"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={selectedAnimal.photoUrl}
                alt={selectedAnimal.name}
                className="w-16 h-16 rounded-xl object-cover shadow-sm border border-[#88726c]/20"
              />
              <div>
                <h4 className="font-['Epilogue'] font-semibold text-lg text-[#1e1b18]">
                  {selectedAnimal.name}
                </h4>
                <p className="text-xs text-[#55433d]">
                  {selectedAnimal.breed} · {selectedAnimal.age}
                </p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${selectedAnimal.statusClass}`}>
                  {selectedAnimal.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-[#55433d] bg-[#fbf2ed] p-3 rounded-xl border border-[#dbc1b9]/40">
              <p><strong className="text-[#1e1b18]">Ubicación:</strong> {selectedAnimal.kennel}</p>
              <p><strong className="text-[#1e1b18]">Veterinario a cargo:</strong> {selectedAnimal.vet}</p>
              <p><strong className="text-[#1e1b18]">Estado clínico:</strong> {selectedAnimal.note}</p>
              <p><strong className="text-[#1e1b18]">Historia:</strong> {selectedAnimal.history}</p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#e9e1dc]">
              <button
                onClick={() => setSelectedAnimal(null)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#efe6e2] text-[#1e1b18] text-xs font-bold"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setSelectedAnimal(null);
                  triggerToast(`Ficha clínica de ${selectedAnimal.name} actualizada`);
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-[#99462a] text-white text-xs font-bold hover:bg-[#7a2f15]"
              >
                Guardar Notas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
