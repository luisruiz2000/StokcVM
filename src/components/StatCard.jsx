import Icon from './Icon'

export default function StatCard({ label, value, hint, icon, tone }) {
  return <div className="stat-card"><div className={`stat-icon ${tone}`}><Icon name={icon} /></div><span>{label}</span><strong>{value}</strong><small>{hint}</small></div>
}
