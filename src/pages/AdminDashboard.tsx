import { useState } from "react";
import { useServers } from "../hooks/useServers";
import { ServerData, Accent, ServerStatus, STATUS_LABEL } from "../data/servers";
import Modal from "../components/Modal";

const emptyForm = {
  title: "", subtitle: "", description: "", image: "",
  status: "coming_soon" as ServerStatus, accent: "gold" as Accent,
  badgeLabel: "COMING SOON", footerSubtitle: "", featuresHref: "", playHref: "",
  openingAt: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 12px", borderRadius: "8px",
  background: "#1a1410", border: "1px solid rgba(255,255,255,0.12)",
  color: "#F4F1EC", fontSize: "13px", marginBottom: "12px",
};
const labelStyle: React.CSSProperties = { fontSize: "11px", color: "#A9A19A", marginBottom: "4px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" };

const statusColors: Record<ServerStatus, { bg: string; color: string }> = {
  online: { bg: "rgba(74,222,128,0.12)", color: "#4ade80" },
  coming_soon: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24" },
  maintenance: { bg: "rgba(248,113,113,0.12)", color: "#f87171" },
  pre_register: { bg: "rgba(167,139,250,0.12)", color: "#a78bfa" },
};

export default function AdminDashboard() {
  const { servers, addServer, updateServer, deleteServer, setStatus, resetToDefaults } = useServers();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setForm(f => ({ ...f, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const openAddModal = () => { setForm(emptyForm); setEditingId(null); setModalOpen(true); };

  const openEditModal = (s: ServerData) => {
    setEditingId(s.id);
    setForm({
      title: s.title, subtitle: s.subtitle, description: s.description, image: s.image,
      status: s.status, accent: s.accent, badgeLabel: s.badgeLabel,
      footerSubtitle: s.footerSubtitle, featuresHref: s.featuresHref || "",
      playHref: s.playHref || "", openingAt: s.openingAt ? s.openingAt.slice(0, 16) : "",
    });
    setModalOpen(true);
  };

  const closeModal = () => { setModalOpen(false); setForm(emptyForm); setEditingId(null); };

  const submit = () => {
    if (!form.title.trim()) { alert("Title is required"); return; }
    const payload = {
      ...form,
      openingAt: form.openingAt ? new Date(form.openingAt).toISOString() : undefined,
    };
    if (editingId) {
      updateServer(editingId, payload);
    } else {
      addServer(payload);
    }
    closeModal();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#120F0D", padding: "40px 24px", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <h1 style={{ fontFamily: "'Cinzel', serif", color: "#F4F1EC", fontSize: "1.6rem" }}>Server Admin</h1>
          <a href="/" style={{ color: "#D9A441", fontSize: "13px", textDecoration: "none" }}>&larr; Back to site</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h2 style={{ color: "#F4F1EC", fontSize: "15px", margin: 0 }}>Existing servers</h2>
          <button onClick={openAddModal} style={{ padding: "10px 20px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "13px" }}>
            + Add server
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {servers.map(s => (
            <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "12px 16px", flexWrap: "wrap" }}>
              <img src={s.image} alt={s.title} style={{ width: "44px", height: "44px", objectFit: "cover", borderRadius: "6px", background: "#1a1410" }} />
              <div style={{ flex: 1, minWidth: "140px" }}>
                <div style={{ color: "#F4F1EC", fontSize: "13.5px", fontWeight: 600 }}>{s.title}</div>
                <div style={{ color: "#A9A19A", fontSize: "12px" }}>{s.footerSubtitle}</div>
              </div>
              <span style={{ fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", background: statusColors[s.status].bg, color: statusColors[s.status].color, minWidth: "90px", textAlign: "center" }}>
                {STATUS_LABEL[s.status]}
              </span>
              <select
                value={s.status}
                onChange={e => setStatus(s.id, e.target.value as ServerStatus)}
                style={{ padding: "7px 10px", borderRadius: "7px", background: "#1a1410", border: "1px solid rgba(255,255,255,0.15)", color: "#F4F1EC", fontSize: "12px", cursor: "pointer" }}
              >
                <option value="online">Live</option>
                <option value="coming_soon">Coming Soon</option>
                <option value="maintenance">Maintenance</option>
              </select>
              <button onClick={() => openEditModal(s)} style={{ padding: "7px 12px", borderRadius: "7px", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "#C8C0B8", fontSize: "12px", cursor: "pointer" }}>
                Edit
              </button>
              <button onClick={() => confirm(`Delete ${s.title}?`) && deleteServer(s.id)} style={{ padding: "7px 12px", borderRadius: "7px", background: "transparent", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", fontSize: "12px", cursor: "pointer" }}>
                Delete
              </button>
            </div>
          ))}
          {servers.length === 0 && (
            <div style={{ color: "#5a5450", fontSize: "13px", textAlign: "center", padding: "30px" }}>No servers yet — click "Add server" to create one.</div>
          )}
          <button onClick={() => confirm("Reset all servers to defaults?") && resetToDefaults()} style={{ marginTop: "20px", padding: "8px 16px", borderRadius: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#6b6460", fontSize: "12px", cursor: "pointer" }}>
          Reset to default
        </button>
        </div>
      </div>

      {modalOpen && (
        <Modal title={editingId ? "Edit server" : "Add new server"} onClose={closeModal}>
          <label style={labelStyle}>Title</label>
          <input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. DDTANK" />

          <label style={labelStyle}>Subtitle</label>
          <input style={inputStyle} value={form.subtitle} onChange={e => setForm(f => ({ ...f, subtitle: e.target.value }))} placeholder="e.g. Multiplayer Battle" />

          <label style={labelStyle}>Description</label>
          <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />

          <label style={labelStyle}>Character image</label>
          <input style={inputStyle} value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} placeholder="Paste image URL, or upload below" />
          <input type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload(e.target.files[0])} style={{ marginBottom: "12px", color: "#A9A19A", fontSize: "12px" }} />
          {form.image && <img src={form.image} alt="preview" style={{ height: "80px", display: "block", marginBottom: "12px", borderRadius: "6px" }} />}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Status</label>
              <select
                style={inputStyle}
                value={form.status}
                onChange={e => {
                  const status = e.target.value as ServerStatus;
                  setForm(f => ({ ...f, status, badgeLabel: STATUS_LABEL[status] }));
                }}
              >
                <option value="online">Live</option>
                <option value="coming_soon">Coming Soon</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Accent color</label>
              <select style={inputStyle} value={form.accent} onChange={e => setForm(f => ({ ...f, accent: e.target.value as Accent }))}>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
              </select>
            </div>
          </div>

          <label style={labelStyle}>Badge label</label>
          <input style={inputStyle} value={form.badgeLabel} onChange={e => setForm(f => ({ ...f, badgeLabel: e.target.value }))} />

          <label style={labelStyle}>Footer subtitle</label>
          <input style={inputStyle} value={form.footerSubtitle} onChange={e => setForm(f => ({ ...f, footerSubtitle: e.target.value }))} placeholder="e.g. Classic Multiplayer Battle" />

          {form.status === "online" && (
            <>
              <label style={labelStyle}>Play link</label>
              <input style={inputStyle} value={form.playHref} onChange={e => setForm(f => ({ ...f, playHref: e.target.value }))} placeholder="https://..." />
            </>
          )}
          {form.status === "coming_soon" && (
            <>
              <label style={labelStyle}>Opening date/time</label>
              <input type="datetime-local" style={inputStyle} value={form.openingAt} onChange={e => setForm(f => ({ ...f, openingAt: e.target.value }))} />
            </>
          )}
          {form.status === "maintenance" && (
            <div style={{ fontSize: "12px", color: "#f87171", marginBottom: "12px" }}>
              This server will show as "Under Maintenance" on the site with no Play/countdown action.
            </div>
          )}

          <label style={labelStyle}>Server Features link</label>
          <input style={inputStyle} value={form.featuresHref} onChange={e => setForm(f => ({ ...f, featuresHref: e.target.value }))} placeholder="https://..." />

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button onClick={submit} style={{ padding: "10px 20px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "13px" }}>
              {editingId ? "Save changes" : "Add server"}
            </button>
            <button onClick={closeModal} style={{ padding: "10px 20px", borderRadius: "8px", background: "transparent", color: "#A9A19A", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontSize: "13px" }}>
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}