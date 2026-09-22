import { useState, useEffect } from 'react';
import { X, Check, Calendar, MapPin, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface InquiryModalProps {
  initialDiscipline?: string;
  onClose: () => void;
}

const STUDIO_WHATSAPP_NUMBER = '917735791248';

export default function InquiryModal({ initialDiscipline = 'Weddings', onClose }: InquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    celebrationType: initialDiscipline,
    season: '2026 / 2027',
    date: '',
    location: '',
    guestCount: 'Under 50 (Intimate)',
    filmPreference: 'Hybrid (35mm & 120 Roll Film + Digital Backup)',
    storyVision: '',
    fullName: '',
    partnerName: '',
    email: '',
    phone: '',
    referral: 'Editorial Feature / Publication'
  });
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [whatsappLink, setWhatsappLink] = useState<string>('');

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateWhatsAppMessage = (ref: string, data: typeof formData) => {
    const parts: string[] = [
      `✨ *COMMISSION INQUIRY — LUMIÈRE STORIES* ✨`,
      `*Reference:* ${ref}`,
      ``,
      `👤 *Client Information:*`,
      `• Name: ${data.fullName || 'Not provided'}`,
      data.partnerName ? `• Partner / Co-Host: ${data.partnerName}` : '',
      `• Email: ${data.email || 'Not provided'}`,
      `• Phone: ${data.phone || 'Not provided'}`,
      data.referral ? `• Discovered via: ${data.referral}` : '',
      ``,
      `🎞️ *Celebration & Commission:*`,
      `• Discipline: ${data.celebrationType}`,
      `• Commission Season: ${data.season}`,
      `• Anticipated Date / Timing: ${data.date || 'To be determined'}`,
      `• Destination / Venue: ${data.location || 'To be determined'}`,
      `• Estimated Guest Assembly: ${data.guestCount}`,
      `• Analog Film Focus: ${data.filmPreference}`,
    ];

    if (data.storyVision && data.storyVision.trim()) {
      parts.push(``, `📝 *Story Vision & Celebratory Notes:*\n${data.storyVision.trim()}`);
    }

    return parts.filter(Boolean).join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `LS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const message = generateWhatsAppMessage(randomRef, formData);
    const url = `https://wa.me/${STUDIO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setSubmittedRef(randomRef);
    setWhatsappLink(url);

    // Automatically trigger WhatsApp in a new tab/window
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // In case browser blocks popup, user has the fallback link in the confirmation view
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0d0b]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#faf9f6] border border-[#cac6bd] max-w-2xl w-full p-6 sm:p-10 relative my-8 shadow-2xl text-[#1a1c1a] cursor-default"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#7a776f] hover:text-[#0e0d0b] hover:bg-[#0e0d0b]/5 transition-colors rounded-full cursor-pointer z-50 flex items-center justify-center"
          aria-label="Close inquiry dialog"
        >
          <X size={22} />
        </button>

        {submittedRef ? (
          /* Submission Confirmation View */
          <div className="space-y-6 text-center py-6 animate-fadeIn">
            <div className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center mx-auto rounded-full shadow-lg">
              <Check size={28} />
            </div>

            <div className="space-y-2">
              <span className="font-label-editorial text-label-editorial uppercase tracking-[0.3em] text-[#7a776f]">
                Commission Inquiry Transmitted
              </span>
              <h3 className="font-headline-lg text-headline-md text-[#0e0d0b]">
                Thank you, {formData.fullName}.
              </h3>
              <p className="font-body-md text-[#494740] max-w-md mx-auto">
                Your inquiry has been formatted and opened directly in WhatsApp to studio dispatch (<strong className="text-[#0e0d0b]">+91 7735791248</strong>).
              </p>
            </div>

            <div className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/40 max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono">
              <div className="text-[#7a776f] uppercase">Commission Reference:</div>
              <div className="text-[#0e0d0b] font-bold text-sm tracking-wider">{submittedRef}</div>
              <div className="text-[#494740] pt-1">Type: {formData.celebrationType}</div>
              <div className="text-[#494740]">Destination: {formData.location || 'To Be Determined'}</div>
              <div className="text-[#0e0d0b] font-semibold pt-1">WhatsApp Recipient: +91 7735791248</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3 bg-[#25D366] hover:bg-[#1faa4b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] transition-all inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Open WhatsApp Chat</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-7 py-3 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#494740] transition-colors cursor-pointer"
              >
                Return to Studio
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Form View */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Header & Step Indicator */}
            <div className="space-y-2 border-b border-[#cac6bd]/40 pb-4 pr-8">
              <div className="flex items-center justify-between">
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.28em] text-[#7a776f]">
                  Commission Inquiry — 2026 / 2027
                </span>
                <span className="font-label-editorial text-xs uppercase tracking-[0.2em] text-[#0e0d0b]">
                  Step 0{step} / 04
                </span>
              </div>
              <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-[#0e0d0b]">
                {step === 1 && 'Celebration & Discipline'}
                {step === 2 && 'Timing & Destination'}
                {step === 3 && 'Story, Scope & Analog Film'}
                {step === 4 && 'Your Contact Information'}
              </h3>
            </div>

            {/* STEP 1: Discipline & Season */}
            {step === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="space-y-2">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Select Discipline:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Weddings', 'Engagements', 'Pre-Wedding Stories', 'Private Events', 'Corporate & Cultural', 'Portraits'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => handleChange('celebrationType', type)}
                        className={`p-3 text-left border text-xs font-label-editorial uppercase tracking-[0.16em] transition-all cursor-pointer ${
                          formData.celebrationType === type
                            ? 'bg-[#0e0d0b] text-white border-[#0e0d0b]'
                            : 'bg-white text-[#494740] border-[#cac6bd] hover:border-[#0e0d0b]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Commission Season:
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Spring / Summer 2026', 'Autumn / Winter 2026', '2027 Season'].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => handleChange('season', s)}
                        className={`p-2.5 text-center border text-[11px] font-label-editorial uppercase tracking-[0.14em] transition-all cursor-pointer ${
                          formData.season === s
                            ? 'bg-[#0e0d0b] text-white border-[#0e0d0b]'
                            : 'bg-white text-[#494740] border-[#cac6bd] hover:border-[#0e0d0b]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Timing & Destination */}
            {step === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="space-y-1.5">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Anticipated Date or Month:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. October 14, 2026 or Late Autumn"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                      required
                    />
                    <Calendar size={16} className="absolute right-3 top-3.5 text-[#7a776f]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Location / Venue / Destination:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Bhubaneswar, Odisha / Lake Como / Provence Villa"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                      required
                    />
                    <MapPin size={16} className="absolute right-3 top-3.5 text-[#7a776f]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Estimated Guest Assembly:
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => handleChange('guestCount', e.target.value)}
                    className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                  >
                    <option>Elopement / Solitary (Under 10)</option>
                    <option>Intimate Gathering (10 – 50 guests)</option>
                    <option>Medium Assembly (50 – 120 guests)</option>
                    <option>Extended Multi-Day Celebration (120+ guests)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: Vision & Film Preference */}
            {step === 3 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="space-y-1.5">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Analog Film Medium Focus:
                  </label>
                  <div className="space-y-2">
                    {[
                      'Dual Analog (35mm Kodak Tri-X & 120 Portra Film)',
                      'Monochrome Emphasis (Ilford HP5 Plus Silver Gelatin)',
                      'Hybrid Documentation (Analog Film with Low-Light Digital)'
                    ].map((pref) => (
                      <label
                        key={pref}
                        className={`flex items-center gap-3 p-3 border cursor-pointer text-xs transition-colors ${
                          formData.filmPreference === pref
                            ? 'border-[#0e0d0b] bg-[#f4f3f0]'
                            : 'border-[#cac6bd] bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="filmPref"
                          checked={formData.filmPreference === pref}
                          onChange={() => handleChange('filmPreference', pref)}
                          className="accent-[#0e0d0b]"
                        />
                        <span className="font-body-md text-[#0e0d0b]">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    Tell us about your celebration &amp; what matters most:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the mood, family dynamics, specific moments or rituals you hold dear..."
                    value={formData.storyVision}
                    onChange={(e) => handleChange('storyVision', e.target.value)}
                    className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Personal Details */}
            {step === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                      Your Full Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Clara Dupont"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                      Partner / Co-Host Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thomas Laurent"
                      value={formData.partnerName}
                      onChange={(e) => handleChange('partnerName', e.target.value)}
                      className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      placeholder="clara@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                      Phone Number / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <label className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#494740] block">
                    How did you discover Lumière Stories?
                  </label>
                  <input
                    type="text"
                    placeholder="Friend recommendation, Kinfolk / Cereal publication, Instagram..."
                    value={formData.referral}
                    onChange={(e) => handleChange('referral', e.target.value)}
                    className="w-full bg-[#efeeeb] border border-[#cac6bd] p-3 text-sm focus:outline-none focus:border-[#0e0d0b]"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-[#cac6bd]/40 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-2 text-xs font-label-editorial uppercase tracking-[0.2em] text-[#494740] hover:text-[#0e0d0b] cursor-pointer"
                >
                  <ArrowLeft size={13} /> Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#494740] transition-colors cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight size={13} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.22em] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer shadow-sm group"
                >
                  <MessageCircle size={15} className="text-[#25D366] group-hover:text-white transition-colors" />
                  <span>Send via WhatsApp</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>

            {step === 4 && (
              <p className="text-[11px] text-[#7a776f] text-center tracking-wide font-sans pt-1">
                Submitting will automatically format and send your inquiry details to studio dispatch on WhatsApp (<span className="text-[#0e0d0b] font-medium">+91 7735791248</span>).
              </p>
            )}
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
