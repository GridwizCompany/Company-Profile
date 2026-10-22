"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/useLanguage";
import { BatteryCharging, Bike, Zap, ShieldCheck, Leaf, ArrowRight, Mail, Phone, MapPin, Calendar, Fuel, Wallet, Sparkles, Minus, Plus, Check } from "lucide-react";
import ProductRow from "../component/ProductRow";
import CountUp from "../component/CountUp";
import Footer from "../component/Footer";
import AppCtaSection from "component/AppCtaSection";
import { useAdminData } from "../context/AdminDataContext";

function SavingsCalculator({ isId }: { isId: boolean }) {
  const [distance, setDistance] = useState(30);

  // BBM: ~40km/liter, Rp 10.000/liter => Rp 250 / km
  // E-Motor: ~60km/kWh, Rp 5.000/kWh => Rp 83.33 / km (5000 / 60)
  const bbmCostPerKm = 250;
  const emotorCostPerKm = 5000 / 60;

  const validDistance = Math.max(0, Math.min(999, distance || 0));
  const bbmMonthly = Math.round(validDistance * bbmCostPerKm * 30);
  const emotorMonthly = Math.round(validDistance * emotorCostPerKm * 30);
  const bbmDaily = Math.round(validDistance * bbmCostPerKm);
  const emotorDaily = Math.round(validDistance * emotorCostPerKm);

  const savingsMonthly = Math.max(0, bbmMonthly - emotorMonthly);
  const savingsDaily = Math.max(0, bbmDaily - emotorDaily);
  const savingsYearly = savingsMonthly * 12;
  const savingsPercent = bbmMonthly > 0 ? Math.round((savingsMonthly / bbmMonthly) * 100) : 67;

  const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

  const presets = [
    { label: isId ? "25 km (Santai)" : "25 km (Casual)", value: 25 },
    { label: isId ? "50 km (Komuter)" : "50 km (Commuter)", value: 50 },
    { label: isId ? "100 km (Aktif)" : "100 km (Active)", value: 100 },
    { label: isId ? "150 km (Kurir / Ojol)" : "150 km (Courier)", value: 150 },
  ];

  const handleStep = (delta: number) => {
    setDistance((prev) => Math.min(999, Math.max(5, (prev || 0) + delta)));
  };

  return (
    <section
      className="savings-calc-section"
      style={{
        padding: "5rem 1.5rem",
        background: "linear-gradient(135deg, #0B3A5C 0%, #0F4068 40%, #1A5276 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative ambient background */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "320px", height: "320px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0, 173, 181, 0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "260px", height: "260px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(41, 182, 246, 0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "980px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(0, 173, 181, 0.12)", border: "1px solid rgba(77, 208, 225, 0.3)",
            padding: "0.35rem 1rem", borderRadius: "99px", marginBottom: "0.75rem",
          }}>
            <Sparkles size={14} color="#4DD0E1" />
            <span style={{
              fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.12em", color: "#4DD0E1",
            }}>
              {isId ? "Kalkulator Penghematan" : "Savings Calculator"}
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800,
            color: "#FFFFFF", lineHeight: 1.25, letterSpacing: "-0.02em",
          }}>
            {isId
              ? "Hitung Berapa Banyak yang Bisa Dihemat"
              : "Calculate How Much You Can Save"}
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.75)", fontSize: "0.95rem",
            maxWidth: "580px", margin: "0.5rem auto 0", lineHeight: 1.5,
          }}>
            {isId
              ? "Bandingkan estimasi biaya operasional harian & bulanan antara motor bensin konvensional dengan motor listrik Gridwiz."
              : "Compare daily & monthly operating cost estimates between conventional gasoline motorcycles and Gridwiz electric motors."}
          </p>
        </div>

        {/* Main Card */}
        <div style={{
          background: "#FFFFFF", borderRadius: "24px", overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.22)", border: "1px solid rgba(255, 255, 255, 0.2)",
        }}>

          {/* Slider & 3-Digit Input Area */}
          <div style={{
            padding: "2rem 2.25rem 1.75rem",
            borderBottom: "1px solid #E8EEF3",
            background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem",
            }}>
              <div>
                <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F4068", display: "block" }}>
                  {isId ? "Jarak Tempuh Harian" : "Daily Travel Distance"}
                </span>
                <span style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "2px", display: "block" }}>
                  {isId ? "Geser atau masukkan angka langsung" : "Slide or type directly"}
                </span>
              </div>

              {/* 3-Digit Input with Stepper */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#FFFFFF", padding: "0.35rem 0.5rem", borderRadius: "14px",
                border: "1.5px solid #00ADB5",
                boxShadow: "0 4px 14px rgba(0, 173, 181, 0.12)",
              }}>
                <button
                  type="button"
                  onClick={() => handleStep(-5)}
                  disabled={validDistance <= 5}
                  aria-label="Decrease distance"
                  style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    border: "none", background: validDistance <= 5 ? "#F1F5F9" : "rgba(0, 173, 181, 0.1)",
                    color: validDistance <= 5 ? "#94A3B8" : "#0F4068",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: validDistance <= 5 ? "not-allowed" : "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <Minus size={15} strokeWidth={2.5} />
                </button>

                <input
                  type="number"
                  min="1"
                  max="999"
                  value={distance === 0 ? "" : distance}
                  placeholder="0"
                  onChange={(e) => {
                    const val = e.target.value;
                    setDistance(val === "" ? 0 : Math.min(999, Math.max(0, parseInt(val) || 0)));
                  }}
                  onFocus={(e) => e.target.select()}
                  className="calc-distance-input"
                  style={{
                    fontSize: "1.45rem", fontWeight: 800, color: "#0F4068",
                    background: "transparent", border: "none", outline: "none",
                    width: "75px", textAlign: "center", padding: "0 2px", margin: 0,
                  }}
                />

                <button
                  type="button"
                  onClick={() => handleStep(5)}
                  disabled={validDistance >= 999}
                  aria-label="Increase distance"
                  style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    border: "none", background: validDistance >= 999 ? "#F1F5F9" : "rgba(0, 173, 181, 0.1)",
                    color: validDistance >= 999 ? "#94A3B8" : "#0F4068",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: validDistance >= 999 ? "not-allowed" : "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <Plus size={15} strokeWidth={2.5} />
                </button>

                <span style={{
                  fontSize: "0.85rem", fontWeight: 700, color: "#00ADB5",
                  background: "rgba(0, 173, 181, 0.1)", padding: "0.25rem 0.65rem",
                  borderRadius: "8px", marginLeft: "2px",
                }}>
                  km / {isId ? "hari" : "day"}
                </span>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={Math.min(200, validDistance)}
              onChange={(e) => setDistance(parseInt(e.target.value))}
              style={{
                width: "100%", accentColor: "#00ADB5", cursor: "pointer",
                height: "6px",
              }}
            />
            <div style={{
              display: "flex", justifyContent: "space-between",
              fontSize: "0.78rem", color: "#94A3B8", fontWeight: 600, marginTop: "0.4rem",
            }}>
              <span>5 km</span>
              <span>50 km</span>
              <span>100 km</span>
              <span>150 km</span>
              <span>200+ km</span>
            </div>

            {/* Quick Presets */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              marginTop: "1.25rem", flexWrap: "wrap",
            }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginRight: "0.25rem" }}>
                {isId ? "Pilihan Cepat:" : "Quick Presets:"}
              </span>
              {presets.map((preset) => {
                const isActive = distance === preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setDistance(preset.value)}
                    style={{
                      background: isActive ? "#0F4068" : "#F1F5F9",
                      color: isActive ? "#FFFFFF" : "#475569",
                      border: isActive ? "1px solid #0F4068" : "1px solid #E2E8F0",
                      borderRadius: "99px",
                      padding: "0.3rem 0.85rem",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      boxShadow: isActive ? "0 2px 8px rgba(15, 64, 104, 0.2)" : "none",
                    }}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Comparison Area */}
          <div style={{ padding: "2.25rem" }}>
            {/* Side-by-Side Comparison Cards */}
            <div className="savings-comparison-grid">

              {/* Motor BBM Card (Muted, Standard Baseline) */}
              <div style={{
                background: "#FFFFFF", borderRadius: "20px", padding: "1.75rem",
                border: "1px solid #E2E8F0", position: "relative",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}>
                    {/* Clean single-tone vector icon */}
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "12px",
                      background: "#F8FAFC", border: "1px solid #E2E8F0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#64748B",
                    }}>
                      <Fuel size={22} strokeWidth={2.2} />
                    </div>
                    <span style={{
                      background: "#F1F5F9", color: "#64748B", fontSize: "0.68rem",
                      fontWeight: 700, padding: "0.3rem 0.75rem", borderRadius: "99px",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>
                      {isId ? "Standar BBM" : "Standard Gasoline"}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: "1.1rem", fontWeight: 800, color: "#1E293B",
                    marginBottom: "0.25rem",
                  }}>
                    {isId ? "Motor Bensin (BBM)" : "Gasoline Motorcycle (ICE)"}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "1.5rem" }}>
                    40 km/liter • Rp 10.000/liter
                  </p>

                  {/* Clean Cost Display */}
                  <div style={{
                    background: "#F8FAFC", borderRadius: "14px", padding: "1.1rem 1.25rem",
                    border: "1px solid #F1F5F9", marginBottom: "1.25rem",
                  }}>
                    <span style={{
                      fontSize: "0.72rem", fontWeight: 700, color: "#64748B",
                      textTransform: "uppercase", letterSpacing: "0.05em", display: "block",
                      marginBottom: "0.35rem",
                    }}>
                      {isId ? "Estimasi Biaya Operasional" : "Estimated Operating Cost"}
                    </span>
                    <div style={{
                      fontSize: "1.65rem", fontWeight: 800, color: "#334155",
                      lineHeight: 1.2,
                    }}>
                      {fmt(bbmMonthly)}
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#94A3B8" }}>
                        {" "}/{isId ? "bulan" : "month"}
                      </span>
                    </div>
                    <span style={{
                      fontSize: "0.8rem", color: "#64748B", fontWeight: 600, marginTop: "0.35rem", display: "block",
                    }}>
                      {fmt(bbmDaily)} / {isId ? "hari" : "day"}
                    </span>
                  </div>
                </div>

                <div style={{
                  fontSize: "0.78rem", color: "#94A3B8", borderTop: "1px solid #F1F5F9",
                  paddingTop: "0.85rem", display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#CBD5E1" }} />
                  {isId ? "Pengeluaran rutin tinggi & menghasilkan emisi" : "High regular expenses & generates carbon emissions"}
                </div>
              </div>

              {/* Gridwiz E-Motor Card (HIGHLIGHTED / SPOTLIGHT HERO CARD) */}
              <div style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)",
                borderRadius: "20px", padding: "1.75rem",
                border: "2px solid #00ADB5", position: "relative",
                boxShadow: "0 14px 34px rgba(0, 173, 181, 0.16)",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}>
                    {/* Clean single-tone teal gradient vector icon */}
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "12px",
                      background: "linear-gradient(135deg, rgba(0, 173, 181, 0.15), rgba(16, 185, 129, 0.15))",
                      border: "1px solid rgba(0, 173, 181, 0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#00ADB5",
                    }}>
                      <Zap size={22} strokeWidth={2.4} />
                    </div>
                    <span style={{
                      background: "linear-gradient(135deg, #E0F2FE, #D1FAE5)",
                      color: "#047857", fontSize: "0.68rem",
                      fontWeight: 800, padding: "0.35rem 0.85rem", borderRadius: "99px",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                      border: "1px solid #A7F3D0",
                      display: "inline-flex", alignItems: "center", gap: "4px",
                    }}>
                      <Check size={12} strokeWidth={3} />
                      {isId ? `Paling Hemat • -${savingsPercent}%` : `Most Efficient • -${savingsPercent}%`}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: "1.1rem", fontWeight: 800, color: "#0F4068",
                    marginBottom: "0.25rem",
                  }}>
                    Gridwiz E-Motor
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "1.5rem" }}>
                    60 km/kWh • Rp 5.000/kWh
                  </p>

                  {/* Clean Cost Display */}
                  <div style={{
                    background: "#FFFFFF", borderRadius: "14px", padding: "1.1rem 1.25rem",
                    border: "1.5px solid #A7F3D0", marginBottom: "1.25rem",
                    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.08)",
                  }}>
                    <span style={{
                      fontSize: "0.72rem", fontWeight: 700, color: "#059669",
                      textTransform: "uppercase", letterSpacing: "0.05em", display: "block",
                      marginBottom: "0.35rem",
                    }}>
                      {isId ? "Estimasi Biaya Listrik" : "Estimated Electricity Cost"}
                    </span>
                    <div style={{
                      fontSize: "1.65rem", fontWeight: 900, color: "#059669",
                      lineHeight: 1.2,
                    }}>
                      {fmt(emotorMonthly)}
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#10B981" }}>
                        {" "}/{isId ? "bulan" : "month"}
                      </span>
                    </div>
                    <span style={{
                      fontSize: "0.8rem", color: "#047857", fontWeight: 700, marginTop: "0.35rem", display: "block",
                    }}>
                      {isId ? "Hanya" : "Only"} {fmt(emotorDaily)} / {isId ? "hari" : "day"}
                    </span>
                  </div>
                </div>

                <div style={{
                  fontSize: "0.78rem", color: "#047857", borderTop: "1px solid #D1FAE5",
                  paddingTop: "0.85rem", display: "flex", alignItems: "center", gap: "6px", fontWeight: 600,
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
                  {isId ? "100% Bebas Emisi & hemat biaya operasional drastis" : "100% Zero emission & drastically cuts operating expenses"}
                </div>
              </div>
            </div>

            {/* Intuitive Visual Ratio Bar */}
            <div style={{
              background: "#F8FAFC", borderRadius: "16px", padding: "1.1rem 1.35rem",
              border: "1px solid #E2E8F0", marginBottom: "1.5rem",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                fontSize: "0.78rem", fontWeight: 700, color: "#475569", marginBottom: "0.5rem",
              }}>
                <span>{isId ? "Perbandingan Rasio Pengeluaran" : "Expense Ratio Comparison"}</span>
                <span style={{ color: "#059669" }}>
                  {isId ? `Gridwiz hemat ${savingsPercent}% dibanding BBM` : `Gridwiz saves ${savingsPercent}% vs Gasoline`}
                </span>
              </div>
              <div style={{
                height: "14px", borderRadius: "99px", background: "#E2E8F0",
                display: "flex", overflow: "hidden", position: "relative",
              }}>
                <div
                  style={{
                    width: `${Math.max(12, 100 - savingsPercent)}%`,
                    background: "#00ADB5",
                    borderRadius: "99px 0 0 99px",
                    transition: "width 0.4s ease",
                  }}
                  title={isId ? `Biaya Gridwiz E-Motor (${100 - savingsPercent}%)` : `Gridwiz E-Motor Cost (${100 - savingsPercent}%)`}
                />
                <div
                  style={{
                    flex: 1,
                    background: "linear-gradient(90deg, #10B981, #34D399)",
                    borderRadius: "0 99px 99px 0",
                  }}
                  title={isId ? `Uang yang Dihemat (${savingsPercent}%)` : `Money Saved (${savingsPercent}%)`}
                />
              </div>
              <div style={{
                display: "flex", justifyContent: "space-between",
                fontSize: "0.72rem", color: "#64748B", marginTop: "0.45rem", fontWeight: 600,
              }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00ADB5" }} />
                  {isId ? `Biaya Listrik (~${100 - savingsPercent}%)` : `Electricity Cost (~${100 - savingsPercent}%)`}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#059669" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }} />
                  {isId ? `Dana yang Dihemat (~${savingsPercent}%)` : `Saved Funds (~${savingsPercent}%)`}
                </span>
              </div>
            </div>

            {/* HERO SAVINGS HIGHLIGHT BANNER (SPOTLIGHT UTAMA) */}
            <div style={{
              background: "linear-gradient(135deg, #0B3A5C 0%, #0F4068 45%, #00ADB5 100%)",
              borderRadius: "22px", padding: "2rem 2.25rem",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: "1.75rem",
              boxShadow: "0 18px 40px rgba(11, 58, 92, 0.28)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Decorative soft glow */}
              <div style={{
                position: "absolute", top: 0, right: 0, width: "240px", height: "100%",
                background: "radial-gradient(circle at right center, rgba(77, 208, 225, 0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Highlight Left: Savings Breakdown */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  color: "#4DD0E1", fontSize: "0.8rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.6rem",
                }}>
                  <Wallet size={16} color="#4DD0E1" />
                  {isId ? "Total Penghematan Anda" : "Your Total Savings"}
                </div>

                <div style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "#FFFFFF",
                  display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap",
                  lineHeight: 1.1, marginBottom: "0.75rem",
                }}>
                  <span>{fmt(savingsMonthly)}</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgba(255, 255, 255, 0.85)" }}>
                    {" "}/{isId ? "bulan" : "month"}
                  </span>
                </div>

                {/* Annual projection callout */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "rgba(255, 255, 255, 0.14)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  padding: "0.4rem 0.9rem", borderRadius: "99px",
                  fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF",
                }}>
                  <Sparkles size={14} color="#FFD54F" />
                  <span>
                    {isId ? "Setara hemat " : "Equal to "}{fmt(savingsYearly)} / {isId ? "tahun" : "year"}
                  </span>
                </div>

                <p style={{
                  fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.75)",
                  marginTop: "0.6rem", margin: "0.6rem 0 0 0", fontWeight: 500,
                }}>
                  {isId
                    ? `Anda menyisihkan ${fmt(savingsDaily)} setiap hari yang dapat dialokasikan untuk kebutuhan lain.`
                    : `You save ${fmt(savingsDaily)} every single day, ready to be reinvested into what matters.`}
                </p>
              </div>

              {/* Highlight Right: Big Stat & CTA Button */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "1rem", position: "relative", zIndex: 1,
              }}>
                <div style={{
                  background: "rgba(255, 255, 255, 0.16)", borderRadius: "18px",
                  padding: "1rem 1.75rem", textAlign: "center",
                  backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.3)",
                  minWidth: "140px",
                  boxShadow: "inset 0 2px 10px rgba(255, 255, 255, 0.1)",
                }}>
                  <div style={{ fontSize: "2.3rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>
                    {savingsPercent}%
                  </div>
                  <div style={{
                    fontSize: "0.72rem", fontWeight: 800, color: "rgba(255, 255, 255, 0.95)",
                    textTransform: "uppercase", marginTop: "0.3rem", letterSpacing: "0.06em",
                  }}>
                    {isId ? "Pangkas Biaya" : "Cost Reduction"}
                  </div>
                </div>

                <Link
                  href="/products/e-motor"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#FFFFFF", color: "#0F4068",
                    padding: "0.75rem 1.4rem", borderRadius: "12px",
                    fontWeight: 800, fontSize: "0.85rem",
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.18)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.18)";
                  }}
                >
                  <span>{isId ? "Lihat Motor Listrik" : "Explore E-Motor"}</span>
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const isId = language === "id";
  const { news } = useAdminData();
  const recentNews = news.slice(0, 3); // Ambil 3 berita terbaru

  // Data Produk
  const products = [
    {
      icon: <Bike size={36} color="#1565C0" />,
      title: isId ? "Gridwiz E-Bike" : "Gridwiz E-Bike",
      desc: isId
        ? "Sepeda listrik cerdas dengan efisiensi tinggi, nyaman untuk komuter harian dan gaya hidup ramah lingkungan."
        : "Smart electric bicycle with high efficiency, comfortable for daily commuting and eco-friendly lifestyle.",
      tag: isId ? "Mobilitas Urban" : "Urban Mobility",
    },
    {
      icon: <Zap size={36} color="#00ADB5" />,
      title: isId ? "Gridwiz E-Motor" : "Gridwiz E-Motor",
      desc: isId
        ? "Motor listrik bertenaga dengan teknologi baterai mutakhir dan jarak tempuh optimal di perkotaan."
        : "Powerful electric motorcycle with advanced battery technology and optimal range in urban areas.",
      tag: isId ? "Performa Tinggi" : "High Performance",
    },
    {
      icon: <BatteryCharging size={36} color="#2E7D32" />,
      title: isId ? "Gridwiz E-Charging" : "Gridwiz E-Charging",
      desc: isId
        ? "Infrastruktur stasiun pengisian daya cepat dan swap baterai yang tersebar strategis."
        : "Fast charging stations and strategic battery swap infrastructure network.",
      tag: isId ? "Infrastruktur Pintar" : "Smart Infrastructure",
    },
  ];

  // Keunggulan
  const features = [
    {
      icon: <Leaf size={28} color="#2E7D32" />,
      title: isId ? "100% Bebas Emisi" : "100% Zero Emission",
      desc: isId ? "Mendukung transisi energi bersih demi masa depan udara yang lebih sehat." : "Supporting clean energy transition for a healthier future atmosphere.",
    },
    {
      icon: <Zap size={28} color="#1565C0" />,
      title: isId ? "Teknologi Terintegrasi" : "Integrated Technology",
      desc: isId ? "Terhubung langsung dengan ekosistem aplikasi cerdas Gridwiz." : "Directly connected with the smart Gridwiz mobile application ecosystem.",
    },
    {
      icon: <ShieldCheck size={28} color="#00ADB5" />,
      title: isId ? "Aman & Terpercaya" : "Safe & Reliable",
      desc: isId ? "Baterai bersertifikasi standar keamanan tinggi dan garansi resmi." : "High safety-certified batteries with official warranty support.",
    },
  ];

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "flex-end",
          padding: "4rem 0 5.5rem 0",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/video/home/companyprofile.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay for optimal text readability at the bottom-left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.5) 48%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, transparent 60%)",
            zIndex: 1,
          }}
        />

        {/* Content positioned towards bottom-left */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
            paddingRight: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: "1.15",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 18px rgba(0,0,0,0.6)",
              }}
            >
              Gridwiz Energy &amp;<br />Mobility
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: "1.6",
                marginBottom: "2.5rem",
                fontWeight: 400,
                textShadow: "0 1px 10px rgba(0,0,0,0.5)",
              }}
            >
              {isId
                ? "Mobilitas Hijau untuk Perjalanan yang Lebih Cerdas dan Berkelanjutan."
                : "Green Mobility for Smarter and Sustainable Journeys."}
            </p>

            {/* App Download Buttons (Enlarged & Shifted to Bottom-Left) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://apps.apple.com/gb/app/re-flow/id6741798337"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  transition: "transform 0.2s ease, filter 0.2s ease",
                  filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Image
                  src="/images/hero/appstore.png"
                  alt="Download on the App Store"
                  width={200}
                  height={65}
                  style={{
                    height: "58px",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                  priority
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  transition: "transform 0.2s ease, filter 0.2s ease",
                  filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Image
                  src="/images/hero/googleplay.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={65}
                  style={{
                    height: "58px",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section
        style={{
          padding: "5rem 1.5rem 4rem",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
              fontWeight: 800,
              color: "#0F4068",
              lineHeight: "1.25",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            {isId
              ? "Mobilitas Listrik Pintar untuk Lombok dan Sekitarnya"
              : "Smart Electric Mobility for Lombok and Beyond"}
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "#4A6080",
              lineHeight: "1.75",
              fontWeight: 400,
            }}
          >
            {isId
              ? "ReFlow, sebuah inovasi dari PT Gridwiz Energy and Mobility adalah platform mobilitas mikro pintar yang mengintegrasikan kendaraan listrik (EV) dengan ekosistem aplikasi cerdas. Kami berdedikasi mentransformasi lanskap pariwisata Lombok melalui solusi transportasi ramah lingkungan bebas emisi. Bermitra secara eksklusif dengan hotel dan resor premium, ReFlow menghadirkan pengalaman mobilitas berkelanjutan, lebih cerdas, modern, terkoneksi, dan ramah lingkungan."
              : "ReFlow, an innovation by PT Gridwiz Energy and Mobility is a smart micro-mobility platform that integrates electric vehicles (EVs) with an intelligent application ecosystem. We are dedicated to transforming Lombok's tourism landscape through zero-emission transportation solutions. Partnering exclusively with premium hotels and resorts, ReFlow delivers a sustainable, smarter mobility experience that is modern, connected, and eco-friendly."}
          </p>
        </div>
      </section>

      {/* ================= OUR PRODUCT SECTION (INTERACTIVE LINE REVEAL) ================= */}
      <section id="products" style={{ backgroundColor: "#FFFFFF", padding: "1rem 1.5rem 4rem" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#0F4068",
                letterSpacing: "-0.02em",
              }}
            >
              {isId ? "Produk Kami" : "Our Product"}
            </h2>
          </div>

          {/* Product 01: Smart Electric Bike Sharing */}
          <ProductRow
            index="01"
            title={isId ? "Smart Electric Bike Sharing" : "Smart Electric Bike Sharing"}
            imageSrc="/images/products/ebike.png"
            buttonText={isId ? "Explore E-Bike" : "Explore E-Bike"}
            buttonHref="../products/e-bike"
          />

          {/* Product 02: Flexible Electric Motorcycle Rental */}
          <ProductRow
            index="02"
            title={isId ? "Flexible Electric Motorcycle Rental" : "Flexible Electric Motorcycle Rental"}
            imageSrc="/images/products/emotor.png"
            buttonText={isId ? "Explore E-Motor" : "Explore E-Motor"}
            buttonHref="../products/e-motor"
          />

          {/* Product 03: Smart Charging Infrastructure */}
          <ProductRow
            index="03"
            title={isId ? "Smart Charging Infrastructure" : "Smart Charging Infrastructure"}
            imageSrc="/images/products/evcharge.png"
            buttonText={isId ? "Explore E-Charging" : "Explore E-Charging"}
            buttonHref="../products/ev-charging"
          />
        </div>
      </section>

      {/* ================= IMPACT STATISTICS SECTION ================= */}
      <section className="impact-section">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">
                <CountUp end={10} suffix="K+" duration={2000} />
              </div>
              <div className="impact-label">{isId ? "Pengguna Aktif" : "Active Users"}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">
                <CountUp end={700} suffix={'+'} duration={2200} />
              </div>
              <div className="impact-label">{isId ? "Sepeda Listrik" : "Electric Bikes"}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">
                <CountUp end={33} suffix={"+"} duration={1800} />
              </div>
              <div className="impact-label">{isId ? "Tempat Parkir" : "Parking Areas"}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">
                <CountUp end={6} suffix="t" duration={1900} />
              </div>
              <div className="impact-label">{isId ? "CO2e yang tereduksi" : "CO2e Reduced"}</div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="about"
              style={{
                backgroundColor: "#1D5484",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.925rem",
                padding: "0.65rem 2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 12px rgba(29, 84, 132, 0.25)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F4068")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1D5484")}
            >
              <span>{isId ? "Lihat Dampaknya" : "See the Impact"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SAVINGS CALCULATOR ================= */}
      <SavingsCalculator isId={isId} />


      {/* ================= OUR SERVICE SECTION ================= */}
      <section id="services" className="service-section">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#0F4068",
                letterSpacing: "-0.02em",
              }}
            >
              {isId ? "Keunggulan Kami" : "Our Strengths"}
            </h2>
          </div>

          <div className="service-grid">
            {/* Service 1: Sustainable Mobility */}
            <div className="service-item">
              <div className="service-icon-box">
                <Image
                  src="/images/hero/icon/sustainable.png"
                  alt="Sustainable Mobility"
                  width={64}
                  height={64}
                  style={{ width: "auto", height: "72px", objectFit: "contain" }}
                />
              </div>
              <h3 className="service-title">
                {isId ? <>Mobilitas<br />Berkelanjutan</> : <>Sustainable<br />Mobility</>}
              </h3>
            </div>

            {/* Service 2: Smart Technology */}
            <div className="service-item">
              <div className="service-icon-box">
                <Image
                  src="/images/hero/icon/smarttech.png"
                  alt="Smart Technology"
                  width={64}
                  height={64}
                  style={{ width: "auto", height: "72px", objectFit: "contain" }}
                />
              </div>
              <h3 className="service-title">
                {isId ? <>Teknologi<br />Pintar</> : <>Smart<br />Technology</>}
              </h3>
            </div>

            {/* Service 3: Hospitality Solutions */}
            <div className="service-item">
              <div className="service-icon-box">
                <Image
                  src="/images/hero/icon/hospitality.png"
                  alt=""
                  width={64}
                  height={64}
                  style={{ width: "auto", height: "72px", objectFit: "contain" }}
                />
              </div>
              <h3 className="service-title">
                {isId ? <>Solusi<br />Mobilitas</> : <>Mobility<br />Solutions</>}
              </h3>
            </div>

            {/* Service 4: Mobility Infrastructure */}
            <div className="service-item">
              <div className="service-icon-box">
                <Image
                  src="/images/hero/icon/mobility.png"
                  alt="Mobility Infrastructure"
                  width={64}
                  height={64}
                  style={{ width: "auto", height: "72px", objectFit: "contain" }}
                />
              </div>
              <h3 className="service-title">
                {isId ? <>Infrastruktur<br />Mobilitas</> : <>Mobility<br />Infrastructure</>}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWS & ARTICLES SECTION ================= */}
      <section id="news" className="news-section">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#0F4068",
                letterSpacing: "-0.02em",
              }}
            >
              {isId ? "Berita & Artikel" : "News & Articles"}
            </h2>
            <p style={{ color: "#4A6080", marginTop: "0.75rem", fontSize: "1rem" }}>
              {isId
                ? "Ikuti perkembangan terbaru dari Gridwiz dan ekosistem mobilitas hijau."
                : "Stay updated with the latest from Gridwiz and the green mobility ecosystem."}
            </p>
          </div>

          {recentNews.length > 0 ? (
            <>
              {/* News Cards Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "1.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                {recentNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 4px 20px rgba(15,64,104,0.06)",
                        border: "1px solid #e4eaf2",
                        transition: "all 0.35s ease",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(15,64,104,0.14)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#1565c0";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(15,64,104,0.06)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#e4eaf2";
                      }}
                    >
                      {/* Card Image */}
                      <div style={{ position: "relative", height: "210px", flexShrink: 0 }}>
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 380px"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            background: "rgba(21, 101, 192, 0.9)",
                            color: "#fff",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "0.3rem 0.75rem",
                            borderRadius: "50px",
                          }}
                        >
                          {item.category}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 800,
                            color: "#0f4068",
                            marginBottom: "0.6rem",
                            lineHeight: 1.4,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical" as const,
                            overflow: "hidden",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "#5a7184",
                            lineHeight: 1.65,
                            flex: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical" as const,
                            overflow: "hidden",
                            marginBottom: "1.25rem",
                          }}
                        >
                          {item.shortDesc}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.5rem",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "#8da4be" }}>
                            <Calendar size={14} />
                            <span>{item.date}</span>
                          </div>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem",
                              background: "linear-gradient(135deg, #1565c0, #0891b2)",
                              color: "#fff",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              padding: "0.45rem 1rem",
                              borderRadius: "50px",
                            }}
                          >
                            {isId ? "Baca" : "Read"}
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View All Button */}
              <div style={{ textAlign: "center" }}>
                <Link
                  href="/news"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#1D5484",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "0.925rem",
                    padding: "0.75rem 2.25rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(29, 84, 132, 0.25)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F4068")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1D5484")}
                >
                  {isId ? "Lihat Semua Berita" : "View All News"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </>
          ) : (
            /* ── Placeholder: belum ada artikel ── */
            <div className="news-empty-state">
              <div className="news-empty-icon">📰</div>
              <h3 className="news-empty-title">
                {isId ? "Belum Ada Berita" : "No Articles Yet"}
              </h3>
              <p className="news-empty-desc">
                {isId
                  ? "Halaman berita sedang dalam persiapan. Nantikan artikel terbaru dari Gridwiz."
                  : "The news page is being prepared. Stay tuned for the latest articles from Gridwiz."}
              </p>
              <a href="#contact" className="news-notify-btn">
                {isId ? "Beritahu Saya" : "Notify Me"}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ================= TRUSTED PARTNER (INFINITE MARQUEE) ================= */}
      <section id="partners" className="partner-section">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#0F4068",
              letterSpacing: "-0.02em",
            }}
          >
            {isId ? "Mitra Terpercaya" : "Trusted Partner"}
          </h2>
          <p style={{ color: "#4A6080", marginTop: "0.5rem", fontSize: "0.95rem" }}>
            {isId
              ? "Berkolaborasi dengan hotel dan resort terbaik di Indonesia."
              : "Collaborating with the finest hotels and resorts in Indonesia."}
          </p>
        </div>

        {/* Marquee Track — infinite scroll ke kiri */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* Set pertama */}
            {[
              { src: "/images/partners/logo/acibara.svg", alt: "Acibara" },
              { src: "/images/partners/logo/aruna.svg", alt: "Aruna" },
              { src: "/images/partners/logo/bento.svg", alt: "Bento" },
              { src: "/images/partners/logo/dapoersasak.svg", alt: "Dapoersasak" },
              { src: "/images/partners/logo/dcmmandalika.svg", alt: "Dcmmandalika" },
              { src: "/images/partners/logo/deco.svg", alt: "Deco" },
              { src: "/images/partners/logo/esda.svg", alt: "Esda" },
              { src: "/images/partners/logo/golkar.svg", alt: "Golkar" },
              { src: "/images/partners/logo/hayafarma.svg", alt: "Hayafarma" },
              { src: "/images/partners/logo/janjijiwa.svg", alt: "Janjijiwa" },
              { src: "/images/partners/logo/kinta.svg", alt: "Kinta" },
              { src: "/images/partners/logo/madjoe.svg", alt: "Madjoe" },
              { src: "/images/partners/logo/mattowa.svg", alt: "Mattowa" },
              { src: "/images/partners/logo/mayura.svg", alt: "Mayura" },
              { src: "/images/partners/logo/merumata.svg", alt: "Merumata" },
              { src: "/images/partners/logo/pinkot.svg", alt: "Pinkot" },
              { src: "/images/partners/logo/poltekpar.svg", alt: "Poltekpar" },
              { src: "/images/partners/logo/rplay.svg", alt: "Rplay" },
              { src: "/images/partners/logo/uin.svg", alt: "Uin" },
              { src: "/images/partners/logo/ummat.svg", alt: "Ummat" },
              { src: "/images/partners/logo/unram.svg", alt: "Unram" },
            ].map((p, i) => (
              <div className="marquee-item" key={`a-${i}`}>
                <Image src={p.src} alt={p.alt} width={160} height={70}
                  style={{ height: "52px", width: "auto", objectFit: "contain", filter: "grayscale(30%)", transition: "filter 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(30%)")}
                />
              </div>
            ))}
            {/* Set duplikat untuk seamless loop */}
            {[
              { src: "/images/partners/logo/acibara.svg", alt: "Acibara" },
              { src: "/images/partners/logo/aruna.svg", alt: "Aruna" },
              { src: "/images/partners/logo/bento.svg", alt: "Bento" },
              { src: "/images/partners/logo/dapoersasak.svg", alt: "Dapoersasak" },
              { src: "/images/partners/logo/dcmmandalika.svg", alt: "Dcmmandalika" },
              { src: "/images/partners/logo/deco.svg", alt: "Deco" },
              { src: "/images/partners/logo/esda.svg", alt: "Esda" },
              { src: "/images/partners/logo/golkar.svg", alt: "Golkar" },
              { src: "/images/partners/logo/hayafarma.svg", alt: "Hayafarma" },
              { src: "/images/partners/logo/janjijiwa.svg", alt: "Janjijiwa" },
              { src: "/images/partners/logo/kinta.svg", alt: "Kinta" },
              { src: "/images/partners/logo/madjoe.svg", alt: "Madjoe" },
              { src: "/images/partners/logo/mattowa.svg", alt: "Mattowa" },
              { src: "/images/partners/logo/mayura.svg", alt: "Mayura" },
              { src: "/images/partners/logo/merumata.svg", alt: "Merumata" },
              { src: "/images/partners/logo/pinkot.svg", alt: "Pinkot" },
              { src: "/images/partners/logo/poltekpar.svg", alt: "Poltekpar" },
              { src: "/images/partners/logo/rplay.svg", alt: "Rplay" },
              { src: "/images/partners/logo/uin.svg", alt: "Uin" },
              { src: "/images/partners/logo/ummat.svg", alt: "Ummat" },
              { src: "/images/partners/logo/unram.svg", alt: "Unram" },
            ].map((p, i) => (
              <div className="marquee-item" key={`b-${i}`} aria-hidden="true">
                <Image src={p.src} alt={p.alt} width={160} height={70}
                  style={{ height: "52px", width: "auto", objectFit: "contain", filter: "grayscale(30%)", transition: "filter 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(30%)")}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="partners"
            style={{
              backgroundColor: "#1D5484",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.925rem",
              padding: "0.65rem 2rem",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 4px 12px rgba(29, 84, 132, 0.25)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F4068")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1D5484")}
          >
            {isId ? "Jadi Mitra Kami" : "Become a Partner"}
          </a>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
