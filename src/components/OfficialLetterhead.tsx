import React from 'react';
import type { ElectionPeriod, SchoolConfig } from '../types/index.ts';

interface OfficialLetterheadProps {
  schoolConfig: SchoolConfig;
  activePeriod: ElectionPeriod;
  className?: string;
  forceMode?: 'CUSTOM_IMAGE' | 'AUTO_TEXT';
}

export const OfficialLetterhead: React.FC<OfficialLetterheadProps> = ({
  schoolConfig,
  activePeriod,
  className = '',
  forceMode,
}) => {
  const mode = forceMode || schoolConfig.kop_mode || (schoolConfig.kop_url ? 'CUSTOM_IMAGE' : 'AUTO_TEXT');
  const isCustomImage = mode === 'CUSTOM_IMAGE' && Boolean(schoolConfig.kop_url);

  if (isCustomImage && schoolConfig.kop_url) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <div className="w-full flex items-center justify-center">
          <img
            src={schoolConfig.kop_url}
            alt={`KOP Surat Resmi ${schoolConfig.school_name}`}
            className="w-full max-h-40 sm:max-h-48 object-contain print:w-full print:max-h-44"
            onError={(e) => {
              // If custom image fails to load, temporarily hide it and show auto text fallback
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      </div>
    );
  }

  // AUTO_TEXT Mode: Tata Naskah Dinas Resmi (Left Logo, Center Text, Right Logo, Double Lines)
  return (
    <div className={`w-full space-y-1 ${className}`}>
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Primary Emblem / Logo Sekolah */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-1">
          {schoolConfig.logo_url ? (
            <img
              src={schoolConfig.logo_url}
              alt="Logo Lembaga"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full border border-dashed border-slate-300 rounded flex items-center justify-center text-[10px] text-slate-400">
              Logo
            </div>
          )}
        </div>

        {/* Center: Official Hierarchy Text */}
        <div className="text-center space-y-0.5 flex-1 min-w-0">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-800 leading-tight">
            {schoolConfig.kop_header_line1 || 'PEMERINTAH DAERAH / KEMENTERIAN AGAMA'}
          </h2>
          {schoolConfig.kop_header_line2 && (
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-slate-800 leading-tight">
              {schoolConfig.kop_header_line2}
            </h3>
          )}
          <h3 className="text-base sm:text-xl lg:text-2xl font-black uppercase text-slate-900 tracking-tight leading-tight pt-0.5">
            {schoolConfig.school_name}
          </h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">
            {schoolConfig.school_address}
          </p>
          {schoolConfig.kop_contact_info && (
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-sans leading-tight">
              {schoolConfig.kop_contact_info}
            </p>
          )}
          <p className="text-[10px] sm:text-xs font-bold text-slate-900 tracking-wide pt-1 border-t border-slate-200/80 mt-1">
            PANITIA PEMILIHAN KETUA {schoolConfig.organization_type} MASA BAKTI {activePeriod.year_label}
          </p>
        </div>

        {/* Right: Secondary Logo (Tut Wuri Handayani / Kemenag) or Balanced Spacer */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-1">
          {schoolConfig.secondary_logo_url ? (
            <img
              src={schoolConfig.secondary_logo_url}
              alt="Logo Sekunder"
              className="w-full h-full object-contain"
            />
          ) : (
            // Empty spacer of matching dimensions so center text remains mathematically centered
            <div className="w-full h-full" />
          )}
        </div>

      </div>

      {/* Garis Ganda Kop Surat Khas Indonesia (Double Line: Tebal 3px di atas, Tipis 1px di bawah) */}
      <div className="pt-2">
        <div className="w-full border-b-[2.5px] sm:border-b-[3px] border-slate-900" />
        <div className="w-full border-b border-slate-900 mt-[2px]" />
      </div>
    </div>
  );
};
