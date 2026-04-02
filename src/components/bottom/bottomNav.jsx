import './bottomNav.css'

export default function BottomNav({ itemCount = 0 }) {
  return (
    <div className="bottomNav">
      <span className="bottomNavText">
        {itemCount} items, 179.15 GB available
      </span>
    </div>
  )
}